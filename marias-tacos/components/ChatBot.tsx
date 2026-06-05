"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const WELCOME_MESSAGE =
  "Hola! 👋 I'm here to help with menu questions, hours, location, and more!";

function ChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function TypingIndicator() {
  return (
    <div
      className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-accent/10 bg-[#FFFAF0] px-4 py-3 shadow-sm"
      aria-label="Assistant is typing"
    >
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="h-2 w-2 animate-bounce rounded-full bg-secondary"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: WELCOME_MESSAGE }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput || isTyping) {
      return;
    }

    const userMessage: Message = { role: "user", content: trimmedInput };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setError(null);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      if (!data.reply) {
        throw new Error("No response received. Please try again.");
      }

      const reply = data.reply;
      setMessages((current) => [
        ...current,
        { role: "assistant", content: reply },
      ]);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Maria's Tacos chat assistant"
          className="flex h-[min(500px,calc(100vh-7rem))] w-[min(350px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-accent/15 bg-background shadow-[0_8px_40px_rgba(74,55,40,0.2)]"
        >
          <div className="flex items-center justify-between border-b border-accent/10 bg-primary px-4 py-3">
            <div>
              <h2 className="font-serif text-base font-bold text-background">
                Maria&apos;s Tacos Assistant
              </h2>
              <p className="font-sans text-xs text-background/80">
                Ask about our menu, hours &amp; more
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-background/80 transition-colors hover:bg-background/10 hover:text-background"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#F5EBD8]/50 px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 font-sans text-sm leading-relaxed shadow-sm ${
                    message.role === "user"
                      ? "rounded-br-md bg-primary text-background"
                      : "rounded-bl-md border border-accent/10 bg-[#FFFAF0] text-accent"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <TypingIndicator />
              </div>
            )}

            {error && (
              <p className="rounded-xl border border-primary/20 bg-primary/5 px-3 py-2 font-sans text-xs text-primary">
                {error}
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t border-accent/10 bg-background p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question..."
              disabled={isTyping}
              className="min-w-0 flex-1 rounded-full border border-accent/15 bg-[#FFFAF0] px-4 py-2 font-sans text-sm text-text placeholder:text-accent/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
              aria-label="Chat message"
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="shrink-0 rounded-full bg-secondary px-4 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-sans text-sm font-semibold text-background shadow-[0_4px_20px_rgba(139,37,0,0.35)] transition-transform hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      >
        <ChatIcon />
        <span>Ask Us!</span>
      </button>
    </div>
  );
}
