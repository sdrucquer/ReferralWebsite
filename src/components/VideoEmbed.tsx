interface VideoEmbedProps {
  url?: string;
  title: string;
  thumbnail?: string;
}

export function VideoEmbed({ url, title, thumbnail }: VideoEmbedProps) {
  if (url) {
    return (
      <div className="overflow-hidden rounded-2xl border border-border">
        <iframe
          src={url}
          title={title}
          loading="lazy"
          className="aspect-video w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-border bg-slate-100">
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={thumbnail} alt={title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      ) : null}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-2xl text-accent shadow-card">
        ▶
      </div>
      <p className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-text">
        {title}
      </p>
    </div>
  );
}
