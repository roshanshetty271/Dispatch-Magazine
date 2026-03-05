# Project 4: Long-form Blog / Magazine
## Style: Editorial Typography-First | Time: 1-2 days | Cost: $0

---

## 🎯 PROJECT OVERVIEW

**What we're building:** A premium tech magazine/blog called "Dispatch" with beautiful typography and reading experience

**Design style:** Editorial — sophisticated, magazine-quality, content is king, typography as art

**Target audience:** Media companies, publishing platforms, content startups, luxury brands — they'll see this and think "this person understands premium content experiences"

**Live references to study:**
- https://medium.com
- https://substack.com
- https://www.apple.com/newsroom
- https://www.pentagram.com/work
- https://stripe.com/blog
- https://www.nytimes.com (feature articles)

**Key differentiator:** This shows you understand READING experiences — not just UI, but how words feel on screen.

---

## 📁 FILE STRUCTURE

```
dispatch-magazine/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── article/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── fonts/
│       └── (local fonts)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── NewsletterSignup.tsx
│   ├── article/
│   │   ├── ArticleHero.tsx
│   │   ├── ArticleBody.tsx
│   │   ├── AuthorCard.tsx
│   │   ├── PullQuote.tsx
│   │   ├── ImageCaption.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── ShareButtons.tsx
│   │   └── RelatedArticles.tsx
│   ├── home/
│   │   ├── FeaturedArticle.tsx
│   │   ├── ArticleGrid.tsx
│   │   └── ArticleCard.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Tag.tsx
│       ├── Divider.tsx
│       └── ReadingProgress.tsx
├── lib/
│   ├── articles.ts
│   └── utils.ts
├── content/
│   └── articles/
│       └── sample-article.mdx
├── public/
│   └── images/
│       ├── authors/
│       └── articles/
├── tailwind.config.ts
└── package.json
```

---

## 🎨 DESIGN SYSTEM

### Colors (Minimal, High Contrast)

```css
/* globals.css */
:root {
  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #FAFAFA;
  --bg-dark: #0A0A0A;
  
  /* Text - High contrast for reading */
  --text-primary: #1A1A1A;      /* Headlines */
  --text-body: #333333;          /* Body - slightly lighter for eye comfort */
  --text-secondary: #666666;     /* Meta info */
  --text-muted: #999999;         /* Captions */
  --text-inverse: #FFFFFF;       /* On dark backgrounds */
  
  /* Accent - Just ONE color */
  --accent: #E63946;             /* Editorial red */
  --accent-hover: #C1121F;
  
  /* Borders */
  --border-light: #EEEEEE;
  --border-dark: #1A1A1A;
  
  /* Reading-specific */
  --content-width: 680px;        /* Optimal reading width */
  --wide-width: 1080px;          /* For images/quotes */
}
```

### Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#FFFFFF",
          secondary: "#FAFAFA",
          dark: "#0A0A0A",
        },
        text: {
          primary: "#1A1A1A",
          body: "#333333",
          secondary: "#666666",
          muted: "#999999",
        },
        accent: {
          DEFAULT: "#E63946",
          hover: "#C1121F",
        },
        border: {
          light: "#EEEEEE",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Article typography scale
        "display": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "headline": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "subhead": ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.8" }],
        "body": ["1.125rem", { lineHeight: "1.8" }],
        "caption": ["0.875rem", { lineHeight: "1.5" }],
        "overline": ["0.75rem", { lineHeight: "1", letterSpacing: "0.1em" }],
      },
      maxWidth: {
        "content": "680px",
        "wide": "1080px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "680px",
            color: "#333333",
            lineHeight: "1.8",
            fontSize: "1.125rem",
            p: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            h2: {
              fontFamily: "Instrument Serif, Georgia, serif",
              fontWeight: "400",
              fontSize: "2rem",
              marginTop: "2.5em",
              marginBottom: "0.75em",
              letterSpacing: "-0.02em",
            },
            h3: {
              fontFamily: "Instrument Serif, Georgia, serif",
              fontWeight: "400",
              fontSize: "1.5rem",
              marginTop: "2em",
              marginBottom: "0.5em",
            },
            a: {
              color: "#E63946",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              "&:hover": {
                color: "#C1121F",
              },
            },
            blockquote: {
              fontFamily: "Instrument Serif, Georgia, serif",
              fontStyle: "normal",
              fontSize: "1.5rem",
              fontWeight: "400",
              borderLeftWidth: "0",
              paddingLeft: "0",
              quotes: "none",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
```

### Typography System

```css
/* globals.css */

/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');

/* Base styles */
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-body);
  background: var(--bg-primary);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Serif for headlines */
h1, h2, h3, .font-serif {
  font-family: 'Instrument Serif', Georgia, serif;
}

/* Display headline - Hero only */
.display {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

/* Article headline */
.headline {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

/* Subhead / Dek */
.subhead {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
}

/* Body text */
.body-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-body);
}

/* Overline / Category label */
.overline {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

/* Caption */
.caption {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-muted);
}

/* Drop cap */
.drop-cap::first-letter {
  font-family: 'Instrument Serif', Georgia, serif;
  float: left;
  font-size: 4.5rem;
  line-height: 0.8;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  color: var(--text-primary);
}
```

---

## 🏗️ COMPONENT IMPLEMENTATIONS

### 1. Layout (app/layout.tsx)

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Using Google Fonts for Instrument Serif
// Or load locally for better performance
const instrumentSerif = localFont({
  src: [
    {
      path: "./fonts/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Dispatch | Ideas that matter",
  description: "Long-form journalism and essays on technology, design, and culture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans bg-white text-text-body antialiased">
        {children}
      </body>
    </html>
  );
}
```

### 2. Navbar (components/layout/Navbar.tsx)

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl text-text-primary">
            Dispatch
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Technology", "Design", "Culture", "Essays"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-text-secondary hover:text-text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/subscribe"
              className="hidden sm:inline-flex px-4 py-2 bg-text-primary text-white text-sm font-medium rounded-full hover:bg-black transition-colors"
            >
              Subscribe
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-text-secondary"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-light">
          <div className="px-6 py-4 space-y-4">
            {["Technology", "Design", "Culture", "Essays"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-lg text-text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
```

### 3. Reading Progress Bar (components/ui/ReadingProgress.tsx)

```tsx
"use client";

import { useState, useEffect } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[60]">
      <div
        className="h-full bg-accent transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
```

### 4. Article Hero (components/article/ArticleHero.tsx)

```tsx
import Image from "next/image";

interface ArticleHeroProps {
  category: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  date: string;
  readTime: string;
  heroImage: string;
  heroCaption?: string;
}

export default function ArticleHero({
  category,
  title,
  subtitle,
  author,
  date,
  readTime,
  heroImage,
  heroCaption,
}: ArticleHeroProps) {
  return (
    <header className="pt-24 pb-12">
      {/* Category & Meta */}
      <div className="max-w-content mx-auto px-6 mb-8">
        <span className="overline">{category}</span>
      </div>

      {/* Title */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <h1 className="headline mb-6">{title}</h1>
        <p className="subhead">{subtitle}</p>
      </div>

      {/* Author & Meta */}
      <div className="max-w-content mx-auto px-6 mb-12">
        <div className="flex items-center gap-4 pb-8 border-b border-border-light">
          <Image
            src={author.image}
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex-1">
            <p className="font-medium text-text-primary">{author.name}</p>
            <p className="text-sm text-text-muted">{author.role}</p>
          </div>
          <div className="text-right text-sm text-text-muted">
            <p>{date}</p>
            <p>{readTime} read</p>
          </div>
        </div>
      </div>

      {/* Hero Image - Full width */}
      <div className="max-w-wide mx-auto px-6">
        <figure>
          <div className="aspect-[16/9] relative overflow-hidden bg-bg-secondary">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {heroCaption && (
            <figcaption className="mt-3 caption text-center">
              {heroCaption}
            </figcaption>
          )}
        </figure>
      </div>
    </header>
  );
}
```

### 5. Article Body (components/article/ArticleBody.tsx)

```tsx
interface ArticleBodyProps {
  children: React.ReactNode;
}

export default function ArticleBody({ children }: ArticleBodyProps) {
  return (
    <article className="max-w-content mx-auto px-6">
      <div className="prose prose-lg prose-neutral">
        {children}
      </div>
    </article>
  );
}
```

### 6. Pull Quote (components/article/PullQuote.tsx)

```tsx
interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

export default function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <figure className="my-16 -mx-6 md:-mx-12 lg:-mx-24">
      <div className="max-w-3xl mx-auto px-6 py-12 border-y border-border-light">
        <blockquote className="font-serif text-3xl md:text-4xl text-text-primary leading-snug text-center">
          <span className="text-accent">"</span>
          {quote}
          <span className="text-accent">"</span>
        </blockquote>
        {attribution && (
          <figcaption className="mt-6 text-center">
            <span className="text-sm text-text-muted">— {attribution}</span>
          </figcaption>
        )}
      </div>
    </figure>
  );
}
```

### 7. Image with Caption (components/article/ImageCaption.tsx)

```tsx
import Image from "next/image";

interface ImageCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  wide?: boolean;
}

export default function ImageCaption({
  src,
  alt,
  caption,
  credit,
  wide = false,
}: ImageCaptionProps) {
  return (
    <figure
      className={`my-12 ${
        wide ? "-mx-6 md:-mx-12 lg:-mx-24" : ""
      }`}
    >
      <div className={`relative aspect-[3/2] bg-bg-secondary overflow-hidden ${wide ? "max-w-wide mx-auto" : ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      {(caption || credit) && (
        <figcaption className={`mt-3 ${wide ? "max-w-content mx-auto px-6" : ""}`}>
          {caption && <span className="caption">{caption}</span>}
          {credit && (
            <span className="caption text-text-muted">
              {caption ? " · " : ""}Photo: {credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
```

### 8. Author Card (components/article/AuthorCard.tsx)

```tsx
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";

interface AuthorCardProps {
  name: string;
  image: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
}

export default function AuthorCard({
  name,
  image,
  bio,
  twitter,
  linkedin,
}: AuthorCardProps) {
  return (
    <div className="max-w-content mx-auto px-6 my-16">
      <div className="border-t border-b border-border-light py-8">
        <div className="flex items-start gap-6">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex-1">
            <p className="overline mb-2">Written by</p>
            <h3 className="font-serif text-xl text-text-primary mb-2">{name}</h3>
            <p className="text-text-secondary text-sm mb-4">{bio}</p>
            <div className="flex gap-3">
              {twitter && (
                <a
                  href={`https://twitter.com/${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {linkedin && (
                <a
                  href={`https://linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 9. Share Buttons (components/article/ShareButtons.tsx)

```tsx
"use client";

import { Twitter, Facebook, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-text-muted">Share</span>
      <div className="flex items-center gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-muted hover:text-text-primary hover:bg-bg-secondary rounded-full transition-all"
            aria-label={`Share on ${link.name}`}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
        <button
          onClick={copyLink}
          className="p-2 text-text-muted hover:text-text-primary hover:bg-bg-secondary rounded-full transition-all"
          aria-label="Copy link"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Link2 className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
```

### 10. Newsletter Signup (components/layout/NewsletterSignup.tsx)

```tsx
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission
    setSubmitted(true);
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 text-green-400 rounded-full">
            <span>✓</span>
            <span>You're subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-full transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
```

### 11. Related Articles (components/article/RelatedArticles.tsx)

```tsx
import Image from "next/image";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  category: string;
  image: string;
  readTime: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="max-w-wide mx-auto px-6 py-16 border-t border-border-light">
      <h2 className="font-serif text-2xl text-text-primary mb-8">Related Reading</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/article/${article.slug}`}
            className="group"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-bg-secondary mb-4">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="overline">{article.category}</span>
            <h3 className="font-serif text-lg text-text-primary mt-2 group-hover:text-accent transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-text-muted mt-2">{article.readTime} read</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

### 12. Featured Article (Home) (components/home/FeaturedArticle.tsx)

```tsx
import Image from "next/image";
import Link from "next/link";

interface FeaturedArticleProps {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  readTime: string;
}

export default function FeaturedArticle({
  slug,
  category,
  title,
  subtitle,
  image,
  author,
  date,
  readTime,
}: FeaturedArticleProps) {
  return (
    <Link href={`/article/${slug}`} className="group block">
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className="aspect-[4/3] lg:aspect-[3/2] relative overflow-hidden bg-bg-secondary">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Content */}
        <div className="lg:py-8">
          <span className="overline">{category}</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-text-primary mt-3 mb-4 group-hover:text-accent transition-colors">
            {title}
          </h2>
          <p className="text-text-secondary mb-6 line-clamp-3">{subtitle}</p>
          
          <div className="flex items-center gap-3">
            <Image
              src={author.image}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-text-primary">{author.name}</p>
              <p className="text-sm text-text-muted">
                {date} · {readTime} read
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
```

### 13. Article Card (components/home/ArticleCard.tsx)

```tsx
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  category: string;
  title: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export default function ArticleCard({
  slug,
  category,
  title,
  image,
  author,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <Link href={`/article/${slug}`} className="group block">
      <article>
        <div className="aspect-[4/3] relative overflow-hidden bg-bg-secondary mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="overline">{category}</span>
        <h3 className="font-serif text-xl text-text-primary mt-2 mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-text-muted">
          {author} · {date} · {readTime} read
        </p>
      </article>
    </Link>
  );
}
```

### 14. Footer (components/layout/Footer.tsx)

```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-light">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-2xl text-text-primary">
              Dispatch
            </Link>
            <p className="text-text-secondary mt-4 max-w-sm">
              Long-form journalism and essays on technology, design, and the ideas shaping our world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Sections</h4>
            <ul className="space-y-3">
              {["Technology", "Design", "Culture", "Essays"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Contact", "Careers", "Privacy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © 2026 Dispatch. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-muted">
            <Link href="/terms" className="hover:text-text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/rss" className="hover:text-text-primary transition-colors">
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### 15. Article Page (app/article/[slug]/page.tsx)

```tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import PullQuote from "@/components/article/PullQuote";
import ImageCaption from "@/components/article/ImageCaption";
import AuthorCard from "@/components/article/AuthorCard";
import ShareButtons from "@/components/article/ShareButtons";
import RelatedArticles from "@/components/article/RelatedArticles";
import NewsletterSignup from "@/components/layout/NewsletterSignup";
import { getArticle, getRelatedArticles } from "@/lib/articles";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // In real app, fetch article data
  const article = getArticle(params.slug);
  const relatedArticles = getRelatedArticles(params.slug);

  return (
    <>
      <ReadingProgress />
      <Navbar />
      
      <main>
        <ArticleHero
          category={article.category}
          title={article.title}
          subtitle={article.subtitle}
          author={article.author}
          date={article.date}
          readTime={article.readTime}
          heroImage={article.heroImage}
          heroCaption={article.heroCaption}
        />

        <ArticleBody>
          {/* First paragraph with drop cap */}
          <p className="drop-cap">
            The tech industry has always been defined by its relentless pursuit of the next big thing. But what happens when the next big thing is less about innovation and more about integration? As we enter 2026, the most successful companies aren't the ones building entirely new technologies—they're the ones finding elegant ways to combine existing ones.
          </p>

          <p>
            This shift represents a fundamental change in how we think about technological progress. For decades, we celebrated disruption above all else. Now, we're beginning to appreciate the equally difficult work of synthesis.
          </p>

          <h2>The Integration Imperative</h2>

          <p>
            Consider the smartphone. When Apple introduced the iPhone in 2007, it wasn't selling a revolutionary phone, camera, or music player. It was selling the seamless integration of all three—and a dozen other capabilities—into a single, cohesive experience.
          </p>

          <ImageCaption
            src="/images/articles/tech-integration.jpg"
            alt="Modern technology workspace"
            caption="The modern workspace is defined not by individual tools, but by how well they work together."
            credit="Unsplash"
            wide
          />

          <p>
            The same principle applies today, at a much larger scale. The companies winning in 2026 are those that understand a simple truth: users don't want more tools. They want fewer tools that do more things, better.
          </p>

          <PullQuote
            quote="Users don't want more tools. They want fewer tools that do more things, better."
            attribution="Sarah Chen, VP of Product at Figma"
          />

          <h2>What This Means for Builders</h2>

          <p>
            For entrepreneurs and product teams, the integration imperative demands a different way of thinking. Instead of asking "What can we build that doesn't exist?", the better question might be "What existing capabilities can we combine in ways no one has imagined?"
          </p>

          <p>
            This isn't a lesser ambition—it's arguably a greater one. Building a new widget is straightforward compared to orchestrating a symphony of existing technologies into something that feels effortless.
          </p>

          <h2>The Road Ahead</h2>

          <p>
            As we look to the future, the most exciting opportunities lie not in the labs of AI researchers or the workshops of hardware engineers, but in the space between existing technologies. The winners of the next decade will be those who master the art of elegant integration.
          </p>

          <p>
            The question isn't whether you can build something new. It's whether you can make existing things work together in ways that feel like magic.
          </p>
        </ArticleBody>

        {/* Share buttons */}
        <div className="max-w-content mx-auto px-6 py-8 border-t border-border-light">
          <ShareButtons
            url={`https://dispatch.com/article/${params.slug}`}
            title={article.title}
          />
        </div>

        <AuthorCard
          name={article.author.name}
          image={article.author.image}
          bio={article.author.bio}
          twitter={article.author.twitter}
          linkedin={article.author.linkedin}
        />

        <RelatedArticles articles={relatedArticles} />
      </main>

      <NewsletterSignup />
      <Footer />
    </>
  );
}
```

### 16. Home Page (app/page.tsx)

```tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import ArticleCard from "@/components/home/ArticleCard";
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
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <FeaturedArticle {...featured} />
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-border-light" />
        </div>

        {/* Recent articles */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-serif text-2xl text-text-primary mb-8">Recent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {recent.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>
      </main>

      <NewsletterSignup />
      <Footer />
    </>
  );
}
```

### 17. Mock Data (lib/articles.ts)

```typescript
export const articles = [
  {
    slug: "integration-imperative",
    category: "Technology",
    title: "The Integration Imperative",
    subtitle: "Why the future of tech isn't about building new things—it's about combining existing ones in ways that feel like magic.",
    heroImage: "/images/articles/hero-1.jpg",
    heroCaption: "Photo by Unsplash",
    author: {
      name: "Sarah Chen",
      image: "/images/authors/sarah.jpg",
      role: "Senior Editor",
      bio: "Sarah covers the intersection of technology and design. Previously at Wired and The Verge.",
      twitter: "sarahchen",
      linkedin: "sarahchen",
    },
    date: "January 15, 2026",
    readTime: "8 min",
  },
  {
    slug: "design-systems-scale",
    category: "Design",
    title: "Design Systems at Scale",
    subtitle: "How the world's best product teams maintain consistency without sacrificing creativity.",
    heroImage: "/images/articles/hero-2.jpg",
    author: {
      name: "Marcus Webb",
      image: "/images/authors/marcus.jpg",
      role: "Design Lead",
      bio: "Design systems advocate. Previously at Figma and Airbnb.",
      twitter: "marcuswebb",
      linkedin: "marcuswebb",
    },
    date: "January 12, 2026",
    readTime: "12 min",
  },
  {
    slug: "attention-economy",
    category: "Culture",
    title: "The Attention Economy Is Dead",
    subtitle: "After a decade of fighting for eyeballs, the smartest companies are competing for something else entirely.",
    heroImage: "/images/articles/hero-3.jpg",
    author: {
      name: "Priya Sharma",
      image: "/images/authors/priya.jpg",
      role: "Culture Editor",
      bio: "Writing about how technology shapes society. Author of 'The Quiet Web.'",
      twitter: "priyasharma",
      linkedin: "priyasharma",
    },
    date: "January 10, 2026",
    readTime: "10 min",
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug) || articles[0];
}

export function getFeaturedArticle() {
  return articles[0];
}

export function getRecentArticles() {
  return articles.slice(1);
}

export function getRelatedArticles(currentSlug: string) {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, 3);
}
```

---

## 📦 DEPENDENCIES

```bash
npm install lucide-react @tailwindcss/typography
```

---

## ✅ FINAL CHECKLIST

Before shipping:

- [ ] Serif font (Instrument Serif) loading properly
- [ ] Body text is 18px+ for readability
- [ ] Max content width is 680px (optimal reading)
- [ ] Line height is 1.8 for body text
- [ ] Pull quotes break the grid (wider than content)
- [ ] Images have proper captions
- [ ] Reading progress bar works
- [ ] Drop cap renders correctly on first paragraph
- [ ] Mobile responsive (text scales with clamp)
- [ ] Newsletter form works
- [ ] Share buttons functional

---

## 🚀 CURSOR PROMPT

Copy-paste this into Cursor to start:

```
Create a premium editorial magazine/blog called "Dispatch" using Next.js 14, TypeScript, Tailwind CSS, and @tailwindcss/typography.

Design requirements:
- Editorial typography-first: serif headlines (Instrument Serif), sans-serif body (Inter)
- Minimal color: black, white, one accent red #E63946
- Optimal reading width: 680px for body text, 1080px for wide images
- Body text: 18px, line-height 1.8 for comfortable reading
- Headlines: large serif, light weight, tight line-height

Article page structure:
1. Reading progress bar (fixed top, accent color)
2. Hero: category label → huge headline → subtitle → author info → full-width image with caption
3. Body: drop cap first paragraph, h2/h3 subheads, pull quotes that break the grid
4. Author card with bio and social links
5. Related articles grid
6. Newsletter signup (dark section)
7. Footer

Home page structure:
1. Featured article (2-column: image + content)
2. Recent articles grid (3 columns)
3. Newsletter signup
4. Footer

Key typography details:
- Drop cap on first paragraph (large serif letter)
- Pull quotes: centered, larger serif text, border top and bottom
- Category labels: small caps, letter-spacing, accent color
- Optimal reading experience on all devices

Make it feel like The New York Times Magazine meets Stripe's blog — sophisticated, content-focused, beautiful typography.
```

---

## 📰 GO BUILD IT!

This is the FASTEST of the 5 design projects because:
- No complex interactions
- No charts or animations
- Typography does the heavy lifting
- @tailwindcss/typography handles most body styling

The editorial style shows you understand:
- Reading experience design
- Typography hierarchy
- Content-first thinking
- Premium brand aesthetics

Perfect for media companies, content platforms, and luxury brands.

Ship it! 📖
