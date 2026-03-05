import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import ArticleGrid from "@/components/home/ArticleGrid";
import NewsletterSignup from "@/components/layout/NewsletterSignup";
import { getFeaturedArticle, getRecentArticles } from "@/lib/articles";

export default function Home() {
  const featured = getFeaturedArticle();
  const recent = getRecentArticles();

  return (
    <>
      <Navbar />

      <main>
        {/* Featured article */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
          <FeaturedArticle {...featured} />
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-border-light" />
        </div>

        {/* Recent articles */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <ArticleGrid articles={recent} title="Recent" />
        </section>
      </main>

      <NewsletterSignup />
      <Footer />
    </>
  );
}
