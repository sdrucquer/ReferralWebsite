import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type {
  ArticleFrontmatter,
  BaseFrontmatter,
  ContentDocument,
  ContentStatus,
  ContentType,
  HeadingItem,
  ReviewFrontmatter
} from "@/types/content";

const CONTENT_ROOT = path.join(process.cwd(), "content");

const COLLECTION_TYPE_MAP: Record<string, ContentType> = {
  reviews: "review",
  guides: "guide",
  comparisons: "comparison",
  roundups: "roundup",
  landing: "landing"
};

function walkMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMdxFiles(fullPath));
      continue;
    }
    if (entry.isFile() && fullPath.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]*\)/g, " ")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[>*_~\-|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractHeadings(raw: string): HeadingItem[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings: HeadingItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(raw)) !== null) {
    const hashes = match[1];
    const text = match[2].replace(/[#*`_]/g, "").trim();
    headings.push({
      level: hashes.length,
      text,
      id: slugify(text)
    });
  }

  return headings;
}

function mapUrlPath(type: ContentType, slugSegments: string[]) {
  switch (type) {
    case "review":
      return `/reviews/${slugSegments.join("/")}`;
    case "guide":
      return `/guides/${slugSegments[0]}`;
    case "comparison":
      return `/compare/${slugSegments[0]}`;
    case "roundup":
      return `/best/${slugSegments[0]}`;
    case "landing":
      return `/landing/${slugSegments[0]}`;
    default:
      return "/";
  }
}

function normalizeFrontmatter(type: ContentType, rawData: Record<string, unknown>) {
  const statusValue = String(rawData.contentStatus ?? "ready");
  const contentStatus: ContentStatus = statusValue === "scaffold" ? "scaffold" : "ready";

  const base: BaseFrontmatter = {
    title: String(rawData.title ?? "Untitled"),
    seoTitle: String(rawData.seoTitle ?? rawData.title ?? "Untitled"),
    description: String(rawData.description ?? ""),
    category: String(rawData.category ?? "general"),
    lastUpdated: String(rawData.lastUpdated ?? new Date().toISOString().slice(0, 10)),
    author: String(rawData.author ?? "Shanin"),
    featured: Boolean(rawData.featured ?? false),
    slug: rawData.slug ? String(rawData.slug) : undefined,
    contentStatus
  };

  if (type === "review") {
    const reviewData: ReviewFrontmatter = {
      ...base,
      rating: Number(rawData.rating ?? 0),
      software: String(rawData.software ?? ""),
      referralKey: String(rawData.referralKey ?? "gusto") as ReviewFrontmatter["referralKey"],
      referralOffer: String(rawData.referralOffer ?? ""),
      referralOfferDetail: String(rawData.referralOfferDetail ?? ""),
      authorBio: String(rawData.authorBio ?? "")
    };

    return reviewData;
  }

  return base as ArticleFrontmatter;
}

function parseFile(filePath: string): ContentDocument {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const relPath = path.relative(CONTENT_ROOT, filePath).replaceAll(path.sep, "/");
  const segments = relPath.split("/");
  const collection = segments[0];

  const type = COLLECTION_TYPE_MAP[collection];
  if (!type) {
    throw new Error(`Unknown content collection for file ${filePath}`);
  }

  const rawSlug = segments.slice(1);
  const filename = rawSlug.at(-1)?.replace(/\.mdx$/, "") ?? "index";
  const parentSegments = rawSlug.slice(0, -1);

  const slugSegments =
    type === "review"
      ? [...parentSegments, filename]
      : [parsed.data.slug ? String(parsed.data.slug) : filename];

  const textContent = stripMarkdown(parsed.content);

  return {
    id: relPath,
    type,
    collection,
    filePath,
    slugSegments,
    urlPath: mapUrlPath(type, slugSegments),
    frontmatter: normalizeFrontmatter(type, parsed.data),
    content: parsed.content,
    excerpt: textContent.slice(0, 220),
    readingMinutes: Math.max(1, Math.round(readingTime(parsed.content).minutes)),
    headings: extractHeadings(parsed.content)
  };
}

let cache: ContentDocument[] | null = null;

export function getAllDocuments() {
  if (cache) {
    return cache;
  }

  const files = walkMdxFiles(CONTENT_ROOT);
  cache = files.map(parseFile).sort((a, b) => {
    const aDate = new Date(a.frontmatter.lastUpdated).getTime();
    const bDate = new Date(b.frontmatter.lastUpdated).getTime();
    return bDate - aDate;
  });

  return cache;
}

export function clearDocumentCache() {
  cache = null;
}

export function getDocumentsByType<T extends ContentType>(type: T) {
  return getAllDocuments().filter((doc) => doc.type === type);
}

export function getReviewBySlug(slugSegments: string[]) {
  return getDocumentsByType("review").find(
    (doc) => doc.slugSegments.join("/") === slugSegments.join("/")
  ) as ContentDocument<ReviewFrontmatter> | undefined;
}

export function getGuideBySlug(slug: string) {
  return getDocumentsByType("guide").find((doc) => doc.slugSegments[0] === slug);
}

export function getComparisonBySlug(slug: string) {
  return getDocumentsByType("comparison").find((doc) => doc.slugSegments[0] === slug);
}

export function getRoundupBySlug(slug: string) {
  return getDocumentsByType("roundup").find((doc) => doc.slugSegments[0] === slug);
}

export function getLandingBySlug(slug: string) {
  return getDocumentsByType("landing").find((doc) => doc.slugSegments[0] === slug);
}

export function getReviewsByCategory(category: string) {
  const normalized = category.toLowerCase();
  return getDocumentsByType("review").filter((doc) => {
    const review = doc as ContentDocument<ReviewFrontmatter>;
    return review.frontmatter.category.toLowerCase() === normalized;
  }) as Array<ContentDocument<ReviewFrontmatter>>;
}

export function getFeaturedReviews(limit = 4) {
  return (getDocumentsByType("review") as Array<ContentDocument<ReviewFrontmatter>>)
    .filter((doc) => doc.frontmatter.featured)
    .slice(0, limit);
}

export function getLatestDocuments(limit = 6) {
  return getAllDocuments().slice(0, limit);
}

export function getStaticParamsForType(type: ContentType) {
  return getDocumentsByType(type).map((doc) => ({ slug: doc.slugSegments }));
}

export function getRelatedReviews(currentId: string, limit = 3) {
  return (getDocumentsByType("review") as Array<ContentDocument<ReviewFrontmatter>>)
    .filter((doc) => doc.id !== currentId)
    .slice(0, limit);
}

export function isIndexable(doc: ContentDocument) {
  return doc.frontmatter.contentStatus !== "scaffold";
}
