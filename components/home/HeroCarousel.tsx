"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Make Every Celebration Sweeter",
    description:
      "Beautiful cakes crafted to turn your special moments into unforgettable memories.",
    button: "Explore Cakes",
    href: "/menu?category=cakes",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&q=85",
    accent: "#D7A15D",
    badge: "New Arrivals",
  },
  {
    id: 2,
    title: "Chocolate Lovers, This One's for You",
    description:
      "Discover rich chocolate cakes, fudgy brownies, and irresistible desserts.",
    button: "Shop Chocolate Treats",
    href: "/menu?category=chocolates",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=1600&q=85",
    accent: "#F3A5B5",
    badge: "Bestsellers",
  },
  {
    id: 3,
    title: "Your Perfect Little Indulgence",
    description:
      "Pair your favourite pastry with a refreshing cold coffee. The perfect café experience at home.",
    button: "Explore Café Favourites",
    href: "/menu?category=coffee",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=85",
    accent: "#D7A15D",
    badge: "Trending",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const startTimer = useCallback(() => {
    if (prefersReduced) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
  }, [prefersReduced]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (!paused) startTimer();
    else stopTimer();
    return () => stopTimer();
  }, [paused, startTimer, stopTimer]);

  const prev = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };
  const next = () => {
    setCurrent((c) => (c + 1) % slides.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#FFF8F0]"
      style={{ height: "clamp(340px, 60vw, 580px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured promotions carousel"
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D1A14]/80 via-[#2D1A14]/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
              <motion.div
                initial={{ y: prefersReduced ? 0 : 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="max-w-xl"
              >
                {/* Badge */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
                  style={{ backgroundColor: slides[current].accent }}
                >
                  {slides[current].badge}
                </span>

                {/* Title */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                  {slides[current].title}
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 max-w-sm">
                  {slides[current].description}
                </p>

                {/* CTA */}
                <Link
                  href={slides[current].href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#452A22] hover:scale-105 transition-transform"
                  style={{ backgroundColor: slides[current].accent }}
                >
                  {slides[current].button}
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next Controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 h-2.5 bg-[#D7A15D]"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
