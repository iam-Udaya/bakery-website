export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review:
      "The chocolate truffle cake from Chef's Choice was absolutely divine. The layers were perfectly moist and the ganache was so rich. My daughter's birthday was made even more special!",
    product: "Chocolate Truffle Cake",
    avatar: "PS",
  },
  {
    id: "2",
    name: "Arjun Mehta",
    location: "Delhi",
    rating: 5,
    review:
      "Ordered the red velvet cake and the cold coffee combo for our anniversary. Both were outstanding — the cake was moist and the coffee was perfectly balanced. Will definitely reorder!",
    product: "Red Velvet Cake + Cold Coffee",
    avatar: "AM",
  },
  {
    id: "3",
    name: "Sneha Patel",
    location: "Bangalore",
    rating: 5,
    review:
      "The brownies are dangerously addictive! Fudgy on the inside, slightly crispy on top. I've already ordered three times this month. Chef's Choice never disappoints.",
    product: "Chocolate Brownie",
    avatar: "SP",
  },
  {
    id: "4",
    name: "Rahul Gupta",
    location: "Pune",
    rating: 4,
    review:
      "Beautiful presentation and even better taste. The cheesecake slice was creamy and the berry topping was perfect. Great quality for the price. Highly recommend!",
    product: "New York Cheesecake",
    avatar: "RG",
  },
];
