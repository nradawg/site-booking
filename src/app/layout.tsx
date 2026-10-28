import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import config from "@/config";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${config.site_name} | ${config.tagline}`,
  description: config.description,
};

const colors = {
  "--primary": config.colors.primary,
  "--secondary": config.colors.secondary,
  "--accent": config.colors.accent,
} as React.CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`} style={colors}>
      <body className="min-h-full flex flex-col bg-[var(--secondary)] text-[var(--primary)] font-[var(--font-geist)]">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
