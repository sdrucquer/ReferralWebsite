import { fireEvent, render, screen } from "@testing-library/react";
import { CTAButton } from "@/components/CTAButton";

describe("CTAButton", () => {
  it("adds nofollow sponsored rel attributes for external referral links", () => {
    render(<CTAButton referralKey="gusto" label="Claim Offer" />);

    const link = screen.getByRole("link", { name: /claim offer/i });
    expect(link).toHaveAttribute("rel", expect.stringContaining("nofollow"));
    expect(link).toHaveAttribute("rel", expect.stringContaining("sponsored"));
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("does not force external attributes for internal non-referral links", () => {
    render(<CTAButton referralKey="none" label="See details" />);

    const link = screen.getByRole("link", { name: /see details/i });
    expect(link).not.toHaveAttribute("target", "_blank");
  });

  it("pushes cta_click event payload to dataLayer", () => {
    (window as Window & { dataLayer?: unknown[] }).dataLayer = [];

    render(
      <CTAButton
        referralKey="gusto"
        label="Claim Offer"
        ctaLocation="homepage_hero"
        trackingVariant="hero_primary"
      />
    );

    const link = screen.getByRole("link", { name: /claim offer/i });
    fireEvent.click(link);

    const events = (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer ?? [];
    expect(events.length).toBeGreaterThan(0);
    expect(events[0]).toMatchObject({
      event: "cta_click",
      cta_location: "homepage_hero",
      referral_key: "gusto",
      variant: "hero_primary"
    });
  });
});
