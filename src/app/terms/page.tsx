import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for SmallBizToolkit.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <article className="space-y-6 rounded-3xl border border-border bg-white p-8">
      <h1 className="font-[var(--font-heading)] text-4xl font-semibold tracking-tight">Terms of Use</h1>
      <p className="text-sm text-muted">Last updated: March 3, 2026</p>
      <p className="leading-8 text-muted">
        By using this website, you agree to these terms. Content is provided for informational purposes only and
        does not constitute legal, tax, financial, or professional advice.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">Content Accuracy</h2>
      <p className="leading-8 text-muted">
        We work to keep information current, but software pricing, offers, and terms can change. Verify details
        directly with each provider before making decisions.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">Referral Relationships</h2>
      <p className="leading-8 text-muted">
        Some links are referral links. We may earn compensation if you sign up through those links. This does
        not increase your cost and may include discounts or bonuses.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">Limitation of Liability</h2>
      <p className="leading-8 text-muted">
        Use of this website is at your own risk. We are not liable for losses resulting from reliance on
        information published here.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="leading-8 text-muted">Questions about these terms can be sent to iconiccleanup@gmail.com.</p>
    </article>
  );
}
