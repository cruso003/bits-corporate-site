import { Metadata } from "next";
import { Ticket, MessageSquare, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Products | BITS",
  description:
    "Groundbreaking products serving thousands across Africa—from AI-native fintech to life-saving emergency platforms.",
};

const products = [
  {
    icon: Ticket,
    name: "Tick8 Plus",
    tagline: "AI-Native Event Ticketing",
    description:
      "Platform-first ticketing with Xara integration. Purchase tickets through natural conversation—no app download needed. Organizers get enterprise infrastructure; attendees get conversational simplicity.",
    features: [
      "Conversational ticket purchasing via Xara",
      "NFC cashless payments at events",
      "Real-time analytics for organizers",
      "Model Context Protocol integration",
    ],
    stats: ["10,000+ tickets sold", "500+ events hosted", "$500K+ processed"],
    gradient: "from-pink-500 to-rose-500",
    href: "/products/tick8plus",
    website: "https://tick8plus.com",
    status: "Live",
  },
  {
    icon: MessageSquare,
    name: "X-Pay (Xara)",
    tagline: "Africa's First AI Banking Assistant",
    description:
      "WhatsApp-based banking powered by GPT-4. No apps, no commands—just natural conversation in 1000+ languages. Pan-African payment orchestration through a unified wallet.",
    features: [
      "GPT-4 conversational AI",
      "Pan-African payment orchestration",
      "Voice banking (Whisper AI)",
      "Model Context Protocol architecture",
    ],
    stats: ["Beta in Liberia", "1000+ languages", "Target: 50M users by 2027"],
    gradient: "from-blue-500 to-cyan-500",
    href: "/products/xpay",
    website: "https://xpay-bits.com",
    status: "Beta",
  },
  {
    icon: Shield,
    name: "My Watchman 3.0",
    tagline: "Emergency Response Platform",
    description:
      "Life-saving emergency coordination across Africa. 15 microservices on AWS ECS managing 6 emergency types with 24/7 professional dispatch centers and verified responders.",
    features: [
      "6 emergency types (Fire, Medical, Security, SGBV, Roadside, Welfare)",
      "24/7 professional dispatch centers",
      "Smart welfare check-ins",
      "15-microservice architecture on AWS ECS",
    ],
    stats: ["15 microservices", "24/7 dispatch", "Pan-African coverage"],
    gradient: "from-red-500 to-orange-500",
    href: "/products/my-watchman",
    website: null,
    status: "Live",
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 leading-relaxed">
              We don't just build for clients—we build groundbreaking products serving
              thousands across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-extrabold text-slate-900">
                          {product.name}
                        </h2>
                        <p
                          className={`text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                        >
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-bold text-slate-900 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600">
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mt-2 mr-3 flex-shrink-0`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {product.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 bg-white rounded-lg border-2 border-slate-200"
                        >
                          <span className="text-sm font-semibold text-slate-700">
                            {stat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Status Badge */}
                    <div className="mb-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          product.status === "Live"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        asChild
                        className={`bg-gradient-to-r ${product.gradient}`}
                      >
                        <Link href={product.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {product.website && (
                        <Button asChild variant="outline">
                          <Link href={product.website} target="_blank">
                            Visit Website
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Visual */}
                  <div
                    className={`relative bg-gradient-to-br ${product.gradient} p-1 lg:p-0`}
                  >
                    <div className="bg-white h-full flex items-center justify-center p-12 lg:rounded-l-2xl">
                      <div className="text-center">
                        <product.icon className="w-32 h-32 text-slate-200 mx-auto mb-4" />
                        <p className="text-slate-400">Product screenshot placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Want to Build a Product?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We've built our own products—we know what it takes to go from idea to
            thousands of users
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">
              Discuss Your Product Idea
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
