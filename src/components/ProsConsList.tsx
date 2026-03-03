interface ProsConsListProps {
  pros: string[];
  cons: string[];
}

export function ProsConsList({ pros, cons }: ProsConsListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <section className="rounded-2xl border border-success/20 bg-success/5 p-5">
        <h3 className="text-lg font-semibold text-text">Pros</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {pros.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-success text-[10px] text-white">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-danger/20 bg-danger/5 p-5">
        <h3 className="text-lg font-semibold text-text">Cons</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {cons.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] text-white">
                ✕
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
