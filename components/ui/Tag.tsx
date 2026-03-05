import Link from "next/link";

interface TagProps {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "accent";
}

export default function Tag({ children, href, variant = "default" }: TagProps) {
  const baseStyles = "inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full transition-colors";
  
  const variants = {
    default: "bg-bg-secondary text-text-secondary hover:bg-border-light",
    accent: "bg-accent/10 text-accent hover:bg-accent/20",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <span className={className}>{children}</span>;
}
