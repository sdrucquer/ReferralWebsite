import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-text">{siteConfig.brandName}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Honest software reviews from a founder who runs a real service business with 20+ employees.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Categories</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/payroll" className="text-muted hover:text-accent">
                Payroll
              </Link>
            </li>
            <li>
              <Link href="/field-service" className="text-muted hover:text-accent">
                Field Service
              </Link>
            </li>
            <li>
              <Link href="/accounting" className="text-muted hover:text-accent">
                Accounting
              </Link>
            </li>
            <li>
              <Link href="/phone-systems" className="text-muted hover:text-accent">
                Phone Systems
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Disclosure</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            We may receive a referral bonus when you sign up through our links. This never costs you extra.
          </p>
          <a href={`mailto:${siteConfig.founder.email}`} className="mt-3 inline-block text-sm text-accent hover:underline">
            {siteConfig.founder.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
