"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Ready to Build Something
            <br />
            <span className="text-cyan-200">Extraordinary?</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can transform your ideas into scalable software
            solutions that drive real business impact across Africa
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100"
          >
            <a
              href="mailto:hello@bits-innovate.com"
              className="hover:text-white transition-colors"
            >
              hello@bits-innovate.com
            </a>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-blue-300" />
            <span>Lagos, Nigeria</span>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-blue-300" />
            <span>Response within 24 hours</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
