export type ReferralKey = "gusto" | "jobber" | "quickbooks" | "quo" | "none";

export type ContentType = "review" | "guide" | "comparison" | "roundup" | "landing";
export type ContentStatus = "ready" | "scaffold";

export interface BaseFrontmatter {
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  lastUpdated: string;
  author: string;
  featured?: boolean;
  slug?: string;
  contentStatus?: ContentStatus;
}

export interface ReviewFrontmatter extends BaseFrontmatter {
  rating: number;
  software: string;
  referralKey: ReferralKey;
  referralOffer: string;
  referralOfferDetail: string;
  authorBio: string;
}

export interface ArticleFrontmatter extends BaseFrontmatter {
  rating?: never;
  software?: never;
  referralKey?: ReferralKey;
  referralOffer?: string;
  referralOfferDetail?: string;
  authorBio?: string;
}

export interface HeadingItem {
  id: string;
  level: number;
  text: string;
}

export interface ContentDocument<TFrontmatter extends BaseFrontmatter = BaseFrontmatter> {
  id: string;
  type: ContentType;
  collection: string;
  filePath: string;
  slugSegments: string[];
  urlPath: string;
  frontmatter: TFrontmatter;
  content: string;
  excerpt: string;
  readingMinutes: number;
  headings: HeadingItem[];
}

export interface SearchDocument {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  category: string;
  slug: string;
  keywords: string[];
  bodyExcerpt: string;
}
