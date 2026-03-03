interface StepItem {
  title: string;
  description: string;
  icon: string;
}

interface StepByStepProps {
  title: string;
  steps: StepItem[];
}

export function StepByStep({ title, steps }: StepByStepProps) {
  return (
    <section className="rounded-3xl border border-border bg-surface p-6 md:p-8">
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-border bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Step {index + 1}</p>
            <h3 className="mt-2 text-xl font-semibold text-text">
              <span className="mr-2" aria-hidden>
                {step.icon}
              </span>
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
