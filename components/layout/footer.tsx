import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "Blog", href: "/blog" },
  ],
  products: [
    { name: "Tick8 Plus", href: "/products/tick8plus" },
    { name: "X-Pay (Xara)", href: "/products/xpay" },
    { name: "My Watchman", href: "/products/my-watchman" },
  ],
  solutions: [
    { name: "Fintech Development", href: "/solutions/fintech" },
    { name: "Government Services", href: "/solutions/government" },
    { name: "AI Integration", href: "/solutions/ai" },
    { name: "Mobile Apps", href: "/solutions/mobile" },
  ],
  resources: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Technologies", href: "/technologies" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">BITS</div>
                <div className="text-xs text-slate-400">Building Innovation</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Engineering Africa's digital future with AI-first architecture,
              microservices, and modern mobile applications.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@bits-innovate.com" className="hover:text-blue-400">
                  hello@bits-innovate.com
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Building Innovative Technical Solutions, Limited. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/bits" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/company/bits" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/bits" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
