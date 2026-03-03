import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTAButton } from "@/components/CTAButton";
import { getComparisonBySlug, getDocumentsByType } from "@/lib/content";
import { renderMdx } from "@/lib/content/mdx";
import { comparisonData } from "@/lib/content/comparison-data";

interface ComparisonPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getDocumentsByType("comparison").map((doc) => ({ slug: doc.slugSegments[0] }));
}

export function generateMetadata({ params }: ComparisonPageProps): Metadata {
  const doc = getComparisonBySlug(params.slug);
  if (!doc) {
    return {};
  }

  return {
    title: doc.frontmatter.seoTitle,
    description: doc.frontmatter.description,
    alternates: {
      canonical: doc.urlPath
    },
    robots:
      doc.frontmatter.contentStatus === "scaffold"
        ? {
            index: false,
            follow: true
          }
        : undefined
  };
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const doc = getComparisonBySlug(params.slug);
  if (!doc) {
    notFound();
  }

  const content = await renderMdx(doc.content);
  const data = comparisonData[params.slug];

  return (
    <article className="space-y-8">
      <BreadcrumbNav
        items={[
          { label: "Compare", href: "/compare/gusto-vs-adp" },
          { label: doc.frontmatter.title, href: doc.urlPath }
        ]}
      />

      <header className="rounded-3xl border border-border bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Comparison</p>
        <h1 className="mt-2 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">
          {doc.frontmatter.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">{doc.frontmatter.description}</p>
      </header>

      {data ? <ComparisonTable columns={data.columns} rows={data.rows} /> : null}

      {data ? (
        <section className="rounded-3xl border border-accent/20 bg-accentSoft/30 p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Pick</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">{data.winner}</h2>
          <p className="mt-3 text-muted">{data.winnerReason}</p>
          <div className="mt-4">
            <CTAButton
              referralKey={data.ctaReferralKey}
              label="Try Our Top Pick →"
              ctaLocation="comparison_our_pick"
              trackingVariant="section_primary"
            />
          </div>
        </section>
      ) : null}

      {data ? <AffiliateDisclosure /> : null}

      <section className="prose-reset rounded-3xl border border-border bg-white p-8">{content}</section>
    </article>
  );
}
