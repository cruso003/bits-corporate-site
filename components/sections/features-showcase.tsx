"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Box,
  Braces,
  Brain,
  Cloud,
  Code2,
  Container,
  CreditCard,
  Database,
  GitBranch,
  Layers,
  MessageSquare,
  Network,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    icon: Braces,
    title: "Model Context Protocol",
    description: "Production MCP servers powering X-Pay and Tick8 Plus conversational interfaces",
    gradient: "from-purple-500 to-purple-600",
    delay: 0,
  },
  {
    icon: Container,
    title: "15-Microservice Architecture",
    description: "Cloud-native systems on AWS ECS with auto-scaling and high availability",
    gradient: "from-blue-500 to-blue-600",
    delay: 0.1,
  },
  {
    icon: Brain,
    title: "GPT-4 Integration",
    description: "AI-native applications with natural language understanding and tool execution",
    gradient: "from-indigo-500 to-indigo-600",
    delay: 0.2,
  },
  {
    icon: MessageSquare,
    title: "Conversational Banking",
    description: "WhatsApp-based financial services serving thousands across Africa",
    gradient: "from-green-500 to-green-600",
    delay: 0.3,
  },
  {
    icon: Layers,
    title: "Platform Engineering",
    description: "Backend systems designed for AI-first, app-optional user experiences",
    gradient: "from-pink-500 to-pink-600",
    delay: 0.4,
  },
  {
    icon: Database,
    title: "Event-Driven Design",
    description: "SQS, EventBridge, and WebSockets for real-time distributed systems",
    gradient: "from-amber-500 to-amber-600",
    delay: 0.5,
  },
  {
    icon: Smartphone,
    title: "React Native Expertise",
    description: "Cross-platform apps optimized for African connectivity and devices",
    gradient: "from-red-500 to-red-600",
    delay: 0.6,
  },
  {
    icon: CreditCard,
    title: "Payment Orchestration",
    description: "Multi-provider integration across Stripe, MTN, Orange, M-Pesa, Airtel",
    gradient: "from-emerald-500 to-emerald-600",
    delay: 0.7,
  },
  {
    icon: Box,
    title: "Government-Grade Security",
    description: "Compliance-ready systems for police, government agencies, and fintech",
    gradient: "from-cyan-500 to-cyan-600",
    delay: 0.8,
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    description: "WebSocket-based dashboards with sub-second updates and live tracking",
    gradient: "from-violet-500 to-violet-600",
    delay: 0.9,
  },
  {
    icon: Network,
    title: "API-First Architecture",
    description: "RESTful and GraphQL APIs designed for third-party integrations",
    gradient: "from-orange-500 to-orange-600",
    delay: 1,
  },
  {
    icon: Cloud,
    title: "AWS Infrastructure",
    description: "ECS, RDS, S3, Lambda—production-grade cloud architecture that scales",
    gradient: "from-slate-500 to-slate-600",
    delay: 1.1,
  },
];

export function FeaturesShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg border border-blue-200/50">
            <Sparkles className="w-4 h-4" />
            Technical Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            Built With{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cutting-Edge Tech
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From microservices architecture to AI integration—comprehensive technical expertise for modern software
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: capability.delay * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-white/80 backdrop-blur-sm border-2 hover:border-transparent relative overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 group-hover:bg-clip-text transition-all">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Modern architecture for African realities—reliable with intermittent connectivity, optimized for mobile-first users, designed to scale
          </p>
        </motion.div>
      </div>
    </section>
  );
}
