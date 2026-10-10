"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight?: string;
  selectedFlavor?: string;
  cakeMessage?: string;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { slug: string; quantity: number } }
  | { type: "CLEAR_CART" };

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.findIndex(
        (i) =>
          i.product.slug === action.payload.product.slug &&
          i.selectedWeight === action.payload.selectedWeight &&
          i.selectedFlavor === action.payload.selectedFlavor
      );
      if (existing >= 0) {
        const updated = [...state.items];
        updated[existing] = {
          ...updated[existing],
          quantity: updated[existing].quantity + action.payload.quantity,
        };
        return { items: updated };
      }
      return { items: [...state.items, action.payload] };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((i) => i.product.slug !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        items: state.items.map((i) =>
          i.product.slug === action.payload.slug
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isOpen, setIsOpen] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cc_cart");
      if (saved) {
        const parsed: CartItem[] = JSON.parse(saved);
        parsed.forEach((item) =>
          dispatch({ type: "ADD_ITEM", payload: item })
        );
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("cc_cart", JSON.stringify(state.items));
    }
  }, [state.items, hydrated]);

  const addItem = (item: CartItem) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (slug: string) => dispatch({ type: "REMOVE_ITEM", payload: slug });
  const updateQuantity = (slug: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { slug, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
