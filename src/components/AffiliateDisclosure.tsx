import { cn } from "@/lib/utils/cn";

interface AffiliateDisclosureProps {
  className?: string;
}

export function AffiliateDisclosure({ className }: AffiliateDisclosureProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-accent/20 bg-accentSoft/40 px-4 py-3 text-sm leading-6 text-text",
        className
      )}
    >
      This page contains referral links. We may earn a commission at no extra cost to you. All opinions are
      our own based on hands-on experience.
    </div>
  );
}
