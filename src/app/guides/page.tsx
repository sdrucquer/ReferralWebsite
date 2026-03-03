import { Metadata } from "next";
import { ContentCard } from "@/components/ContentCard";
import { SearchBar } from "@/components/SearchBar";
import { getDocumentsByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Small Business Guides",
  description: "Actionable guides for payroll, hiring, and software operations in small businesses.",
  alternates: {
    canonical: "/guides"
  }
};

export default function GuidesIndexPage() {
  const guides = getDocumentsByType("guide");

  return (
    <div className="space-y-8">
      <header className="rounded-3xl border border-border bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Guides</p>
        <h1 className="mt-2 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">
          Practical Playbooks for Small Business Owners
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          Learn how to set up payroll, choose better tools, and avoid expensive mistakes as your business grows.
        </p>
      </header>

      <SearchBar />

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <ContentCard key={guide.id} doc={guide} />
        ))}
      </section>
    </div>
  );
}
