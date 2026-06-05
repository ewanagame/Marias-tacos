import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT =
  "You are a friendly, helpful assistant for Maria's Tacos, an authentic Mexican restaurant at 110 W State St, Marshalltown, IA 50158. Phone: (641) 751-5327. Hours: Opens 8:30 AM daily. You can help with: menu questions, pricing, hours, location, parking, accessibility, payment methods, and directing people to order online at ordermariastacos.com. Menu highlights: tacos from $3, burritos from $9, tamales $3.50, Texas Burrito $14. Wheelchair accessible. Accepts credit, debit, NFC payments. Free parking. Dine-in, takeout, delivery, outdoor seating available. Be warm, welcoming, and concise.";

const MODEL = "claude-haiku-4-5";
const MAX_REQUESTS_PER_MINUTE = 20;
const RATE_LIMIT_WINDOW_MS = 60_000;

type MessageRole = "user" | "assistant";

type ChatMessage = {
  role: MessageRole;
  content: string;
};

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitRecord>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now >= record.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_MINUTE) {
    return false;
  }

  record.count += 1;
  return true;
}

function parseMessages(messages: unknown): ChatMessage[] | null {
  if (!Array.isArray(messages) || messages.length === 0) {
    return null;
  }

  const parsed: ChatMessage[] = [];

  for (const message of messages) {
    if (
      typeof message !== "object" ||
      message === null ||
      !("role" in message) ||
      !("content" in message)
    ) {
      return null;
    }

    const { role, content } = message as { role: unknown; content: unknown };

    if (role !== "user" && role !== "assistant") {
      return null;
    }

    if (typeof content !== "string" || content.trim().length === 0) {
      return null;
    }

    parsed.push({ role, content: content.trim() });
  }

  if (parsed[parsed.length - 1]?.role !== "user") {
    return null;
  }

  return parsed;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Rate limit exceeded. Maximum 20 requests per minute." },
      { status: 429 },
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Server configuration error." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || !("messages" in body)) {
    return Response.json(
      { error: "Request body must include a messages array." },
      { status: 400 },
    );
  }

  const messages = parseMessages((body as { messages: unknown }).messages);
  if (!messages) {
    return Response.json(
      {
        error:
          "Invalid messages format. Provide a non-empty array of user/assistant messages ending with a user message.",
      },
      { status: 400 },
    );
  }

  try {
    const anthropic = new Anthropic({ apiKey });

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });

    const reply = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    if (!reply) {
      return Response.json(
        { error: "No response generated." },
        { status: 500 },
      );
    }

    return Response.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Failed to generate a response." },
      { status: 500 },
    );
  }
}
