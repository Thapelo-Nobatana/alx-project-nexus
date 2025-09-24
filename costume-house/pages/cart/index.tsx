import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

import { MyCart } from "@/context/cartContext";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Cart() {
  const [promoCode, setPromoCode] = useState("");

  const { cart, removeFromCart, updateQuantity } = MyCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 200 ? 0 : 15;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;
  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="min-h-screen flex justify-center items-center bg-[#FFFFFF]">
          <div className="container py-16" style={{ paddingBlock: "64px" }}>
            <div className="max-w-md mx-auto text-center flex flex-col justify-center items-center">
              <div
                className="w-24 h-24 bg-[#F5F5F7] rounded-full flex items-center justify-center mx-auto mb-8"
                style={{ marginBottom: "32px" }}
              >
                <ShoppingBag className="h-12 w-12 text-[#74747A]" />
              </div>
              <h1
                className="text-3xl font-bold mb-4"
                style={{ marginBottom: "16px" }}
              >
                Your Cart is Empty
              </h1>
              <p
                className="text-[#74747A] mb-8"
                style={{ marginBottom: "32px" }}
              >
                Looks like you haven&apos;t added any shoes to your cart yet.
              </p>
              <Link href="/catalog">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#6633B9] to-[#F26646] text-white px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-one focus:ring-4 focus:ring-[#6633B9]/25"
                >
                  Start Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="min-h-screen bg-[#FFFFFF]">
        <div className="container py-8" style={{ paddingBlock: "32px" }}>
          <div className="mb-8" style={{ marginBottom: "32px" }}>
            <h1
              className="text-4xl font-bold mb-2"
              style={{ marginBottom: "8px" }}
            >
              Shopping Cart
            </h1>
            <p className="text-[#74747A]">
              {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFFFFF]  p-6 rounded-2xl border border-[#E6E6EB]"
                  style={{ padding: "24px" }}
                >
                  <div className="flex gap-6">
                    <div className="w-24 h-24 shrink-0">
                      <Image
                        src={item.image}
                        width={96}
                        height={96}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div
                        className="flex justify-between items-start mb-2"
                        style={{ marginBottom: "8px" }}
                      >
                        <div>
                          <h3
                            className="font-semibold text-lg mb-1"
                            style={{ marginBottom: "4px" }}
                          >
                            {item.name}
                          </h3>
                          <div className="text-sm text-[#74747A] space-y-1">
                            <p>Size: Uk {item.size}</p>
                            <p>Color: {item.color}</p>
                            {item.customText && (
                              <p>Custom Text: {item.customText}</p>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#E54848] hover:text-[#E54848] hover:bg-[#E54848]/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className=" sm:flex flex-col md:flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span
                            className="font-medium w-8 text-center"
                            style={{ width: "32px" }}
                          >
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-left md:text-right">
                          <p className="font-semibold text-lg">
                            R {(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-[#74747A]">
                            R {item.price} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div
                className="bg-[#FFFFFF] p-6 rounded-2xl border sticky top-8"
                style={{ padding: "24px", top: "32px" }}
              >
                <h2
                  className="text-xl font-semibold mb-6"
                  style={{ marginBottom: "24px" }}
                >
                  Order Summary
                </h2>

                <div
                  className="space-y-4 mb-6"
                  style={{ marginBottom: "24px" }}
                >
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : `R${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>R{tax.toFixed(2)}</span>
                  </div>
                  <div
                    className="border-t pt-4"
                    style={{ paddingTop: "16px", borderTop: "1px" }}
                  >
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>R{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6" style={{ marginBottom: "24px" }}>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 border border-[#5FE7EB] rounded-lg bg-[#FFFFFF] text-sm"
                      style={{ paddingBlock: "8px", paddingInline: "12px" }}
                    />
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                </div>

                {shipping > 0 && (
                  <div
                    className="mb-6 p-4 bg-[#F2D55C]/10 rounded-lg"
                    style={{ marginBottom: "24px", padding: "16px" }}
                  >
                    <p className="text-sm text-[0A0A0B]">
                      💡 Add R{(200 - subtotal).toFixed(2)} more for free
                      shipping!
                    </p>
                  </div>
                )}

                <div className=" flex flex-col gap-2 space-y-3">
                  <Link href="/checkout" className="block">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#6633B9] to-[#F26646] text-white px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-one focus:ring-4 focus:ring-[#6633B9]/25"
                    >
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/catalog">
                    <Button variant="outline" size="lg" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
