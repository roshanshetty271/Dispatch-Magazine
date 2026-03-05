import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-[background-color,color,border-color,opacity,box-shadow,transform] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-text-primary text-white hover:bg-black hover:shadow-sm active:scale-[0.98] rounded-full",
      secondary: "bg-bg-secondary text-text-primary hover:bg-border-light active:scale-[0.98] rounded-full",
      ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-secondary active:scale-[0.98] rounded-lg",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
