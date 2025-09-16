import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
   <footer className="bg-gray-500 text-[#FFFFFF]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 gap-2">
              <div className="w-10 h-10 bg-[linear-gradient(135deg,#6633B9,#F26646)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CH</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold">Costume House</h3>
                <p className="text-sm opacity-80">Gallery</p>
              </div>
            </div>
            <p className="text-[#FFFFFF]/80 max-w-xs">
              Crafting premium custom shoes with unmatched quality and style. Express your uniqueness with every step.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#FFFFFF]/60 hover:text-[#F2D55C] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#FFFFFF]/60 hover:text-[#F2D55C] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#FFFFFF]/60 hover:text-[#F2D55C] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#FFFFFF]/60 hover:text-[#F2D55C] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="text-[#FFFFFF]/80 hover:text-[#F2D55C] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=sneakers" className="text-[#FFFFFF]/80 hover:text-[#F2D55C] transition-colors">
                  Sneakers
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=dress" className="text-[#FFFFFF]/80 hover:text-[#F2D55C] transition-colors">
                  Dress Shoes
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=boots" className="text-[#FFFFFF]/80 hover:text-[#F2D55C] transition-colors">
                  Boots
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#FFFFFF]/80 hover:text-[#F2D55C] transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-[#FFFFFF]/80 hover:text-[#F2D55C] transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-[#FFFFFF]/80 hover:text-[#F2D55C] transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-[#FFFFFF]/80 hover:text-[#F2D55C] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2 text-[#FFFFFF]/80">
              <p>123 Church Street</p>
              <p>Pretoria</p>
              <p>+27 (81) 514-6476</p>
              <p>hello@costumehouse.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFFFFF]/20 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#FFFFFF]/60 text-sm">
            © 2025 Costume House Gallery. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#FFFFFF]/60 hover:text-[#F2D55C] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#FFFFFF]/60 hover:text-[#F2D55C] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer;