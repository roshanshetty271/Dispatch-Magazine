export interface Author {
  name: string;
  image: string;
  role: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroCaption?: string;
  author: Author;
  date: string;
  readTime: string;
  content?: string;
}

export const articles: Article[] = [
  {
    slug: "building-dispatch-magazine",
    category: "Design",
    title: "The Architecture of Editorial Design",
    subtitle: "A look at the process behind our custom reading experience. How we applied brutalist principles and cinematic layouts.",
    heroImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1600&h=900&fit=crop",
    heroCaption: "Photo by Domenico Loia on Unsplash",
    author: {
      name: "Conor Adesanya",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=96&h=96&fit=crop&crop=face",
      role: "Lead Engineer & Designer",
      bio: "Conor is the creator of Dispatch Magazine. He specializes in building beautiful, performant software that bridges the gap between engineering and typography.",
      twitter: "conoradesanya",
      linkedin: "conoradesanya",
    },
    date: "March 5, 2026",
    readTime: "7 min",
  },
  {
    slug: "integration-imperative",
    category: "Technology",
    title: "The Integration Imperative",
    subtitle: "Why the future of tech isn't about building new things—it's about combining existing ones in ways that feel like magic.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop",
    heroCaption: "Photo by NASA on Unsplash",
    author: {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face",
      role: "Senior Editor",
      bio: "Sarah covers the intersection of technology and design. Previously at Wired and The Verge. She writes about how technology shapes our daily lives and the future of human-computer interaction.",
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
    heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=900&fit=crop",
    heroCaption: "Photo by Hal Gatewood on Unsplash",
    author: {
      name: "Marcus Webb",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
      role: "Design Lead",
      bio: "Design systems advocate. Previously at Figma and Airbnb. Marcus has spent the last decade helping teams build consistent, scalable design languages.",
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
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=900&fit=crop",
    heroCaption: "Photo by Austin Distel on Unsplash",
    author: {
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face",
      role: "Culture Editor",
      bio: "Writing about how technology shapes society. Author of 'The Quiet Web.' Priya explores the intersection of technology, culture, and human behavior.",
      twitter: "priyasharma",
      linkedin: "priyasharma",
    },
    date: "January 10, 2026",
    readTime: "10 min",
  },
  {
    slug: "ai-creative-collaboration",
    category: "Technology",
    title: "AI as Creative Partner",
    subtitle: "The artists and designers who are finding unexpected ways to collaborate with artificial intelligence.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop",
    heroCaption: "Photo by Steve Johnson on Unsplash",
    author: {
      name: "James Liu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
      role: "Technology Correspondent",
      bio: "James reports on the frontiers of artificial intelligence and its impact on creative industries. Based in San Francisco.",
      twitter: "jamesliu",
      linkedin: "jamesliu",
    },
    date: "January 8, 2026",
    readTime: "15 min",
  },
  {
    slug: "sustainable-tech",
    category: "Essays",
    title: "Building for the Long Term",
    subtitle: "What the slow tech movement can teach us about building products that last.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop",
    heroCaption: "Photo by Alexandre Debiève on Unsplash",
    author: {
      name: "Elena Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face",
      role: "Contributing Writer",
      bio: "Elena writes about sustainable technology and ethical design. She advises startups on building products with longevity in mind.",
      twitter: "elenarodriguez",
      linkedin: "elenarodriguez",
    },
    date: "January 5, 2026",
    readTime: "9 min",
  },
  {
    slug: "remote-work-revolution",
    category: "Culture",
    title: "The Office Is Dead, Long Live the Office",
    subtitle: "Three years into the remote work revolution, companies are finally figuring out what they actually need.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop",
    heroCaption: "Photo by Israel Andrade on Unsplash",
    author: {
      name: "David Park",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
      role: "Business Editor",
      bio: "David covers the changing nature of work and organizations. His reporting focuses on how companies adapt to new economic realities.",
      twitter: "davidpark",
      linkedin: "davidpark",
    },
    date: "January 3, 2026",
    readTime: "11 min",
  },
  {
    slug: "typography-digital-age",
    category: "Design",
    title: "Typography for the Digital Age",
    subtitle: "How type designers are reimagining letterforms for screens of all sizes.",
    heroImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1600&h=900&fit=crop",
    heroCaption: "Photo by Brett Jordan on Unsplash",
    author: {
      name: "Alice Kim",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=96&h=96&fit=crop&crop=face",
      role: "Design Writer",
      bio: "Alice specializes in typography and visual communication. She has written for Eye Magazine, Creative Review, and It's Nice That.",
      twitter: "alicekim",
      linkedin: "alicekim",
    },
    date: "December 28, 2025",
    readTime: "7 min",
  },
];

export function getArticle(slug: string): Article {
  return articles.find((a) => a.slug === slug) || articles[0];
}

export function getFeaturedArticle(): Article {
  return articles[0];
}

export function getRecentArticles(): Article[] {
  return articles.slice(1);
}

export function getRelatedArticles(currentSlug: string): Article[] {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, 3);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category.toLowerCase() === category.toLowerCase());
}

export function searchArticles(query: string): Article[] {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter((a) =>
    a.title.toLowerCase().includes(lowercaseQuery) ||
    a.subtitle.toLowerCase().includes(lowercaseQuery) ||
    a.category.toLowerCase().includes(lowercaseQuery) ||
    a.author.name.toLowerCase().includes(lowercaseQuery)
  );
}
