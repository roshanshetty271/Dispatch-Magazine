import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleBody from "@/components/article/ArticleBody";
import Divider from "@/components/ui/Divider";

export default function CareersPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-40 pb-16">
                <header className="max-w-content mx-auto px-6 mb-16 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-6">
                        Careers
                    </h1>
                    <p className="text-xl text-text-secondary">
                        Join us in building a more thoughtful corner of the internet.
                    </p>
                </header>

                <ArticleBody>
                    <p className="drop-cap">
                        At Dispatch, we are building a team of curious, dedicated individuals
                        who care deeply about writing, design, and the intersection of technology
                        and culture. We offer a flexible, remote-first environment where deep
                        work is prioritized over endless meetings.
                    </p>

                    <Divider />

                    <h2>Open Positions</h2>

                    <h3>Senior Editor, Technology</h3>
                    <p>
                        <strong>Location:</strong> Remote (US/Canada)<br />
                        We are looking for an experienced editor to lead our technology coverage,
                        focusing on essays that examine the societal impact of emerging tech. You
                        will commission pieces, work closely with freelance writers, and help
                        shape the editorial direction of the publication.
                    </p>

                    <h3>Frontend Engineer</h3>
                    <p>
                        <strong>Location:</strong> Remote (Global)<br />
                        Help us build beautiful, performant reading experiences. You&apos;ll work
                        with Next.js, React, and Tailwind CSS to evolve our design system and
                        create interactive narrative features.
                    </p>

                    <p className="mt-12 text-sm text-text-muted">
                        To apply for an open role, please send your resume and a brief
                        introduction to <a href="mailto:careers@dispatch.magazine">careers@dispatch.magazine</a>.
                    </p>
                </ArticleBody>
            </main>
            <Footer />
        </>
    );
}
