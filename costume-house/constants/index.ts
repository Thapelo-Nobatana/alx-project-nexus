export const HEADER_LINKS = [
  {
    id: 1,
    link: "Home",
    href: "/",
  },
  {
    id: 2,
    link: "Shop",
    href: "/catalog",
  },
  {
    id: 3,
    link: "Categories",
    href: "/categories",
  },
  {
    id: 4,
    link: "Customize",
    href: "/customize",
  },
];

export const MOBILE_LINKS = [
  {
    id: 1,
    link: "Home",
    href: "/",
  },
  {
    id: 2,
    link: "Shop",
    href: "/catalog",
  },
  {
    id: 3,
    link: "Categories",
    href: "/categories",
  },
  {
    id: 4,
    link: "customize",
    href: "/customize",
  },
  {
    id: 5,
    link: "Login",
    href: "/login",
  },
];

export const brands = ["All", "Nike", "Adidas", "Custom", "Timberland"];
export const sizes = [6, 7, 8, 9, 10, 11, 12];

export const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Purple", value: "#7C3AED" },
  { name: "Orange", value: "#F97316" },
  { name: "Gold", value: "#FBBF24" },
  { name: "Brown", value: "#8B4513" },
];

export const featuredProducts = [
  {
    id: "1",
    name: "Custom Air Max Deluxe",
    price: 2990.0,
    originalPrice: 3490.0,
    image: "/assets/Nike_2.jpg",
    category: "Sneakers",
    colors: ["#7C3AED", "#F97316", "#FBBF24", "#000000"],
    isNew: true,
    isSale: true,
  },
  {
    id: "2",
    name: "Luxury Oxford Custom",
    price: 4590.0,
    image: "/assets/Nike_4.jpg",
    category: "Dress Shoes",
    colors: ["#000000", "#8B4513", "#654321"],
    isNew: true,
  },
  {
    id: "3",
    name: "Urban Street Runner",
    price: 1890.0,
    originalPrice: 1229.0,
    image: "/assets/Nike_8.jpg",
    category: "Sneakers",
    colors: ["#FFFFFF", "#7C3AED", "#F97316"],
    isSale: true,
  },
  {
    id: "4",
    name: "Elegant Evening Heels",
    price: 3290.0,
    image: "/assets/Nike_8.jpg",
    category: "Heels",
    colors: ["#000000", "#7C3AED", "#FBBF24"],
  },
];

export const categories = [
  { name: "Sneakers", count: "150+ styles", image: "/assets/Nike_8.jpg" },
  { name: "Dress Shoes", count: "80+ styles", image: "/assets/Nike_4.jpg" },
  { name: "Boots", count: "65+ styles", image: "/assets/Nike_6.jpg" },
  { name: "Heels", count: "90+ styles", image: "/assets/Nike_2.jpg" },
];

export const allProducts = [
  {
    id: "1",
    name: "Custom Air Max Deluxe",
    price: 299,
    originalPrice: 349,
    image: "/assets/Nike_2.jpg",
    category: "sneakers",
    colors: ["#7C3AED", "#F97316", "#FBBF24", "#000000"],
    isNew: true,
    isSale: true,
    size: [8, 9, 10, 11],
    brand: "Nike",
  },
  {
    id: "2",
    name: "Luxury Oxford Custom",
    price: 459,
    image: "/assets/Nike_8.jpg",
    category: "dress",
    colors: ["#000000", "#8B4513", "#654321"],
    isNew: true,
    size: [8, 9, 10, 11, 12],
    brand: "Custom",
  },
  {
    id: "3",
    name: "Urban Street Runner",
    price: 189,
    originalPrice: 229,
    image: "/assets/Nike_8.jpg",
    category: "sneakers",
    colors: ["#FFFFFF", "#7C3AED", "#F97316"],
    isSale: true,
    size: [7, 8, 9, 10, 11],
    brand: "Adidas",
  },
  {
    id: "4",
    name: "Elegant Evening Heels",
    price: 329,
    image: "/assets/Nike_8.jpg",
    category: "heels",
    colors: ["#000000", "#7C3AED", "#FBBF24"],
    size: [6, 7, 8, 9, 10],
    brand: "Custom",
  },
  {
    id: "5",
    name: "Classic Leather Boots",
    price: 399,
    image: "/assets/Nike_4.jpg",
    category: "boots",
    colors: ["#8B4513", "#000000", "#654321"],
    size: [8, 9, 10, 11, 12],
    brand: "Timberland",
  },
  {
    id: "6",
    name: "Sport Performance Pro",
    price: 249,
    originalPrice: 289,
    image: "/assets/Nike_8.jpg",
    category: "sneakers",
    colors: ["#FFFFFF", "#000000", "#7C3AED"],
    isSale: true,
    size: [7, 8, 9, 10, 11, 12],
    brand: "Nike",
  },
];

export const categoriesProducts = [
  { id: "all", label: "All Categories", count: allProducts.length },
  {
    id: "sneakers",
    label: "Sneakers",
    count: allProducts.filter((p) => p.category === "sneakers").length,
  },
  {
    id: "dress",
    label: "Dress Shoes",
    count: allProducts.filter((p) => p.category === "dress").length,
  },
  {
    id: "boots",
    label: "Boots",
    count: allProducts.filter((p) => p.category === "boots").length,
  },
  {
    id: "heels",
    label: "Heels",
    count: allProducts.filter((p) => p.category === "heels").length,
  },
];

export const orderItems = [
  {
    id: "1",
    name: "Custom Air Max Deluxe",
    price: 299,
    quantity: 1,
    size: 10,
    color: "Royal Purple",
    customText: "JOHN",
    image: "/assets/Nike_8.jpg",
  },
  {
    id: "2",
    name: "Urban Street Runner",
    price: 189,
    quantity: 2,
    size: 9,
    color: "Classic Black",
    image: "/assets/Nike_8.jpg",
  },
];

export const productData = {
  id: "1",
  name: "Custom Air Max Deluxe",
  price: 299,
  originalPrice: 349,
  rating: 4.8,
  reviews: 127,
  description:
    "Experience the perfect blend of style and performance with our Custom Air Max Deluxe. Featuring premium materials, advanced cushioning technology, and unlimited customization options.",
  features: [
    "Premium leather and textile upper",
    "Air Max cushioning technology",
    "Durable rubber outsole",
    "Custom color options",
    "Personalized text engraving",
    "Handcrafted quality",
  ],
  images: [
    "/assets/Nike_8.jpg",
    "/assets/Nike_8.jpg",
    "/assets/Nike_8.jpg",
    "/assets/Nike_8.jpg",
  ],
  colors: [
    { name: "Royal Purple", value: "#7C3AED" },
    { name: "Vibrant Orange", value: "#F97316" },
    { name: "Classic Black", value: "#000000" },
    { name: "Pure White", value: "#FFFFFF" },
    { name: "Gold Accent", value: "#FBBF24" },
  ],
  sizes: [6, 7, 8, 9, 10, 11, 12],
  patterns: ["Solid", "Gradient", "Geometric", "Abstract", "Custom Upload"],
};
