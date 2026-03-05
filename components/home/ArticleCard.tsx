import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

interface ArticleCardProps extends Article { }

export default function ArticleCard({
  slug,
  category,
  title,
  heroImage,
  author,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <Link href={`/article/${slug}`} className="group block">
      <article>
        <div className="aspect-[4/3] relative overflow-hidden bg-bg-secondary mb-4 rounded-lg">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        </div>
        <span className="overline">{category}</span>
        <h3 className="font-serif text-xl text-text-primary mt-2 mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-text-muted">
          {author.name} · {date} · {readTime} read
        </p>
      </article>
    </Link>
  );
}
