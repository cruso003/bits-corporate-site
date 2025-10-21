import { Metadata } from "next";
import {
  MessageSquare,
  Globe,
  Mic,
  Zap,
  CreditCard,
  Shield,
  Sparkles,
  Users,
  ArrowRight,
  CheckCircle2,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "X-Pay (Xara) - Africa's First AI Banking Assistant | BITS",
  description:
    "WhatsApp-based banking powered by GPT-4. No apps, no commands—just natural conversation in 1000+ languages.",
};

export default function XPayPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4" />
              AI-Native Financial Assistant
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              X-Pay (Xara)
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Africa's first AI banking assistant. Banking through conversation—no apps,
              no commands, just natural language on WhatsApp in 1000+ languages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Link href="https://xpay-bits.com" target="_blank">
                  Visit XPay-Bits.com
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

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold">GPT-4</div>
                <div className="text-sm">Powered</div>
              </div>
              <div className="w-px h-12 bg-blue-300" />
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm">Languages</div>
              </div>
              <div className="w-px h-12 bg-blue-300" />
              <div className="text-center">
                <div className="text-3xl font-bold">2B+</div>
                <div className="text-sm">WhatsApp Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">
              The Problem We're Solving
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Traditional Banking */}
              <div className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
                <h3 className="text-lg font-bold text-slate-700 mb-4">
                  Traditional Banking Apps
                </h3>
                <ul className="space-y-3">
                  {[
                    "Complex—too many buttons and menus",
                    "Exclusive—require smartphones and data",
                    "Language-limited—English or nothing",
                    "Fragmented—different app for each provider",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="text-red-500 mr-3 text-xl flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Xara Solution */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-300">
                <h3 className="text-lg font-bold text-blue-700 mb-4">Xara is Different</h3>
                <ul className="space-y-3">
                  {[
                    "Natural—just text like talking to a friend",
                    "Accessible—works on any phone with WhatsApp",
                    "Multilingual—1000+ languages including pidgin",
                    "Unified—one wallet for all African providers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Revolutionary Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "Conversational AI (GPT-4)",
                description:
                  'No scripts. No menus. Xara understands what you mean, not just keywords. "Send 5k to my guy" → Xara knows you want to transfer money',
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Globe,
                title: "True Multilingual Support",
                description:
                  "English, French, Swahili, pidgin, code-switching—even voice messages. Understanding 1000+ languages including regional slang",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: CreditCard,
                title: "Pan-African Payments",
                description:
                  "One X-Pay wallet connects to every provider: MTN, Orange, M-Pesa, Airtel, Stripe. Send money across borders seamlessly",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Mic,
                title: "Voice-First Banking",
                description:
                  "Send voice note → Xara transcribes → responds in text or voice. Banking for everyone, including those who can't read",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: MessageSquare,
                title: "WhatsApp-Based (No App!)",
                description:
                  "2 billion people already use WhatsApp. No download. No storage. Works immediately on any phone",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: Zap,
                title: "Viral Growth",
                description:
                  "Send money to non-users → They get SMS invite → Money arrives on signup. Every transaction = potential new user",
                gradient: "from-amber-500 to-yellow-500",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-transparent relative overflow-hidden"
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
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Xara Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
              How Xara Works
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Save Xara's WhatsApp number",
                  description: "Add Xara as a contact on WhatsApp",
                },
                {
                  step: "2",
                  title: 'Say "Hi" to start',
                  description: "Xara introduces herself and guides you through setup",
                },
                {
                  step: "3",
                  title: "Register in 2 minutes through chat",
                  description: "Simple conversational registration—no forms to fill",
                },
                {
                  step: "4",
                  title: "Start banking",
                  description:
                    '"What\'s my balance?" • "Send 5000 to +231770123456" • "Deposit from my MTN" • "Create a virtual card for $50"',
                },
                {
                  step: "5",
                  title: "Xara handles everything",
                  description: "Natural conversation with instant execution",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-1">
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

      {/* GPT-First Architecture */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Code2 className="w-4 h-4" />
                Technology Innovation
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                GPT-First Architecture
              </h2>
              <p className="text-xl text-blue-200">
                Not a chatbot—an AI assistant
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Traditional */}
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="font-bold text-red-300 mb-4">Traditional Fintech</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Rule-based menus</li>
                  <li>• Keyword matching</li>
                  <li>• Limited commands</li>
                  <li>• English only</li>
                  <li>• App required</li>
                </ul>
              </div>

              {/* Xara */}
              <div className="p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl border border-cyan-400/30">
                <h3 className="font-bold text-cyan-300 mb-4">Xara with GPT-4</h3>
                <ul className="space-y-2 text-sm text-cyan-100">
                  <li>• Natural language understanding</li>
                  <li>• Intent recognition</li>
                  <li>• Unlimited flexibility</li>
                  <li>• 1000+ languages</li>
                  <li>• WhatsApp only</li>
                </ul>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Built With:</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-blue-300 mb-2">Core AI</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• GPT-4 (OpenAI) - Language understanding</li>
                    <li>• Whisper - Voice transcription</li>
                    <li>• Model Context Protocol (MCP)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-blue-300 mb-2">Platform</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• WhatsApp Business API</li>
                    <li>• Python (FastAPI)</li>
                    <li>• PostgreSQL + Redis</li>
                    <li>• AWS (Kubernetes, auto-scaling)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Conversations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
              Real Conversations
            </h2>

            <div className="space-y-6">
              {/* Example 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <div className="space-y-3 font-mono text-sm">
                  <div>
                    <span className="font-bold text-slate-600">User:</span>
                    <span className="text-slate-900">
                      {' "Abeg send 5k to my guy for me"'}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">Xara:</span>
                    <span className="text-slate-700">
                      {' Sure! What\'s your guy\'s number?'}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600">User:</span>
                    <span className="text-slate-900">{' "+231770123456"'}</span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">Xara:</span>
                    <span className="text-slate-700">
                      {' ✅ Sent 5,000 LRD to +231770123456. Balance: 15,000 LRD'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  💡 Xara understands pidgin and slang
                </p>
              </div>

              {/* Example 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <div className="space-y-3 font-mono text-sm">
                  <div>
                    <span className="font-bold text-slate-600">User:</span>
                    <span className="text-slate-900">
                      {' "Deposit 10,000 from my MTN pour le weekend"'}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">Xara:</span>
                    <span className="text-slate-700">
                      {
                        ' Depositing 10,000 from MTN Mobile Money. Please approve on your phone...'
                      }
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">Xara:</span>
                    <span className="text-slate-700">
                      {' ✅ Received 10,000 LRD. New balance: 25,000 LRD. Enjoy your weekend!'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  💡 Xara handles code-switching (mixing English and French)
                </p>
              </div>

              {/* Example 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <div className="space-y-3 font-mono text-sm">
                  <div>
                    <span className="font-bold text-slate-600">User:</span>
                    <span className="text-slate-900">
                      {' [Voice message: "Create a virtual card for $50"]'}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">Xara:</span>
                    <span className="text-slate-700">
                      {' Creating a $50 virtual card... Done!'}
                      <br />
                      <br />
                      {'💳 Card: 4242 **** **** 1234'}
                      <br />
                      {'📅 Expires: 12/2027'}
                      <br />
                      {'🔒 CVV sent separately for security'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  💡 Xara transcribes voice messages and responds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Providers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
              Supported Payment Providers
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Active Now */}
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <h3 className="text-xl font-bold text-green-900">Active Now</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "MTN Mobile Money (Liberia, Uganda, Nigeria, Rwanda)",
                    "Orange Money (Liberia)",
                    "Stripe (Global cards)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coming Soon */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <h3 className="text-xl font-bold text-blue-900">Coming Q1 2026</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "M-Pesa (Kenya, Tanzania, Ghana)",
                    "Airtel Money (23 countries)",
                    "Wave, Telebirr, Vodafone Cash",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <span className="text-blue-600 mr-3">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-slate-600 mt-8">
              Our goal: integrate every major African payment provider
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
              Transparent Pricing
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "X-Pay Transfers", price: "Free", detail: "Between X-Pay users" },
                {
                  label: "Deposits",
                  price: "1%",
                  detail: "From mobile money (min 10 LRD, max 5K)",
                },
                {
                  label: "Withdrawals",
                  price: "2%",
                  detail: "To mobile money (min 20 LRD, max 10K)",
                },
                {
                  label: "Virtual Cards",
                  price: "Free",
                  detail: "Create unlimited cards",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-sm text-slate-600 mb-2">{item.label}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {item.price}
                  </div>
                  <div className="text-xs text-slate-500">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Building for 50M Users by 2027
            </h2>
            <div className="grid sm:grid-cols-4 gap-6 mb-12">
              {[
                { year: "2026", users: "100K" },
                { year: "2027", users: "1M" },
                { year: "2028", users: "10M" },
                { year: "2030", users: "50M" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-sm text-blue-200 mb-2">{item.year}</div>
                  <div className="text-3xl font-bold">{item.users}</div>
                  <div className="text-xs text-blue-200 mt-1">users</div>
                </div>
              ))}
            </div>
            <p className="text-xl text-blue-100">
              Across all 54 African countries
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            The Future of African Banking
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            No apps. No commands. No training. Just conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600"
            >
              <Link href="https://xpay-bits.com" target="_blank">
                Visit XPay-Bits.com
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Partnership Inquiries</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
