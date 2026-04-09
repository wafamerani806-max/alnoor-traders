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
                   
