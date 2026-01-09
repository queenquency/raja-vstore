"use client";

import { RiCheckLine } from "react-icons/ri";

const highlights = [
  "Berdiri sejak 2019 dengan pengalaman lebih dari 5 tahun",
  "Lebih dari 10.000 pelanggan setia di seluruh Indonesia",
  "Kerjasama dengan 50+ brand vape premium internasional",
  "Tim profesional yang berpengalaman dan bersertifikasi",
];

export function About() {
  return (
    <section id="tentang" className="py-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl glass overflow-hidden relative group">
              {/* Decorative gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20" />
              
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Large branding */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                    RV
                  </div>
                  <div className="mt-4 text-2xl font-light text-white/30 tracking-[0.3em]">
                    SINCE 2019
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 px-4 py-2 glass rounded-full text-sm">
                ⭐ 4.9 Rating
              </div>
              <div className="absolute bottom-8 left-8 px-4 py-2 glass rounded-full text-sm">
                🏆 Trusted Seller
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-3xl border border-white/5 -z-10" />
            <div className="absolute -inset-8 rounded-3xl border border-white/[0.02] -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Tentang{" "}
              <span className="gradient-text">Raja Vapestore</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Raja Vapestore adalah destinasi utama untuk produk vaping premium
              di Indonesia. Kami berkomitmen untuk menyediakan produk berkualitas
              tinggi dengan layanan terbaik kepada setiap pelanggan.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dengan motto "The King of Vape", kami terus berupaya menjadi yang
              terdepan dalam industri vaping Indonesia, menghadirkan inovasi dan
              produk-produk terbaru dari brand-brand ternama dunia.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 p-1 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all">
                    <RiCheckLine size={14} />
                  </div>
                  <span className="text-muted-foreground group-hover:text-white transition-colors">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
