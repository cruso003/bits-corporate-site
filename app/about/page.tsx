import { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Sparkles,
  Users,
  Globe,
  Trophy,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE_CONFIG, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | BITS",
  description:
    "Software engineers obsessed with solving Africa's unique technology challenges through innovative, scalable solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              About Building Innovative Technical Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 leading-relaxed">
              We're software engineers obsessed with solving Africa's unique technology
              challenges through innovative, scalable solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Founded by engineers who recognized the gap between cutting-edge
                technology and real-world African solutions, BITS has evolved from building
                internal tools to becoming a trusted partner for governments, financial
                institutions, and enterprises across the continent.
              </p>
              <p>
                Starting in Liberia and expanding across Africa, we've built everything from
                AI-powered financial assistants serving millions to police accountability
                platforms improving democratic governance.
              </p>
              <p>
                Today, we're registered in {SITE_CONFIG.address.country} and serve clients
                across West Africa, combining deep technical expertise with local market
                understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-blue-200">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower African organizations with world-class software engineering,
                artificial intelligence, and digital transformation services that create
                measurable impact.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-purple-200">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be Africa's most trusted technology partner—known for building
                innovative solutions that work in real African contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
              Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Innovation First",
                  description:
                    "We embrace emerging technologies—AI, blockchain, cloud-native architectures—and make them work for African markets.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Trophy,
                  title: "Engineering Excellence",
                  description:
                    "Clean code, scalable architecture, comprehensive testing. We build software that lasts.",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: Heart,
                  title: "Client Success",
                  description:
                    "Your metrics are our metrics. We succeed when you succeed.",
                  gradient: "from-red-500 to-orange-500",
                },
                {
                  icon: Globe,
                  title: "African Context",
                  description:
                    "Solutions designed for African realities—intermittent connectivity, mobile-first users, local payment systems, multilingual needs.",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: Lightbulb,
                  title: "Continuous Learning",
                  description:
                    "Technology evolves. We stay ahead through constant learning and experimentation.",
                  gradient: "from-amber-500 to-yellow-500",
                },
                {
                  icon: Users,
                  title: "Transparency & Communication",
                  description:
                    "Clear timelines, honest assessments, regular updates. No surprises.",
                  gradient: "from-indigo-500 to-purple-500",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="group bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-transparent relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
              What Makes Us Different
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Real Products, Not Just Services",
                  description:
                    "We don't just build for clients—we build our own products (Tick8 Plus, X-Pay), so we understand the full lifecycle of software development, scaling, and maintenance.",
                },
                {
                  title: "Cutting-Edge Tech Stack",
                  description:
                    "We work with the latest technologies—GPT-4, Model Context Protocol, React Native, modern cloud architectures—not legacy systems.",
                },
                {
                  title: "Fintech Expertise",
                  description:
                    "Deep experience with African payment systems: mobile money APIs (MTN, Orange, M-Pesa, Airtel), multi-currency wallets, payment orchestration.",
                },
                {
                  title: "Government-Grade Security",
                  description:
                    "Experience building systems for police departments, government agencies, and financial institutions means we understand compliance and security.",
                },
                {
                  title: "Distributed Team",
                  description:
                    "Remote-first culture with engineers across Africa, enabling us to work in multiple time zones and contexts.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Want to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build innovative software solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    );
}
