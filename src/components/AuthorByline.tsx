import { format } from "date-fns";

interface AuthorBylineProps {
  author: string;
  authorBio?: string;
  lastUpdated: string;
}

export function AuthorByline({ author, authorBio, lastUpdated }: AuthorBylineProps) {
  const dateLabel = format(new Date(lastUpdated), "MMMM d, yyyy");

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accentSoft font-semibold text-accent">
        {author.slice(0, 1).toUpperCase()}
      </div>
      <div>
        <p className="text-sm font-semibold text-text">{author}</p>
        <p className="text-xs text-muted">Last updated {dateLabel}</p>
        {authorBio ? <p className="mt-1 text-xs text-muted">{authorBio}</p> : null}
      </div>
    </div>
  );
}
