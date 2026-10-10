import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Share2,
  Heart,
  PlayCircle,
} from "lucide-react";

const shopLinks = [
  { label: "All Products", href: "/menu" },
  { label: "Cakes", href: "/menu?category=cakes" },
  { label: "Birthday Cakes", href: "/menu?category=birthday-cakes" },
  { label: "Anniversary Cakes", href: "/menu?category=anniversary-cakes" },
  { label: "Pastries", href: "/menu?category=pastries" },
  { label: "Chocolates", href: "/menu?category=chocolates" },
  { label: "Desserts", href: "/menu?category=desserts" },
  { label: "Party Essentials", href: "/menu?category=party-essentials" },
];

const infoLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2D1A14] text-[#F5EAE0]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#D7A15D] flex items-center justify-center">
              <span className="text-white text-sm font-bold font-serif">CC</span>
            </div>
            <div>
              <p className="font-serif text-xl font-bold text-white leading-tight">
                Chef&apos;s Choice
              </p>
              <p className="text-[#D7A15D] text-xs">Premium Bakery</p>
            </div>
          </div>
          <p className="text-sm text-[#80665A] leading-relaxed mb-6">
            Crafting moments of joy, one bite at a time. Premium cakes, pastries,
            and café favourites — made with love for every celebration.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { Icon: Share2, label: "Instagram", href: "#" },
              { Icon: Heart, label: "Facebook", href: "#" },
              { Icon: PlayCircle, label: "YouTube", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-[#452A22] flex items-center justify-center hover:bg-[#D7A15D] transition-colors text-[#F5EAE0]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-serif text-white font-semibold mb-5 text-base">
            Shop
          </h3>
          <ul className="space-y-2.5">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-[#80665A] hover:text-[#D7A15D] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-serif text-white font-semibold mb-5 text-base">
            Information
          </h3>
          <ul className="space-y-2.5">
            {infoLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-[#80665A] hover:text-[#D7A15D] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif text-white font-semibold mb-5 text-base">
            Customer Support
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <Phone size={15} className="text-[#D7A15D] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-[#80665A]">Phone</p>
                <p className="text-sm text-[#F5EAE0]">+91 XXXXX XXXXX</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Mail size={15} className="text-[#D7A15D] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-[#80665A]">Email</p>
                <p className="text-sm text-[#F5EAE0]">hello@chefschoice.in</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={15} className="text-[#D7A15D] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-[#80665A]">Address</p>
                <p className="text-sm text-[#F5EAE0]">
                  [Your Store Address]
                  <br />
                  Mumbai, Maharashtra
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Clock size={15} className="text-[#D7A15D] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-[#80665A]">Hours</p>
                <p className="text-sm text-[#F5EAE0]">
                  Mon–Sat: 9 AM – 9 PM
                  <br />
                  Sun: 10 AM – 8 PM
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#452A22] py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#80665A] text-center">
            © {new Date().getFullYear()} Chef&apos;s Choice. All rights reserved.
          </p>
          <p className="text-xs text-[#80665A]">
            Prices in INR. Taxes included.
          </p>
        </div>
      </div>
    </footer>
  );
}
