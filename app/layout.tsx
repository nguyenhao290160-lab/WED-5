import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { PromoBar } from "@/components/PromoBar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechDeals — Find the Best Tech Deals",
  description:
    "Discover the latest deals on laptops, phones, and gadgets. Compare prices across retailers and find the best value.",
  openGraph: {
    title: "TechDeals — Find the Best Tech Deals",
    description:
      "Discover the latest deals on laptops, phones, and gadgets. Compare prices across retailers and find the best value.",
    images: [{ url: "https://bolt.new/static/og_default.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "https://bolt.new/static/og_default.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <PromoBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
