import { ReactNode } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  children?: ReactNode;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isActive?: boolean;
  size?: string;
  className?: string;
}

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors: string[];
  isNew?: boolean;
  isSale?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: number;
  color?: string;
  customText?: string;
}

export interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
}
