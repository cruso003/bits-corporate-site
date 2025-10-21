"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
    timeline: "",
    budget: "",
    referral: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          message: "",
          timeline: "",
          budget: "",
          referral: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Let's Build Something Extraordinary
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Whether you need custom software, fintech integration, AI implementation,
              or mobile apps—we're here to help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-slate-600 mb-8">
                  We typically respond within 24 hours with next steps.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                    <div className="text-sm text-slate-600 mt-2 space-y-1">
                      <div>
                        Careers:{" "}
                        <a
                          href={`mailto:${SITE_CONFIG.contact.careers}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          {SITE_CONFIG.contact.careers}
                        </a>
                      </div>
                      <div>
                        Partnerships:{" "}
                        <a
                          href={`mailto:${SITE_CONFIG.contact.partnerships}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          {SITE_CONFIG.contact.partnerships}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600 text-sm">
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.city}
                      <br />
                      {SITE_CONFIG.address.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-8 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Looking for Something Specific?
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "View Our Products", href: "/products" },
                    { label: "Explore Solutions", href: "/solutions" },
                    { label: "See Our Portfolio", href: "/portfolio" },
                    { label: "Join Our Team", href: "/careers" },
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="block text-sm text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Start Your Project
                </h3>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-slate-600 mb-6">
                      We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setStatus("idle")}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        <option value="">Select a project type</option>
                        <option value="custom-software">
                          Custom Software Development
                        </option>
                        <option value="fintech">Fintech/Payment Integration</option>
                        <option value="ai">AI & Machine Learning</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="government">Government Digital Services</option>
                        <option value="cloud">Cloud Infrastructure & DevOps</option>
                        <option value="enterprise">Enterprise Software</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent ({"<"} 1 month)</option>
                        <option value="soon">Soon (1-3 months)</option>
                        <option value="planning">Planning (3-6 months)</option>
                        <option value="exploring">Exploring (6+ months)</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Budget Range (Optional)
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="<10k">{"<"} $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and any specific challenges you're facing..."
                      />
                    </div>

                    {/* Referral */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Referral</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="products">Our Products (Tick8 Plus / X-Pay)</option>
                        <option value="partner">Partner Referral (RoviaGate / ACT)</option>
                        <option value="social">Social Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {status === "loading" ? (
                        "Sending..."
                      ) : (
                        <>
                          Submit Project Inquiry
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    {status === "error" && (
                      <p className="text-red-600 text-sm text-center">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "What's your typical project timeline?",
                  a: "Depends on scope. Simple apps: 2-3 months. Complex platforms: 4-6 months. We provide detailed timelines after requirements analysis.",
                },
                {
                  q: "Do you work with startups?",
                  a: "Yes! We've built our own products (Tick8 Plus, X-Pay) so we understand startup constraints. We offer flexible engagement models.",
                },
                {
                  q: "Can you maintain existing applications?",
                  a: "Yes, we provide ongoing maintenance, bug fixes, and feature development for existing applications.",
                },
                {
                  q: "Do you sign NDAs?",
                  a: "Absolutely. We're happy to sign mutual NDAs before discussing your project details.",
                },
                {
                  q: "What's your pricing model?",
                  a: "We offer fixed-price projects, time & materials, and dedicated team arrangements. Pricing depends on scope and complexity.",
                },
                {
                  q: "Do you provide post-launch support?",
                  a: "Yes, we offer various support packages including bug fixes, monitoring, updates, and feature enhancements.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-md border-2 border-slate-100"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}