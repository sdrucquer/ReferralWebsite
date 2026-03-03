# Launch Runbook (Preview -> Production)

## 1) GitHub setup

1. Authenticate GitHub CLI:
   - `gh auth login -h github.com`
2. Create repo and connect remote:
   - `gh repo create <repo-name> --source=. --private --push`
   - or if repo exists:
     - `git remote add origin <repo-url>`
     - `git push -u origin main`
3. Push release tag:
   - `git push origin v0.1.0-launch-candidate`

## 2) Branch protection

In GitHub repository settings:

- Protect `main`
- Require status checks to pass before merge
- Required check: `CI / verify`

## 3) Vercel preview deployment

### Current no-auth preview deployment

- Preview URL: `https://skill-deploy-tvyyt8xrpw-codex-agent-deploys.vercel.app`
- Claim URL: `https://vercel.com/claim-deployment?code=3c0725d1-6336-41e8-8caf-a5807f527eed`

Claim this deployment to manage it in your Vercel account.

### Project import flow (recommended)

1. Import GitHub repo in Vercel
2. Set Preview env vars:
   - `NEXT_PUBLIC_SITE_URL` = preview URL
   - `NEXT_PUBLIC_GA4_MEASUREMENT_ID` = optional for preview
3. Confirm auto preview deploys from PRs

## 4) Preview smoke QA

Run:

```bash
scripts/smoke-check.sh <preview-url>
```

Manual checks:

- Referral links open correct destinations with `nofollow sponsored`
- Disclosure visible on referral-heavy pages
- Footer legal links render
- CTA clicks appear in GA4 DebugView (if GA4 env set)

## 5) Production launch

1. Promote approved preview commit to production in Vercel
2. Set Production env vars:
   - `NEXT_PUBLIC_SITE_URL` = production Vercel URL
   - `NEXT_PUBLIC_GA4_MEASUREMENT_ID` = real GA4 ID
3. Run smoke checks on production URL:
   - `scripts/smoke-check.sh <production-url>`
4. Submit production sitemap in Google Search Console

## 6) First 72 hours

- Add uptime checks for `/`, `/gusto`, `/sitemap.xml` (1-minute interval)
- Monitor Vercel errors/performance
- Monitor GA4 `cta_click` volume and top `cta_location`/`referral_key`
- Log and patch issues daily
