import type { ReferralKey } from "@/types/content";

export interface ReferralProgram {
  key: ReferralKey;
  name: string;
  url: string;
  offer: string;
  offerDetail: string;
  priority: "highest" | "high" | "medium" | "low";
  category: string;
}

export const REFERRALS: Record<ReferralKey, ReferralProgram> = {
  gusto: {
    key: "gusto",
    name: "Gusto",
    url: "https://gusto.com/r/shanin9585e861",
    offer: "$200 Visa Gift Card",
    offerDetail: "Get a $200 Visa gift card about 30 days after you run your first payroll.",
    priority: "highest",
    category: "Payroll"
  },
  jobber: {
    key: "jobber",
    name: "Jobber",
    url: "https://go.getjobber.com/Shanin",
    offer: "20% Off for 6 Months",
    offerDetail: "Save 20% on your first 6 months.",
    priority: "high",
    category: "Field Service"
  },
  quickbooks: {
    key: "quickbooks",
    name: "QuickBooks",
    url: "https://refer.quickbooks.ca/s/sdrucquer",
    offer: "75% Off for 6 Months",
    offerDetail: "Save 75% for six months on qualifying QuickBooks plans.",
    priority: "high",
    category: "Accounting"
  },
  quo: {
    key: "quo",
    name: "QUO",
    url: "https://quo.com/referral/OE0FP01",
    offer: "$20 Visa Gift Card",
    offerDetail: "Get a $20 Visa gift card after being a customer for 3 months.",
    priority: "medium",
    category: "Phone System"
  },
  none: {
    key: "none",
    name: "General",
    url: "/gusto",
    offer: "See Payroll Bonus",
    offerDetail: "Explore our top payroll recommendation and active bonus offer.",
    priority: "low",
    category: "General"
  }
};

export function getReferralProgram(key: ReferralKey) {
  return REFERRALS[key];
}
