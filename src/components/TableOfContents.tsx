"use client";

import { cn } from "@/lib/utils/cn";
import type { HeadingItem } from "@/types/content";

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings.length) {
    return null;
  }

  return (
    <aside className="sticky top-24 hidden rounded-2xl border border-border bg-white p-4 lg:block">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">On this page</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={cn(heading.level >= 3 && "pl-3") }>
            <a className="text-muted transition-colors hover:text-accent" href={`#${heading.id}`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
