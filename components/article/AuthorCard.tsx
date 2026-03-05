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
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <p className="overline mb-2">Written by</p>
            <h3 className="font-serif text-xl text-text-primary mb-2">{name}</h3>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">{bio}</p>
            <div className="flex gap-3">
              {twitter && (
                <a
                  href={`https://twitter.com/${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label={`Follow ${name} on Twitter`}
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
                  aria-label={`Connect with ${name} on LinkedIn`}
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
