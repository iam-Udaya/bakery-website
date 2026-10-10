"use client";

import Link from "next/link";
import { navCategories } from "@/data/categories";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryNav() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -240 : 240,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      aria-label="Product categories"
      className="bg-white border-b border-[#F5EAE0] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        {/* Left scroll arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll categories left"
          className="flex-shrink-0 p-1.5 text-[#80665A] hover:text-[#452A22] transition hidden sm:flex"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Scrollable list */}
        <div
          ref={scrollRef}
          className="flex items-center gap-0 overflow-x-auto scrollbar-hide flex-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {navCategories.map((cat) => (
            <Link
              key={cat}
              href={`/menu?category=${encodeURIComponent(
                cat.toLowerCase().replace(/\s+/g, "-")
              )}`}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeCategory === cat
                  ? "border-[#D7A15D] text-[#452A22]"
                  : "border-transparent text-[#80665A] hover:text-[#452A22] hover:border-[#D7A15D]/50"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Right scroll arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll categories right"
          className="flex-shrink-0 p-1.5 text-[#80665A] hover:text-[#452A22] transition hidden sm:flex"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
}
