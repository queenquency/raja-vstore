"use client";

import { Button } from "@/components/ui/button";
import { RiWhatsappLine, RiInstagramLine, RiMapPinLine } from "react-icons/ri";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in-up opacity-0">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Premium Quality • Authentic Products
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 animate-delay-100">
            <span className="block text-white text-glow">Experience The</span>
            <span className="block gradient-text mt-2">King of Vape</span>
          </h1>

          {/* Subheadline */}
          <p className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animate-delay-200 font-light">
            Temukan koleksi premium vape, pod, dan e-liquid terbaik. 
            Kualitas terjamin, pengalaman vaping yang tak tertandingi.
          </p>

          {/* CTA Grid - Uniform cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-12 animate-fade-in-up opacity-0 animate-delay-300">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 group flex md:flex-col items-center justify-center gap-3  glass rounded-2xl hover:bg-white/10 transition-all hover-lift"
            >
              <div className="">
                <RiWhatsappLine size={24} className="text-green-400" />
              </div>
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/raja.vstore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 group flex md:flex-col items-center gap-3 justify-center glass rounded-2xl hover:bg-white/10 transition-all hover-lift"
            >
              <div className="">
                <RiInstagramLine size={24} className="text-pink-400" />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </a>

            {/* Location 1 */}
            <a
              href="https://maps.google.com/?q=Jalan+Sumatera+Jember"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 group flex md:flex-col items-center gap-3 justify-center glass rounded-2xl hover:bg-white/10 transition-all hover-lift"
            >
              <div className="">
                <RiMapPinLine size={24} className="text-blue-400" />
              </div>
              <div className="text-center">
                <span className="text-sm font-medium block">Jl. Sumatera</span>
              </div>
            </a>

            {/* Location 2 */}
            <a
              href="https://maps.google.com/?q=Jalan+Mastrip+Jember"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 group flex md:flex-col items-center gap-3 justify-center glass rounded-2xl hover:bg-white/10 transition-all hover-lift"
            >
              <div className="">
                <RiMapPinLine size={24} className="text-blue-400" />
              </div>
              <div className="text-center">
                <span className="text-sm font-medium block">Jl. Mastrip</span>
              </div>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up opacity-0 animate-delay-400">
            {[
              { value: "1000+", label: "Produk" },
              { value: "50+", label: "Brand Premium" },
              { value: "10K+", label: "Pelanggan Puas" },
              { value: "24/7", label: "Layanan" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
