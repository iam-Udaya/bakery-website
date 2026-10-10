"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CategorySection() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-white" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            id="categories-heading"
            className="font-serif text-2xl sm:text-3xl font-bold text-[#452A22]"
          >
            Explore Our Delicious World
          </h2>
          <p className="text-[#80665A] mt-2 text-sm sm:text-base">
            Freshly baked treats for every craving and every occasion
          </p>
        </div>

        {/* Desktop grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden sm:grid grid-cols-4 md:grid-cols-6 gap-4"
        >
          {categories.map((cat) => (
            <motion.div key={cat.slug} variants={item}>
              <CategoryCard cat={cat} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile horizontal scroll */}
        <div className="sm:hidden flex gap-4 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat) => (
            <div key={cat.slug} className="flex-shrink-0 w-24">
              <CategoryCard cat={cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat }: { cat: (typeof categories)[0] }) {
  return (
    <Link
      href={`/menu?category=${cat.slug}`}
      className="group flex flex-col items-center gap-2"
    >
      <div className="w-full aspect-square rounded-2xl overflow-hidden relative bg-[#FFF8F0] border border-[#F5EAE0] group-hover:border-[#D7A15D] transition-colors shadow-sm">
        <Image
          src={cat.image}
          alt={cat.label}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 120px, 140px"
        />
        {/* subtle overlay on hover */}
        <div className="absolute inset-0 bg-[#452A22]/0 group-hover:bg-[#452A22]/10 transition-colors duration-300" />
      </div>
      <span className="text-xs font-semibold text-[#452A22] text-center leading-tight group-hover:text-[#D7A15D] transition-colors">
        {cat.label}
      </span>
    </Link>
  );
}
