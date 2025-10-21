"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Building a 15-Microservice Platform: My Watchman Architecture",
    excerpt:
      "Deep dive into AWS ECS, service mesh, and event-driven design for emergency response at scale.",
    category: "Architecture",
    readTime: "12 min",
    date: "Jan 15, 2026",
    href: "/blog/my-watchman-architecture",
  },
  {
    title: "MCP in Production: Lessons from Building X-Pay's Tool Server",
    excerpt:
      "Practical guide to implementing Model Context Protocol for conversational AI banking.",
    category: "AI/ML",
    readTime: "10 min",
    date: "Jan 10, 2026",
    href: "/blog/mcp-production",
  },
  {
    title: "Platform-First, App-Optional: The Tick8 Plus Strategy",
    excerpt:
      "Why we're building for Xara integration instead of focusing on app downloads.",
    category: "Product",
    readTime: "8 min",
    date: "Jan 5, 2026",
    href: "/blog/platform-first-strategy",
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            From Our Blog
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technical deep-dives, architecture patterns, and lessons from building software across Africa
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={post.href}
                className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-slate-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All */}
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
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
