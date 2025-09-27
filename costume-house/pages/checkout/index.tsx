import { useState } from "react";
import { CreditCard, Lock, CheckCircle, Truck } from "lucide-react";
import Link from "next/link";
import Button from "@/components/common/Button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { orderItems } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    saveInfo: false,
    newsletter: false,
  });

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Process order
      toast.success("Order placed successfully!", {
        description: "You'll receive a confirmation email shortly.",
      });
    }
  };

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
              className="text-4xl font-bold mb-4"
              style={{ marginBottom: "16px" }}
            >
              Checkout
            </h1>

            {/* Progress Steps */}
            <div
              className="flex items-center space-x-8 mb-8"
              style={{ marginBottom: "32px" }}
            >
              {[
                { step: 1, title: "Shipping", icon: Truck },
                { step: 2, title: "Payment", icon: CreditCard },
                { step: 3, title: "Confirmation", icon: CheckCircle },
              ].map(({ step: stepNum, title, icon: Icon }) => (
                <div
                  key={stepNum}
                  className={`flex items-center space-x-2 ${
                    step >= stepNum ? "text-[#6633B9]" : "text-[#74747A]"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNum
                        ? "bg-[#6633B9] text-white"
                        : "bg-[#F5F5F7] text-[#74747A]"
                    }`}
                  >
                    {step > stepNum ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Icon className="h-4 w-4" />
                    )}
                  </div>
                  <span className="font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div
                    className="bg-[#FFFFFF] p-8 rounded-2xl border"
                    style={{ padding: "32px" }}
                  >
                    <h2
                      className="text-2xl font-semibold mb-6"
                      style={{ marginBottom: "24px" }}
                    >
                      Shipping Information
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            required
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            required
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          required
                          placeholder="123 Main Street"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) =>
                              handleInputChange("city", e.target.value)
                            }
                            required
                            placeholder="Pretoria"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">Provance</Label>
                          <Select
                            value={formData.state}
                            onValueChange={(value) =>
                              handleInputChange("state", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#FFFFFF] P-4">
                              <SelectItem
                                value="Gauteng"
                                className="hover:bg-gray-300"
                              >
                                Gauteng
                              </SelectItem>
                              <SelectItem
                                value="Limpopo"
                                className="hover:bg-gray-300"
                              >
                                Limpopo
                              </SelectItem>
                              <SelectItem
                                value="Western Cape"
                                className="hover:bg-gray-300"
                              >
                                western Cape
                              </SelectItem>
                              <SelectItem
                                value="KZN"
                                className="hover:bg-gray-300"
                              >
                                KZN
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={(e) =>
                              handleInputChange("zipCode", e.target.value)
                            }
                            required
                            placeholder="10001"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                          placeholder="+27 (81) 123-4567"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="saveInfo"
                          checked={formData.saveInfo}
                          onCheckedChange={(checked: boolean) =>
                            handleInputChange("saveInfo", checked as boolean)
                          }
                        />
                        <Label htmlFor="saveInfo" className="text-sm">
                          Save this information for faster checkout next time
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full mt-8 bg-gradient-to-r from-[#6633B9] to-[#F26646] text-white px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#6633B9]/25"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div
                    className="bg-[#FFFFFF] p-8 rounded-2xl border"
                    style={{ padding: "32px" }}
                  >
                    <h2
                      className="text-2xl font-semibold mb-6 flex items-center"
                      style={{ marginBottom: "24px" }}
                    >
                      <Lock
                        className="h-5 w-5 mr-2 text-[#6633B9]"
                        style={{ marginRight: "8px" }}
                      />
                      Payment Information
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) =>
                            handleInputChange("cardNumber", e.target.value)
                          }
                          required
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) =>
                              handleInputChange("expiryDate", e.target.value)
                            }
                            required
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) =>
                              handleInputChange("cvv", e.target.value)
                            }
                            required
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          value={formData.cardName}
                          onChange={(e) =>
                            handleInputChange("cardName", e.target.value)
                          }
                          required
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked: boolean) =>
                            handleInputChange("newsletter", checked as boolean)
                          }
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for exclusive offers
                        </Label>
                      </div>
                    </div>

                    <div
                      className="flex gap-4 mt-8"
                      style={{ marginTop: "32px" }}
                    >
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Back to Shipping
                      </Button>
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 bg-gradient-to-r from-[#6633B9] to-[#F26646] text-white px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#6633B9]/25"
                      >
                        Place Order
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div
                    className="bg-[#ffffff] p-8 rounded-2xl border text-center"
                    style={{ padding: "32px" }}
                  >
                    <div
                      className="w-20 h-20 bg-[#2BAA4C] rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ marginBottom: "24px" }}
                    >
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h2
                      className="text-3xl font-bold mb-4"
                      style={{ marginBottom: "16px" }}
                    >
                      Order Confirmed!
                    </h2>
                    <p
                      className="text-[#74747A] mb-6"
                      style={{ marginBottom: "24px" }}
                    >
                      Thank you for your order. We&apos;ll send you a
                      confirmation email shortly.
                    </p>
                    <div
                      className="bg-[#F5F5F7]/50 p-4 rounded-lg mb-6"
                      style={{ padding: "16px", marginBottom: "24px" }}
                    >
                      <p className="font-medium">Order #12345</p>
                      <p className="text-sm text-[#74747A]">
                        Estimated delivery: 7-10 business days
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <Link href="/catalog" className="flex-1">
                        <Button variant="outline" size="lg" className="w-full">
                          Continue Shopping
                        </Button>
                      </Link>
                      <Link href="/" className="flex-1">
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-[#6633B9] to-[#F26646] text-white px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#6633B9]/25"
                        >
                          Back to Home
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </form>
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
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-[#74747A]">
                          Size {item.size} • {item.color}
                        </p>
                        {item.customText && (
                          <p className="text-xs text-[#74747A]">
                            Text: {item.customText}
                          </p>
                        )}
                        <div
                          className="flex justify-between items-center mt-1"
                          style={{ marginTop: "4px" }}
                        >
                          <span className="text-xs text-[#74747A]">
                            Qty: {item.quantity}
                          </span>
                          <span className="font-medium text-sm">
                            R {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>R {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>R {shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>R {tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-3">
                    <span>Total</span>
                    <span>R {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
