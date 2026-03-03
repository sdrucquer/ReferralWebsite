import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorByline } from "@/components/AuthorByline";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { TableOfContents } from "@/components/TableOfContents";
import { getDocumentsByType, getGuideBySlug } from "@/lib/content";
import { renderMdx } from "@/lib/content/mdx";

interface GuidePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getDocumentsByType("guide").map((doc) => ({ slug: doc.slugSegments[0] }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const doc = getGuideBySlug(params.slug);
  if (!doc) {
    return {};
  }

  return {
    title: doc.frontmatter.seoTitle,
    description: doc.frontmatter.description,
    alternates: {
      canonical: doc.urlPath
    },
    openGraph: {
      type: "article",
      title: doc.frontmatter.seoTitle,
      description: doc.frontmatter.description,
      url: doc.urlPath
    }
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const doc = getGuideBySlug(params.slug);

  if (!doc) {
    notFound();
  }

  const content = await renderMdx(doc.content);

  return (
    <article className="space-y-8">
      <BreadcrumbNav
        items={[
          { label: "Guides", href: "/guides" },
          { label: doc.frontmatter.title, href: doc.urlPath }
        ]}
      />

      <header className="rounded-3xl border border-border bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Guide</p>
        <h1 className="mt-2 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">
          {doc.frontmatter.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">{doc.frontmatter.description}</p>
      </header>

      <AuthorByline author={doc.frontmatter.author} lastUpdated={doc.frontmatter.lastUpdated} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <section className="prose-reset rounded-3xl border border-border bg-white p-8">{content}</section>
        <TableOfContents headings={doc.headings} />
      </div>
    </article>
  );
}
