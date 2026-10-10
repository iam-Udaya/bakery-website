"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

interface WishlistContextType {
  items: Product[];
  toggle: (product: Product) => void;
  isWishlisted: (slug: string) => boolean;
  count: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cc_wishlist");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("cc_wishlist", JSON.stringify(items));
    }
  }, [items, hydrated]);

  const toggle = (product: Product) => {
    setItems((prev) =>
      prev.some((i) => i.slug === product.slug)
        ? prev.filter((i) => i.slug !== product.slug)
        : [...prev, product]
    );
  };

  const isWishlisted = (slug: string) => items.some((i) => i.slug === slug);

  return (
    <WishlistContext.Provider
      value={{ items, toggle, isWishlisted, count: items.length }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
