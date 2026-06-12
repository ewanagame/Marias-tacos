# Maria's Tacos

Official website for **Maria's Tacos** — an authentic Mexican restaurant in Marshalltown, Iowa. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- Home, Menu, and Contact pages with a warm rustic design
- SEO metadata and mobile-responsive layout

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
npm run build   # Production build (static export)
npm run export  # Build for GitHub Pages
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
│   └── Footer.tsx          # Site footer
└── lib/site.ts             # Shared site config
```

## Deploy to GitHub Pages

Live site: [https://ewanagame.github.io/Marias-tacos/](https://ewanagame.github.io/Marias-tacos/)

### One-time GitHub setup

1. Go to **github.com/ewanagame/Marias-tacos → Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically

### Manual export (optional)

```bash
npm run export
```

Static files are output to `marias-tacos/out/`.

### Verify the deployment

- Home: `/`
- Menu: `/menu/`
- Contact: `/contact/`
- **Call to Order** button dials (641) 751-5327

## License

Private — Maria's Tacos. All rights reserved.
