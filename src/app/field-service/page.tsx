import { categoryMetadata, CategoryPageTemplate } from "@/components/CategoryPageTemplate";

export const metadata = categoryMetadata({
  title: "Field Service Software Reviews",
  description: "Service business software for scheduling, dispatch, quoting, invoicing, and team productivity.",
  canonical: "/field-service"
});

export default function FieldServicePage() {
  return (
    <CategoryPageTemplate
      category="field-service"
      title="Field Service Software Reviews"
      description="Software built for crews in the field, from quotes and scheduling to invoicing and follow-up."
    />
  );
}
