import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SmallBizToolkit.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <article className="space-y-6 rounded-3xl border border-border bg-white p-8">
      <h1 className="font-[var(--font-heading)] text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="text-sm text-muted">Last updated: March 3, 2026</p>
      <p className="leading-8 text-muted">
        We collect basic analytics and voluntary contact information to improve this website and respond to
        inquiries. We do not sell your personal information.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">What We Collect</h2>
      <p className="leading-8 text-muted">
        We may collect page-view analytics, device/browser information, and information you provide directly
        through email or contact forms.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">How We Use Information</h2>
      <p className="leading-8 text-muted">
        We use information to operate the site, improve content quality, troubleshoot issues, and communicate
        with you if you contact us.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">Third-Party Services</h2>
      <p className="leading-8 text-muted">
        We may use third-party tools such as Google Analytics and referral partners. Their services may collect
        data according to their own privacy terms.
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="leading-8 text-muted">For privacy questions, email iconiccleanup@gmail.com.</p>
    </article>
  );
}
