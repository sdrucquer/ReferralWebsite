import type { Metadata } from "next";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { CTAButton } from "@/components/CTAButton";
import { ContactButton } from "@/components/ContactButton";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PersonalEndorsement } from "@/components/PersonalEndorsement";
import { StepByStep } from "@/components/StepByStep";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { VideoEmbed } from "@/components/VideoEmbed";
import { siteConfig } from "@/config/site";
import { getLandingBySlug } from "@/lib/content";
import { renderMdx } from "@/lib/content/mdx";
import { productOfferSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Get a $200 Visa Gift Card When You Try Gusto Payroll",
  description:
    "Sign up through this link, run your first payroll, and receive a $200 Visa gift card within about 30 days.",
  alternates: {
    canonical: "/gusto"
  }
};

const gustoFaqs = [
  {
    question: "Is the $200 gift card really free?",
    answer:
      "Yes. There is no extra fee to receive it. You sign up through the referral link, run your first payroll, and Gusto sends the gift card about 30 days later."
  },
  {
    question: "What does 'run your first payroll' mean?",
    answer:
      "It means processing an actual payment to at least one person in Gusto. You add employee details, set compensation, and submit payroll so payment is issued."
  },
  {
    question: "How long does it take to get the gift card?",
    answer: "Typically about 30 days after your first payroll is processed."
  },
  {
    question: "What if I have trouble getting my gift card?",
    answer:
      "Contact Gusto support and mention the referring business is Iconic Cleanup LLC with email iconiccleanup@gmail.com so they can verify referral attribution."
  },
  {
    question: "How much does Gusto cost?",
    answer:
      "Gusto plans commonly start around $40/month plus $6/month per employee, with contractor-only options available. Check current pricing during signup."
  },
  {
    question: "Can I use Gusto if I'm the only employee?",
    answer:
      "Yes. Many solo owners set themselves up as an employee and run owner payroll for cleaner tax handling."
  },
  {
    question: "Does Gusto handle payroll taxes?",
    answer:
      "Yes. Gusto calculates, files, and pays payroll taxes for supported jurisdictions, and includes protection for penalties caused by its filing errors."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Gusto does not require a long-term contract and you can cancel your account."
  }
];

const steps = [
  {
    title: "Sign Up",
    description:
      "Create your account through the referral link. You can explore the platform during trial before committing.",
    icon: "📝"
  },
  {
    title: "Set Up Your Company",
    description:
      "Add business details, connect payment info, and add employees or yourself if you are a solo business owner.",
    icon: "🏢"
  },
  {
    title: "Run Your First Payroll",
    description:
      "Process a real payroll payment to at least one person. Once submitted, the referral qualification is complete.",
    icon: "💸"
  },
  {
    title: "Get Your $200 Gift Card",
    description: "About 30 days after first payroll, Gusto delivers your Visa gift card via email.",
    icon: "🎁"
  }
];

export default async function GustoLandingPage() {
  const landingDoc = getLandingBySlug("gusto-bonus");
  const quickOverview = landingDoc ? await renderMdx(landingDoc.content) : null;

  return (
    <div className="space-y-8 pb-20">
      <section className="rounded-3xl border border-border bg-white p-8 text-center md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Payroll Bonus Offer</p>
        <h1 className="mt-3 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
          Get a $200 Visa Gift Card When You Try Gusto Payroll
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted">
          Sign up through this link, run your first payroll, and receive a $200 Visa gift card within about 30 days.
        </p>
        <div className="mt-8">
          <CTAButton referralKey="gusto" label="Claim Your $200 Bonus →" size="lg" className="px-8" />
          <p className="mt-3 text-sm text-muted">Used by 300,000+ businesses · Rated 4.7/5</p>
        </div>
      </section>

      <StepByStep title="How to Claim Your $200 Bonus" steps={steps} />

      <section className="rounded-3xl border border-border bg-white p-8">
        <h2 className="text-3xl font-semibold tracking-tight">What Is Gusto?</h2>
        <p className="mt-4 max-w-3xl leading-8 text-muted">
          Gusto is a full-service payroll platform that handles payroll processing, tax filing, onboarding,
          benefits, and HR basics in one dashboard.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border p-4">
            <h3 className="font-semibold text-text">Automatic tax calculations and filings</h3>
            <p className="mt-2 text-sm text-muted">Federal, state, and local payroll taxes are calculated and submitted automatically.</p>
          </article>
          <article className="rounded-2xl border border-border p-4">
            <h3 className="font-semibold text-text">Direct deposit and self-service</h3>
            <p className="mt-2 text-sm text-muted">Employees can view pay stubs and tax docs without asking your office every pay cycle.</p>
          </article>
          <article className="rounded-2xl border border-border p-4">
            <h3 className="font-semibold text-text">Benefits and PTO tracking</h3>
            <p className="mt-2 text-sm text-muted">You can handle benefits eligibility and paid time off in the same system.</p>
          </article>
          <article className="rounded-2xl border border-border p-4">
            <h3 className="font-semibold text-text">Best for small teams</h3>
            <p className="mt-2 text-sm text-muted">Great fit for 1-100 employees, especially service businesses and first-time payroll users.</p>
          </article>
        </div>
      </section>

      <PersonalEndorsement
        quote="I've used Gusto for my landscaping company with 20+ employees. Payroll used to be the worst part of my week. Now it's a 10-minute task and my team can access everything from their phones."
        name="Shanin"
        title="Founder of Iconic Cleanup LLC"
      />

      <section className="space-y-3 rounded-3xl border border-border bg-white p-8">
        <h2 className="text-3xl font-semibold tracking-tight">Watch: Why I Switched to Gusto</h2>
        <VideoEmbed title="Why I Switched to Gusto" />
      </section>

      {quickOverview ? (
        <section className="prose-reset rounded-3xl border border-border bg-white p-8">
          <h2 className="text-3xl font-semibold tracking-tight">Quick Overview</h2>
          <div className="mt-4">{quickOverview}</div>
        </section>
      ) : null}

      <FAQAccordion items={gustoFaqs} schemaPageType="faq" />

      <section className="rounded-3xl border border-border bg-white p-8">
        <h2 className="text-3xl font-semibold tracking-tight">Have questions? I&apos;m happy to help.</h2>
        <p className="mt-3 text-muted">
          You can email me directly if you want help deciding whether Gusto is right for your business.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <ContactButton email={siteConfig.founder.email} />
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition hover:border-accent hover:text-accent"
          >
            Calendly link placeholder
          </a>
        </div>
      </section>

      <section className="rounded-3xl border border-accent/20 bg-accentSoft/30 p-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Ready to get your $200?</h2>
        <p className="mt-3 text-muted">Sign up for Gusto and run your first payroll to qualify for the gift card.</p>
        <div className="mt-5">
          <CTAButton referralKey="gusto" label="Sign Up for Gusto Now →" size="lg" />
        </div>
      </section>

      <AffiliateDisclosure />

      <p className="rounded-2xl border border-border bg-white p-4 text-sm leading-7 text-muted">
        I may receive a referral bonus when you sign up through my link. This does not change your pricing.
        You still get the same $200 gift card and standard Gusto terms.
      </p>

      <JsonLd
        data={
          productOfferSchema({
            name: "Gusto Payroll",
            description: "Payroll software for small businesses with a $200 referral bonus offer.",
            offer: "$200 Visa Gift Card",
            url: "https://gusto.com/r/shanin9585e861"
          })
        }
      />

      <StickyMobileCTA referralKey="gusto" label="Claim Your $200 Bonus" />
    </div>
  );
}
