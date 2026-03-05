import Image from "next/image";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  readTime: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="max-w-wide mx-auto px-6 py-16 border-t border-border-light">
      <h2 className="font-serif text-2xl text-text-primary mb-8">Related Reading</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/article/${article.slug}`}
            className="group"
          >
            <article>
              <div className="aspect-[3/2] relative overflow-hidden bg-bg-secondary rounded-lg mb-4">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
              <span className="overline">{article.category}</span>
              <h3 className="font-serif text-lg text-text-primary mt-2 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-text-muted mt-2">{article.readTime} read</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
