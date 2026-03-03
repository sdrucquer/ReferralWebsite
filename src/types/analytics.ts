import type { ReferralKey } from "@/types/content";

export interface CTAEventPayload {
  cta_location: string;
  referral_key: ReferralKey;
  page_path: string;
  variant: string;
}
