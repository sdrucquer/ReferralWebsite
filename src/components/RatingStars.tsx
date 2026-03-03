import { cn } from "@/lib/utils/cn";

interface RatingStarsProps {
  rating: number;
  className?: string;
}

export function RatingStars({ rating, className }: RatingStarsProps) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const diff = rating - index;
    if (diff >= 1) return 100;
    if (diff <= 0) return 0;
    return Math.round(diff * 100);
  });

  return (
    <div className={cn("inline-flex items-center gap-1", className)} aria-label={`Rating ${rating} out of 5`}>
      {stars.map((fill, index) => (
        <span key={index} className="relative block h-5 w-5 text-border">
          <Star className="h-5 w-5" />
          <span className="absolute inset-0 overflow-hidden text-accent" style={{ width: `${fill}%` }}>
            <Star className="h-5 w-5 fill-current" />
          </span>
        </span>
      ))}
      <span className="ml-1 text-sm font-semibold text-text">{rating.toFixed(1)}</span>
    </div>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M9.99995 1.66663L12.575 6.88329L18.3333 7.72496L14.1666 11.7833L15.15 17.5166L9.99995 14.8083L4.84995 17.5166L5.83328 11.7833L1.66663 7.72496L7.42495 6.88329L9.99995 1.66663Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
