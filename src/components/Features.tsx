"use client";

import {
  RiShieldCheckLine,
  RiTruckLine,
  RiCustomerServiceLine,
  RiMedalLine,
  RiExchangeLine,
  RiSecurePaymentLine,
} from "react-icons/ri";

const features = [
  {
    icon: RiShieldCheckLine,
    title: "100% Original",
    description:
      "Produk asli dari distributor resmi dengan garansi keaslian terjamin.",
  },
  {
    icon: RiTruckLine,
    title: "Pengiriman Cepat",
    description:
      "Pengiriman same-day untuk Jember dan pengiriman Express ke seluruh Indonesia.",
  },
  {
    icon: RiCustomerServiceLine,
    title: "Layanan 24/7",
    description:
      "Tim customer service siap membantu Anda kapan saja melalui WhatsApp.",
  },
  {
    icon: RiMedalLine,
    title: "Best Price",
    description:
      "Harga terbaik dengan jaminan price match dari kompetitor manapun.",
  },
  {
    icon: RiExchangeLine,
    title: "Easy Return",
    description:
      "Kebijakan pengembalian mudah dalam 7 hari untuk produk yang belum dibuka.",
  },
  {
    icon: RiSecurePaymentLine,
    title: "Pembayaran Aman",
    description:
      "Berbagai metode pembayaran aman termasuk transfer bank, e-wallet, dan COD.",
  },
];

export function Features() {
  return (
    <section id="fitur" className="py-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Kenapa Pilih{" "}
            <span className="gradient-text">Raja Vapestore?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Kami berkomitmen memberikan pengalaman berbelanja terbaik untuk
            kebutuhan vaping Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 glass rounded-3xl hover-lift cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                <feature.icon
                  size={28}
                  className="text-white group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
