import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { AuthorByline } from "@/components/AuthorByline";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTAButton } from "@/components/CTAButton";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { ProsConsList } from "@/components/ProsConsList";
import { RatingStars } from "@/components/RatingStars";
import { ReviewCard } from "@/components/ReviewCard";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { TableOfContents } from "@/components/TableOfContents";
import { getRelatedReviews, getReviewBySlug, getDocumentsByType } from "@/lib/content";
import { renderMdx } from "@/lib/content/mdx";
import { reviewExtras } from "@/lib/content/review-extras";
import { reviewProductSchema } from "@/lib/seo/schema";
import type { ReviewFrontmatter } from "@/types/content";

interface ReviewPageProps {
  params: {
    slug: string[];
  };
}

export function generateStaticParams() {
  return getDocumentsByType("review").map((doc) => ({ slug: doc.slugSegments }));
}

export function generateMetadata({ params }: ReviewPageProps): Metadata {
  const doc = getReviewBySlug(params.slug);
  if (!doc) {
    return {};
  }

  const frontmatter = doc.frontmatter as ReviewFrontmatter;

  return {
    title: frontmatter.seoTitle,
    description: frontmatter.description,
    alternates: {
      canonical: doc.urlPath
    },
    openGraph: {
      title: frontmatter.seoTitle,
      description: frontmatter.description,
      type: "article",
      url: doc.urlPath
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.seoTitle,
      description: frontmatter.description
    }
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const doc = getReviewBySlug(params.slug);

  if (!doc) {
    notFound();
  }

  const frontmatter = doc.frontmatter as ReviewFrontmatter;
  const mdx = await renderMdx(doc.content);
  const slugKey = doc.slugSegments[doc.slugSegments.length - 1];
  const extras = reviewExtras[slugKey] ?? { pros: [], cons: [], faqs: [] };
  const related = getRelatedReviews(doc.id, 3);

  return (
    <article className="space-y-8 pb-20">
      <BreadcrumbNav
        items={[
          { label: "Reviews", href: "/reviews/payroll/gusto" },
          { label: frontmatter.software, href: doc.urlPath }
        ]}
      />

      <header className="rounded-3xl border border-border bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">{frontmatter.category}</p>
        <h1 className="mt-2 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{frontmatter.description}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <RatingStars rating={frontmatter.rating} />
          <span className="rounded-full bg-accentSoft px-3 py-1 text-xs font-semibold text-accent">
            {frontmatter.referralOffer}
          </span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTAButton referralKey={frontmatter.referralKey} label={`Claim ${frontmatter.referralOffer} →`} size="lg" />
          <Link
            href="/gusto"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
          >
            See Gusto Bonus Page
          </Link>
        </div>
      </header>

      <AuthorByline
        author={frontmatter.author}
        authorBio={frontmatter.authorBio}
        lastUpdated={frontmatter.lastUpdated}
      />

      <AffiliateDisclosure />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="space-y-8">
          <ProsConsList pros={extras.pros} cons={extras.cons} />
          <section className="prose-reset rounded-3xl border border-border bg-white p-8">{mdx}</section>
          {extras.faqs.length ? <FAQAccordion items={extras.faqs} /> : null}
        </div>

        <TableOfContents headings={doc.headings} />
      </div>

      {related.length ? (
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Related Reviews</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => {
              const itemFm = item.frontmatter as ReviewFrontmatter;
              return (
                <ReviewCard
                  key={item.id}
                  title={itemFm.software}
                  category={itemFm.category}
                  rating={itemFm.rating}
                  summary={itemFm.description}
                  referralKey={itemFm.referralKey}
                  offer={itemFm.referralOffer}
                  href={item.urlPath}
                />
              );
            })}
          </div>
        </section>
      ) : null}

      <JsonLd
        data={
          reviewProductSchema({
            name: frontmatter.software,
            description: frontmatter.description,
            rating: frontmatter.rating,
            author: frontmatter.author,
            datePublished: frontmatter.lastUpdated,
            dateModified: frontmatter.lastUpdated
          })
        }
      />

      <StickyMobileCTA referralKey={frontmatter.referralKey} label={`Claim ${frontmatter.referralOffer}`} />
    </article>
  );
}
