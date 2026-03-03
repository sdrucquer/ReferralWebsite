const steps = [
  {
    title: "Sign Up Through Our Link",
    description: "Use our referral links to access the same software pricing and bonuses."
  },
  {
    title: "Start Using the Tool",
    description: "Set up your account and run your first real workflow, like payroll or invoicing."
  },
  {
    title: "Claim Your Bonus",
    description: "Most tools issue your referral discount or gift card after your account is active."
  }
];

export function HowItWorks() {
  return (
    <section className="rounded-3xl border border-border bg-white p-6 md:p-8">
      <h2 className="text-3xl font-semibold tracking-tight text-text">How Referral Bonuses Work</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-border bg-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{index + 1}</p>
            <h3 className="mt-2 text-lg font-semibold text-text">{step.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
