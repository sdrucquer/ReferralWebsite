import sitemap from "@/app/sitemap";
import { generateMetadata as generateComparisonMetadata } from "@/app/compare/[slug]/page";
import { generateMetadata as generateGuideMetadata } from "@/app/guides/[slug]/page";
import { getComparisonBySlug, getGuideBySlug, getReviewBySlug, isIndexable } from "@/lib/content";

describe("indexability and sitemap", () => {
  it("marks scaffold content as non-indexable", () => {
    const scaffoldComparison = getComparisonBySlug("gusto-vs-adp");
    const readyReview = getReviewBySlug(["payroll", "gusto"]);

    expect(scaffoldComparison).toBeTruthy();
    expect(readyReview).toBeTruthy();
    expect(isIndexable(scaffoldComparison!)).toBe(false);
    expect(isIndexable(readyReview!)).toBe(true);
  });

  it("applies noindex robots for scaffold metadata", () => {
    const scaffoldMeta = generateComparisonMetadata({ params: { slug: "gusto-vs-adp" } });
    const readyMeta = generateGuideMetadata({ params: { slug: "setup-payroll-first-employee" } });

    expect(scaffoldMeta.robots).toEqual({ index: false, follow: true });
    expect(readyMeta.robots).toBeUndefined();
  });

  it("excludes scaffold content from sitemap", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => String(entry.url));

    expect(urls.some((url) => url.endsWith("/compare/gusto-vs-adp"))).toBe(false);
    expect(urls.some((url) => url.endsWith("/guides/setup-payroll-first-employee"))).toBe(true);
  });

  it("loads scaffold guide content status", () => {
    const guide = getGuideBySlug("payroll-tax-guide");
    expect(guide?.frontmatter.contentStatus).toBe("scaffold");
  });
});
