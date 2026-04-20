import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css";
import { Antonio, Anek_Tamil } from "next/font/google";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-antonio",
});

const anekTamil = Anek_Tamil({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-anek-tamil",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airone Gamil | Software Developer",
  description:
    "Portfolio of Airone Gamil — a software developer based in Bulacan, Philippines specializing in full-stack web development, UI/UX design, and modern web applications.",
  keywords: [
    "Airone Gamil",
    "Software Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Philippines",
    "React",
    "Next.js",
    "Laravel",
  ],
  authors: [
    { name: "Airone Gamil", url: "https://airone-portfolio.vercel.app/" },
  ],
  creator: "Airone Gamil",
  openGraph: {
    title: "Airone Gamil | Software Developer",
    description:
      "Full-stack developer based in Bulacan, Philippines. Building modern, scalable web applications.",
    url: "https://airone-portfolio.vercel.app/",
    siteName: "Airone Gamil Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airone Gamil | Software Developer",
    description:
      "Full-stack developer based in Bulacan, Philippines. Building modern, scalable web applications.",
    creator: "@aironegamil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${anekTamil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
