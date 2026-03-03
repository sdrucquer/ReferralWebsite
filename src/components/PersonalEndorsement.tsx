interface PersonalEndorsementProps {
  quote: string;
  name: string;
  title: string;
}

export function PersonalEndorsement({ quote, name, title }: PersonalEndorsementProps) {
  return (
    <section className="rounded-3xl border border-accent/20 bg-gradient-to-br from-accentSoft/40 via-white to-white p-6 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="h-16 w-16 rounded-full bg-accentSoft" aria-hidden />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Personal Endorsement</p>
          <h3 className="text-xl font-semibold text-text">From {name}</h3>
          <p className="text-sm text-muted">{title}</p>
        </div>
      </div>
      <blockquote className="mt-5 text-lg leading-8 text-text">“{quote}”</blockquote>
    </section>
  );
}
