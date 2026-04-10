# Multilink Landing Page

Production-ready Next.js landing page for **Multilink Solutions Inc.**. The homepage (`/`) is conversion-focused for first-time B2B buyers and routes shopping traffic to `/shop` and BigCommerce destination pages.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build / Production

```bash
npm run typecheck
npm run build
npm run start
```

## Deploying to Vercel

1. Push this project to GitHub.
2. In Vercel, **Add New Project** and import the repository.
3. Keep defaults for a Next.js project (build command: `next build`).
4. Deploy.
5. (Optional) Set custom domain and DNS in Vercel settings.

## Content and link updates

Most homepage content is centralized in:

- `lib/content.ts`

Sections/components:

- `components/landing/top-bar.tsx`
- `components/landing/site-header.tsx`
- `components/landing/hero.tsx`
- `components/landing/trust-stats.tsx`
- `components/landing/use-cases.tsx`
- `components/landing/why-multilink.tsx`
- `components/landing/featured-brands.tsx`
- `components/landing/shopping-paths.tsx`
- `components/landing/blog-preview.tsx`
- `components/landing/consultation-cta.tsx`
- `components/landing/site-footer.tsx`

Entry page:

- `app/page.tsx`

Metadata:

- `app/layout.tsx`
