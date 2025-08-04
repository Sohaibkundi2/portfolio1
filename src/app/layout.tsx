// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sohaibkundi.dev"), // change this to your domain
  title: {
    default: "Muhammad Sohaib | Full Stack Developer",
    template: "%s | Muhammad Sohaib",
  },
  description:
    "Portfolio of Muhammad Sohaib, a full-stack web developer crafting scalable, performant, and user-centric web applications.",
  keywords: [
    "Muhammad Sohaib",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Muhammad Sohaib", url: "https://github.com/sohaibkundi2" }],
  creator: "Muhammad Sohaib",
  openGraph: {
    type: "website",
    url: "https://sohaibkundi.dev",
    title: "Muhammad Sohaib | Full Stack Developer",
    description:
      "CTO-level full-stack portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    siteName: "Muhammad Sohaib Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/181643121?v=4", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Muhammad Sohaib Portfolio Preview",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
 themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en" className="bg-white text-black dark:bg-[#0d0d0d] dark:text-white transition-colors duration-200" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-[calc(100vh-200px)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
