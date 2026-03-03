import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllDocuments, isIndexable } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = getAllDocuments();
  const staticPages = [
    "",
    "/gusto",
    "/guides",
    "/about",
    "/privacy",
    "/terms",
    "/disclosure",
    "/payroll",
    "/accounting",
    "/field-service",
    "/phone-systems"
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date()
  }));

  const contentEntries = docs.filter(isIndexable).map((doc) => ({
    url: `${siteConfig.domain}${doc.urlPath === "/landing/gusto-bonus" ? "/gusto" : doc.urlPath}`,
    lastModified: new Date(doc.frontmatter.lastUpdated)
  }));

  return [...staticEntries, ...contentEntries];
}
