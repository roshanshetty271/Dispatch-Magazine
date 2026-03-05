"use client";

import { useState, useEffect } from "react";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Get all h2 and h3 elements within the main article prose
    const elements = document.querySelectorAll(".prose h2, .prose h3");
    const items: Heading[] = [];

    elements.forEach((element, index) => {
      const id = element.id || `heading-${index}`;
      if (!element.id) {
        element.id = id;
      }
      items.push({
        id,
        text: element.textContent || "",
        level: parseInt(element.tagName[1]),
      });
    });

    setHeadings(items);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-white border border-border-light rounded-lg shadow-sm hover:shadow-md transition-all"
        aria-label="Toggle table of contents"
      >
        <List className="w-5 h-5 text-text-secondary" />
      </button>

      {isOpen && (
        <nav className="absolute left-12 top-0 w-64 max-h-[80vh] overflow-y-auto bg-white border border-border-light rounded-lg shadow-lg p-4 animate-fade-in">
          <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">
            Contents
          </p>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm transition-colors ${heading.level === 3 ? "pl-4" : ""
                    } ${activeId === heading.id
                      ? "text-accent font-medium"
                      : "text-text-secondary hover:text-text-primary"
                    }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
