import { categoryMetadata, CategoryPageTemplate } from "@/components/CategoryPageTemplate";

export const metadata = categoryMetadata({
  title: "Payroll Software Reviews",
  description: "Compare payroll software for small business with practical recommendations and real-world experience.",
  canonical: "/payroll"
});

export default function PayrollPage() {
  return (
    <CategoryPageTemplate
      category="payroll"
      title="Payroll Software Reviews"
      description="Find the best payroll software for your business size, team structure, and compliance needs."
    />
  );
}
