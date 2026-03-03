import { categoryMetadata, CategoryPageTemplate } from "@/components/CategoryPageTemplate";

export const metadata = categoryMetadata({
  title: "Accounting Software Reviews",
  description: "Accounting software recommendations for small business bookkeeping, reporting, and tax readiness.",
  canonical: "/accounting"
});

export default function AccountingPage() {
  return (
    <CategoryPageTemplate
      category="accounting"
      title="Accounting Software Reviews"
      description="Bookkeeping and accounting software that keeps your numbers accurate and your decisions informed."
    />
  );
}
