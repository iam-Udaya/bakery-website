import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { CartProvider } from "@/components/cart/CartProvider";
import { WishlistProvider } from "@/components/wishlist/WishlistProvider";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import CategoryNav from "@/components/layout/CategoryNav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chef's Choice — Premium Bakery | Cakes, Pastries & More",
    template: "%s | Chef's Choice",
  },
  description:
    "Discover premium cakes, pastries, chocolates, and café favourites at Chef's Choice. Order fresh, celebrate sweeter.",
  keywords: [
    "bakery",
    "cakes",
    "pastries",
    "chocolate cake",
    "birthday cake",
    "order cake online",
    "Chef's Choice",
  ],
  openGraph: {
    siteName: "Chef's Choice",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <WishlistProvider>
            <AnnouncementBar />
            <Navbar />
            <CategoryNav />
            <main className="flex-1">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#FFFFFF",
              border: "1px solid #F5EAE0",
              color: "#452A22",
              fontFamily: "'DM Sans', sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
