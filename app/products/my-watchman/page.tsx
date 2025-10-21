import { Metadata } from "next";
import {
  Shield,
  Zap,
  MapPin,
  Phone,
  Heart,
  MessageSquare,
  GraduationCap,
  Trophy,
  Users,
  Activity,
  Bell,
  Lock,
  Container,
  Database,
  Cloud,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MY_WATCHMAN_SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "My Watchman 3.0 - Emergency Response Platform | BITS",
  description:
    "Life-saving emergency response platform with 15 microservices managing 6 emergency types across Africa with 24/7 professional dispatch.",
};

export default function MyWatchmanPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Emergency Response Platform
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              My Watchman 3.0
            </h1>

            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Real emergency response when every second counts. Professional dispatch
              centers, verified responders, and intelligent safety systems protecting
              lives across Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50"
              >
                <Link href="#features">
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <Link href="#architecture">View Architecture</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-red-100">
              <div className="text-center">
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm">Emergency Types</div>
              </div>
              <div className="w-px h-12 bg-red-300" />
              <div className="text-center">
                <div className="text-3xl font-bold">15</div>
                <div className="text-sm">Microservices</div>
              </div>
              <div className="w-px h-12 bg-red-300" />
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Dispatch Centers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Reality of Emergencies in Africa
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              When fire breaks out, medical crisis hits, or security threats emerge—you
              need professional help NOW. But across Africa:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Fragmented emergency numbers (different for fire, police, medical)",
                "No centralized dispatch coordination",
                "Unclear which responders are actually available",
                "No way to track help arriving",
                "Language barriers in emergencies",
                "Family has no way to know you're safe",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-600">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-200">
              <p className="text-xl font-bold text-slate-900">
                My Watchman solves all of this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Emergency Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              6 Emergency Types
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive SOS management for every emergency scenario
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: "🔥",
                type: "Fire Emergency",
                dispatch: "National Fire Service, backup fire brigades",
                response: "Fire trucks, rescue teams, medical standby",
              },
              {
                emoji: "🏥",
                type: "Medical Emergency",
                dispatch: "Ambulance services, hospitals, paramedics",
                response: "EMTs, mobile clinics, hospital coordination",
              },
              {
                emoji: "🛡️",
                type: "Security Emergency",
                dispatch: "Police, private security, rapid response",
                response: "Armed response, investigation, scene securing",
              },
              {
                emoji: "💜",
                type: "SGBV Support",
                dispatch: "SGBV responders, social workers, police",
                response: "Trauma counselors, safe spaces, legal support",
              },
              {
                emoji: "🚗",
                type: "Roadside Emergency",
                dispatch: "Mechanics, towing services, traffic police",
                response: "On-site repairs, towing, documentation",
              },
              {
                emoji: "💚",
                type: "Welfare Check",
                dispatch: "Welfare officers, medical teams, police",
                response: "Location verification, wellness assessment",
              },
            ].map((emergency, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{emergency.emoji}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {emergency.type}
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-slate-700">Dispatch:</span>
                    <p className="text-slate-600">{emergency.dispatch}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Response:</span>
                    <p className="text-slate-600">{emergency.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Complete Safety Suite
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "One-Tap Emergency",
                description: "Instant SOS with automatic location capture and evidence upload",
                gradient: "from-red-500 to-red-600",
              },
              {
                icon: MapPin,
                title: "Live Tracking",
                description: "Watch verified responders arrive in real-time with GPS and ETA",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: Phone,
                title: "24/7 Dispatch",
                description: "Professional coordinators managing multi-agency responses",
                gradient: "from-green-500 to-green-600",
              },
              {
                icon: Heart,
                title: "Smart Welfare Checks",
                description: "Daily check-ins with auto-emergency after 3 missed responses",
                gradient: "from-pink-500 to-pink-600",
              },
              {
                icon: MessageSquare,
                title: "Secure Chat",
                description: "End-to-end encrypted communication with dispatch and responders",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: GraduationCap,
                title: "Safety Education",
                description: "Interactive courses with certifications—fire, first aid, SGBV",
                gradient: "from-indigo-500 to-indigo-600",
              },
              {
                icon: Trophy,
                title: "Gamification",
                description: "Points, badges, and leaderboards for safety actions",
                gradient: "from-amber-500 to-amber-600",
              },
              {
                icon: Users,
                title: "Community Feed",
                description: "Social platform for safety tips, alerts, and advocacy",
                gradient: "from-emerald-500 to-emerald-600",
              },
              {
                icon: Activity,
                title: "Community Reports",
                description: "Crowdsource safety intelligence—crime, infrastructure, drugs",
                gradient: "from-violet-500 to-violet-600",
              },
              {
                icon: Bell,
                title: "Smart Alerts",
                description: "Location-aware notifications about nearby emergencies",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                icon: Shield,
                title: "Verified Responders",
                description: "100% background-checked hospitals, fire, police, DEA, SGBV",
                gradient: "from-cyan-500 to-cyan-600",
              },
              {
                icon: Lock,
                title: "IoT Integration",
                description: "Panic devices, medical alerts, AI threat detection (v3.5)",
                gradient: "from-slate-500 to-slate-600",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Container className="w-4 h-4" />
                Microservices Architecture
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                15 Independent Services on AWS ECS
              </h2>
              <p className="text-xl text-slate-300">
                Cloud-native, event-driven architecture built for reliability and scale
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {MY_WATCHMAN_SERVICES.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm font-mono">{service}</span>
                </div>
              ))}
            </div>

            {/* Infrastructure */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Container className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Container Orchestration</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• AWS ECS Fargate</li>
                  <li>• Auto-scaling</li>
                  <li>• Health checks</li>
                  <li>• Blue-green deploys</li>
                </ul>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Database className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Data Layer</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• PostgreSQL (RDS)</li>
                  <li>• DynamoDB</li>
                  <li>• Redis (ElastiCache)</li>
                  <li>• S3 Storage</li>
                </ul>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Cloud className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Message Queue</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Amazon SQS</li>
                  <li>• SNS Pub/Sub</li>
                  <li>• EventBridge</li>
                  <li>• WebSockets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            When Every Second Counts
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            My Watchman showcases our ability to architect mission-critical systems
            that save lives
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-red-600 hover:bg-red-50"
          >
            <Link href="/contact">
              Discuss Your Emergency Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
