"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTiktokLine,
} from "react-icons/ri";

const footerLinks = {
  products: [
    { name: "Pod System", href: "#" },
    { name: "Box Mod", href: "#" },
    { name: "E-Liquid", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Coil & Cartridge", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Cara Pemesanan", href: "#" },
    { name: "Pengiriman", href: "#" },
    { name: "Pengembalian", href: "#" },
    { name: "Garansi", href: "#" },
  ],
  company: [
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Karir", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Syarat & Ketentuan", href: "#" },
  ],
};

const socialLinks = [
  { icon: RiWhatsappLine, href: "#", label: "WhatsApp" },
  { icon: RiInstagramLine, href: "#", label: "Instagram" },
  { icon: RiFacebookCircleLine, href: "#", label: "Facebook" },
  { icon: RiTiktokLine, href: "#", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">RAJA</span>
                <span className="text-muted-foreground ml-1 font-light">
                  VAPESTORE
                </span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Destinasi utama untuk produk vaping premium di Indonesia. 
              Kualitas terjamin, layanan terbaik.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 glass rounded-full hover:bg-white/10 transition-colors hover-lift"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Produk
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Bantuan
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Perusahaan
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-white/5" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Raja Vapestore. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            🇮🇩 Made with ❤️ in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
