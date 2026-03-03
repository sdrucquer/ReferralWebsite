import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { organizationSchema } from "@/lib/seo/schema";

const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading"
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.brandName} | Small Business Software Reviews`,
    template: `%s | ${siteConfig.brandName}`
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.brandName} | Small Business Software Reviews`,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.domain,
    siteName: siteConfig.brandName
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Small Business Software Reviews`,
    description: siteConfig.description
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-[var(--font-body)] text-text antialiased">
        <SiteHeader />
        <PageTransition>
          <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-6">{children}</main>
        </PageTransition>
        <SiteFooter />
        <JsonLd id="org-schema" data={organizationSchema()} />

        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-script" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
