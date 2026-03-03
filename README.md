# SmallBizToolkit MVP

SEO-first small business software review and referral website built with Next.js App Router, TypeScript, Tailwind, MDX, and Framer Motion.

## Brand placeholders

The codebase uses `SmallBizToolkit` as the placeholder brand.

Three strong brand options for final selection:

1. SmallBizToolkit
2. LaunchStackHQ
3. BizSoftwareReview

## Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- MDX content architecture
- Framer Motion
- Fuse.js client search
- next-sitemap
- Vercel-ready

## Quick start

```bash
pnpm install
pnpm generate:search
pnpm dev
```

Open `http://localhost:3000`.

If `pnpm` is not installed in your environment, use the equivalent `npm` commands.

## Content architecture

```text
content/
  reviews/
    payroll/
    field-service/
    accounting/
    phone/
  comparisons/
  roundups/
  guides/
  landing/
```

### Add a new review (zero code changes)

1. Add a new `.mdx` file under `content/reviews/<category>/`.
2. Include full frontmatter (see existing review files).
3. Run:

```bash
pnpm generate:search
```

4. The review auto-appears in route indexes and search.

## Update referral links in one place

Edit:

- `src/config/referrals.ts`

This file is the single source of truth for referral URLs and offers.

## Swap the final brand/domain

Update:

- `src/config/site.ts` (`brandName`, `domain`, socials)
- Replace references to `SmallBizToolkit` in copy as needed.

## Add founder photo

Current UI uses placeholders.

1. Add an image to `public/images/` (for example `public/images/shanin.jpg`).
2. Replace placeholder blocks in:
   - `src/app/page.tsx`
   - `src/app/about/page.tsx`
   - `src/components/PersonalEndorsement.tsx` (if desired)

## SEO setup

### Sitemap and robots

- Dynamic sitemap route: `src/app/sitemap.ts`
- Robots route: `src/app/robots.ts`
- Optional `next-sitemap` config: `next-sitemap.config.js`

### Structured data

Helpers are in `src/lib/seo/schema.ts`.

Included types:

- Organization
- Person
- BreadcrumbList
- Review/Product
- Product/Offer
- FAQPage
- ItemList

## Analytics setup (GA4)

Set environment variable:

```bash
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

When set, GA4 script is injected in `src/app/layout.tsx`.

## Google Search Console setup

1. Add and verify your domain in Search Console.
2. Submit sitemap URL:

```text
https://your-domain.com/sitemap.xml
```

3. Monitor index coverage and performance queries.

## Deploy to Vercel

### Option 1: Git integration

1. Push repository to GitHub.
2. Import project in Vercel.
3. Set env vars (`NEXT_PUBLIC_SITE_URL`, optional GA4 var).
4. Deploy.

### Option 2: Vercel CLI

```bash
pnpm dlx vercel
```

Then set production domain and env vars in the Vercel dashboard.

## Build/test commands

```bash
pnpm generate:search
pnpm lint
pnpm test:unit
pnpm test:integration
pnpm test:e2e
pnpm build
```

## Key environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://smallbiztoolkit.com
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
```

## Notes

- All external referral CTAs use `rel="nofollow sponsored noopener noreferrer"`.
- Disclosure component is available and used on referral-heavy pages.
- `/gusto-bonus` redirects permanently to `/gusto`.
