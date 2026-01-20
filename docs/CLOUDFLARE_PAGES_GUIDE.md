# Deploying Next.js to Cloudflare Pages

This guide covers deploying a Next.js application to Cloudflare Pages using the OpenNext adapter.

## Prerequisites

- Cloudflare account
- Wrangler CLI authenticated (`npx wrangler login`)
- Node.js 18+

## 1. Install Dependencies

```bash
npm install --save-dev @opennextjs/cloudflare wrangler
```

## 2. Add Scripts to package.json

```json
{
  "scripts": {
    "build": "next build",
    "build:cf": "opennextjs-cloudflare build",
    "deploy:cf": "opennextjs-cloudflare deploy",
    "upload:cf": "opennextjs-cloudflare upload",
    "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview"
  }
}
```

| Script | Purpose |
|--------|---------|
| `build:cf` | Builds the Next.js app and converts it for Cloudflare |
| `deploy:cf` | Builds and deploys to production |
| `upload:cf` | Uploads without building (use after `build:cf`) |
| `preview` | Local preview using Cloudflare's runtime |

## 3. Create wrangler.toml

Create `wrangler.toml` in the project root:

```toml
name = "your-project-name"
main = ".open-next/worker.js"
compatibility_date = "2026-01-18"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = ".open-next/assets"
binding = "ASSETS"
not_found_handling = "single-page-application"

[vars]
# Add any public environment variables here
# NEXT_PUBLIC_API_URL = "https://api.example.com"
```

### Configuration Notes

- `name`: Your Cloudflare Pages project name (must be unique in your account)
- `compatibility_date`: Set to current date or later
- `nodejs_compat`: Required for Next.js server components
- `not_found_handling = "single-page-application"`: Routes 404s to your app for client-side routing

## 4. Configure next.config.ts

Ensure your Next.js config works with Cloudflare:

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // If using external images, configure remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn.example.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
```

### Image Optimization

Cloudflare Pages supports Next.js Image Optimization out of the box with the OpenNext adapter. No additional configuration required unless you're using external image sources.

## 5. Environment Variables

### In wrangler.toml (public vars only)

```toml
[vars]
NEXT_PUBLIC_SITE_URL = "https://yoursite.com"
NEXT_PUBLIC_API_URL = "https://api.yoursite.com"
```

### In Cloudflare Dashboard (secrets)

For sensitive values (API keys, etc.):

1. Go to Workers & Pages > Your Project > Settings > Variables
2. Add variables under "Environment variables"
3. Mark sensitive ones as "Encrypted"

### Local Development

Create `.env.local` (gitignored):

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SECRET_API_KEY=your-key-here
```

## 6. Deployment

### Option A: CLI Deployment

```bash
# First time or full deploy
npm run deploy:cf

# Just upload (if already built)
npm run build:cf
npm run upload:cf
```

### Option B: GitHub Integration (Recommended)

1. Go to Cloudflare Dashboard > Workers & Pages
2. Click "Create" > "Pages"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build:cf`
   - Build output directory: `.open-next`
   - Root directory: `/` (or subdirectory if monorepo)
5. Add environment variables in the dashboard
6. Deploy

GitHub integration auto-deploys on push to main and creates preview deployments for PRs.

## 7. Custom Domain

1. Go to Workers & Pages > Your Project > Custom domains
2. Add your domain
3. Cloudflare handles SSL automatically
4. Update DNS if domain isn't already on Cloudflare

## 8. Build Output

After `npm run build:cf`, the `.open-next/` directory contains:

```
.open-next/
├── assets/          # Static files (served by Cloudflare CDN)
└── worker.js        # Edge worker (handles SSR/API routes)
```

Add to `.gitignore`:

```
.open-next/
```

## 9. Common Issues

### "Cannot find module" errors

Ensure `nodejs_compat` flag is in wrangler.toml.

### API routes not working

Check that your API routes don't use Node.js APIs unavailable in the edge runtime. Use `export const runtime = 'edge'` for edge-compatible routes.

### Images not loading

If using external images, add the hostname to `next.config.ts` remotePatterns.

### Build failures

Run `npm run preview` locally first to catch issues before deploying.

## 10. Useful Commands

```bash
# Login to Cloudflare
npx wrangler login

# Check deployment status
npx wrangler pages deployment list --project-name=your-project-name

# View logs
npx wrangler pages deployment tail --project-name=your-project-name

# Delete deployment
npx wrangler pages deployment delete <deployment-id> --project-name=your-project-name
```

## 11. Reference

- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
