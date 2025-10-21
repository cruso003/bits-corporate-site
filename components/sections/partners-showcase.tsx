"use client";

import { motion } from "framer-motion";
import { Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const partners = [
  {
    name: "RoviaGate Technology LLC",
    description: "Premier African ICT firm",
    relationship: "Principal Technology Partner",
    projects: ["Find Officer", "Budget Management Systems", "Government Projects"],
  },
  {
    name: "Advanced Converged Technology",
    description: "Security & IoT Solutions",
    relationship: "Security Platform Partner",
    projects: ["My Watchman 3.0", "Smart Building Solutions"],
  },
  {
    name: "The Carter Center",
    description: "Democratic Governance",
    relationship: "Impact Partner",
    projects: ["Find Officer", "Police Accountability"],
  },
];

export function PartnersShowcase() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Handshake className="w-4 h-4" />
            Strategic Partners
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Building{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Collaborating with leading organizations to deliver exceptional solutions
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-blue-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-slate-600 mb-3">{partner.description}</p>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4">
                {partner.relationship}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Joint Projects:
                </p>
                {partner.projects.map((project, i) => (
                  <p key={i} className="text-sm text-slate-600">
                    • {project}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover:border-blue-600"
          >
            <Link href="/partners">
              Learn More About Our Partnerships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
