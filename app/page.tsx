import type { Metadata } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategorySection from "@/components/home/CategorySection";
import ProductSection from "@/components/home/ProductSection";
import PromotionalBanners from "@/components/home/PromotionalBanners";
import TrustSection from "@/components/home/TrustSection";
import Testimonials from "@/components/home/Testimonials";
import { products } from "@/data/products";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Chef's Choice — Premium Bakery | Cakes, Pastries & More",
  description:
    "Order premium cakes, pastries, chocolates, and café favourites online. Fresh bakes for every celebration at Chef's Choice.",
};

export default function HomePage() {
  const bestsellingCakes = products.filter(
    (p) => p.category === "Cakes" && p.isBestseller
  );
  const pastriesAndDesserts = products.filter((p) =>
    ["Pastries", "Brownies", "Cupcakes", "Desserts"].includes(p.category)
  );
  const beverages = products.filter((p) =>
    ["Coffee", "Milkshakes"].includes(p.category)
  );

  return (
    <>
      {/* ── Hero Carousel ───────────────────────────── */}
      <HeroCarousel />

      {/* ── Category Grid ───────────────────────────── */}
      <CategorySection />

      {/* ── Bestselling Cakes ───────────────────────── */}
      <ProductSection
        title="Bestselling Cakes"
        subtitle="Our most-loved cakes — ordered again and again"
        products={bestsellingCakes}
        viewAllHref="/menu?category=cakes"
        bgClass="bg-[#FFF8F0]"
      />

      {/* ── Promotional Banners ─────────────────────── */}
      <PromotionalBanners />

      {/* ── Pastries & Desserts ─────────────────────── */}
      <ProductSection
        title="Pastries & Desserts"
        subtitle="Fresh from the oven, straight to your heart"
        products={pastriesAndDesserts}
        viewAllHref="/menu?category=pastries"
        bgClass="bg-[#FFF8F0]"
      />

      {/* ── Coffee & Beverages ──────────────────────── */}
      <ProductSection
        title="Coffee & Beverages"
        subtitle="The perfect companion to your favourite treat"
        products={beverages}
        viewAllHref="/menu?category=coffee"
        bgClass="bg-white"
      />

      {/* ── Full Menu CTA Banner ────────────────────── */}
      <section className="py-14 px-4 sm:px-6 bg-[#452A22] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#D7A15D] text-sm font-semibold uppercase tracking-widest mb-3">
            Discover More
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-4 leading-tight">
            A Little Treat Goes a Long Way
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Explore pastries, brownies, café favourites, party essentials, and so much more — all in one place.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D7A15D] text-white rounded-full font-semibold text-sm hover:bg-[#c49048] hover:scale-105 transition-all"
          >
            Browse All Products
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Trust Section ───────────────────────────── */}
      <TrustSection />

      {/* ── Testimonials ────────────────────────────── */}
      <Testimonials />

      {/* ── Final Newsletter / Subscribe strip ──────── */}
      <section className="py-12 px-4 sm:px-6 bg-[#FFF8F0] border-t border-[#F5EAE0]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#452A22] mb-2">
            Stay Sweet, Stay Updated
          </h2>
          <p className="text-[#80665A] text-sm mb-6">
            Subscribe for exclusive offers, new arrivals, and bakery inspiration delivered to your inbox.
          </p>
          <form
            action="#"
            className="flex gap-2 max-w-sm mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2.5 rounded-full border border-[#F5EAE0] bg-white text-sm text-[#452A22] placeholder:text-[#80665A] focus:outline-none focus:border-[#D7A15D] focus:ring-2 focus:ring-[#D7A15D]/20 transition"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#452A22] text-white rounded-full text-sm font-semibold hover:bg-[#5c3a2e] transition flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-[#80665A] mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
