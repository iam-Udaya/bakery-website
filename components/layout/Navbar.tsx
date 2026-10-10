"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  MapPin,
  User,
  Menu,
} from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { products } from "@/data/products";
import MobileMenu from "./MobileMenu";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Navbar() {
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const { count: wishlistCount } = useWishlist();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = searchQuery.trim().length > 1
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#452A22] flex items-center justify-center">
              <span className="text-white text-sm font-bold font-serif">CC</span>
            </div>
            <span className="font-serif text-xl font-bold text-[#452A22] hidden sm:block leading-tight">
              Chef&apos;s<br />
              <span className="text-[#D7A15D] text-lg">Choice</span>
            </span>
          </Link>

          {/* Search */}
          <div ref={searchRef} className="flex-1 max-w-xl relative hidden sm:block">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#80665A]"
              />
              <input
                type="search"
                placeholder="Search cakes, pastries, chocolates, coffee..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full border border-[#F5EAE0] bg-[#FFF8F0] text-sm text-[#452A22] placeholder:text-[#80665A] focus:outline-none focus:border-[#D7A15D] focus:ring-2 focus:ring-[#D7A15D]/20 transition"
              />
            </div>

            {/* Search suggestions */}
            {searchOpen && filtered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-[#F5EAE0] overflow-hidden z-50">
                {filtered.map((p) => (
                  <Link
                    key={p.id}
                    href={`/menu/${p.slug}`}
                    onClick={() => {
                      setSearchQuery("");
                      setSearchOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#FFF8F0] transition-colors"
                  >
                    <Search size={14} className="text-[#80665A]" />
                    <div>
                      <p className="text-sm font-medium text-[#452A22]">
                        {p.name}
                      </p>
                      <p className="text-xs text-[#80665A]">{p.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 ml-auto sm:ml-0">
            {/* Location */}
            <button className="hidden md:flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-[#FFF8F0] transition text-[#452A22] text-xs font-medium">
              <MapPin size={15} className="text-[#D7A15D]" />
              <span>Mumbai</span>
            </button>

            {/* Account */}
            <button
              aria-label="Account"
              className="p-2 rounded-lg hover:bg-[#FFF8F0] transition text-[#452A22]"
            >
              <User size={20} />
            </button>

            {/* Wishlist */}
            <button
              aria-label={`Wishlist (${wishlistCount} items)`}
              className="relative p-2 rounded-lg hover:bg-[#FFF8F0] transition text-[#452A22]"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#F3A5B5] text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded-lg hover:bg-[#FFF8F0] transition text-[#452A22]"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#D7A15D] text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-[#FFF8F0] transition text-[#452A22] sm:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="sm:hidden px-4 pb-3">
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#80665A]"
            />
            <input
              type="search"
              placeholder="Search cakes, pastries, coffee..."
              className="w-full pl-9 pr-4 py-2 rounded-full border border-[#F5EAE0] bg-[#FFF8F0] text-sm text-[#452A22] placeholder:text-[#80665A] focus:outline-none focus:border-[#D7A15D] transition"
            />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <CartDrawer />
    </>
  );
}
