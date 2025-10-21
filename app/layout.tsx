import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Building Innovative Technical Solutions | Software Engineering for Africa",
  description: "Premier African software engineering firm specializing in AI-native fintech, microservices architecture, and government digital services. Building the future with GPT-4, React Native, and AWS.",
  keywords: "software development Africa, fintech Nigeria, microservices, AI integration, React Native, mobile money, government digital services",
  authors: [{ name: "Building Innovative Technical Solutions, Limited" }],
  openGraph: {
    title: "Building Innovative Technical Solutions",
    description: "Engineering Africa's Digital Future with AI-First Architecture",
    url: "https://bits-innovate.com",
    siteName: "BITS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Innovative Technical Solutions",
    description: "Engineering Africa's Digital Future",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}