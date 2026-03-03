import type { Metadata } from "next";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ContentCard } from "@/components/ContentCard";
import { ReviewCard } from "@/components/ReviewCard";
import { getDocumentsByType, getReviewsByCategory } from "@/lib/content";
import type { ReviewFrontmatter } from "@/types/content";

interface CategoryPageTemplateProps {
  category: string;
  title: string;
  description: string;
}

export function categoryMetadata({ title, description, canonical }: { title: string; description: string; canonical: string }): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical
    }
  };
}

export function CategoryPageTemplate({ category, title, description }: CategoryPageTemplateProps) {
  const reviews = getReviewsByCategory(category);
  const roundups = getDocumentsByType("roundup").filter(
    (doc) => doc.frontmatter.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="space-y-8">
      <header className="rounded-3xl border border-border bg-white p-8">
        <h1 className="font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{description}</p>
      </header>

      {roundups.length ? (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Pinned Roundup</h2>
          <div className="grid gap-4 md:max-w-2xl">
            {roundups.slice(0, 1).map((doc) => (
              <ContentCard key={doc.id} doc={doc} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Reviews in this category</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((doc) => {
            const fm = doc.frontmatter as ReviewFrontmatter;
            return (
              <ReviewCard
                key={doc.id}
                title={fm.software}
                category={fm.category}
                rating={fm.rating}
                summary={fm.description}
                referralKey={fm.referralKey}
                offer={fm.referralOffer}
                href={doc.urlPath}
              />
            );
          })}
        </div>
        <AffiliateDisclosure />
      </section>
    </div>
  );
}
