"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavigationChild = {
  name: string;
  href: string;
  description?: string;
};

type NavigationItem = {
  name: string;
  href: string;
  children?: NavigationChild[];
};

const navigation: NavigationItem[] = [
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Tick8 Plus", href: "/products/tick8plus", description: "AI-Native Event Ticketing" },
      { name: "X-Pay (Xara)", href: "/products/xpay", description: "AI Banking Assistant" },
      { name: "My Watchman", href: "/products/my-watchman", description: "Emergency Response Platform" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      { name: "Fintech Development", href: "/solutions/fintech" },
      { name: "Government Services", href: "/solutions/government" },
      { name: "AI Integration", href: "/solutions/ai" },
      { name: "Mobile Apps", href: "/solutions/mobile" },
      { name: "Enterprise Software", href: "/solutions/enterprise" },
      { name: "Cloud & DevOps", href: "/solutions/cloud" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Technologies", href: "/technologies" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-slate-900">BITS</div>
              <div className="text-xs text-slate-600">Building Innovation</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        pathname.startsWith(item.href)
                          ? "text-blue-600 bg-blue-50"
                          : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-slate-200 py-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 hover:bg-slate-50 transition-colors"
                            >
                              <div className="font-medium text-slate-900">
                                {child.name}
                              </div>
                              {child.description && (
                                <div className="text-sm text-slate-600 mt-0.5">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 py-4"
            >
              <div className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-2 rounded-lg text-sm font-medium",
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-slate-700 hover:bg-slate-50"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-600"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
