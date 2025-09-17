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

// import shoeCollection from "@/public/assets/shoe-collection.jpg"
export const featuredProducts = [
  {
    id: "1",
    name: "Custom Air Max Deluxe",
    price: 299,
    originalPrice: 349,
    image: "/assets/Nike_2.jpg",
    category: "Sneakers",
    colors: ["#7C3AED", "#F97316", "#FBBF24", "#000000"],
    isNew: true,
    isSale: true
  },
  {
    id: "2", 
    name: "Luxury Oxford Custom",
    price: 459,
    image: "/assets/Nike_4.jpg",
    category: "Dress Shoes",
    colors: ["#000000", "#8B4513", "#654321"],
    isNew: true
  },
  {
    id: "3",
    name: "Urban Street Runner",
    price: 189,
    originalPrice: 229,
    image: "/assets/Nike_8.jpg",
    category: "Sneakers", 
    colors: ["#FFFFFF", "#7C3AED", "#F97316"],
    isSale: true
  },
  {
    id: "4",
    name: "Elegant Evening Heels",
    price: 329,
    image: "/assets/Nike_8.jpg",
    category: "Heels",
    colors: ["#000000", "#7C3AED", "#FBBF24"]
  }
];

export const categories = [
  { name: "Sneakers", count: "150+ styles", image: "/assets/Nike_8.jpg" },
  { name: "Dress Shoes", count: "80+ styles", image: "/assets/Nike_4.jpg" },
  { name: "Boots", count: "65+ styles", image: "/assets/Nike_6.jpg" },
  { name: "Heels", count: "90+ styles", image: "/assets/Nike_2.jpg" }
];