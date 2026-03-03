export const CATEGORY_PAGE_MAP: Record<string, { slug: string; label: string; description: string }> = {
  payroll: {
    slug: "payroll",
    label: "Payroll Software",
    description: "Payroll tools that save time, keep taxes compliant, and make paying your team painless."
  },
  accounting: {
    slug: "accounting",
    label: "Accounting Software",
    description: "Bookkeeping and reporting tools that help small businesses stay on top of cash and taxes."
  },
  "field-service": {
    slug: "field-service",
    label: "Field Service Software",
    description: "Scheduling, quoting, invoicing, and team management software for service companies."
  },
  phone: {
    slug: "phone-systems",
    label: "Phone Systems",
    description: "Business phone tools for professional calls, routing, and client communication."
  }
};

export function mapCategoryToPagePath(category: string) {
  const key = category.toLowerCase();
  const found = CATEGORY_PAGE_MAP[key];
  return found ? `/${found.slug}` : "/";
}
