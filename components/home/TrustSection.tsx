"use client";

import { Cake, Coffee, Gift, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    Icon: Cake,
    title: "Freshly Baked Favourites",
    description:
      "Every item is baked fresh daily using premium ingredients. No preservatives, no compromises.",
  },
  {
    Icon: Star,
    title: "Cakes for Every Celebration",
    description:
      "Birthdays, anniversaries, or just because — we have the perfect cake for every special moment.",
  },
  {
    Icon: Coffee,
    title: "Something for Every Craving",
    description:
      "From rich chocolate cakes to refreshing cold coffee, discover flavours that delight all day.",
  },
  {
    Icon: Gift,
    title: "Sweet Surprises",
    description:
      "Curated gift hampers and party essentials to make every celebration complete and memorable.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function TrustSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#FFF8F0]" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="trust-heading"
            className="font-serif text-2xl sm:text-3xl font-bold text-[#452A22]"
          >
            Made for Your Sweetest Moments
          </h2>
          <p className="text-[#80665A] mt-2 max-w-md mx-auto text-sm sm:text-base">
            Quality ingredients, crafted with care, delivered with love.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="bg-white rounded-2xl p-6 text-center border border-[#F5EAE0] hover:border-[#D7A15D]/40 hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FFF8F0] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D7A15D]/10 transition-colors">
                <Icon size={26} className="text-[#D7A15D]" />
              </div>
              <h3 className="font-serif font-bold text-[#452A22] mb-2 text-base">
                {title}
              </h3>
              <p className="text-[#80665A] text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
