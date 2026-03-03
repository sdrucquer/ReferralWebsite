import Link from "next/link";
import type { ContentDocument } from "@/types/content";

interface ContentCardProps {
  doc: ContentDocument;
}

const typeLabelMap: Record<ContentDocument["type"], string> = {
  review: "Review",
  guide: "Guide",
  comparison: "Comparison",
  roundup: "Roundup",
  landing: "Landing"
};

export function ContentCard({ doc }: ContentCardProps) {
  const href = doc.urlPath === "/landing/gusto-bonus" ? "/gusto" : doc.urlPath;

  return (
    <article className="rounded-2xl border border-border bg-white p-5 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">{typeLabelMap[doc.type]}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-text">
        <Link href={href} className="hover:text-accent">
          {doc.frontmatter.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-7 text-muted">{doc.frontmatter.description}</p>
      <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline">
        Read more →
      </Link>
    </article>
  );
}
