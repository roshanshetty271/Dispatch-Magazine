import ArticleCard from "./ArticleCard";
import type { Article } from "@/lib/articles";

interface ArticleGridProps {
  articles: Article[];
  title?: string;
}

export default function ArticleGrid({ articles, title }: ArticleGridProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {title && (
        <h2 className="font-serif text-2xl text-text-primary mb-8">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {articles.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </div>
    </section>
  );
}
