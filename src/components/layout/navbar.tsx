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
import { Logo } from "@/components/ui/logo";
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

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-2xl transition-all duration-300 border",
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-slate-200/60 dark:border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.6)] px-4 sm:px-6"
            : "bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border-slate-200/40 dark:border-white/5 px-4 sm:px-6"
        )}
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with 3D Emblem */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-500/20 rounded-xl p-1"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Glass Bar */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5 backdrop-blur">
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
                        "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all focus:outline-none",
                        isServicesActive
                          ? "text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-800/90 shadow-2xs"
                          : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/40"
                      )}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          servicesDropdownOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Translucent Glass Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 lg:w-96 p-3 bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="p-2 border-b border-slate-100 dark:border-white/5 mb-2 flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                            Our Digital Practices
                          </span>
                          <Link
                            href="/services"
                            className="text-xs text-brand-600 dark:text-brand-400 font-semibold hover:underline inline-flex items-center gap-1"
                          >
                            All Overview <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex items-start gap-3 p-2.5 rounded-xl transition-all group/item",
                                pathname === child.href
                                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/20"
                                  : "hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200"
                              )}
                            >
                              <div className="mt-0.5 p-2 rounded-lg bg-white dark:bg-slate-800 group-hover/item:scale-105 transition-transform shadow-2xs border border-slate-200/60 dark:border-white/5">
                                {serviceIcons[child.href] || (
                                  <Code2 className="w-4 h-4" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-semibold group-hover/item:text-brand-600 dark:group-hover/item:text-brand-400 transition-colors">
                                  {child.title}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 font-normal">
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
                    "px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all",
                    isActive
                      ? "text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-800/90 shadow-2xs"
                      : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/40"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              isExternal
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex text-xs bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200/80 dark:border-white/10"
              title="Direct WhatsApp chat"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </Button>
            <Button href="/contact" size="sm" variant="primary">
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur text-slate-700 dark:text-slate-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Glass Styling */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl p-5 space-y-4 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              className={cn(
                "block px-3.5 py-2.5 rounded-xl text-sm font-semibold",
                pathname === "/"
                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100/60"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "block px-3.5 py-2.5 rounded-xl text-sm font-semibold",
                pathname === "/about"
                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100/60"
              )}
            >
              About Us
            </Link>

            <div className="border-t border-slate-100 dark:border-white/5 pt-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200"
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
                    className="block px-3 py-2 rounded-lg text-xs font-bold text-brand-600 dark:text-brand-400"
                  >
                    View All Services Overview →
                  </Link>
                  {servicesItem.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-xs font-medium",
                        pathname === child.href
                          ? "bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100/60"
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
                "block px-3.5 py-2.5 rounded-xl text-sm font-semibold",
                pathname.startsWith("/portfolio")
                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100/60"
              )}
            >
              Portfolio & Work
            </Link>
            <Link
              href="/blog"
              className={cn(
                "block px-3.5 py-2.5 rounded-xl text-sm font-semibold",
                pathname.startsWith("/blog")
                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100/60"
              )}
            >
              Blog & Insights
            </Link>
            <Link
              href="/contact"
              className={cn(
                "block px-3.5 py-2.5 rounded-xl text-sm font-semibold",
                pathname === "/contact"
                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100/60"
              )}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-white/10 space-y-2">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center shadow-md"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              isExternal
              variant="whatsapp"
              size="md"
              className="w-full justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              <span>Chat on WhatsApp</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
