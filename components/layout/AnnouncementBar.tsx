"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const messages = [
  "🎂 Make Every Celebration Sweeter — Freshly Baked with Love",
  "🚚 Same-Day Delivery Available — Order by 2 PM",
  "✨ New: Custom Designer Cakes for Every Occasion",
  "🎁 Gift Hampers & Party Essentials — All in One Place",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % messages.length);
    }, 4000);
  };

  useEffect(() => {
    start();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + messages.length) % messages.length);
  };
  const next = () => {
    setCurrent((c) => (c + 1) % messages.length);
  };

  return (
    <div className="bg-[#452A22] text-white text-xs sm:text-sm py-2 px-4 flex items-center justify-center gap-3 relative overflow-hidden">
      <button
        onClick={prev}
        aria-label="Previous announcement"
        className="opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
      >
        <ChevronLeft size={14} />
      </button>
      <p className="text-center font-medium tracking-wide truncate max-w-xs sm:max-w-xl">
        {messages[current]}
      </p>
      <button
        onClick={next}
        aria-label="Next announcement"
        className="opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}
