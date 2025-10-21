import { Metadata } from "next";
import {
  Ticket,
  Smartphone,
  CreditCard,
  BarChart3,
  MessageSquare,
  Zap,
  Users,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tick8 Plus - AI-Native Event Ticketing Platform | BITS",
  description:
    "Platform-first ticketing with Xara integration. Purchase tickets through natural conversation—no app download needed.",
};

export default function Tick8PlusPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Ticket className="w-4 h-4" />
              AI-Native Event Ticketing
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              Tick8 Plus
            </h1>

            <p className="text-xl md:text-2xl text-pink-100 mb-8 leading-relaxed">
              The event ticketing backend that talks to Xara—purchase tickets through
              natural conversation, no app download needed. Organizers get enterprise
              infrastructure; attendees get conversational simplicity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-pink-600 hover:bg-pink-50"
              >
                <Link href="https://tick8plus.com" target="_blank">
                  Visit Tick8Plus.com
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The New Paradigm */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                The New Paradigm
              </h2>
              <p className="text-xl text-slate-600">
                Platform-first, app-optional ticketing powered by AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional */}
              <div className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
                <h3 className="text-lg font-bold text-slate-700 mb-4">
                  Traditional Event Platforms
                </h3>
                <ul className="space-y-3">
                  {[
                    "Download app",
                    "Create account",
                    "Search through categories",
                    "Click through checkout",
                    "Download ticket PDF",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-600">
                      <span className="text-slate-400 mr-3">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tick8 Plus + Xara */}
              <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border-2 border-pink-300">
                <h3 className="text-lg font-bold text-pink-700 mb-4">
                  Tick8 Plus + Xara
                </h3>
                <ul className="space-y-3">
                  {[
                    "Just message Xara on WhatsApp",
                    "Use your X-Pay account",
                    '"Find concerts this weekend"',
                    '"Buy 2 VIP tickets"',
                    "Digital ticket sent instantly",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-16">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* For Attendees */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  For Attendees (via Xara)
                </h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">1.</span>
                    Message Xara: "What concerts are this weekend?"
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">2.</span>
                    Xara shows events from Tick8 Plus
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">3.</span>
                    "Buy 2 VIP tickets for [Event]"
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">4.</span>
                    Xara processes payment via X-Pay
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">5.</span>
                    Digital tickets delivered via WhatsApp
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">6.</span>
                    Present QR code at venue entrance
                  </li>
                </ol>
              </div>

              {/* For Organizers */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  For Organizers (Dashboard)
                </h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">1.</span>
                    Create event with ticket tiers
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">2.</span>
                    Set pricing, capacity, discounts
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">3.</span>
                    Configure NFC cashless payments
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">4.</span>
                    Monitor real-time sales analytics
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">5.</span>
                    Manage check-ins and attendee data
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">6.</span>
                    Automated payouts
                  </li>
                </ol>
              </div>

              {/* For Vendors */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  For Vendors at Events
                </h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">1.</span>
                    NFC wristband payment processing
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">2.</span>
                    Real-time sales tracking
                  </li>
                  <li className="flex">
                    <span className="font-bold text-pink-600 mr-2">3.</span>
                    Instant settlement
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Innovation */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Innovation: MCP-First Architecture
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                First Event Platform with Native MCP Support
              </h2>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Tick8 Plus MCP Server (In Development)
              </h3>
              <ul className="space-y-3">
                {[
                  "Xara discovers events through conversational queries",
                  "Natural language ticket purchasing",
                  "Intelligent event recommendations",
                  "Voice-based ticket buying",
                  "Multilingual support (inherited from Xara)",
                  "Works via WhatsApp—no app needed for end users",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-pink-300 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-pink-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold mb-4">Example Conversation:</h4>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="text-blue-300">User:</span>
                  <span className="text-slate-300">
                    {' "What\'s happening this weekend in Lagos?"'}
                  </span>
                </div>
                <div>
                  <span className="text-pink-300">Xara:</span>
                  <span className="text-slate-300"> [Lists events from Tick8 Plus]</span>
                </div>
                <div>
                  <span className="text-blue-300">User:</span>
                  <span className="text-slate-300">
                    {' "Book me 2 tickets for the Burna Boy concert"'}
                  </span>
                </div>
                <div>
                  <span className="text-pink-300">Xara:</span>
                  <span className="text-slate-300">
                    {' [Shows ticket options] Regular (₦15,000) or VIP (₦50,000)?'}
                  </span>
                </div>
                <div>
                  <span className="text-blue-300">User:</span>
                  <span className="text-slate-300">{' "2 VIP please"'}</span>
                </div>
                <div>
                  <span className="text-pink-300">Xara:</span>
                  <span className="text-slate-300">
                    {' Total: ₦100,000 + ₦2,000 fee = ₦102,000'}
                    <br />
                    {'       Charge your X-Pay wallet?'}
                  </span>
                </div>
                <div>
                  <span className="text-blue-300">User:</span>
                  <span className="text-slate-300">{' "Yes"'}</span>
                </div>
                <div>
                  <span className="text-pink-300">Xara:</span>
                  <span className="text-green-300">
                    {' ✅ Tickets confirmed! Sent your QR codes below.'}
                    <br />
                    {'    See you at Eko Hotel on Saturday!'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-16">
              Platform Features
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* For Organizers */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  For Organizers
                </h3>
                <ul className="space-y-3">
                  {[
                    "Comprehensive web dashboard",
                    "Multi-tier ticket management",
                    "Early bird and promo code system",
                    "Real-time sales analytics",
                    "Attendee check-in system",
                    "Revenue tracking and forecasting",
                    "Automated marketing emails",
                    "Integration with social media",
                    "White-label event pages",
                    "Multiple payment gateways",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Attendees */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  For Attendees
                </h3>
                <ul className="space-y-3">
                  {[
                    "Conversational ticket purchasing via Xara",
                    "Direct web purchasing (tick8plus.com)",
                    "Digital ticket storage",
                    "Event discovery and recommendations",
                    "QR code ticket validation",
                    "In-app event reminders",
                    "Easy refunds and transfers",
                    "NFC cashless payments at events",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Technology Stack
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Backend",
                  items: ["Node.js (Express)", "Python", "PostgreSQL", "Redis"],
                },
                {
                  title: "MCP Integration",
                  items: [
                    "Custom Tick8 Plus MCP Server",
                    "Xara event queries",
                    "Natural language processing",
                  ],
                },
                {
                  title: "Payments",
                  items: ["Stripe", "MTN Mobile Money", "Orange Money", "X-Pay integration"],
                },
                {
                  title: "Infrastructure",
                  items: ["AWS (RDS, ElastiCache, S3)", "Docker", "RabbitMQ"],
                },
              ].map((section, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-slate-900 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Business Model</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">8%</div>
                <div className="text-sm text-slate-600">
                  + payment processing fees
                  <br />
                  (charged to organizers)
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">Free</div>
                <div className="text-sm text-slate-600">
                  For attendees
                  <br />
                  (fees included in ticket price)
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">2%</div>
                <div className="text-sm text-slate-600">
                  Transaction fee
                  <br />
                  (NFC payments for vendors)
                </div>
              </div>
            </div>
            <p className="mt-8 text-slate-600">
              No app download barriers = higher conversion rates
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Chat with Xara to Discover Any Event in Africa
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            No apps, no accounts, no friction. Just conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-50"
            >
              <Link href="https://tick8plus.com" target="_blank">
                Visit Tick8Plus.com
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
