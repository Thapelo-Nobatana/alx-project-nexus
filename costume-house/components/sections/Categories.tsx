import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Categories: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section className=" bg-[#F5F5F7]/30">
        {/* Categories */}
        <div className="container">
          <div className="text-center mb-16" style={{ marginBottom: "20px" }}>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ marginBottom: "4px" }}
            >
              Shop by Category
            </h2>
            <p className="text-xl text-[#74747A]" style={{ marginTop: "20px" }}>
              Find the perfect style for every occasion.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{ marginTop: "30px", height: "400px" }}
          >
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/catalog?category=${category.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="bg-[linear-gradient(135deg,#FFFFFF,#F5F6FA)] flex flex-col gap-4 rounded-2xl p-8 border border-[#E6E6EB]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-[1.01] group cursor-pointer text-center"
                style={{ padding: "8px" }}
              >
                <div className="relative h-65 w-full overflow-hidden rounded-xl mb-6">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className=" object-cover h-40 transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-[#74747A] mb-4">{category.count}</p>
                  <div className="flex items-center justify-center text-[#6633B9] group-hover:text-[#F26646] transition-colors">
                    <span className="font-medium">Explore</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Categories;
