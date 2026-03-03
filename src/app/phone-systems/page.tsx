import { categoryMetadata, CategoryPageTemplate } from "@/components/CategoryPageTemplate";

export const metadata = categoryMetadata({
  title: "Business Phone System Reviews",
  description: "Business phone software reviews for small teams that need professional call handling.",
  canonical: "/phone-systems"
});

export default function PhoneSystemsPage() {
  return (
    <CategoryPageTemplate
      category="phone"
      title="Business Phone System Reviews"
      description="Phone platforms that help small businesses sound professional and keep calls organized."
    />
  );
}
