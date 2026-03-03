import { getAllDocuments, getGuideBySlug, getReviewBySlug } from "@/lib/content";

describe("content routing integration", () => {
  it("loads and maps review slug to document", () => {
    const review = getReviewBySlug(["payroll", "gusto"]);
    expect(review).toBeTruthy();
    expect(review?.urlPath).toBe("/reviews/payroll/gusto");
  });

  it("loads guides by slug", () => {
    const guide = getGuideBySlug("setup-payroll-first-employee");
    expect(guide).toBeTruthy();
    expect(guide?.frontmatter.title).toContain("Set Up Payroll");
  });

  it("indexes multiple content types", () => {
    const docs = getAllDocuments();
    const types = new Set(docs.map((doc) => doc.type));
    expect(types.has("review")).toBe(true);
    expect(types.has("guide")).toBe(true);
    expect(types.has("comparison")).toBe(true);
    expect(types.has("roundup")).toBe(true);
  });
});
