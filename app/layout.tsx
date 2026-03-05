import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dispatch | Ideas that matter",
  description: "Long-form journalism and essays on technology, design, and culture.",
  keywords: ["technology", "design", "culture", "essays", "journalism", "magazine"],
  authors: [{ name: "Dispatch Team" }],
  openGraph: {
    title: "Dispatch | Ideas that matter",
    description: "Long-form journalism and essays on technology, design, and culture.",
    type: "website",
    locale: "en_US",
    siteName: "Dispatch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dispatch | Ideas that matter",
    description: "Long-form journalism and essays on technology, design, and culture.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning style={{ colorScheme: 'light dark' }}>
      <body className="font-sans bg-bg-primary text-text-body antialiased tabular-nums">
        {children}
      </body>
    </html>
  );
}
