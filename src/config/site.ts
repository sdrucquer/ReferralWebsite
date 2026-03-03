export const siteConfig = {
  brandName: "SmallBizToolkit",
  description:
    "Real software reviews for small business owners from a founder who runs a 6-figure landscaping company.",
  founder: {
    name: "Shanin",
    title: "Founder, Iconic Cleanup LLC",
    bio: "I run a 6-figure landscaping company with 20+ employees and test every tool before I recommend it.",
    email: "iconiccleanup@gmail.com"
  },
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://smallbiztoolkit.com",
  socials: {
    x: "#",
    linkedin: "#",
    youtube: "#"
  },
  nav: [
    { label: "Reviews", href: "/reviews/payroll/gusto" },
    { label: "Compare", href: "/compare/gusto-vs-adp" },
    { label: "Guides", href: "/guides" },
    { label: "About", href: "/about" }
  ]
};
