"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Ticket, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Ticket,
    name: "Tick8 Plus",
    tagline: "AI-Native Event Ticketing",
    description:
      "Platform-first ticketing with Xara integration. Purchase tickets through natural conversation—no app download needed.",
    features: [
      "Conversational ticket purchasing via Xara",
      "NFC cashless payments at events",
      "Real-time analytics for organizers",
      "Model Context Protocol integration",
    ],
    gradient: "from-pink-500 to-rose-500",
    href: "/products/tick8plus",
    website: "https://tick8plus.com",
  },
  {
    icon: MessageSquare,
    name: "X-Pay (Xara)",
    tagline: "Africa's First AI Banking Assistant",
    description:
      "WhatsApp-based banking powered by GPT-4. No apps, no commands—just natural conversation in 1000+ languages.",
    features: [
      "GPT-4 conversational AI",
      "Pan-African payment orchestration",
      "Voice banking (Whisper AI)",
      "Model Context Protocol architecture",
    ],
    gradient: "from-blue-500 to-cyan-500",
    href: "/products/xpay",
    website: "https://xpay-bits.com",
  },
  {
    icon: Shield,
    name: "My Watchman 3.0",
    tagline: "Emergency Response Platform",
    description:
      "Life-saving emergency coordination across Africa. 15 microservices on AWS ECS managing 6 emergency types with 24/7 dispatch.",
    features: [
      "6 emergency types (Fire, Medical, Security, SGBV, Roadside, Welfare)",
      "24/7 professional dispatch centers",
      "Smart welfare check-ins",
      "15-microservice architecture on AWS ECS",
    ],
    gradient: "from-red-500 to-orange-500",
    href: "/products/my-watchman",
    website: null,
  },
];

export function ProductsShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Ticket className="w-4 h-4" />
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            Products That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Scale Across Africa
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            We don't just build for clients—we build groundbreaking products serving thousands
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}>
                    {product.tagline}
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600">
                        <span className={`mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 group/btn hover:border-blue-600"
                    >
                      <Link href={product.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    {product.website && (
                      <Button
                        asChild
                        className={`flex-1 bg-gradient-to-r ${product.gradient} hover:opacity-90`}
                      >
                        <Link href={product.website} target="_blank">
                          Visit Site
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
