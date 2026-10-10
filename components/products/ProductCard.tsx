"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Star, Zap } from "lucide-react";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/components/cart/CartProvider";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, setIsOpen } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const [adding, setAdding] = useState(false);
  const wishlisted = isWishlisted(product.slug);

  const handleAddToCart = async () => {
    setAdding(true);
    addItem({ product, quantity: 1 });
    toast.success(`${product.name} added to bag!`, {
      description: formatPrice(product.price),
      action: {
        label: "View Bag",
        onClick: () => setIsOpen(true),
      },
      duration: 3000,
    });
    await new Promise((r) => setTimeout(r, 600));
    setAdding(false);
  };

  const handleWishlist = () => {
    toggle(product);
    toast(wishlisted ? "Removed from wishlist" : "Added to wishlist!", {
      icon: wishlisted ? "💔" : "❤️",
      duration: 2000,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#F5EAE0] hover:border-[#D7A15D]/40 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#FFF8F0]" style={{ paddingBottom: "75%" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.discount && (
            <span className="bg-[#D7A15D] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {product.discount}% OFF
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-[#452A22] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <Zap size={8} />
              Bestseller
            </span>
          )}
          {product.isEggless && (
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
              Eggless
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={handleWishlist}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-all hover:scale-110"
        >
          <Heart
            size={15}
            className={wishlisted ? "fill-[#F3A5B5] text-[#F3A5B5]" : "text-[#80665A]"}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-[#452A22] leading-tight line-clamp-2 mb-1">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={10}
                  className={
                    s <= Math.round(product.rating!)
                      ? "fill-[#D7A15D] text-[#D7A15D]"
                      : "text-[#F5EAE0] fill-[#F5EAE0]"
                  }
                />
              ))}
            </div>
            <span className="text-[10px] text-[#80665A]">
              {product.rating} ({product.reviewCount?.toLocaleString()})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base font-bold text-[#452A22]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-[#80665A] line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          disabled={adding}
          aria-label={`Add ${product.name} to bag`}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold transition-all ${
            adding
              ? "bg-[#D7A15D] text-white scale-95"
              : "bg-[#452A22] text-white hover:bg-[#5c3a2e] hover:shadow-md active:scale-95"
          }`}
        >
          <ShoppingBag size={13} />
          {adding ? "Added!" : "Add to Bag"}
        </button>
      </div>
    </motion.article>
  );
}
