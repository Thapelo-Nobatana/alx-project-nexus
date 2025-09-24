import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Palette,
  Type,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import shoeCollection from "@/assets/shoe-collection.jpg";

const productData = {
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
  images: [shoeCollection, shoeCollection, shoeCollection, shoeCollection],
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

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedPattern, setSelectedPattern] = useState("Solid");
  const [customText, setCustomText] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    toast.success("Added to cart!", {
      description: `${productData.name} - Size ${selectedSize} - ${selectedColor.name}`,
    });
  };

  const totalPrice = productData.price * quantity;

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-muted aspect-square">
              <img
                src={productData.images[selectedImage]}
                alt={productData.name}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart
                  className={`h-5 w-5 transition-colors ${
                    isLiked
                      ? "fill-secondary text-secondary"
                      : "text-muted-foreground"
                  }`}
                />
              </Button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg aspect-square border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{productData.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.floor(productData.rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({productData.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">${totalPrice}</span>
                {productData.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${productData.originalPrice * quantity}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Customization Options */}
            <div className="space-y-6 p-6 bg-muted/30 rounded-2xl">
              <h3 className="text-xl font-semibold flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Customize Your Shoe
              </h3>

              {/* Color Selection */}
              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Color: {selectedColor.name}
                </Label>
                <div className="flex gap-3">
                  {productData.colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 ${
                        selectedColor.value === color.value
                          ? "border-primary scale-110"
                          : "border-gray-200"
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Size (US)
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {productData.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary text-white"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pattern Selection */}
              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Pattern
                </Label>
                <Select
                  value={selectedPattern}
                  onValueChange={setSelectedPattern}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {productData.patterns.map((pattern) => (
                      <SelectItem key={pattern} value={pattern}>
                        {pattern}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Custom Text */}
              <div>
                <Label className="text-sm font-medium mb-3 block flex items-center">
                  <Type className="h-4 w-4 mr-2" />
                  Custom Text (Optional)
                </Label>
                <Input
                  placeholder="Enter custom text..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  maxLength={20}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {customText.length}/20 characters
                </p>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Label className="text-sm font-medium">Quantity:</Label>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 btn-hero"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ${totalPrice}
                </Button>
                <Button size="lg" variant="outline" className="btn-secondary">
                  <Palette className="h-5 w-5 mr-2" />
                  Customize More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <div className="bg-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">
                  Product Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {productData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="bg-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">
                  Customer Reviews
                </h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div
                      key={review}
                      className="border-b border-border pb-6 last:border-b-0"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                          U{review}
                        </div>
                        <div>
                          <p className="font-medium">Customer {review}</p>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="h-4 w-4 fill-accent text-accent"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Amazing quality and customization options. The shoes fit
                        perfectly and look exactly as designed. Highly
                        recommended!
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="mt-8">
              <div className="bg-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">
                  Shipping Information
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>Standard Shipping:</strong> 7-10 business days (Free
                    on orders over $200)
                  </p>
                  <p>
                    <strong>Express Shipping:</strong> 3-5 business days ($15)
                  </p>
                  <p>
                    <strong>Overnight Shipping:</strong> 1-2 business days ($35)
                  </p>
                  <p>
                    <strong>Custom Orders:</strong> Additional 3-5 business days
                    for customization
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
