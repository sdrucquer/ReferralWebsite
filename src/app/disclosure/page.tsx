import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How referral and affiliate relationships work on SmallBizToolkit.",
  alternates: {
    canonical: "/disclosure"
  }
};

export default function DisclosurePage() {
  return (
    <article className="space-y-6 rounded-3xl border border-border bg-white p-8">
      <h1 className="font-[var(--font-heading)] text-4xl font-semibold tracking-tight">Affiliate Disclosure</h1>
      <p className="text-sm text-muted">Last updated: March 3, 2026</p>
      <p className="leading-8 text-muted">
        This site includes referral links. If you sign up through these links, we may receive a referral fee or
        commission at no extra cost to you.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">Editorial Approach</h2>
      <p className="leading-8 text-muted">
        Recommendations are based on hands-on use and operational fit for small businesses. Referral potential
        does not override product quality in our reviews.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">Offer Terms</h2>
      <p className="leading-8 text-muted">
        Referral bonuses and discounts are controlled by software providers and can change without notice. Check
        provider landing pages for the latest terms.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="leading-8 text-muted">For disclosure questions, email iconiccleanup@gmail.com.</p>
    </article>
  );
}
