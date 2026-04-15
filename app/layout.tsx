import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AffProf — Protect Every Dollar You Earn With Affiliate Links",
  description:
    "Organize your affiliate links, detect broken ones before you lose commissions, generate short links with QR codes, and track every click — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-dark text-text-primary">
        {children}
      </body>
    </html>
  );
}
