"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email && email.includes("@")) {
      setSubmitted(true);
    } else {
      setError("Please enter a valid email address");
    }
    setLoading(false);
  };

  return (
    <section className="bg-bg-dark text-white py-24">
      <div className="max-w-content mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Ideas that matter,<br />delivered weekly.
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Join 50,000+ readers getting our best essays on technology, design, and culture.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 text-green-400 rounded-full animate-fade-in">
            <Check className="w-5 h-5" />
            <span>You&apos;re subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-[color,background-color,border-color,text-decoration-color,fill,stroke]"
                required
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-accent hover:bg-accent-hover active:scale-[0.98] text-white font-medium rounded-full transition-[color,background-color,border-color,text-decoration-color,fill,stroke,transform] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            {error && (
              <p className="text-red-400 text-sm mt-3 animate-fade-in">{error}</p>
            )}
            <p className="text-xs text-gray-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
