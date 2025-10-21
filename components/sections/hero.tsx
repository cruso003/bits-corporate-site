"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg border border-blue-200/50"
          >
            <Sparkles className="w-4 h-4" />
            Building Africa's Digital Future
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Tomorrow's Digital
            </span>
            <br />
            Infrastructure
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From AI-native fintech to enterprise microservices—we build scalable
            software solutions that transform businesses across Africa
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Code2, text: "Model Context Protocol", gradient: "from-purple-500 to-pink-500" },
              { icon: Zap, text: "15 Microservices on AWS ECS", gradient: "from-blue-500 to-cyan-500" },
              { icon: Sparkles, text: "GPT-4 Integration", gradient: "from-amber-500 to-orange-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-slate-200"
              >
                <div className={`p-1.5 rounded-full bg-gradient-to-r ${item.gradient}`}>
                  <item.icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Trusted By */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <p className="text-sm text-slate-500 mb-6">Trusted by</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-slate-700">Liberia National Police</div>
              <div className="w-1 h-1 rounded-full bg-slate-400" />
              <div className="text-lg font-semibold text-slate-700">NAFAA</div>
              <div className="w-1 h-1 rounded-full bg-slate-400" />
              <div className="text-lg font-semibold text-slate-700">RoviaGate Technology</div>
              <div className="w-1 h-1 rounded-full bg-slate-400" />
              <div className="text-lg font-semibold text-slate-700">The Carter Center</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
