import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleBody from "@/components/article/ArticleBody";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-40 pb-16">
                <header className="max-w-content mx-auto px-6 mb-16 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-6">
                        About Us
                    </h1>
                    <p className="text-xl text-text-secondary">
                        Dedicated to the ideas shaping our world.
                    </p>
                </header>

                <ArticleBody>
                    <p className="drop-cap">
                        Dispatch was founded in 2024 with a simple mission: to slow down the
                        relentless pace of the news cycle and provide a space for deep,
                        thoughtful exploration of the forces shaping our future.
                    </p>
                    <p>
                        In an era of infinite scroll and algorithmic feeds, we believe there is
                        still immense value in carefully curated, beautifully designed long-form
                        writing. We cover the intersections of technology, design, and culture,
                        seeking out stories that matter and ideas that endure.
                    </p>
                    <h2>Our Philosophy</h2>
                    <p>
                        We don't chase breaking news or daily outrage. Instead, we publish
                        weekly essays, interviews, and features that provide context to an
                        increasingly complex world. Our conviction is that the best way to
                        understand the future isn't to look at the latest gadget, but to
                        examine how humans interact with the systems we build.
                    </p>
                    <p>
                        Thank you for reading, and for joining us on this journey.
                    </p>
                </ArticleBody>
            </main>
            <Footer />
        </>
    );
}
