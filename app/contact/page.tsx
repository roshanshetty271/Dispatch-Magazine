import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleBody from "@/components/article/ArticleBody";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-40 pb-16">
                <header className="max-w-content mx-auto px-6 mb-16 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-6">
                        Contact
                    </h1>
                    <p className="text-xl text-text-secondary">
                        Get in touch with the Dispatch team.
                    </p>
                </header>

                <ArticleBody>
                    <p>
                        We love hearing from our readers. Whether you have a piece of feedback,
                        a story pitch, or just want to say hello, there are several ways to
                        reach us.
                    </p>
                    <h2>Editorial & Pitches</h2>
                    <p>
                        We are always looking for fresh perspectives on technology, design, and
                        culture. If you have an essay or feature you'd like to pitch, please
                        email a brief summary and portfolio to <a href="mailto:pitches@dispatch.magazine">pitches@dispatch.magazine</a>.
                    </p>
                    <h2>General Inquiries</h2>
                    <p>
                        For questions about your subscription, technical support, or general
                        feedback, please reach out to <a href="mailto:hello@dispatch.magazine">hello@dispatch.magazine</a>. We
                        try to respond to all inquiries within 48 hours.
                    </p>
                    <h2>Press & Partnerships</h2>
                    <p>
                        For media inquiries, syndication requests, or potential partnerships,
                        contact <a href="mailto:press@dispatch.magazine">press@dispatch.magazine</a>.
                    </p>
                </ArticleBody>
            </main>
            <Footer />
        </>
    );
}
