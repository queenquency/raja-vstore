"use client";

import { Button } from "@/components/ui/button";
import { RiWhatsappLine, RiInstagramLine, RiMapPinLine } from "react-icons/ri";

export function CTA() {
  return (
    <section id="kontak" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Decorative border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Siap Untuk Upgrade{" "}
            <span className="gradient-text">Pengalaman Vaping</span> Anda?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Hubungi kami sekarang dan dapatkan rekomendasi produk terbaik sesuai
            kebutuhan Anda. Tim kami siap membantu 24/7!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="group px-8 py-6 text-base font-medium bg-green-500 hover:bg-green-600 text-white rounded-full hover-lift"
              >
                <RiWhatsappLine size={20} className="mr-2" />
                Chat WhatsApp
              </Button>
            </a>
            <a
              href="https://instagram.com/raja.vstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-medium rounded-full border-white/20 hover:bg-white/5 hover-lift"
              >
                <RiInstagramLine size={20} className="mr-2" />
                Follow Instagram
              </Button>
            </a>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 glass rounded-2xl hover-lift block"
            >
              <RiWhatsappLine size={32} className="mx-auto mb-4 text-green-400" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">+62 812 3456 7890</p>
            </a>
            <a
              href="https://instagram.com/raja.vstore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 glass rounded-2xl hover-lift block"
            >
              <RiInstagramLine size={32} className="mx-auto mb-4 text-pink-400" />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-muted-foreground">@raja.vstore</p>
            </a>
            <a
              href="https://maps.google.com/?q=Jalan+Sumatera+Jember"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 glass rounded-2xl hover-lift block"
            >
              <RiMapPinLine size={32} className="mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Cabang 1 - Jember</h3>
              <p className="text-muted-foreground">Jalan Sumatera</p>
            </a>
            <a
              href="https://maps.google.com/?q=Jalan+Mastrip+Jember"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 glass rounded-2xl hover-lift block"
            >
              <RiMapPinLine size={32} className="mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Cabang 2 - Jember</h3>
              <p className="text-muted-foreground">Jalan Mastrip</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
