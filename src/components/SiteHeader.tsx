"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled ? "bg-white/95 py-3 shadow-sm backdrop-blur border-border" : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight text-text">
          {siteConfig.brandName}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#site-search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent"
            aria-label="Jump to search"
          >
            ⌕
          </a>
          <Link
            href="/gusto"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Top Payroll Pick
          </Link>
        </div>
      </div>
    </header>
  );
}
