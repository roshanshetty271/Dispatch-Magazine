"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkPage = pathname === '/subscribe';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Technology", "Design", "Culture", "Essays"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled && !isDarkPage
        ? "bg-white/95 backdrop-blur-sm border-b border-border-light"
        : isScrolled && isDarkPage
          ? "bg-bg-dark/95 backdrop-blur-sm border-b border-border-dark"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif text-2xl transition-colors ${isDarkPage ? "text-white hover:text-accent" : "text-text-primary hover:text-accent"
              }`}
          >
            Dispatch
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all ${isDarkPage
                  ? "text-white/70 hover:text-white hover:underline decoration-accent underline-offset-8"
                  : "text-text-secondary hover:text-text-primary hover:underline decoration-accent underline-offset-8"
                  }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/search"
              className={`p-2 transition-[background-color,color] rounded-lg ${isDarkPage
                ? "text-white/70 hover:text-white hover:bg-white/10"
                : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/subscribe"
              className={`hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-full transition-colors ${isDarkPage
                ? "bg-white text-black hover:bg-white/90"
                : "bg-text-primary text-white hover:bg-black"
                }`}
            >
              Subscribe
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors rounded-lg ${isDarkPage
                ? "text-white/70 hover:text-white hover:bg-white/10"
                : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-border-light animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-lg text-text-primary hover:text-accent hover:underline decoration-accent underline-offset-8 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className="block text-lg text-accent hover:underline decoration-accent underline-offset-8 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
