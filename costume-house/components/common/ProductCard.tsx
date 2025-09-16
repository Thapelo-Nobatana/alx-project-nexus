import { useState } from "react";
import {Heart, ShoppingCart, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProductCardProps } from "@/interfaces";
import Button from "@/components/common/Button";
import { useCart } from "@/context/cartContext"


const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    originalPrice,
    image,
    category,
    colors,
    isNew,
    isSale
}) => {
    const { addToCart } = useCart()
    const [isLiked, setIsLiked ] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
 return (
    <div 
      className="bg-[#ffffff] p-6 border border-[#1E293B]/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-[#F9FAFB]/20 cursor-pointer group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
        {isNew && (
          <span className="bg-[#F2D55C] text-[#0A0A0B] px-2 py-1 rounded-md text-xs font-medium">
            New
          </span>
        )}
        {isSale && (
          <span className="bg-[#F26646] text-[#FFFFFF] px-2 py-1 rounded-md text-xs font-medium">
            Sale
          </span>
        )}
      </div>

      {/* Like Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm hover:bg-white"
        onClick={(event) => {
          event.preventDefault();
          setIsLiked(!isLiked);
        }}
      >
        <Heart 
          className={`h-4 w-4 transition-colors ${
            isLiked ? 'fill-[#F26646] text-[#F26646]' : 'text-[#74747A]'
          }`} 
        />
      </Button>

      {/* Product Image */}
      <Link href={`/product/${id}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-4 bg-[#F5F5F7]" style={{marginBottom: "4px"}}>
          <Image
            src={image}
            alt={name}
            width={400}
            height={256}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            priority={isNew}
            unoptimized={false}
          />

          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
              <Button size="sm"  className="flex-1 bg-white/90 text-foreground hover:bg-white">
                <Eye className="h-4 w-4 mr-2" />
                Quick View
              </Button>
              <Button 
                size="icon" 
                className="bg-[#6633B9] hover:bg-[#4D278C] text-white"
                onClick={(e) => {
                  e.preventDefault();
                  
                  addToCart({ id, name, price, image});

                }}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-xs text-[#747474] uppercase tracking-wider font-medium">
          {category}
        </p>
        
        <Link href={`/product/${id}`}>
          <h3 className="font-medium text-[#0A0A0B] hover:text-[#6633B9] transition-colors">
            {name}
          </h3>
        </Link>

        {/* Colors */}
        <div className="flex space-x-2">
          {colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
          {colors.length > 4 && (
            <div className="w-5 h-5 rounded-full bg-muted border-2 border-white flex items-center justify-center">
              <span className="text-xs text-[#74747A]">+{colors.length - 4}</span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-lg text-[#0A0A0B]">
            ${price}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-[#74747A] line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
 )
}

export default ProductCard;