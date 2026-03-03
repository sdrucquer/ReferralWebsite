"use client";

import { getReferralProgram } from "@/config/referrals";
import { trackCtaClick } from "@/lib/analytics/cta";
import { cn } from "@/lib/utils/cn";
import type { ReferralKey } from "@/types/content";

export interface CTAButtonProps {
  referralKey: ReferralKey;
  variant?: "primary" | "secondary";
  label?: string;
  size?: "sm" | "md" | "lg";
  showOffer?: boolean;
  className?: string;
  ctaLocation?: string;
  trackingVariant?: string;
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base"
};

export function CTAButton({
  referralKey,
  variant = "primary",
  label,
  size = "md",
  showOffer = false,
  className,
  ctaLocation = "unknown",
  trackingVariant
}: CTAButtonProps) {
  const referral = getReferralProgram(referralKey);
  const finalLabel = label ?? `Claim ${referral.offer}`;
  const isExternal = referral.url.startsWith("http");
  const eventVariant = trackingVariant ?? variant;

  function handleClick() {
    trackCtaClick({
      cta_location: ctaLocation,
      referral_key: referralKey,
      page_path: typeof window !== "undefined" ? window.location.pathname : "/",
      variant: eventVariant
    });
  }

  return (
    <a
      href={referral.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "nofollow sponsored noopener noreferrer" : undefined}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
        sizeClasses[size],
        variant === "primary"
          ? "bg-accent text-white shadow-card hover:-translate-y-0.5 hover:shadow-cardHover"
          : "border border-border bg-white text-text hover:border-accent hover:text-accent",
        className
      )}
      aria-label={isExternal ? `${finalLabel} (opens in a new tab)` : finalLabel}
    >
      <span>{finalLabel}</span>
      {showOffer ? <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{referral.offer}</span> : null}
    </a>
  );
}
