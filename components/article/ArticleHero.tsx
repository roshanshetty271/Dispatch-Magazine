import Image from "next/image";
import Tag from "@/components/ui/Tag";

interface ArticleHeroProps {
  category: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  date: string;
  readTime: string;
  heroImage: string;
  heroCaption?: string;
}

export default function ArticleHero({
  category,
  title,
  subtitle,
  author,
  date,
  readTime,
  heroImage,
  heroCaption,
}: ArticleHeroProps) {
  return (
    <header className="pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Category & Meta */}
        <div className="mb-8 mt-2">
          <Tag href={`/${category.toLowerCase()}`} variant="default">
            <span className="overline mb-0">{category}</span>
          </Tag>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="headline mb-6">{title}</h1>
          <p className="subhead">{subtitle}</p>
        </div>

        {/* Author & Meta */}
        <div className="mb-12">
          <div className="flex items-center gap-4 pb-8 border-b border-border-light">
            <Image
              src={author.image}
              alt={author.name}
              width={48}
              height={48}
              className="rounded-full object-cover bg-border-light"
              unoptimized
            />
            <div className="flex-1">
              <p className="font-medium text-text-primary">{author.name}</p>
              <p className="text-sm text-text-muted">{author.role}</p>
            </div>
            <div className="text-right text-sm text-text-muted">
              <p>{date}</p>
              <p>{readTime} read</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image - Full width */}
      <div className="max-w-wide mx-auto px-6">
        <figure>
          <div className="aspect-[16/9] relative overflow-hidden bg-bg-secondary rounded-lg">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1080px) 100vw, 1080px"
              unoptimized
            />
          </div>
          {heroCaption && (
            <figcaption className="mt-3 caption text-center">
              {heroCaption}
            </figcaption>
          )}
        </figure>
      </div>
    </header>
  );
}
