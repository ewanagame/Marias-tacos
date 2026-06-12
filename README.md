# Maria's Tacos

Official website for **Maria's Tacos** — an authentic Mexican restaurant in Marshalltown, Iowa.

**Live site:** [https://ewanagame.github.io/Marias-tacos/](https://ewanagame.github.io/Marias-tacos/)

## Development

The Next.js source lives in [`marias-tacos/`](marias-tacos/). See [marias-tacos/README.md](marias-tacos/README.md) for setup and local development.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the static site and publishes it to GitHub Pages.

For the best deployment experience, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow also copies built files to the repository root so the site works with legacy branch-based Pages.
