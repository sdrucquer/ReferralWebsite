import { getReferralProgram } from "@/config/referrals";

describe("referrals config", () => {
  it("returns gusto referral program with expected URL", () => {
    const gusto = getReferralProgram("gusto");
    expect(gusto.url).toBe("https://gusto.com/r/shanin9585e861");
  });

  it("supports non-referral fallback", () => {
    const fallback = getReferralProgram("none");
    expect(fallback.url).toBe("/gusto");
  });
});
