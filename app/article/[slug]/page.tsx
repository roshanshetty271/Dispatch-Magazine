import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import PullQuote from "@/components/article/PullQuote";
import ImageCaption from "@/components/article/ImageCaption";
import AuthorCard from "@/components/article/AuthorCard";
import ShareButtons from "@/components/article/ShareButtons";
import RelatedArticles from "@/components/article/RelatedArticles";
import NewsletterSignup from "@/components/layout/NewsletterSignup";
import TableOfContents from "@/components/article/TableOfContents";
import Tag from "@/components/ui/Tag";
import Divider from "@/components/ui/Divider";
import { getArticle, getRelatedArticles } from "@/lib/articles";

interface ArticlePageProps {
  params: { slug: string };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle(params.slug);
  const relatedArticles = getRelatedArticles(params.slug);

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <TableOfContents />

      <main>
        <ArticleHero
          category={article.category}
          title={article.title}
          subtitle={article.subtitle}
          author={article.author}
          date={article.date}
          readTime={article.readTime}
          heroImage={article.heroImage}
          heroCaption={article.heroCaption}
        />

        <ArticleBody>
          {/* First paragraph with drop cap */}
          <p className="drop-cap">
            The tech industry has always been defined by its relentless pursuit of the next big thing. But what happens when the next big thing is less about innovation and more about integration? As we enter 2026, the most successful companies aren&apos;t the ones building entirely new technologies—they&apos;re the ones finding elegant ways to combine existing ones.
          </p>

          <p>
            This shift represents a fundamental change in how we think about technological progress. For decades, we celebrated disruption above all else. Now, we&apos;re beginning to appreciate the equally difficult work of synthesis.
          </p>

          <h2 id="the-integration-imperative">The Integration Imperative</h2>

          <p>
            Consider the smartphone. When Apple introduced the iPhone in 2007, it wasn&apos;t selling a revolutionary phone, camera, or music player. It was selling the seamless integration of all three—and a dozen other capabilities—into a single, cohesive experience.
          </p>

          <ImageCaption
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop"
            alt="Modern technology workspace"
            caption="The modern workspace is defined not by individual tools, but by how well they work together."
            credit="Unsplash"
            wide
          />

          <p>
            The same principle applies today, at a much larger scale. The companies winning in 2026 are those that understand a simple truth: users don&apos;t want more tools. They want fewer tools that do more things, better.
          </p>

          <PullQuote
            quote="Users don't want more tools. They want fewer tools that do more things, better."
            attribution="Sarah Chen, VP of Product at Figma"
          />

          <h2 id="what-this-means-for-builders">What This Means for Builders</h2>

          <p>
            For entrepreneurs and product teams, the integration imperative demands a different way of thinking. Instead of asking &ldquo;What can we build that doesn&apos;t exist?&rdquo;, the better question might be &ldquo;What existing capabilities can we combine in ways no one has imagined?&rdquo;
          </p>

          <p>
            This isn&apos;t a lesser ambition—it&apos;s arguably a greater one. Building a new widget is straightforward compared to orchestrating a symphony of existing technologies into something that feels effortless.
          </p>

          <h3 id="the-art-of-invisible-complexity">The Art of Invisible Complexity</h3>

          <p>
            The best integrations are invisible. When you use Notion to write a document, embed a database, and share it with collaborators in real-time, you&apos;re not thinking about the dozens of separate systems working together. You&apos;re just working.
          </p>

          <p>
            This invisibility is the hallmark of great integration work. It requires not just technical skill, but a deep understanding of user needs and the discipline to hide complexity rather than expose it.
          </p>

          <ImageCaption
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
            alt="Data visualization on screen"
            caption="Modern software increasingly emphasizes the connections between features over the features themselves."
            credit="Unsplash"
          />

          <h2 id="the-road-ahead">The Road Ahead</h2>

          <p>
            As we look to the future, the most exciting opportunities lie not in the labs of AI researchers or the workshops of hardware engineers, but in the space between existing technologies. The winners of the next decade will be those who master the art of elegant integration.
          </p>

          <p>
            The question isn&apos;t whether you can build something new. It&apos;s whether you can make existing things work together in ways that feel like magic.
          </p>

          <PullQuote
            quote="The winners of the next decade will be those who master the art of elegant integration."
          />

          <Divider />

          <h2 id="practical-considerations">Practical Considerations</h2>

          <p>
            For teams looking to embrace this approach, here are a few principles to keep in mind:
          </p>

          <p>
            <strong>Start with workflows, not features.</strong> Instead of asking what your product should do, ask what your users are trying to accomplish. Then find the shortest path from intention to completion, even if it means connecting to external services.
          </p>

          <p>
            <strong>Embrace APIs as first-class products.</strong> Your API isn&apos;t just for developers—it&apos;s the foundation for being part of a larger ecosystem. Design it with the same care you&apos;d give to your user interface.
          </p>

          <p>
            <strong>Measure time-to-value, not feature counts.</strong> The true test of good integration is how quickly users can accomplish their goals. Strip away everything that doesn&apos;t contribute to that metric.
          </p>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            We&apos;re entering an era where the most valuable skill in technology isn&apos;t building new things—it&apos;s connecting existing things in ways that create new value. This requires a different mindset, one that values synthesis over invention and user outcomes over technical novelty.
          </p>

          <p>
            The integration imperative isn&apos;t just a trend. It&apos;s the next chapter in how we build technology. And for those who embrace it, the opportunities are boundless.
          </p>
        </ArticleBody>

        {/* Share buttons */}
        <div className="max-w-content mx-auto px-6 py-8 border-t border-border-light">
          <ShareButtons
            url={`https://dispatch.com/article/${params.slug}`}
            title={article.title}
          />
        </div>

        <AuthorCard
          name={article.author.name}
          image={article.author.image}
          bio={article.author.bio}
          twitter={article.author.twitter}
          linkedin={article.author.linkedin}
        />

        <RelatedArticles articles={relatedArticles} />
      </main>

      <NewsletterSignup />
      <Footer />
    </>
  );
}

// Generate static params for all articles
export function generateStaticParams() {
  const slugs = [
    "building-dispatch-magazine",
    "integration-imperative",
    "design-systems-scale",
    "attention-economy",
    "ai-creative-collaboration",
    "sustainable-tech",
    "remote-work-revolution",
    "typography-digital-age",
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}
