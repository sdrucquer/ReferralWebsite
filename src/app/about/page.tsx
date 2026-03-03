import type { Metadata } from "next";
import { ContactButton } from "@/components/ContactButton";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { personSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Shanin, founder of Iconic Cleanup LLC, and learn how this review site was built.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-8 rounded-3xl border border-border bg-white p-8 md:grid-cols-[0.7fr_1.3fr]">
        <div className="rounded-2xl border border-dashed border-border bg-accentSoft/30 p-6">
          <div className="h-full min-h-60 rounded-xl border border-dashed border-accent/40 bg-white/80 p-4 text-sm text-muted">
            Founder photo placeholder
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About</p>
          <h1 className="mt-3 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">
            I Built This Site for Owners Who Need Real Answers
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            I&apos;m {siteConfig.founder.name}, founder of Iconic Cleanup LLC. I started from scratch, grew to a
            6-figure landscaping business, and now run payroll for a 20+ person team.
          </p>
          <p className="mt-4 leading-8 text-muted">
            I tested a lot of software that looked good in ads but didn&apos;t hold up in real operations. This
            site shares the tools that actually work when payroll deadlines, customer schedules, and margins are real.
          </p>
          <p className="mt-4 leading-8 text-muted">
            Referral transparency matters: when you sign up through my links, I may earn a referral bonus. It
            never adds cost for you, and often unlocks the best signup bonuses.
          </p>
          <div className="mt-6">
            <ContactButton email={siteConfig.founder.email} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-border bg-white p-5">
          <p className="text-sm text-muted">Businesses helped</p>
          <p className="mt-1 text-3xl font-semibold text-accent">50+</p>
        </article>
        <article className="rounded-2xl border border-border bg-white p-5">
          <p className="text-sm text-muted">Software tools reviewed</p>
          <p className="mt-1 text-3xl font-semibold text-accent">20+</p>
        </article>
        <article className="rounded-2xl border border-border bg-white p-5">
          <p className="text-sm text-muted">Years in business</p>
          <p className="mt-1 text-3xl font-semibold text-accent">7+</p>
        </article>
      </section>

      <JsonLd data={personSchema()} />
    </div>
  );
}
