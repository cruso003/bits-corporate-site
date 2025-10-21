import { Metadata } from "next";
import { Shield, Fish, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Portfolio | BITS",
  description:
    "Real projects. Real impact. Real results across Africa—from government digital services to life-saving emergency platforms.",
};

const projects = [
  {
    icon: UserCheck,
    name: "Find Officer",
    client: "Liberia National Police",
    year: "2019 - Present",
    description:
      "Police accountability platform enabling citizens to verify officers and file complaints/commendations—even without knowing officer details. Built in partnership with The Carter Center.",
    challenge:
      "After Liberia's civil wars, public trust in police was low. Citizens needed a way to hold officers accountable without barriers.",
    solution:
      "Mobile-first platform with photo-based officer identification, complaint management system, and public transparency dashboard.",
    impact: [
      "50,000+ citizens served",
      "1,500+ complaints/commendations filed",
      "80% complaint resolution rate",
      "45% increase in public trust (surveyed)",
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS", "Facial Recognition"],
    gradient: "from-blue-500 to-cyan-500",
    href: "/portfolio/find-officer",
    status: "Live",
  },
  {
    icon: Fish,
    name: "NAFAA Digital Platform",
    client: "National Fisheries & Aquaculture Authority, Liberia",
    year: "2025 - 2026",
    description:
      "Comprehensive digital platform for managing Liberia's fisheries sector—from licensing and compliance to data collection and stakeholder engagement.",
    challenge:
      "NAFAA's processes were paper-based, causing weeks-long licensing delays and limited data for policy decisions.",
    solution:
      "Modern web platform with online licensing, compliance tracking, mobile field data collection, and analytics dashboard.",
    impact: [
      "90% reduction in licensing time (weeks → days)",
      "Real-time fisheries data for policy",
      "Improved compliance monitoring",
      "Transparent stakeholder operations",
    ],
    tech: ["Django", "React", "PostgreSQL", "AWS", "Progressive Web App"],
    gradient: "from-emerald-500 to-green-500",
    href: "/portfolio/nafaa",
    status: "In Development",
  },
  {
    icon: Shield,
    name: "My Watchman 3.0",
    client: "Advanced Converged Technology LLC",
    year: "2025 - 2026",
    description:
      "Life-saving emergency response platform with 15 microservices managing 6 emergency types (Fire, Medical, Security, SGBV, Roadside, Welfare) across Africa with 24/7 professional dispatch.",
    challenge:
      "Fragmented emergency systems across Africa with no centralized coordination, unclear responder availability, and no family safety tracking.",
    solution:
      "Cloud-native microservices platform on AWS ECS with real-time GPS tracking, smart welfare check-ins, and multi-agency dispatch coordination.",
    impact: [
      "6 emergency types coordinated",
      "15 microservices architecture",
      "24/7 dispatch centers across Africa",
      "Lives saved through proactive safety",
    ],
    tech: [
      "Golang",
      "Node.js",
      "AWS ECS",
      "PostgreSQL",
      "DynamoDB",
      "Redis",
      "SQS",
      "WebSockets",
    ],
    gradient: "from-red-500 to-orange-500",
    href: "/portfolio/my-watchman",
    status: "Live",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl text-blue-200 leading-relaxed">
              Real projects. Real impact. Real results across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                {/* Project Header */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                      {project.name}
                    </h2>
                    <p className="text-slate-600">
                      {project.client} • {project.year}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                        project.status === "Live"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <div>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-red-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-3">
                          The Challenge
                        </h3>
                        <p className="text-sm text-slate-600">{project.challenge}</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-green-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-3">
                          Our Solution
                        </h3>
                        <p className="text-sm text-slate-600">{project.solution}</p>
                      </div>
                    </div>

                    {/* Impact */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Impact</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.impact.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 bg-slate-50 rounded-lg p-4"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}
                            />
                            <span className="text-sm font-semibold text-slate-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <Button
                        asChild
                        className={`bg-gradient-to-r ${project.gradient}`}
                      >
                        <Link href={project.href}>
                          View Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div className="bg-slate-50 rounded-xl p-6">
                      <h3 className="font-bold text-slate-900 mb-4">
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Screenshot Placeholder */}
                    <div
                      className={`relative rounded-xl bg-gradient-to-br ${project.gradient} p-1`}
                    >
                      <div className="bg-white rounded-lg p-8 text-center">
                        <project.icon className="w-16 h-16 text-slate-300 mx-auto mb-3" />
                        <p className="text-sm text-slate-400">
                          Screenshot placeholder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="mt-20 border-t border-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's build something impactful together
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
