"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import type { SearchDocument } from "@/types/content";

interface SearchBarProps {
  placeholder?: string;
}

export function SearchBar({ placeholder = "Search reviews and guides..." }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState<SearchDocument[]>([]);

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data: SearchDocument[]) => {
        setDocs(data);
      })
      .catch(() => {
        setDocs([]);
      });
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(docs, {
        keys: ["title", "description", "category", "keywords", "bodyExcerpt"],
        threshold: 0.3
      }),
    [docs]
  );

  const results = query.trim()
    ? fuse
        .search(query)
        .slice(0, 6)
        .map((result) => result.item)
    : [];

  return (
    <div id="site-search" className="relative">
      <label htmlFor="search-input" className="sr-only">
        Search site content
      </label>
      <input
        id="search-input"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
      />

      {query.length > 0 ? (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 rounded-xl border border-border bg-white p-2 shadow-card">
          {results.length ? (
            <ul className="space-y-1">
              {results.map((item) => (
                <li key={item.id}>
                  <Link href={item.slug} className="block rounded-lg px-3 py-2 hover:bg-accentSoft/30">
                    <p className="text-sm font-medium text-text">{item.title}</p>
                    <p className="text-xs text-muted">{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-2 py-2 text-sm text-muted">No matches found.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
