import { ArrowRight, Zap, Palette, Award } from "lucide-react";
import Link from "next/link";
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";
import { featuredProducts } from "@/constants";
import { motion } from "framer-motion";
const Feature: React.FC = () => {
  return (
    <>
      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section className=" bg-[#F5F5F7]/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="flex flex-col text-center items-center justify-center gap-4 space-y-4  hover:transition-transform duration-300 ease-out -translate-y-2 shadow-lg cursor-pointer"
                style={{ padding: "4px", height: "300px" }}
              >
                <div className="w-16 h-16 bg-[linear-gradient(135deg,#5E1FBF,#7C3AED)] rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-[#74747A]">
                  Get your custom shoes delivered in just 7-10 business days
                  with our streamlined process.
                </p>
              </div>
              <div className="flex flex-col text-center items-center justify-center gap-4 space-y-4  hover:transition-transform duration-300 ease-out -translate-y-2 shadow-lg cursor-pointer">
                <div className="w-16 h-16 bg-[linear-gradient(135deg,#F26646,#F78A6F)] rounded-full flex items-center justify-center mx-auto">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">
                  Unlimited Customization
                </h3>
                <p className="text-[#74747A]">
                  Choose from hundreds of colors, patterns, materials, and
                  personalization options.
                </p>
              </div>
              <div className="flex flex-col text-center items-center justify-center gap-4 space-y-4  hover:transition-transform duration-300 ease-out -translate-y-2 shadow-lg cursor-pointer">
                <div className="w-16 h-16 bg-[#F2D55C] rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-[0A0A0B]" />
                </div>
                <h3 className="text-xl font-semibold">Premium Quality</h3>
                <p className="text-[#74747A]">
                  Handcrafted with the finest materials by skilled artisans for
                  lasting comfort and style.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F5F5F7]/30">
          {/* Features Products */}
          <div className="container flex flex-col gap-4">
            <div
              className=" flex flex-col items-center gap-4 text-center mb-16"
              style={{ marginBottom: "16px" }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ marginBottom: "4px" }}
              >
                Featured Designs
              </h2>
              <p className="text-xl text-[#74747A] max-w-2xl mx-auto">
                Discover our most popular custom creations, loved by customers
                worldwide.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              style={{ marginTop: "10px" }}
            >
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  colors={product.colors}
                  image={product.image}
                  originalPrice={product.originalPrice}
                  isNew={product.isNew}
                  isSale={product.isSale}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/catalog">
                <Button size="lg" className="btn-hero">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Feature;
