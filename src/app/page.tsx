import Link from "next/link";
import { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { ReviewCard } from "@/components/ReviewCard";
import { StatCounter } from "@/components/StatCounter";
import { HowItWorks } from "@/components/HowItWorks";
import { ContentCard } from "@/components/ContentCard";
import { SearchBar } from "@/components/SearchBar";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { StaggerItem, StaggerReveal } from "@/components/StaggerReveal";
import { getFeaturedReviews, getLatestDocuments } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Real Software Reviews from a Real Business Owner",
  description:
    "Small business software reviews from a founder running a 6-figure landscaping company with 20+ employees.",
  alternates: {
    canonical: "/"
  }
};

const stats = [
  { value: 50, suffix: "+", label: "Businesses Helped" },
  { value: 5000, prefix: "$", suffix: "+", label: "Earned by Referred Businesses" },
  { value: 10000, prefix: "$", suffix: "+", label: "Saved on Software" },
  { value: 20, suffix: "+", label: "Employees on Payroll" }
];

export default function HomePage() {
  const featured = getFeaturedReviews(4);
  const latest = getLatestDocuments(6).filter((doc) => doc.type !== "landing");

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 md:p-12">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">SmallBizToolkit</p>
          <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Real Software Reviews from a Real Business Owner
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            I run a 6-figure landscaping company with 20+ employees. Every tool on this site is one I have
            personally tested in my business.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton
              referralKey="none"
              label="See Our Top Pick for Payroll →"
              size="lg"
              className="px-6 py-3"
              ctaLocation="homepage_hero"
              trackingVariant="hero_primary"
            />
            <Link
              href="/about"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              Why Trust This Site
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} />
        ))}
      </section>

      <section className="grid gap-8 rounded-3xl border border-border bg-white p-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About The Founder</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">I built this resource after wasting money on bad software.</h2>
          <p className="mt-4 leading-8 text-muted">
            I&apos;m {siteConfig.founder.name}. I started Iconic Cleanup LLC from scratch and grew it into a
            6-figure landscaping company with a team of 20+. Along the way I tested dozens of tools for
            payroll, scheduling, accounting, and communications. This site is the guide I wish I had early on.
          </p>
          <p className="mt-4 leading-8 text-muted">
            Every recommendation here comes from hands-on use inside a real business. If I recommend it,
            it&apos;s because it solved an actual operational problem for my team.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-border bg-accentSoft/30 p-6">
          <div className="h-full min-h-56 rounded-xl border border-dashed border-accent/40 bg-white/70 p-4">
            <p className="text-sm font-medium text-muted">Founder photo placeholder</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Top Picks</p>
            <h2 className="text-3xl font-semibold tracking-tight">Featured Software Reviews</h2>
          </div>
          <Link href="/payroll" className="text-sm font-semibold text-accent hover:underline">
            Browse all categories
          </Link>
        </div>

        <StaggerReveal className="grid gap-5 md:grid-cols-2">
          {featured.map((review) => (
            <StaggerItem key={review.id}>
              <ReviewCard
                title={review.frontmatter.software}
                category={review.frontmatter.category}
                rating={review.frontmatter.rating}
                summary={review.frontmatter.description}
                referralKey={review.frontmatter.referralKey}
                offer={review.frontmatter.referralOffer}
                href={review.urlPath}
                featured={review.frontmatter.referralKey === "gusto"}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>

        <AffiliateDisclosure className="mt-5" />
      </section>

      <HowItWorks />

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Fresh Content</p>
            <h2 className="text-3xl font-semibold tracking-tight">Latest Reviews & Guides</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((doc) => (
            <ContentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-border bg-white p-8">
        <h2 className="text-3xl font-semibold tracking-tight">Search the Library</h2>
        <SearchBar />
      </section>

      <NewsletterSignup />
    </div>
  );
}
