import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const schemaItems = [{ label: "Home", href: "/" }, ...items].map((item) => ({
    name: item.label,
    url: item.href
  }));

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.href} className="flex items-center gap-2">
              <span>/</span>
              <Link href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
    </>
  );
}
