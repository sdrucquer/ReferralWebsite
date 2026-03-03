import { render, screen } from "@testing-library/react";
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
});
