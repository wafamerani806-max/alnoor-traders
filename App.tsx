/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Facebook, 
  Youtube, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2,
  Instagram,
  ExternalLink,
  Truck,
  Wallet,
  Clock,
  PackageCheck,
  Droplets,
  Sparkles,
  ShieldCheck,
  Zap,
  Thermometer,
  Layers,
  ChevronDown,
  ChevronUp,
  Wind,
  Sun
} from "lucide-react";

const WHATSAPP_NUMBER = "923338919195";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const products = [
  {
    id: "nine-leaves",
    name: "Nine Leaves Herbal Oil",
    description: "A premium blend of nine essential herbs designed for deep nourishment, hair thickening, and rapid growth.",
    focus: "Hair Thickening & Growth",
    prices: [
      { size: "100ml", price: "500" },
      { size: "200ml", price: "1000" }
    ],
    image: "https://i.ibb.co/p6dMrbNq/Screenshot-20260408-224946.png",
    whatsappMsg: "Hello Al Noor Traders, I want to buy Nine Leaves Herbal Oil."
  },
  {
    id: "black-rose",
    name: "Black Rose Hair Tonic",
    description: "Infused with silk proteins to eliminate frizz and leave your hair silky smooth and manageable.",
    focus: "Frizz-Free & Silk Protein",
    prices: [
      { size: "190ml", price: "800" }
    ],
    image: "https://i.ibb.co/jkKRfv4d/Screenshot-20260408-224652.png",
    whatsappMsg: "Hello Al Noor Traders, I want to buy Black Rose Hair Tonic."
  }
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/1Xr6L8Y3i4/" },
  { name: "TikTok", icon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ), url: "https://www.tiktok.com/@alnoorlayyah" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@alnoortradersly" }
];

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    product: `${products[0].name} (${products[0].prices[0].size})`
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [expandedSection, setExpandedSection] = useState<string | null>("nine-leaves-details");

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const openWhatsApp = (msg?: string) => {
    const url = msg ? `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(msg)}` : WHATSAPP_BASE_URL;
    window.open(url, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, address, phoneNumber, product } = formData;
    const msg = `New Order!\nName: ${fullName}\nAddress: ${address}\nPhone: ${phoneNumber}\nProduct: ${product}`;
    openWhatsApp(msg);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-olive/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-serif font-bold">A</div>
            <span className="font-serif text-xl font-bold tracking-tight text-brand-green">Al Noor Traders</span>
          </div>
          <button 
            onClick={() => openWhatsApp()}
            className="flex items-center gap-2 bg-brand-green text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Contact Us</span>
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-brand-olive/10 text-brand-olive text-xs font-semibold tracking-wider uppercase mb-6">
                  Premium Hair Care Solutions
                </span>
                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-brand-green leading-[1.1] mb-8">
                  Natural Secret to <br />
                  <span className="italic text-brand-olive">Stronger, Silkier</span> Hair
                </h1>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                  Discover the power of nature with Al Noor Traders. Our herbal oils and tonics are crafted in Layyah to give your hair the nourishment it deserves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openWhatsApp("Hello Al Noor Traders, I'm interested in your hair care products.")}
                    className="flex items-center justify-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all group"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Order via WhatsApp
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href="#products"
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-brand-green border border-brand-green/20 hover:bg-brand-green/5 transition-all"
                  >
                    View Products
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-brand-olive/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-green mb-4">Our Signature Collection</h2>
              <div className="w-24 h-1 bg-brand-olive mx-auto rounded-full opacity-30" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {products.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group bg-brand-cream rounded-3xl overflow-hidden flex flex-col md:flex-row border border-brand-olive/5 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-brand-green px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        {product.focus}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-brand-green mb-3">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="space-y-3 mb-8">
                        {product.prices.map((p, i) => (
                          <div key={i} className="flex items-center justify-between bg-white/50 p-3 rounded-xl border border-brand-olive/5">
                            <span className="text-sm font-medium text-gray-500">{p.size}</span>
                            <span className="text-lg font-bold text-brand-green">Rs {p.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button 
                      onClick={() => openWhatsApp(product.whatsappMsg)}
                      className="w-full bg-brand-green text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-olive transition-colors shadow-lg shadow-brand-green/10"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Buy Now via WhatsApp
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Details & How to Use */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-green mb-4">Deep Dive: Benefits & Usage</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Learn more about how our products work and how to get the best results.</p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Nine Leaves Details */}
              <div className="border border-brand-olive/10 rounded-[32px] overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleSection("nine-leaves-details")}
                  className="w-full flex items-center justify-between p-8 bg-brand-cream/30 hover:bg-brand-cream/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-white">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-brand-green text-left">Why Choose Nine Leaves Advanced Thickening Oil?</h3>
                  </div>
                  {expandedSection === "nine-leaves-details" ? <ChevronUp className="w-6 h-6 text-brand-olive" /> : <ChevronDown className="w-6 h-6 text-brand-olive" />}
                </button>
                
                {expandedSection === "nine-leaves-details" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-8 bg-white border-t border-brand-olive/5"
                  >
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      A solid blend of traditional ingredients for repair, strengthening, and preventing hair fall. Our formula is rooted in ancient wisdom and backed by natural science.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {[
                        { title: "Growth", desc: "Mustard Oil & Brahmi to stimulate scalp.", icon: Zap },
                        { title: "Dandruff", desc: "Neem & Aloe Vera for scalp health.", icon: ShieldCheck },
                        { title: "Shine", desc: "Argan Oil & Henna for silky texture.", icon: Sparkles },
                        { title: "Strength", desc: "Amla & Shikakai to prevent thinning.", icon: Layers },
                        { title: "Anti-Graying", desc: "Fenugreek (Methi) to protect against white hair.", icon: ShieldCheck }
                      ].map((benefit, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-brand-cream/20 border border-brand-olive/5">
                          <div className="mt-1">
                            <benefit.icon className="w-5 h-5 text-brand-olive" />
                          </div>
                          <div>
                            <p className="font-bold text-brand-green">{benefit.title}</p>
                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-brand-green/5 border border-brand-green/10 rounded-3xl p-8">
                      <h4 className="font-serif text-xl font-bold text-brand-green mb-6 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        How to Apply (Usage Guide)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
                        {[
                          { step: "01", title: "Warm Oil", desc: "Slightly warm the oil for better penetration." },
                          { step: "02", title: "Massage", desc: "Gently massage into scalp for 10-15 mins." },
                          { step: "03", title: "Overnight", desc: "Leave it overnight for deep nourishment." },
                          { step: "04", title: "Wash", desc: "Wash with a mild herbal shampoo." }
                        ].map((step, i) => (
                          <div key={i} className="relative">
                            <span className="text-3xl font-serif font-black text-brand-green/10 absolute -top-2 -left-2">{step.step}</span>
                            <div className="relative z-10">
                              <p className="font-bold text-brand-green mb-1">{step.title}</p>
                              <p className="text-xs text-gray-500 leading-tight">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Black Rose Details */}
              <div className="border border-brand-olive/10 rounded-[32px] overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleSection("black-rose-details")}
                  className="w-full flex items-center justify-between p-8 bg-brand-cream/30 hover:bg-brand-cream/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-olive rounded-2xl flex items-center justify-center text-white">
                      <Wind className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-brand-green text-left">Black Rose Super Cream Hair Tonic - Frizz-Free Perfection</h3>
                  </div>
                  {expandedSection === "black-rose-details" ? <ChevronUp className="w-6 h-6 text-brand-olive" /> : <ChevronDown className="w-6 h-6 text-brand-olive" />}
                </button>
                
                {expandedSection === "black-rose-details" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-8 bg-white border-t border-brand-olive/5"
                  >
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Features weightless fiber silicon technology to smooth 100% roughness. Returns moisture lost to sun and heat styling, leaving your hair with a professional salon finish.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { title: "Heat Protection", desc: "Ideal for sun and heat styling recovery.", icon: Sun },
                        { title: "Chemical Repair", desc: "Perfect for perming or coloring treatments.", icon: Thermometer },
                        { title: "Glossy Finish", desc: "Vitamin E & Silk Protein for high shine.", icon: Sparkles }
                      ].map((benefit, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-brand-olive/5 border border-brand-olive/5 text-center">
                          <div className="mx-auto w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-olive mb-4 shadow-sm">
                            <benefit.icon className="w-5 h-5" />
                          </div>
                          <p className="font-bold text-brand-green mb-2">{benefit.title}</p>
                          <p className="text-sm text-gray-600">{benefit.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Delivery & Order Details */}
        <section id="order" className="py-24 bg-brand-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-green mb-4">Delivery & Order Details</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Dispatched from our main store at <span className="font-bold text-brand-green">Main Rd, Layyah</span></p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Form */}
              <div className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-[40px] shadow-sm border border-brand-olive/5">
                <div className="mb-8">
                  <p className="text-brand-olive font-medium bg-brand-olive/5 inline-block px-4 py-2 rounded-full text-sm">
                    Delivery: This will also be used as your billing address for this order.
                  </p>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-sm font-bold text-brand-green ml-1">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-green focus:outline-none transition-all text-gray-700 placeholder:text-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phoneNumber" className="block text-sm font-bold text-brand-green ml-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        placeholder="e.g. 0333 1234567"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-green focus:outline-none transition-all text-gray-700 placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="product" className="block text-sm font-bold text-brand-green ml-1">Product Selection</label>
                    <select
                      id="product"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-green focus:outline-none transition-all text-gray-700 appearance-none bg-white"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%232d4a22\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem' }}
                    >
                      <option value="Nine Leaves Herbal Oil (100ml)">Nine Leaves Herbal Oil (100ml) - Rs 500</option>
                      <option value="Nine Leaves Herbal Oil (200ml)">Nine Leaves Herbal Oil (200ml) - Rs 1000</option>
                      <option value="Black Rose Hair Tonic (190ml)">Black Rose Hair Tonic (190ml) - Rs 800</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-bold text-brand-green ml-1">Complete Delivery Address</label>
                    <textarea
                      id="address"
                      name="address"
                      required
                      rows={3}
                      placeholder="Enter your full house address, city, and area"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-green focus:outline-none transition-all text-gray-700 placeholder:text-gray-300 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-green text-white py-5 rounded-3xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-olive transition-all shadow-xl shadow-brand-green/20 group"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Order via WhatsApp
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Delivery Info Cards */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-[32px] border border-brand-olive/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-brand-green text-xl mb-2">Fast Shipping</h4>
                  <p className="text-gray-600 leading-relaxed">Delivery within <span className="font-bold text-brand-green">2-4 working days</span> across Pakistan.</p>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-brand-olive/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-brand-green text-xl mb-2">Cash on Delivery</h4>
                  <p className="text-gray-600 leading-relaxed">Pay only when you receive your order. <span className="font-bold text-brand-green">100% Safe & Secure.</span></p>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-brand-olive/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-brand-green text-xl mb-2">Order Tracking</h4>
                  <p className="text-gray-600 leading-relaxed">Real-time updates via WhatsApp. <br /> <span className="font-bold text-brand-green">0333 8919195</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits / Trust Signals */}
        <section className="py-24 bg-brand-green text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  Why Choose <br />
                  <span className="italic text-brand-cream/80">Al Noor Traders?</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "100% Natural Herbal Ingredients",
                    "Proven Results for Hair Growth",
                    "Silk Protein for Frizz Control",
                    "Trusted by Thousands in Layyah",
                    "Direct Delivery via WhatsApp"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-brand-cream" />
                      <span className="text-lg font-medium text-brand-cream/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg p-10 rounded-[40px] border border-white/10">
                <h3 className="font-serif text-2xl font-bold mb-8 text-center">Join Our Community</h3>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-white/5 p-4 rounded-2xl hover:bg-white/15 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <social.icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold">{social.name}</span>
                      </div>
                      <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[40px] p-8 lg:p-16 shadow-xl border border-brand-olive/5 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/5 text-brand-green rounded-full text-sm font-bold mb-6">
                  <MapPin className="w-4 h-4" />
                  Visit Our Store
                </div>
                <h2 className="font-serif text-4xl font-bold text-brand-green mb-6">Find Us in Layyah</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We are located at the heart of Layyah. Come visit us for a personal consultation and to explore our full range of herbal products.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-brand-olive/10 rounded-lg text-brand-olive">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-green">Address</p>
                      <p className="text-gray-600">XXC8+8PR, Main Rd, Layyah</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-brand-olive/10 rounded-lg text-brand-olive">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-green">Contact</p>
                      <p className="text-gray-600">0333 8919195</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/EcHx5ZXSLcKrX8Ya8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Get Directions on Google Maps
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="lg:w-1/2 w-full h-[400px] rounded-3xl overflow-hidden shadow-inner border-4 border-brand-cream">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.786542345678!2d70.9423456!3d30.9634567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU3JzQ4LjQiTiA3MMKwNTYnMzIuNCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al Noor Traders Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-green text-brand-cream/60 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-serif font-bold">A</div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">Al Noor Traders</span>
            </div>
            
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <p className="text-sm">
              © {new Date().getFullYear()} Al Noor Traders. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile) */}
      <button 
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all lg:hidden"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
}
