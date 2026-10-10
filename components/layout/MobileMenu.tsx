"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import { navCategories } from "@/data/categories";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed left-0 top-0 h-full w-[85vw] max-w-sm z-50 bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F5EAE0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#452A22] flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-serif">CC</span>
                </div>
                <span className="font-serif text-lg font-bold text-[#452A22]">
                  Chef&apos;s Choice
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-1.5 rounded-lg hover:bg-[#FFF8F0] transition text-[#452A22]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Categories */}
            <div className="flex-1 overflow-y-auto py-2">
              <p className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#80665A]">
                Categories
              </p>
              {navCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/menu?category=${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, "-"))}`}
                  onClick={onClose}
                  className="flex items-center justify-between px-5 py-3.5 hover:bg-[#FFF8F0] transition-colors text-[#452A22] text-sm font-medium"
                >
                  <span>{cat}</span>
                  <ChevronRight size={15} className="text-[#80665A]" />
                </Link>
              ))}

              <div className="h-px bg-[#F5EAE0] my-3 mx-5" />

              <p className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#80665A]">
                Pages
              </p>
              {[
                { label: "All Products", href: "/menu" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-5 py-3.5 hover:bg-[#FFF8F0] transition-colors text-[#452A22] text-sm font-medium"
                >
                  <span>{link.label}</span>
                  <ChevronRight size={15} className="text-[#80665A]" />
                </Link>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="px-5 py-4 border-t border-[#F5EAE0]">
              <Link
                href="/menu"
                onClick={onClose}
                className="block w-full text-center py-3 bg-[#452A22] text-white rounded-full text-sm font-semibold hover:bg-[#5c3a2e] transition"
              >
                Browse All Products
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
