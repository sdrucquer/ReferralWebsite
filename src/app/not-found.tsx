import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-border bg-white p-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">The page you requested does not exist or may have moved.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
      >
        Back to homepage
      </Link>
    </section>
  );
}
