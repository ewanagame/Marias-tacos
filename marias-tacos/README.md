# Maria's Tacos

Official website for **Maria's Tacos** — an authentic Mexican restaurant in Marshalltown, Iowa. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- Home, Menu, and Contact pages with a warm rustic design
- Sticky "Order Online" banner
- SEO metadata, security headers, and mobile-responsive layout

## Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (included with Node.js)

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
│   ├── contact/page.tsx    # Contact & location page
│   ├── menu/page.tsx       # Menu page
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout
│   └── icon.svg            # Favicon
├── components/
│   ├── Navbar.tsx          # Site navigation
│   ├── Footer.tsx          # Site footer
│   └── OrderBanner.tsx     # Sticky order CTA
└── lib/site.ts             # Shared site config
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

### 3. Deploy

Click **Deploy**. Vercel will build and deploy your site. Your live URL will look like:

```
https://your-project-name.vercel.app
```

### 4. (Optional) Custom domain

1. In your Vercel project, go to **Settings → Domains**
2. Add your custom domain (e.g. `mariastacos.com`)
3. Follow Vercel's DNS instructions to point your domain

### 5. Verify the deployment

After deploy, confirm:

- All pages load: `/`, `/menu`, `/contact`
- The **Order Online** banner links to [ordermariastacos.com](https://ordermariastacos.com)

## License

Private — Maria's Tacos. All rights reserved.
