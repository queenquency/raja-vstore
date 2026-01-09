"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";

const products = [
  {
    id: 1,
    name: "Vaporesso XROS Pro",
    category: "Pod System",
    price: "Rp 450.000",
    image: "/products/pod-1.jpg",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 2,
    name: "GeekVape Aegis Legend",
    category: "Box Mod",
    price: "Rp 850.000",
    image: "/products/mod-1.jpg",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Uwell Caliburn G3",
    category: "Pod System",
    price: "Rp 375.000",
    image: "/products/pod-2.jpg",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 4,
    name: "Local E-Liquid Premium",
    category: "E-Liquid",
    price: "Rp 125.000",
    image: "/products/liquid-1.jpg",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 5,
    name: "SMOK Nord 5",
    category: "Pod System",
    price: "Rp 425.000",
    image: "/products/pod-3.jpg",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Voopoo Drag X Plus",
    category: "Pod Mod",
    price: "Rp 650.000",
    image: "/products/mod-2.jpg",
    isNew: true,
    isBestSeller: true,
  },
];

export function Products() {
  return (
    <section id="produk" className="py-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-xs">
            KOLEKSI TERBAIK
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Produk <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Pilihan terbaik dari brand-brand premium dunia untuk pengalaman vaping terbaik Anda.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group glass border-0 overflow-hidden hover-lift cursor-pointer"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-zinc-900 to-black overflow-hidden">
                  {/* Placeholder gradient pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-2xl" />
                    <div className="absolute text-6xl font-bold text-white/10">
                      {product.name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-white text-black hover:bg-white/90">
                        NEW
                      </Badge>
                    )}
                    {product.isBestSeller && (
                      <Badge variant="secondary" className="bg-purple-500/90 text-white">
                        BEST SELLER
                      </Badge>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                      <RiHeartLine size={18} />
                    </button>
                    <button className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                      <RiShoppingBagLine size={18} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 text-sm font-medium border border-white/20 rounded-full hover:bg-white/5 transition-all hover-lift">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  );
}
