"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#D7A15D] text-sm font-semibold uppercase tracking-widest mb-2">
            Customer Stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-2xl sm:text-3xl font-bold text-[#452A22]"
          >
            Love at First Bite
          </h2>
          <p className="text-[#80665A] mt-2 text-sm">
            These are demonstration reviews to illustrate the Chef&apos;s Choice experience.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={item}
              className="bg-[#FFF8F0] rounded-2xl p-5 border border-[#F5EAE0] hover:border-[#D7A15D]/40 hover:shadow-md transition-all relative"
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="text-[#D7A15D]/30 absolute top-4 right-4"
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={13}
                    className={
                      s <= t.rating
                        ? "fill-[#D7A15D] text-[#D7A15D]"
                        : "fill-[#F5EAE0] text-[#F5EAE0]"
                    }
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-[#452A22] leading-relaxed mb-4 pr-4">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Product tag */}
              <span className="text-[10px] font-semibold text-[#D7A15D] bg-[#D7A15D]/10 px-2 py-0.5 rounded-full mb-3 inline-block">
                {t.product}
              </span>

              {/* Author */}
              <div className="flex items-center gap-2.5 mt-2">
                <div className="w-8 h-8 rounded-full bg-[#452A22] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#452A22]">{t.name}</p>
                  <p className="text-xs text-[#80665A]">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
