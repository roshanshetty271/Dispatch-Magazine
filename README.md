# Dispatch Magazine

A premium editorial magazine/blog built with Next.js 14, TypeScript, and Tailwind CSS. Features beautiful typography, optimal reading experience, and a sophisticated minimalist design.

![Dispatch Magazine](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop)

## Design Philosophy

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry

Dispatch embodies the principles of editorial typography-first design:

- **Serif headlines** (Instrument Serif) for elegance and readability
- **Sans-serif body** (Inter) for clean, comfortable reading
- **Optimal reading width** (680px) for reduced eye strain
- **Generous whitespace** for content breathing room
- **One accent color** (#E63946) for visual hierarchy

## Features

- 📰 **Editorial Typography** - Serif headlines, proper line-height, drop caps
- 📱 **Fully Responsive** - Beautiful on all screen sizes
- 📊 **Reading Progress** - Track your position in long articles
- 🔗 **Social Sharing** - Twitter, Facebook, LinkedIn integration
- 📧 **Newsletter Signup** - Dark section CTA with email capture
- 🎨 **Minimal Design** - Black, white, one accent color
- ⚡ **Fast Performance** - Next.js 14 with optimized images
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter cards

> **📚 Read the complete breakdown of all UI and Interaction design features in [features.md](./features.md)**

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Typography:** @tailwindcss/typography
- **Icons:** Lucide React
- **Fonts:** Instrument Serif + Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   cd dispatch-magazine
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)



## Typography System

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Display | Instrument Serif | 72px (clamp) | 400 |
| Headline | Instrument Serif | 48px (clamp) | 400 |
| Subhead | Inter | 20px | 400 |
| Body | Inter | 18px | 400 |
| Caption | Inter | 14px | 400 |
| Overline | Inter | 12px | 600 |

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | #1A1A1A | Headlines |
| Text Body | #333333 | Body text |
| Text Secondary | #666666 | Meta info |
| Text Muted | #999999 | Captions |
| Accent | #E63946 | Links, CTAs |
| Background | #FFFFFF | Primary BG |
| Background Secondary | #FAFAFA | Alt sections |
| Background Dark | #0A0A0A | CTA sections |

## Key Components

### ArticleHero
Full-width hero section with category label, headline, subtitle, author info, and hero image.

### PullQuote
Eye-catching quotes that break the content grid, perfect for highlighting key insights.

### ReadingProgress
Fixed progress bar showing how far the reader has scrolled through the article.

### NewsletterSignup
Dark section with email capture form and success state animation.

## License

MIT License - feel free to use this for your own projects.

## Credits

- Design inspired by [Medium](https://medium.com), [Substack](https://substack.com), and [Stripe Blog](https://stripe.com/blog)
- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)

---

Built with ❤️ by [Roshan Shetty](https://github.com/roshanshetty271)
