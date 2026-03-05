import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

interface FeaturedArticleProps extends Article { }

export default function FeaturedArticle({
  slug,
  category,
  title,
  subtitle,
  heroImage,
  author,
  date,
  readTime,
}: FeaturedArticleProps) {
  return (
    <Link href={`/article/${slug}`} className="group block">
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className="aspect-[4/3] lg:aspect-[3/2] relative overflow-hidden bg-bg-secondary rounded-lg">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="lg:py-8">
          <span className="overline">{category}</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-text-primary mt-3 mb-4 group-hover:text-accent transition-colors leading-tight">
            {title}
          </h2>
          <p className="text-text-secondary mb-6 line-clamp-3 leading-relaxed">{subtitle}</p>

          <div className="flex items-center gap-3">
            <Image
              src={author.image}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full object-cover bg-border-light"
              unoptimized
            />
            <div>
              <p className="text-sm font-medium text-text-primary">{author.name}</p>
              <p className="text-sm text-text-muted">
                {date} · {readTime} read
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
