import {
  allProducts,
  categoriesProducts,
  brands,
  sizes,
  colors,
} from "@/constants";
import { useState } from "react";
import { Filter, Grid, List, Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/common/ProductCard";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import Button from "@/components/common/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    const matchesSize =
      selectedSizes.length === 0 ||
      selectedSizes.some((size) => product.size.includes(size));
    const matchesColor =
      selectedColors.length === 0 ||
      selectedColors.some((color) =>
        product.colors.some(
          (productColor) => productColor.toLowerCase() === color.toLowerCase()
        )
      );
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesSize &&
      matchesColor &&
      matchesPrice
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {categoriesProducts.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center justify-between w-full p-2 rounded-lg text-left transition-colors ${
                selectedCategory === category.id
                  ? "bg-[#6633B9] text-white"
                  : "hover:bg-[#F5F5F7]"
              }`}
            >
              <span>{category.label}</span>
              <span className="text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold mb-4" style={{ marginBottom: "4px" }}>
          Brands
        </h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`block w-full p-2 rounded-lg text-left transition-colors ${
                selectedBrand === brand
                  ? "bg-[#6633B9] text-white"
                  : "hover:bg-[#F5F5F7]"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-semibold mb-4">Sizes</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                if (selectedSizes.includes(size)) {
                  setSelectedSizes(selectedSizes.filter((s) => s !== size));
                } else {
                  setSelectedSizes([...selectedSizes, size]);
                }
              }}
              className={`p-2 rounded-lg border text-center transition-colors ${
                selectedSizes.includes(size)
                  ? "border-[#6633B9] bg-[#6633B9] text-white"
                  : "border-[#E6E6EB] hover:border-[#6633B9]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold mb-4" style={{ marginBottom: "4px" }}>
          Colors
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => {
                if (selectedColors.includes(color.value)) {
                  setSelectedColors(
                    selectedColors.filter((c) => c !== color.value)
                  );
                } else {
                  setSelectedColors([...selectedColors, color.value]);
                }
              }}
              className={`w-10 h-10 rounded-full border-4 transition-all ${
                selectedColors.includes(color.value)
                  ? "border-[#6633B9] scale-110"
                  : "border-gray-200 hover:border-[#6633B9]/50"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="min-h-screen bg-[#FFFFFF]">
        <div className="container py-8" style={{ paddingBlock: "32px" }}>
          {/* Header */}
          <div className="mb-8" style={{ marginBottom: "32px" }}>
            <h1
              className="text-4xl font-bold mb-4"
              style={{ marginBottom: "16px" }}
            >
              Shop Collection
            </h1>
            <p className="text-[#74747A] text-lg">
              Discover our premium collection of customizable shoes
            </p>
          </div>

          {/* Search and Filters */}
          <div
            className=" flex flex-col lg:flex-row gap-4 mb-8"
            style={{ marginBottom: "32px" }}
          >
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#74747A] h-5 w-5"
                style={{ left: "12px" }}
              />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                style={{ paddingLeft: "40px" }}
              />
            </div>

            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48" style={{ width: "192px" }}>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent
                  className="bg-[#ffffff] p-8"
                  style={{ padding: "32px" }}
                >
                  <SelectItem value="featured" className="hover:bg-gray-300">
                    Featured
                  </SelectItem>
                  <SelectItem value="price-low" className="hover:bg-gray-300">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="price-high" className="hover:bg-gray-300">
                    Price: High to Low
                  </SelectItem>
                  <SelectItem value="name" className="hover:bg-gray-300">
                    Name: A to Z
                  </SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden md:flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Filter Toggle */}
              <div className="">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-80 bg-[#a8a8a3]"
                    style={{ width: "320px" }}
                  >
                    <div>
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6" style={{ marginTop: "24px" }}>
                        <FilterSidebar />
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-80 shrink-0">
              <div
                className="sticky top-24 bg-[#FFFFFF] p-6 rounded-xl border"
                style={{ padding: "24px", top: "96px" }}
              >
                <Filter />
              </div>
            </aside>

            {/* Product Grid */}
            <main className="flex-1">
              <div
                className="mb-6 flex items-center justify-between"
                style={{ marginBottom: "24px" }}
              >
                <p className="text-[#74747A]">
                  Showing {sortedProducts.length} of {allProducts.length}{" "}
                  products
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedBrand("All");
                    setSelectedSizes([]);
                    setSelectedColors([]);
                    setSearchTerm("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>

              {sortedProducts.length > 0 ? (
                <div
                  className={`grid gap-6 ${
                    viewMode === "grid"
                      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      category={product.category}
                      colors={product.colors}
                      isNew={product.isNew}
                      isSale={product.isSale}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className=" flex flex-col items-center text-center py-16"
                  style={{ paddingBlock: "64px" }}
                >
                  <div
                    className="w-24 h-24 bg-[#F5F5F7] rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      marginBottom: "24px",
                      width: "96px",
                      height: "96px",
                    }}
                  >
                    <Search className="h-8 w-8 text-[#74747A]" />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ marginBottom: "8px" }}
                  >
                    No products found
                  </h3>
                  <p
                    className="text-[#74747A] mb-6"
                    style={{ marginBottom: "24px" }}
                  >
                    Try adjusting your filters or search terms
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedBrand("All");
                      setSelectedSizes([]);
                      setSelectedColors([]);
                      setSearchTerm("");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
