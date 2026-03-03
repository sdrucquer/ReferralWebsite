"use client";

import { useMemo, useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  schemaPageType?: "faq" | "none";
}

export function FAQAccordion({ items, schemaPageType = "faq" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const schema = useMemo(() => {
    if (schemaPageType === "none") {
      return null;
    }

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    };
  }, [items, schemaPageType]);

  return (
    <section className="rounded-3xl border border-border bg-surface p-6">
      <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>

      <div className="mt-6 divide-y divide-border">
        {items.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <details
              key={item.question}
              open={isOpen}
              onToggle={() => setOpenIndex(index)}
              className="group py-4"
            >
              <summary className="cursor-pointer list-none pr-6 text-left text-lg font-medium text-text">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
            </details>
          );
        })}
      </div>

      {schema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ) : null}
    </section>
  );
}
