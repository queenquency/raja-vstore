import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
