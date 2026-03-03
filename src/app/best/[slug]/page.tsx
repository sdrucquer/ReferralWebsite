import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { ContentCard } from "@/components/ContentCard";
import { JsonLd } from "@/components/JsonLd";
import { getDocumentsByType, getRoundupBySlug } from "@/lib/content";
import { renderMdx } from "@/lib/content/mdx";
import { itemListSchema } from "@/lib/seo/schema";

interface RoundupPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getDocumentsByType("roundup").map((doc) => ({ slug: doc.slugSegments[0] }));
}

export function generateMetadata({ params }: RoundupPageProps): Metadata {
  const doc = getRoundupBySlug(params.slug);
  if (!doc) {
    return {};
  }

  return {
    title: doc.frontmatter.seoTitle,
    description: doc.frontmatter.description,
    alternates: {
      canonical: doc.urlPath
    }
  };
}

export default async function RoundupPage({ params }: RoundupPageProps) {
  const doc = getRoundupBySlug(params.slug);

  if (!doc) {
    notFound();
  }

  const content = await renderMdx(doc.content);
  const reviews = getDocumentsByType("review")
    .filter((review) => review.frontmatter.category.toLowerCase() === doc.frontmatter.category.toLowerCase())
    .slice(0, 5);

  return (
    <article className="space-y-8">
      <BreadcrumbNav
        items={[
          { label: "Best", href: "/best/best-payroll-software" },
          { label: doc.frontmatter.title, href: doc.urlPath }
        ]}
      />

      <header className="rounded-3xl border border-border bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Roundup</p>
        <h1 className="mt-2 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">
          {doc.frontmatter.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">{doc.frontmatter.description}</p>
      </header>

      <section className="prose-reset rounded-3xl border border-border bg-white p-8">{content}</section>

      {reviews.length ? (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Related Reviews</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ContentCard key={review.id} doc={review} />
            ))}
          </div>
        </section>
      ) : null}

      <JsonLd
        data={
          itemListSchema(
            reviews.map((item) => ({
              name: item.frontmatter.title,
              url: item.urlPath
            }))
          )
        }
      />
    </article>
  );
}
