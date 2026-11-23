"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Code2,
  ShoppingBag,
  TrendingUp,
  Search,
  Cpu,
  MessageCircle,
} from "lucide-react";
import { siteConfig, mainNavItems } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, React.ReactNode> = {
  "/services/website-development": <Code2 className="w-5 h-5 text-blue-500" />,
  "/services/ecommerce": <ShoppingBag className="w-5 h-5 text-sky-500" />,
  "/services/digital-marketing": <TrendingUp className="w-5 h-5 text-emerald-500" />,
  "/services/seo": <Search className="w-5 h-5 text-purple-500" />,
  "/services/automation": <Cpu className="w-5 h-5 text-amber-500" />,
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Monitor scroll for subtle frosted glass elevation
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const servicesItem = mainNavItems.find((item) => item.children);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-500/20 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-slate-900 dark:to-slate-950 flex items-center justify-center text-white font-extrabold text-lg shadow-sm group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                ALBERTECH
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-500 dark:text-slate-400 font-semibold -mt-1">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {mainNavItems.map((item) => {
              if (item.children) {
                const isServicesActive = pathname.startsWith("/services");
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                        isServicesActive
                          ? "text-brand-600 dark:text-brand-400 font-semibold"
                          : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      )}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesDropdownOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 lg:w-96 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="p-2 border-b border-slate-100 dark:border-slate-800/70 mb-2 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Our Core Practices
                          </span>
                          <Link
                            href="/services"
                            className="text-xs text-brand-600 dark:text-brand-400 font-medium hover:underline inline-flex items-center gap-0.5"
                          >
                            All Services <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex items-start gap-3 p-2.5 rounded-xl transition-all group",
                                pathname === child.href
                                  ? "bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300"
                                  : "hover:bg-slate-100/80 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200"
                              )}
                            >
                              <div className="mt-0.5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors shadow-2xs">
                                {serviceIcons[child.href] || (
                                  <Code2 className="w-4 h-4" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-semibold group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                  {child.title}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 font-normal">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "text-brand-600 dark:text-brand-400 font-semibold bg-brand-50/60 dark:bg-brand-950/30"
                      : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              isExternal
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex text-xs text-slate-600 dark:text-slate-300"
              title="Chat with an international solutions advisor"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </Button>
            <Button href="/contact" size="sm" variant="primary">
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg px-4 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              className={cn(
                "block px-3 py-2.5 rounded-lg text-base font-medium",
                pathname === "/"
                  ? "bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "block px-3 py-2.5 rounded-lg text-base font-medium",
                pathname === "/about"
                  ? "bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              )}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    mobileServicesOpen && "rotate-180"
                  )}
                />
              </button>
              {mobileServicesOpen && servicesItem?.children && (
                <div className="pl-4 pr-1 py-1 space-y-1">
                  <Link
                    href="/services"
                    className="block px-3 py-2 rounded-lg text-sm font-semibold text-brand-600 dark:text-brand-400"
                  >
                    View All Services Overview →
                  </Link>
                  {servicesItem.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-sm",
                        pathname === child.href
                          ? "bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-semibold"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      )}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={cn(
                "block px-3 py-2.5 rounded-lg text-base font-medium",
                pathname.startsWith("/portfolio")
                  ? "bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              )}
            >
              Portfolio & Work
            </Link>
            <Link
              href="/blog"
              className={cn(
                "block px-3 py-2.5 rounded-lg text-base font-medium",
                pathname.startsWith("/blog")
                  ? "bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              )}
            >
              Blog & Insights
            </Link>
            <Link
              href="/contact"
              className={cn(
                "block px-3 py-2.5 rounded-lg text-base font-medium",
                pathname === "/contact"
                  ? "bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              )}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              isExternal
              variant="whatsapp"
              size="md"
              className="w-full justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>Chat on WhatsApp</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

