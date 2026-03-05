import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleBody from "@/components/article/ArticleBody";

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-40 pb-16">
                <header className="max-w-content mx-auto px-6 mb-16 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-text-secondary">
                        Last updated: January 1, 2026
                    </p>
                </header>

                <ArticleBody>
                    <p>
                        At Dispatch, we believe that reading should be a private act. We are
                        committed to minimizing the data we collect about you and being entirely
                        transparent about what happens to your information.
                    </p>
                    <h2>Data Collection</h2>
                    <p>
                        Unlike many digital publications, we do not employ third-party advertising
                        trackers, cross-site cookies, or fingerprinting technologies. The only
                        data we collect is what you voluntarily provide to us (such as your email
                        address when subscribing to our newsletter) and basic, anonymized
                        analytics to help us understand which articles are most popular.
                    </p>
                    <h2>Newsletter Subscriptions</h2>
                    <p>
                        When you subscribe to our newsletter, your email address is used
                        exclusively to send you the content you requested. We will never sell,
                        rent, or share your contact information with external marketing agencies.
                    </p>
                    <h2>Your Rights</h2>
                    <p>
                        You have the right to access, correct, or delete your personal data at
                        any time. If you wish to unsubscribe from our newsletter, you can do so
                        via the link provided at the bottom of every email, or by contacting us
                        directly at privacy@dispatch.magazine.
                    </p>
                </ArticleBody>
            </main>
            <Footer />
        </>
    );
}
