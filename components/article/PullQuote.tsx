interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

export default function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <figure className="my-16 -mx-6 md:-mx-12 lg:-mx-24">
      <div className="max-w-3xl mx-auto px-6 py-12 border-y border-border-light">
        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-text-primary leading-snug text-center">
          <span className="text-accent">&ldquo;</span>
          {quote}
          <span className="text-accent">&rdquo;</span>
        </blockquote>
        {attribution && (
          <figcaption className="mt-6 text-center">
            <span className="text-sm text-text-muted">&mdash; {attribution}</span>
          </figcaption>
        )}
      </div>
    </figure>
  );
}
