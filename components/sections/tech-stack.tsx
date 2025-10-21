"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    items: ["React Native", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Golang", "Java Spring"],
  },
  {
    category: "AI/ML",
    items: ["GPT-4", "Claude", "Whisper", "MCP"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Redis", "DynamoDB", "MongoDB"],
  },
  {
    category: "Cloud",
    items: ["AWS ECS", "Lambda", "RDS", "S3"],
  },
  {
    category: "Payments",
    items: ["Stripe", "MTN", "Orange", "M-Pesa"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Terraform", "GitHub Actions"],
  },
];

export function TechStack() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
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
            <Code2 className="w-4 h-4" />
            Technology Stack
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            Built With{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Tools
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Battle-tested technologies that enable us to deliver scalable, maintainable solutions
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl border-2 border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {tech.category}
              </h3>
              <div className="space-y-2">
                {tech.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600">
            And many more—we choose the right tool for each project
          </p>
        </motion.div>
      </div>
    </section>
  );
}
