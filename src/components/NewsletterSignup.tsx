export function NewsletterSignup() {
  return (
    <section className="rounded-3xl border border-border bg-gradient-to-r from-accentSoft/30 to-white p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-text">Get Weekly Software Picks</h2>
      <p className="mt-2 text-sm text-muted">
        Join small business owners receiving practical software recommendations every week.
      </p>
      <form className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="you@business.com"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Join Newsletter
        </button>
      </form>
      <p className="mt-2 text-xs text-muted">Mailchimp/ConvertKit integration can be plugged in later.</p>
    </section>
  );
}
