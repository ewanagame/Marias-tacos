# Maria's Tacos

Official website for **Maria's Tacos** — an authentic Mexican restaurant in Marshalltown, Iowa. Built with Next.js 15, TypeScript, Tailwind CSS, and an AI chat assistant powered by Anthropic Claude.

## Features

- Home, Menu, and Contact pages with a warm rustic design
- Sticky "Order Online" banner and floating AI chat widget
- Secure `/api/chat` route with rate limiting and input validation
- SEO metadata, security headers, and mobile-responsive layout

## Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (included with Node.js)
- An [Anthropic API key](https://console.anthropic.com/) for the chat assistant

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ewanagame/Marias-tacos.git
cd Marias-tacos/marias-tacos
```

2. Install dependencies:

```bash
npm install
```

3. Create your local environment file:

```bash
cp .env.example .env.local
```

4. Open `.env.local` and replace the placeholder with your real API key:

```env
ANTHROPIC_API_KEY=sk-ant-your-real-key-here
```

> **Important:** Never commit `.env.local` or expose your API key in client-side code. The key is only read server-side in `app/api/chat/route.ts`.

## Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build
npm run start   # Run production server locally
npm run lint    # Run ESLint
```

## Project Structure

```
marias-tacos/
├── app/
│   ├── api/chat/route.ts   # Secure AI chat endpoint
│   ├── contact/page.tsx    # Contact & location page
│   ├── menu/page.tsx       # Menu page
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout
│   └── icon.svg            # Favicon
├── components/
│   ├── ChatBot.tsx         # Floating chat widget
│   ├── Navbar.tsx          # Site navigation
│   ├── Footer.tsx          # Site footer
│   └── OrderBanner.tsx     # Sticky order CTA
├── lib/site.ts             # Shared site config
└── .env.example            # Environment variable template
```

## Deploy to Vercel

Vercel is the recommended host for Next.js apps. Follow these steps:

### 1. Push your code to GitHub

Make sure your project is committed and pushed to a GitHub repository.

### 2. Import the project on Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Sign in with your GitHub account
3. Click **Import** next to your repository
4. Set the **Root Directory** to `marias-tacos` (if the repo root is the monorepo parent)
5. Vercel auto-detects Next.js — leave the default build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

### 3. Add environment variables

Before deploying, go to **Environment Variables** and add:

| Name | Value |
|------|-------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key |

Apply it to **Production**, **Preview**, and **Development** environments.

### 4. Deploy

Click **Deploy**. Vercel will build and deploy your site. Your live URL will look like:

```
https://your-project-name.vercel.app
```

### 5. (Optional) Custom domain

1. In your Vercel project, go to **Settings → Domains**
2. Add your custom domain (e.g. `mariastacos.com`)
3. Follow Vercel's DNS instructions to point your domain

### 6. Verify the deployment

After deploy, confirm:

- All pages load: `/`, `/menu`, `/contact`
- The **Order Online** banner links to [ordermariastacos.com](https://ordermariastacos.com)
- The chat widget responds (requires a valid `ANTHROPIC_API_KEY`)

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes (for chat) | Anthropic API key for the AI assistant |

## License

Private — Maria's Tacos. All rights reserved.
