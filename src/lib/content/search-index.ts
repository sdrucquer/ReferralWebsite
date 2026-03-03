import fs from "node:fs";
import path from "node:path";
import type { SearchDocument } from "../../types/content";
import { getAllDocuments } from ".";

export function buildSearchDocuments(): SearchDocument[] {
  const docs = getAllDocuments();

  return docs.map((doc) => {
    const keywords = [
      doc.frontmatter.title,
      doc.frontmatter.category,
      "software",
      ...doc.frontmatter.title.toLowerCase().split(" ")
    ].filter(Boolean);

    return {
      id: doc.id,
      type: doc.type,
      title: doc.frontmatter.title,
      description: doc.frontmatter.description,
      category: doc.frontmatter.category,
      slug: doc.urlPath === "/landing/gusto-bonus" ? "/gusto" : doc.urlPath,
      keywords,
      bodyExcerpt: doc.excerpt
    };
  });
}

export function writeSearchIndex(outputPath = path.join(process.cwd(), "public", "search-index.json")) {
  const docs = buildSearchDocuments();
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(docs, null, 2));
  return docs.length;
}
