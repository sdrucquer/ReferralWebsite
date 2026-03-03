import type { ReferralKey } from "@/types/content";

interface ComparisonData {
  columns: string[];
  rows: Array<{ feature: string; values: string[] }>;
  winner: string;
  winnerReason: string;
  ctaReferralKey: ReferralKey;
}

export const comparisonData: Record<string, ComparisonData> = {
  "gusto-vs-adp": {
    columns: ["Gusto", "ADP Run"],
    rows: [
      { feature: "Best for", values: ["Small teams and first-time payroll", "Complex orgs and enterprise-style operations"] },
      { feature: "Ease of use", values: ["Very easy", "Moderate"] },
      { feature: "Pricing transparency", values: ["Clear published pricing", "Quote-based in many cases"] },
      { feature: "Onboarding speed", values: ["Fast", "Moderate"] }
    ],
    winner: "Gusto",
    winnerReason: "Gusto is usually the better fit for SMB owners who need fast setup and less admin overhead.",
    ctaReferralKey: "gusto"
  },
  "gusto-vs-paychex": {
    columns: ["Gusto", "Paychex Flex"],
    rows: [
      { feature: "Best for", values: ["Modern SMB workflows", "Established teams needing bundled services"] },
      { feature: "UX", values: ["Clean and modern", "Functional but less modern"] },
      { feature: "Cost predictability", values: ["High", "Moderate"] },
      { feature: "SMB-first orientation", values: ["Strong", "Moderate"] }
    ],
    winner: "Gusto",
    winnerReason: "For most small businesses, Gusto provides better usability and faster time-to-value.",
    ctaReferralKey: "gusto"
  },
  "gusto-vs-onpay": {
    columns: ["Gusto", "OnPay"],
    rows: [
      { feature: "Best for", values: ["All-around payroll + HR", "Budget-conscious payroll"] },
      { feature: "Feature depth", values: ["Higher", "Good core coverage"] },
      { feature: "Price", values: ["Moderate", "Lower"] },
      { feature: "Support ecosystem", values: ["Broad", "Smaller"] }
    ],
    winner: "Gusto",
    winnerReason: "OnPay is a strong budget pick, but Gusto offers a more complete long-term platform.",
    ctaReferralKey: "gusto"
  }
};
