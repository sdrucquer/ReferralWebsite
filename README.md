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
npm install
npm run generate:search
npm run dev
```

Open `http://localhost:3000`.

Package manager policy is standardized on `npm` for local, CI, and Vercel builds.

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
npm run generate:search
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
npx vercel
```

Then set production domain and env vars in the Vercel dashboard.

## Build/test commands

```bash
npm run generate:search
npm run lint
npm run test:unit
npm run test:integration
npm run test:e2e
npm run build
```

## CI policy

GitHub Actions CI runs:

- `npm run generate:search`
- `npm run lint`
- `npm run test:unit`
- `npm run test:integration`
- `npm run build`

Workflow file: `.github/workflows/ci.yml`

## Scaffold SEO policy

Content supports frontmatter `contentStatus`:

- `ready`: normal indexing behavior
- `scaffold`: emitted as `noindex,follow` and excluded from sitemap

This allows unfinished pages to stay reachable while protected from indexing.

## CTA analytics event schema

Tracked event name: `cta_click`

Payload keys:

- `cta_location`
- `referral_key`
- `page_path`
- `variant`

### Validate in GA4 DebugView

1. Enable GA4 env var in `.env.local`.
2. Run `npm run dev`.
3. Click tracked CTA buttons on `/`, `/gusto`, and review pages.
4. Confirm `cta_click` appears in GA4 DebugView with payload fields above.

## Deployment health checklist

Before promoting production:

1. `npm run lint`
2. `npm run test:unit`
3. `npm run test:integration`
4. `npm run build`
5. `npm run test:e2e`
6. Validate canonical + robots behavior on scaffold vs ready pages
7. Validate referral URLs and `rel="nofollow sponsored"`

## Uptime recommendation

Add an external uptime monitor (for example, Better Stack/UptimeRobot) to check:

- `/`
- `/gusto`
- `/sitemap.xml`

Use 1-minute checks with email alerts for non-200 responses.

## Dependency and security policy

- Lock dependency versions with `package-lock.json`.
- Patch only critical/high launch blockers before launch.
- Defer non-blocking major upgrades to post-launch stabilization.

### Deferred upgrade note

`npm audit` on March 3, 2026 reports remaining high advisories that require major-version upgrades:

- `next` -> fixed in `16.1.6` (major migration from current `14.2.35`).
- `eslint-config-next` / `@next/eslint-plugin-next` -> fixed in `16.1.6` (dev tooling path, major migration).

These are deferred to a dedicated framework-upgrade sprint after launch stabilization.

## Key environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://smallbiztoolkit.com
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
```

## Notes

- All external referral CTAs use `rel="nofollow sponsored noopener noreferrer"`.
- Disclosure component is available and used on referral-heavy pages.
- `/gusto-bonus` redirects permanently to `/gusto`.
