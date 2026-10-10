export type ProductCategory =
  | "Cakes"
  | "Birthday Cakes"
  | "Anniversary Cakes"
  | "Photo Cakes"
  | "Designer Cakes"
  | "Pastries"
  | "Cupcakes"
  | "Chocolates"
  | "Brownies"
  | "Cookies"
  | "Desserts"
  | "Coffee"
  | "Milkshakes"
  | "Party Essentials"
  | "Gift Hampers"
  | "Savory Bites";

export interface ProductVariant {
  label: string;
  priceModifier: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  isBestseller?: boolean;
  isEggless?: boolean;
  image: string;
  images?: string[];
  weightVariants?: ProductVariant[];
  flavors?: string[];
  tags?: string[];
}

export const products: Product[] = [
  // ── BESTSELLING CAKES ──────────────────────────────────────────
  {
    id: "1",
    slug: "chocolate-truffle-cake",
    name: "Chocolate Truffle Cake",
    description:
      "Indulge in layers of rich dark chocolate sponge, velvety truffle filling, and a glossy chocolate ganache finish. A timeless classic for every chocolate lover.",
    category: "Cakes",
    price: 699,
    originalPrice: 849,
    discount: 18,
    rating: 4.8,
    reviewCount: 1240,
    isBestseller: true,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    weightVariants: [
      { label: "0.5 kg", priceModifier: 0 },
      { label: "1 kg", priceModifier: 300 },
      { label: "2 kg", priceModifier: 700 },
    ],
    flavors: ["Classic Chocolate", "Dark Chocolate", "White Chocolate"],
    tags: ["chocolate", "truffle", "bestseller"],
  },
  {
    id: "2",
    slug: "black-forest-cake",
    name: "Black Forest Cake",
    description:
      "A German classic reimagined — layers of chocolate sponge soaked in cherry syrup, filled with whipped cream and cherries, topped with chocolate shavings.",
    category: "Cakes",
    price: 649,
    originalPrice: 799,
    discount: 19,
    rating: 4.7,
    reviewCount: 980,
    isBestseller: true,
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80",
    weightVariants: [
      { label: "0.5 kg", priceModifier: 0 },
      { label: "1 kg", priceModifier: 280 },
      { label: "2 kg", priceModifier: 650 },
    ],
    tags: ["black forest", "cherry", "classic"],
  },
  {
    id: "3",
    slug: "red-velvet-cake",
    name: "Red Velvet Cake",
    description:
      "Vibrant red layers of moist velvet sponge paired with tangy cream cheese frosting. An irresistibly elegant cake that's as beautiful as it is delicious.",
    category: "Cakes",
    price: 799,
    rating: 4.9,
    reviewCount: 1560,
    isBestseller: true,
    image:
      "https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=600&q=80",
    weightVariants: [
      { label: "0.5 kg", priceModifier: 0 },
      { label: "1 kg", priceModifier: 350 },
      { label: "2 kg", priceModifier: 800 },
    ],
    flavors: ["Classic Red Velvet", "Chocolate Red Velvet"],
    tags: ["red velvet", "cream cheese", "premium"],
  },
  {
    id: "4",
    slug: "butterscotch-cake",
    name: "Butterscotch Cake",
    description:
      "Soft vanilla sponge layered with butterscotch cream and crunchy praline bits, finished with a golden butterscotch glaze. Pure nostalgia in every bite.",
    category: "Cakes",
    price: 599,
    originalPrice: 699,
    discount: 14,
    rating: 4.6,
    reviewCount: 742,
    isBestseller: true,
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
    weightVariants: [
      { label: "0.5 kg", priceModifier: 0 },
      { label: "1 kg", priceModifier: 250 },
      { label: "2 kg", priceModifier: 600 },
    ],
    tags: ["butterscotch", "praline", "classic"],
  },
  {
    id: "5",
    slug: "pineapple-cake",
    name: "Pineapple Cake",
    description:
      "Light and airy pineapple sponge layered with fresh pineapple chunks and whipped cream. A refreshing treat that's a perennial crowd-pleaser.",
    category: "Cakes",
    price: 549,
    rating: 4.5,
    reviewCount: 614,
    isEggless: true,
    image:
      "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600&q=80",
    weightVariants: [
      { label: "0.5 kg", priceModifier: 0 },
      { label: "1 kg", priceModifier: 220 },
      { label: "2 kg", priceModifier: 550 },
    ],
    tags: ["pineapple", "eggless", "light"],
  },
  {
    id: "6",
    slug: "chocolate-fudge-cake",
    name: "Chocolate Fudge Cake",
    description:
      "Dense, fudgy, and intensely chocolatey — this cake is layered with silky chocolate fudge frosting and chocolate chips for the ultimate indulgence.",
    category: "Cakes",
    price: 749,
    originalPrice: 899,
    discount: 17,
    rating: 4.8,
    reviewCount: 892,
    isBestseller: true,
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80",
    weightVariants: [
      { label: "0.5 kg", priceModifier: 0 },
      { label: "1 kg", priceModifier: 320 },
      { label: "2 kg", priceModifier: 750 },
    ],
    tags: ["fudge", "chocolate", "rich"],
  },

  // ── PASTRIES & DESSERTS ────────────────────────────────────────
  {
    id: "7",
    slug: "red-velvet-pastry",
    name: "Red Velvet Pastry",
    description:
      "A petite, perfectly layered red velvet pastry with cream cheese frosting — a café-style indulgence for any time of day.",
    category: "Pastries",
    price: 120,
    originalPrice: 145,
    discount: 17,
    rating: 4.7,
    reviewCount: 328,
    isBestseller: true,
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    tags: ["red velvet", "pastry", "café"],
  },
  {
    id: "8",
    slug: "chocolate-pastry",
    name: "Chocolate Pastry",
    description:
      "Moist chocolate sponge slices layered with rich chocolate cream and topped with chocolate ganache. A bite-sized chocolate dream.",
    category: "Pastries",
    price: 110,
    rating: 4.6,
    reviewCount: 441,
    image:
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&q=80",
    tags: ["chocolate", "pastry", "ganache"],
  },
  {
    id: "9",
    slug: "black-forest-pastry",
    name: "Black Forest Pastry",
    description:
      "Individual black forest pastry with cherry compote, whipped cream, and chocolate shavings. All the goodness of a classic in one perfect slice.",
    category: "Pastries",
    price: 110,
    rating: 4.5,
    reviewCount: 287,
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80",
    tags: ["black forest", "pastry", "cherry"],
  },
  {
    id: "10",
    slug: "chocolate-brownie",
    name: "Chocolate Brownie",
    description:
      "Dense, fudgy, crinkle-topped brownies baked with premium dark chocolate and walnuts. Warm them for 20 seconds for the perfect melt-in-the-mouth experience.",
    category: "Brownies",
    price: 129,
    originalPrice: 149,
    discount: 13,
    rating: 4.8,
    reviewCount: 1102,
    isBestseller: true,
    isEggless: false,
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=80",
    tags: ["brownie", "fudge", "dark chocolate"],
  },
  {
    id: "11",
    slug: "chocolate-cupcake",
    name: "Chocolate Cupcake",
    description:
      "Fluffy chocolate cupcakes crowned with generous swirls of chocolate buttercream. Fun, festive, and delicious for all ages.",
    category: "Cupcakes",
    price: 99,
    rating: 4.6,
    reviewCount: 589,
    isEggless: true,
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80",
    tags: ["cupcake", "chocolate", "eggless"],
  },
  {
    id: "12",
    slug: "cheesecake-slice",
    name: "New York Cheesecake",
    description:
      "Creamy, dense New York-style cheesecake on a buttery graham cracker crust, finished with a luscious berry compote.",
    category: "Desserts",
    price: 179,
    originalPrice: 199,
    discount: 10,
    rating: 4.9,
    reviewCount: 678,
    isBestseller: true,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    tags: ["cheesecake", "new york", "berry"],
  },

  // ── COFFEE & BEVERAGES ─────────────────────────────────────────
  {
    id: "13",
    slug: "classic-cold-coffee",
    name: "Classic Cold Coffee",
    description:
      "Freshly brewed espresso blended with chilled milk and a hint of vanilla. Smooth, creamy, and energising — your perfect companion.",
    category: "Coffee",
    price: 149,
    rating: 4.7,
    reviewCount: 902,
    isBestseller: true,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    tags: ["cold coffee", "espresso", "classic"],
  },
  {
    id: "14",
    slug: "chocolate-frappe",
    name: "Chocolate Frappe",
    description:
      "A decadent blend of chocolate, espresso, and iced milk, topped with whipped cream and chocolate drizzle. The ultimate café-style treat.",
    category: "Coffee",
    price: 179,
    originalPrice: 199,
    discount: 10,
    rating: 4.8,
    reviewCount: 634,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
    tags: ["frappe", "chocolate", "whipped cream"],
  },
  {
    id: "15",
    slug: "caramel-cold-coffee",
    name: "Caramel Cold Coffee",
    description:
      "Smooth cold brew coffee kissed with buttery caramel syrup and topped with sea salt caramel drizzle. Sweet with a satisfying depth.",
    category: "Coffee",
    price: 169,
    rating: 4.6,
    reviewCount: 512,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    tags: ["caramel", "cold coffee", "sea salt"],
  },
  {
    id: "16",
    slug: "vanilla-milkshake",
    name: "Vanilla Milkshake",
    description:
      "Thick, creamy vanilla bean milkshake made with premium ice cream and whole milk. Topped with whipped cream and a cherry.",
    category: "Milkshakes",
    price: 179,
    rating: 4.5,
    reviewCount: 387,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    tags: ["milkshake", "vanilla", "creamy"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.isBestseller);
}
