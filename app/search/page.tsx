"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleGrid from "@/components/home/ArticleGrid";
import { searchArticles } from "@/lib/articles";

function SearchContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialQuery = searchParams.get("q") || "";

    const [query, setQuery] = useState(initialQuery);

    // Compute results immediately (live search)
    const trimmedQuery = query.trim();
    const results = trimmedQuery ? searchArticles(trimmedQuery) : [];

    // Optional: Sync URL (debounced) so the user can share the link
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (trimmedQuery && trimmedQuery !== initialQuery) {
                router.replace(`/search?q=${encodeURIComponent(trimmedQuery)}`, { scroll: false });
            } else if (!trimmedQuery && initialQuery) {
                router.replace("/search", { scroll: false });
            }
        }, 400);
        return () => clearTimeout(timeoutId);
    }, [trimmedQuery, initialQuery, router]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (trimmedQuery) {
            router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
        } else {
            router.push("/search");
        }
    };

    return (
        <main className="min-h-screen pt-40 pb-16">
            <div className="max-w-6xl mx-auto px-6">
                <header className="mb-16">
                    <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-8">
                        Search
                    </h1>

                    <form onSubmit={handleSearch} className="relative max-w-2xl">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search articles, topics, or authors..."
                            className="w-full pl-14 pr-6 py-4 text-xl bg-bg-secondary border border-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all text-text-primary placeholder:text-text-muted"
                            autoFocus
                        />
                        <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-text-muted" />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-text-primary text-white text-sm font-medium rounded-xl hover:bg-black transition-colors"
                        >
                            Search
                        </button>
                    </form>
                </header>

                {query && (
                    <div className="mb-12">
                        <p className="text-text-secondary text-lg">
                            Showing results for <span className="text-text-primary font-medium">&quot;{query}&quot;</span>
                        </p>
                    </div>
                )}

                {results.length > 0 ? (
                    <ArticleGrid articles={results} />
                ) : trimmedQuery ? (
                    <div className="py-24 text-center border-t border-border-light">
                        <p className="text-text-muted text-lg mb-4">No articles found matching your criteria.</p>
                        <p className="text-text-secondary">Try searching for &quot;Design&quot;, &quot;Technology&quot;, or an author&apos;s name.</p>
                    </div>
                ) : null}
            </div>
        </main>
    );
}

export default function SearchPage() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<main className="min-h-screen pt-40 pb-16"><div className="max-w-6xl mx-auto px-6"><p>Loading search...</p></div></main>}>
                <SearchContent />
            </Suspense>
            <Footer />
        </>
    );
}
