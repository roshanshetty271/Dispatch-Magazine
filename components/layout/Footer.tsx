import Link from "next/link";
import { Twitter, Linkedin, Github, Rss } from "lucide-react";

export default function Footer() {
  const sections = ["Technology", "Design", "Culture", "Essays"];
  const company = ["About", "Contact", "Careers", "Privacy"];
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "RSS", href: "/rss", icon: Rss },
  ];

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
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Sections Links */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Sections</h4>
            <ul className="space-y-3">
              {sections.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-text-secondary hover:text-text-primary hover:underline decoration-accent underline-offset-4 transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-text-secondary hover:text-text-primary hover:underline decoration-accent underline-offset-4 transition-all"
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
            <Link href="/terms" className="hover:text-text-primary hover:underline decoration-accent underline-offset-4 transition-all">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-text-primary hover:underline decoration-accent underline-offset-4 transition-all">
              Privacy
            </Link>
            <Link href="/rss" className="hover:text-text-primary hover:underline decoration-accent underline-offset-4 transition-all">
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
