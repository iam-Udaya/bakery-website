"use client";

import { useCart } from "@/components/cart/CartProvider";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } =
    useCart();

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
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm z-50 bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F5EAE0]">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#452A22]" />
                <h2 className="font-serif text-lg font-bold text-[#452A22]">
                  Your Bag
                </h2>
                {totalItems > 0 && (
                  <span className="bg-[#D7A15D] text-white text-xs rounded-full px-2 py-0.5 font-semibold">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close cart"
                className="p-1.5 rounded-lg hover:bg-[#FFF8F0] transition text-[#452A22]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-4">
                  <div className="w-20 h-20 rounded-full bg-[#FFF8F0] flex items-center justify-center">
                    <ShoppingBag size={36} className="text-[#D7A15D]" />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-[#452A22] font-semibold">
                      Your bag is empty
                    </p>
                    <p className="text-sm text-[#80665A] mt-1">
                      Add some delicious treats!
                    </p>
                  </div>
                  <Link
                    href="/menu"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 px-6 py-2.5 bg-[#452A22] text-white rounded-full text-sm font-semibold hover:bg-[#5c3a2e] transition"
                  >
                    Browse Products
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.product.slug}-${item.selectedWeight}-${item.selectedFlavor}`}
                    className="flex gap-3 items-start"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#FFF8F0]">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#452A22] leading-tight truncate">
                        {item.product.name}
                      </p>
                      {item.selectedWeight && (
                        <p className="text-xs text-[#80665A] mt-0.5">
                          {item.selectedWeight}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        {/* Qty controls */}
                        <div className="flex items-center gap-1.5 bg-[#FFF8F0] rounded-full px-2 py-1">
                          <button
                            aria-label="Decrease quantity"
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(item.product.slug, item.quantity - 1);
                              } else {
                                removeItem(item.product.slug);
                              }
                            }}
                            className="w-5 h-5 flex items-center justify-center text-[#452A22] hover:text-[#D7A15D] transition"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold text-[#452A22] w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            aria-label="Increase quantity"
                            onClick={() =>
                              updateQuantity(item.product.slug, item.quantity + 1)
                            }
                            className="w-5 h-5 flex items-center justify-center text-[#452A22] hover:text-[#D7A15D] transition"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-sm font-bold text-[#452A22]">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                    <button
                      aria-label="Remove item"
                      onClick={() => removeItem(item.product.slug)}
                      className="p-1 text-[#80665A] hover:text-red-500 transition flex-shrink-0"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#F5EAE0] px-5 py-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#80665A]">Subtotal</span>
                  <span className="font-bold text-[#452A22]">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-xs text-[#80665A]">
                  Delivery charges calculated at checkout
                </p>
                <Link
                  href="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 bg-[#452A22] text-white rounded-full text-sm font-semibold hover:bg-[#5c3a2e] transition"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-2.5 border border-[#D7A15D] text-[#452A22] rounded-full text-sm font-medium hover:bg-[#FFF8F0] transition"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
