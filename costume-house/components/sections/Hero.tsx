import { ArrowRight, Palette } from "lucide-react";

import heroImage from "@/public/assets/hero-shoes.jpg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"

const Hero:React.FC = () => {
    return (
       <motion.div
       initial={{ opacity: 0, y: 30 }}
       animate={{opacity: 1, y: 0}}
       transition={{duration: 0.8, ease: "easeOut"}}
       >
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Hero */}
            <div className="absolute inset-0">
                <Image
                    src={heroImage}
                    alt="Custom luxury shoes"
                    fill
                    className="object-cover"
                    priority
                />
               <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            </div>
            <div className="relative container text-center text-white z-10">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold font-playfair leading-tight">
                        Craft Your
                        <span className="bg-[linear-gradient(135deg,#6633B9,#F26646)] bg-clip-text text-transparent">Perfect</span>
                        Step
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                     Design premium custom shoes that reflect your unique style. From concept to creation, 
                       every detail is crafted just for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8" style={{paddingTop: "8px"}}>
                        <Link href="/customize">
                          <button className="bg-[linear-gradient(135deg,#6633B9,#F26646)] text-white  rounded-xl font-semibold transform transition-all duration-300 hover:scale-150 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#F9FAFB]/25 text-lg px-10 py-5 "> 
                            Start Customizing
                             <Palette className="ml-2 h-5 w-5" />
                          </button>
                        </Link>
                        <Link href={"/catalog"}>
                            <button className="bg-white/10 border-2 border-[#FFFFFF]/30 text-[#FFFFFF] rounded-lg font-medium transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#0A0A0B] focus:outline-none focus:rign-4 focus:ring-[#6633B9]/25 text-lg px-8 py-4" >
                                Shop Collection
                                 <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
       </motion.div>
    )
}

export default Hero;