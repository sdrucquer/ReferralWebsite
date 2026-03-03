"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";
import { RatingStars } from "@/components/RatingStars";
import { cn } from "@/lib/utils/cn";
import type { ReferralKey } from "@/types/content";

interface ReviewCardProps {
  title: string;
  category: string;
  rating: number;
  summary: string;
  referralKey: ReferralKey;
  offer: string;
  href: string;
  featured?: boolean;
}

export function ReviewCard({
  title,
  category,
  rating,
  summary,
  referralKey,
  offer,
  href,
  featured = false
}: ReviewCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 26 }}
      className={cn(
        "group rounded-3xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-cardHover",
        featured && "border-accent/30 bg-gradient-to-br from-accentSoft/30 via-white to-white md:col-span-2"
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className="rounded-full bg-accentSoft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {category}
        </span>
        <RatingStars rating={rating} />
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-text">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{summary}</p>

      <p className="mt-4 inline-flex rounded-full bg-text/5 px-3 py-1 text-xs font-semibold text-text">{offer}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={href}
          className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          Read Review
        </Link>
        <CTAButton
          referralKey={referralKey}
          label="Visit Site"
          size="sm"
          ctaLocation={featured ? "featured_review_card" : "review_card"}
          trackingVariant="card_primary"
        />
      </div>
    </motion.article>
  );
}
