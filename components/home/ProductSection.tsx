"use client";

import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/data/products";
import { ChevronRight } from "lucide-react";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllHref?: string;
  bgClass?: string;
}

export default function ProductSection({
  title,
  subtitle,
  products,
  viewAllHref,
  bgClass = "bg-[#FFF8F0]",
}: ProductSectionProps) {

  return (
    <section className={`py-12 px-4 sm:px-6 ${bgClass}`} aria-labelledby={`section-${title}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2
              id={`section-${title}`}
              className="font-serif text-2xl sm:text-3xl font-bold text-[#452A22]"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-[#80665A] mt-1 text-sm">{subtitle}</p>
            )}
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="flex items-center gap-1 text-sm font-semibold text-[#D7A15D] hover:text-[#452A22] transition-colors flex-shrink-0"
            >
              View All
              <ChevronRight size={15} />
            </Link>
          )}
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Mobile: 2-column grid */}
        <div className="sm:hidden grid grid-cols-2 gap-3">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
