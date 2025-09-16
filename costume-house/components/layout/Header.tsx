
 import { ShoppingCart, Search, User } from "lucide-react";

import Button from "../common/Button";
import Link from "next/link";
import { HEADER_LINKS } from "@/constants";
import { MOBILE_LINKS } from "@/constants";
import { motion, AnimatePresence } from "motion/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiX } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Refbutton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        Refbutton.current &&
        !Refbutton.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E6E6EB]/50">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 gap-2">
          <div className="w-10 h-10 bg-[linear-gradient(135deg,#6633B9,#F26646)] rounded-lg flex items-center justify-center">
             <span className="text-white font-bold text-xl">CH</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-playfair text-xl md:text-2xl font-bold text-[#0A0A0B]">Costume House</h1>
            <p className="text-xs text-[#0A0A0B] -mt-1">Gallery</p>
          </div>
        </Link>

        <nav className="hidden md:flex justify-between gap-4 items-center">
          <ul className="flex no-underline md:gap-3 lg:gap-3 xl:gap-8 justify-center items-center transition-all duration-300 ease-in-out">
            {HEADER_LINKS.map(({ link, href }) => (
              <li
                key={href}
                className="text-[#0A0A0B]  hover:text-[#6633B9]  transition-colors font-medium"
              >
                <Link href={href}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Link href={"/cart"}>
              <Button variant="ghost" size="icon" className="relative ">
                  <ShoppingCart className="h-5 w-5" />
                      <span className="relative -top-1 -right-1 bg-[#F26646] text-white text-xs rounded-full h-10 w-10 flex items-center " style={{"width": "10"}}>
                    3
                   </span>
              </Button>
            </Link>
        </div>

        {/* Hamburger menu button */}
        <button
          ref={Refbutton}
          onClick={toggleMenu}
          style={{ padding: 0 }}
          className=" md:hidden"
        >
          {isMenuOpen ? (
            <HiX size={48} onClick={toggleMenu} color="#6633B9" />
          ) : (
            <RxHamburgerMenu size={48} onClick={toggleMenu} color="#6633B9" />
          )}
        </button>
      </div>

      {/* Dropdown menu  */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="absolute h-100 top-20 w-full flex flex-col items-center justify-around shadow-lg text-center bg-[linear-gradient(135deg,#6633B9,#F26646)] md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {MOBILE_LINKS.map(({ link, href }) => (
              <li
                key={href}
                className="flex flex-col items-center justify-center rounded-md text-xl text-white"
              >
                <Link href={href}>{link}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;