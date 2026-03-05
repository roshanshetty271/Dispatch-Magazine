import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleGrid from "@/components/home/ArticleGrid";
import NewsletterSignup from "@/components/layout/NewsletterSignup";
import { getArticlesByCategory } from "@/lib/articles";

const VALID_CATEGORIES = ["technology", "design", "culture", "essays"];

export default function CategoryPage({ params }: { params: { category: string } }) {
    const categoryStr = params.category.toLowerCase();

    if (!VALID_CATEGORIES.includes(categoryStr)) {
        notFound();
    }

    // Use the mocked function added by the layout architecture earlier
    const articles = getArticlesByCategory(categoryStr);
    const formattedTitle = categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1);

    return (
        <>
            <Navbar />

            <main className="min-h-screen pt-40 pb-16">
                <div className="max-w-6xl mx-auto px-6">
                    <header className="mb-16">
                        <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-6">
                            {formattedTitle}
                        </h1>
                        <p className="text-xl text-text-secondary max-w-2xl">
                            Explore our latest essays, stories, and deep dives exploring {formattedTitle.toLowerCase()}.
                        </p>
                    </header>

                    <hr className="border-border-light mb-16" />

                    {articles.length > 0 ? (
                        <ArticleGrid articles={articles} />
                    ) : (
                        <div className="py-24 text-center">
                            <p className="text-text-muted text-lg">No articles found in this category yet.</p>
                        </div>
                    )}
                </div>
            </main>

            <NewsletterSignup />
            <Footer />
        </>
    );
}
