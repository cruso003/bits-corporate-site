"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Fish, UserCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    icon: UserCheck,
    name: "Find Officer",
    client: "Liberia National Police",
    description:
      "Police accountability platform enabling citizens to verify officers and file complaints/commendations—even without knowing officer details.",
    impact: ["50,000+ citizens served", "1,500+ complaints filed", "80% resolution rate"],
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-blue-500 to-cyan-500",
    href: "/portfolio/find-officer",
  },
  {
    icon: Fish,
    name: "NAFAA Platform",
    client: "Government of Liberia",
    description:
      "Digital fisheries management system modernizing licensing, compliance tracking, and stakeholder engagement for Liberia's fishing sector.",
    impact: ["90% reduction in licensing time", "Real-time data collection", "Improved compliance"],
    tech: ["Django", "React", "PostgreSQL", "AWS"],
    gradient: "from-emerald-500 to-green-500",
    href: "/portfolio/nafaa",
  },
  {
    icon: Shield,
    name: "My Watchman 3.0",
    client: "Advanced Converged Technology",
    description:
      "Life-saving emergency response platform with 15 microservices managing 6 emergency types across Africa with 24/7 professional dispatch.",
    impact: ["6 emergency types", "15 microservices", "24/7 dispatch centers"],
    tech: ["Golang", "Node.js", "AWS ECS", "PostgreSQL"],
    gradient: "from-red-500 to-orange-500",
    href: "/portfolio/my-watchman",
  },
];

export function ProjectsShowcase() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            Projects That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Matter
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            From government digital services to life-saving emergency platforms
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">{project.client}</p>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact Metrics */}
                    <div className="space-y-2 mb-6">
                      {project.impact.map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-3`}
                          />
                          <span className="text-sm font-medium text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-fit group/btn hover:border-blue-600"
                    >
                      <Link href={project.href}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image Placeholder */}
                  <div
                    className={`relative rounded-xl bg-gradient-to-br ${project.gradient} p-1 group-hover:scale-105 transition-transform`}
                  >
                    <div className="bg-white rounded-lg h-full flex items-center justify-center p-8">
                      <div className="text-center">
                        <project.icon className="w-24 h-24 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-400 text-sm">
                          Screenshot placeholder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
