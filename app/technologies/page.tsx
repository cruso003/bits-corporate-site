import { Metadata } from "next";
import { Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Technologies | BITS",
  description:
    "Battle-tested technologies that enable us to deliver scalable, maintainable solutions—from React to AWS, GPT-4 to PostgreSQL.",
};

const technologies = [
  {
    category: "Frontend Development",
    description: "Modern, responsive user interfaces",
    items: [
      { name: "React & Next.js", description: "Component-based architecture, SSR, SSG" },
      { name: "TypeScript", description: "Type-safe JavaScript for better code quality" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
      { name: "Framer Motion", description: "Smooth animations and transitions" },
    ],
  },
  {
    category: "Mobile Development",
    description: "Native and cross-platform mobile apps",
    items: [
      {
        name: "React Native",
        description: "Cross-platform with 90%+ code reuse (TypeScript)",
      },
      { name: "iOS Native", description: "Swift/SwiftUI for iOS-specific features" },
      { name: "Android Native", description: "Kotlin/Java with Material Design" },
      { name: "Progressive Web Apps", description: "App-like web experiences" },
    ],
  },
  {
    category: "Backend Development",
    description: "Scalable server-side applications",
    items: [
      { name: "Node.js", description: "JavaScript/TypeScript on the server" },
      { name: "Python", description: "Django, FastAPI for web and AI/ML" },
      { name: "Golang", description: "High-performance concurrent systems" },
      { name: "Java Spring Boot", description: "Enterprise-grade applications" },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "Cutting-edge AI integration",
    items: [
      { name: "GPT-4 (OpenAI)", description: "Natural language understanding" },
      { name: "Claude (Anthropic)", description: "Advanced reasoning and analysis" },
      { name: "Whisper", description: "Speech-to-text in 1000+ languages" },
      {
        name: "Model Context Protocol",
        description: "Extensible AI tool framework (MCP)",
      },
    ],
  },
  {
    category: "Databases",
    description: "Reliable data storage and management",
    items: [
      { name: "PostgreSQL", description: "Primary relational database" },
      { name: "Redis", description: "In-memory caching and sessions" },
      { name: "DynamoDB", description: "NoSQL for high-speed IoT data" },
      { name: "MongoDB", description: "Document database for flexible schemas" },
    ],
  },
  {
    category: "Payment Integration",
    description: "African and global payment processing",
    items: [
      { name: "Stripe", description: "Global payment processing" },
      { name: "MTN Mobile Money", description: "Leading African mobile money" },
      { name: "Orange Money", description: "West Africa mobile money" },
      { name: "M-Pesa", description: "East Africa's dominant provider" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    description: "Production-grade cloud deployment",
    items: [
      { name: "AWS ECS", description: "Container orchestration with Fargate" },
      { name: "AWS RDS", description: "Managed relational databases" },
      { name: "AWS S3 & CloudFront", description: "Object storage and CDN" },
      { name: "AWS Lambda", description: "Serverless compute" },
    ],
  },
  {
    category: "DevOps & CI/CD",
    description: "Automated deployment and monitoring",
    items: [
      { name: "Docker & Kubernetes", description: "Containerization and orchestration" },
      { name: "Terraform", description: "Infrastructure as Code" },
      { name: "GitHub Actions", description: "CI/CD automation" },
      { name: "Datadog & Sentry", description: "Monitoring and error tracking" },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Code2 className="w-4 h-4" />
              Our Technology Stack
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Built With Modern Tools
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 leading-relaxed">
              Battle-tested technologies that enable us to deliver scalable,
              maintainable, high-performance applications
            </p>
          </div>
        </div>
      </section>

      {/* Technology Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Our Technology Philosophy
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "✓",
                  title: "Proven in Production",
                  description: "Technologies with strong track records, not experimental tools",
                },
                {
                  icon: "✓",
                  title: "Active Community",
                  description: "Large communities mean better support, libraries, and talent",
                },
                {
                  icon: "✓",
                  title: "African Context",
                  description: "Tools that work with intermittent connectivity and various devices",
                },
                {
                  icon: "✓",
                  title: "Maintainable",
                  description: "Clean, documented code in languages with staying power",
                },
                {
                  icon: "✓",
                  title: "Scalable",
                  description: "Technologies that handle growth from 100 to 1M+ users",
                },
                {
                  icon: "✓",
                  title: "Developer Productivity",
                  description: "Modern frameworks enabling rapid, iterative development",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200"
                >
                  <div className="text-3xl text-blue-600 mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            {technologies.map((tech, index) => (
              <div key={index}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {tech.category}
                  </h2>
                  <p className="text-slate-600">{tech.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {tech.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-slate-100 hover:border-blue-300"
                    >
                      <h3 className="font-bold text-slate-900 mb-2">{item.name}</h3>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Why These Technologies?
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: Sparkles,
                  title: "Proven at Scale",
                  description:
                    "Every technology we use powers applications serving millions: React (Facebook, Netflix), Node.js (LinkedIn, Uber), PostgreSQL (Apple, Instagram), AWS (Netflix, Airbnb)",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Code2,
                  title: "African-Ready",
                  description:
                    "Optimized for African conditions: Progressive Web Apps for slow connections, offline-first architecture, efficient data usage, mobile-first responsive design",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: Sparkles,
                  title: "Developer Productivity",
                  description:
                    "Modern tools mean faster development: TypeScript catches bugs before production, React component reusability, hot reload for instant feedback, automated testing and deployment",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: Code2,
                  title: "Future-Proof",
                  description:
                    "Technologies with staying power: Active development and community, long-term support commitments, clear upgrade paths, established best practices",
                  gradient: "from-amber-500 to-orange-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 items-start bg-slate-50 rounded-xl p-6 border-l-4 border-blue-600"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            The Right Tool for Every Project
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            We choose technologies based on your specific needs and constraints
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            <Link href="/contact">Discuss Your Tech Stack</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
