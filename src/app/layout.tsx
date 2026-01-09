import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raja Vapestore | Premium Vaping Experience",
  description:
    "Raja Vapestore - Your destination for premium vape products, e-liquids, and accessories. Experience the best in vaping.",
  keywords: ["vape", "vapestore", "e-liquid", "pod", "mod", "premium vaping"],
  openGraph: {
    title: "Raja Vapestore | Premium Vaping Experience",
    description:
      "Your destination for premium vape products, e-liquids, and accessories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
