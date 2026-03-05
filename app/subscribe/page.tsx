import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterSignup from "@/components/layout/NewsletterSignup";

export default function SubscribePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center bg-bg-dark pt-32">
                <div className="w-full">
                    <NewsletterSignup />
                </div>
            </main>
            <Footer />
        </>
    );
}
