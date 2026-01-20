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

## 3. Create open-next.config.ts (Required)

Create `open-next.config.ts` in your project root. This file is required for the build to succeed:

```typescript
import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
};

export default config;
```

All fields shown above are required. The build will fail with a validation error if any are missing.

## 4. Create wrangler.toml

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

- `name`: **Must match your Cloudflare Pages project name exactly.** Cloudflare will warn if they don't match.
- `compatibility_date`: Set to current date or later
- `nodejs_compat`: Required for Next.js server components
- `not_found_handling = "single-page-application"`: Routes 404s to your app for client-side routing

## 5. Configure next.config.ts

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

## 6. Environment Variables

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

## 7. Deployment

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
   - **Build command:** `npm run build:cf`
   - **Deploy command:** Leave empty (Cloudflare handles deployment after build)
   - **Build output directory / Path:** `.open-next`
   - **Root directory:** Set this if your Next.js app is in a subdirectory (e.g., `my-app`)
5. Add environment variables in the dashboard
6. Deploy

GitHub integration auto-deploys on push to main and creates preview deployments for PRs.

### Monorepo / Subdirectory Setup

If your Next.js app is not in the repository root:

1. Set **Root directory** to your app's folder (e.g., `packages/web` or `apps/frontend`)
2. All config files (`wrangler.toml`, `open-next.config.ts`, `package.json`) should be in that directory
3. The build command runs from that directory

## 8. Custom Domain

1. Go to Workers & Pages > Your Project > Custom domains
2. Add your domain
3. Cloudflare handles SSL automatically
4. Update DNS if domain isn't already on Cloudflare

## 9. Build Output

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

## 10. Common Issues

### Missing open-next.config.ts

The build will fail with "Missing required `open-next.config.ts` file" or a validation error listing required fields. See section 3 for the complete config.

### Lockfile conflicts (pnpm vs npm)

If you have both `pnpm-lock.yaml` and `package-lock.json`, Cloudflare defaults to pnpm. This can cause "frozen-lockfile" errors if the pnpm lockfile is stale.

**Solution:** Delete the lockfile you're not using:
```bash
rm pnpm-lock.yaml  # if using npm
# or
rm package-lock.json  # if using pnpm
```

### wrangler.toml name mismatch

Cloudflare warns if the `name` in `wrangler.toml` doesn't match your Pages project name. Update the config to match.

### "Cannot find module" errors

Ensure `nodejs_compat` flag is in wrangler.toml.

### API routes not working

Check that your API routes don't use Node.js APIs unavailable in the edge runtime. Use `export const runtime = 'edge'` for edge-compatible routes.

### Images not loading

If using external images, add the hostname to `next.config.ts` remotePatterns.

### Build failures

Run `npm run preview` locally first to catch issues before deploying.

### Root directory not set (monorepo)

If you see "Could not read package.json" errors, Cloudflare is looking in the wrong directory. Set the **Root directory** in your Pages project settings.

## 11. Useful Commands

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

## 12. Reference

- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
