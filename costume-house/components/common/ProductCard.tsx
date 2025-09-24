import { useState } from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProductCardProps } from "@/interfaces";
import Button from "@/components/common/Button";
import { MyCart } from "@/context/cartContext";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  colors,
  isNew,
  isSale,
}) => {
  const { addToCart } = MyCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="bg-[#ffffff] flex flex-col gap-4   rounded-lg border border-[#1E293B]/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-[#F9FAFB]/20 cursor-pointer group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ padding: "8px", height: "380px" }}
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
            isLiked ? "fill-[#F26646] text-[#F26646]" : "text-[#74747A]"
          }`}
        />
      </Button>

      {/* Product Image */}
      <Link href={`/product/${id}`} className="block">
        <div
          className="relative overflow-hidden rounded-lg mb-4 bg-[#F5F5F7]"
          style={{ marginBottom: "8px", height: "248px" }}
        >
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-100"
            priority={isNew}
            unoptimized={false}
          />

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 space-x-2">
              <Button
                size="icon"
                className="flex-1 bg-white/90 text-[#000000] items-center hover:bg-white"
              >
                <Eye className="h-4 w-4 mr-2" color="black" />
                <div className="text-[#0A0A0B]">Quick View</div>
              </Button>
              <Button
                size="icon"
                className="bg-[#F26646] hover:bg-[#4D278C] text-white"
                onClick={(e) => {
                  e.preventDefault();

                  addToCart({ id, name, price, image });
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
              <span className="text-xs text-[#74747A]">
                +{colors.length - 4}
              </span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 gap-2">
          <span className="font-semibold text-lg text-[#0A0A0B]">R{price}</span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-[#74747A] line-through">
              R{originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
