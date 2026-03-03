import { siteConfig } from "@/config/site";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.domain,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.founder.email
    }
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "Iconic Cleanup LLC"
    },
    email: siteConfig.founder.email,
    description: siteConfig.founder.bio
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`
    }))
  };
}

export function reviewProductSchema(input: {
  name: string;
  description: string;
  rating: number;
  author: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: input.name,
      applicationCategory: "BusinessApplication",
      description: input.description
    },
    author: {
      "@type": "Person",
      name: input.author
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    reviewRating: {
      "@type": "Rating",
      ratingValue: input.rating,
      bestRating: 5,
      worstRating: 1
    }
  };
}

export function productOfferSchema(input: {
  name: string;
  description: string;
  offer: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      category: input.offer,
      availability: "https://schema.org/InStock",
      url: input.url
    }
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function itemListSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${siteConfig.domain}${item.url}`
    }))
  };
}
