import { render, screen } from "@testing-library/react";
import { FAQAccordion } from "@/components/FAQAccordion";

describe("FAQAccordion", () => {
  it("renders faq schema script", () => {
    render(
      <FAQAccordion
        items={[
          {
            question: "Is this free?",
            answer: "Yes"
          }
        ]}
      />
    );

    expect(screen.getByText(/is this free\?/i)).toBeInTheDocument();

    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).toBeTruthy();
    expect(script?.textContent).toContain("FAQPage");
    expect(script?.textContent).toContain("Is this free?");
  });
});
