import fs from "node:fs";
import path from "node:path";
import { buildSearchDocuments, writeSearchIndex } from "@/lib/content/search-index";

describe("search index integration", () => {
  it("builds search documents from mdx content", () => {
    const docs = buildSearchDocuments();
    expect(docs.length).toBeGreaterThan(5);
    expect(docs.some((doc) => doc.slug === "/gusto")).toBe(true);
  });

  it("writes static json output", () => {
    const outPath = path.join(process.cwd(), "public", "search-index.test.json");
    const count = writeSearchIndex(outPath);

    expect(count).toBeGreaterThan(5);
    expect(fs.existsSync(outPath)).toBe(true);

    fs.unlinkSync(outPath);
  });
});
