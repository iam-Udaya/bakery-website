"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface PromotionalBannerProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  image: string;
  reverse?: boolean;
  accentColor?: string;
}

const banners: PromotionalBannerProps[] = [
  {
    title: "Sweet Deals, Sweeter Moments",
    description:
      "Celebrate every occasion with our curated selection of freshly baked cakes, pastries, and desserts.",
    buttonText: "Explore Offers",
    href: "/menu",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
    accentColor: "#D7A15D",
  },
  {
    title: "Make Their Birthday Unforgettable",
    description:
      "From classic flavours to custom designer cakes — discover the perfect centrepiece for every celebration.",
    buttonText: "Shop Birthday Cakes",
    href: "/menu?category=birthday-cakes",
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&q=80",
    reverse: true,
    accentColor: "#F3A5B5",
  },
];

export default function PromotionalBanners() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-white space-y-8" aria-label="Promotional offers">
      <div className="max-w-7xl mx-auto space-y-6">
        {banners.map((banner, i) => (
          <PromoBanner key={i} {...banner} />
        ))}
      </div>
    </section>
  );
}

function PromoBanner({
  title,
  description,
  buttonText,
  href,
  image,
  reverse,
  accentColor = "#D7A15D",
}: PromotionalBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl overflow-hidden flex flex-col ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } bg-[#FFF8F0] border border-[#F5EAE0] min-h-[220px]`}
    >
      {/* Image */}
      <div className="relative sm:w-2/5 h-52 sm:h-auto flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-[#452A22]/10" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-8 py-8 sm:px-12">
        <span
          className="inline-block w-10 h-1.5 rounded-full mb-4"
          style={{ backgroundColor: accentColor }}
        />
        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#452A22] leading-tight mb-3">
          {title}
        </h3>
        <p className="text-[#80665A] text-sm leading-relaxed mb-6 max-w-sm">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white self-start hover:scale-105 transition-transform"
          style={{ backgroundColor: accentColor === "#F3A5B5" ? "#452A22" : "#452A22" }}
        >
          {buttonText}
          <ChevronRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}
