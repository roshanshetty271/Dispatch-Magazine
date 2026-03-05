interface ArticleBodyProps {
  children: React.ReactNode;
}

export default function ArticleBody({ children }: ArticleBodyProps) {
  return (
    <article className="max-w-content mx-auto px-6">
      <div className="prose prose-lg prose-neutral max-w-none">
        {children}
      </div>
    </article>
  );
}
