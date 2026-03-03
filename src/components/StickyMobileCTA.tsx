import { CTAButton } from "@/components/CTAButton";
import type { ReferralKey } from "@/types/content";

interface StickyMobileCTAProps {
  referralKey: ReferralKey;
  label?: string;
}

export function StickyMobileCTA({ referralKey, label }: StickyMobileCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
      <CTAButton referralKey={referralKey} label={label} size="lg" className="w-full" />
    </div>
  );
}
