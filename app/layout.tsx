import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Adeyemi | Frontend Software Engineer",
  description:
    "Frontend Engineer with 4+ years of experience building performant, user-friendly web applications. Skilled in React, Next.js, Node.js and more.",
  keywords:
    "Samuel Adeyemi, Frontend Developer in nigeria, Frontend developer, Hire a frontend developer,  Frontend Engineer, Software Engineer, React, Next.js, Node.js, JavaScript, TypeScript",
  authors: [
    {
      name: "Samuel Adeyemi",
      url: "https://www.linkedin.com/in/samueljrweb",
    },
  ],
  creator: "Samuel Adeyemi",
  publisher: "Samuel Adeyemi",
  openGraph: {
    title: "Samuel Adeyemi | Frontend Software Engineer",
    description:
      "Frontend Engineer with 4+ years of experience building performant, user-friendly web applications. Skilled in React, Next.js, Node.js and more.",
    url: "https://www.samueladeyemi.me",
    siteName: "Samuel Adeyemi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samuel Adeyemi | Frontend Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Adeyemi | Frontend Software Engineer",
    description:
      "Frontend Engineer with 4+ years of experience building performant, user-friendly web applications. Skilled in React, Next.js, Node.js and more.",
    images: ["/og-image.png"],
    creator: "@samueljrweb",
  },
  appleWebApp: {
    title: "Samuel Adeyemi | Frontend Software Engineer",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.png",
        href: "/favicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
