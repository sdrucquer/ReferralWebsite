"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, prefix = "", suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.6, once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const start = performance.now();
    const duration = 1000;

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayValue(Math.round(value * progress));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-white p-4 text-center">
      <p className="text-3xl font-semibold text-accent">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
