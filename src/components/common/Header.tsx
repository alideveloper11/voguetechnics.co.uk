"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Added to track current URL
import { useEffect, useState } from "react";
import { services } from "@/data/servicesData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navLinks = [
    { name: "About", href: "/about-us" },
    { name: "Gallery", href: "/gallery" },
    { name: "Areas", href: "/areas" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
  ];

  const isActive = (path :any) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b",
        isScrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-md border-primary-dark/20 py-3"
          : "bg-primary border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="py-2">
              <img
                src="/images/logo.png"
                alt="Vogue Technics"
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-3 xl:gap-x-8 px-2 min-w-0">
            {/* Engines Dropdown */}
            <div
              className={clsx(
                "relative group cursor-pointer inline-flex items-center gap-1 font-medium transition-colors shrink-0",
                pathname.includes("engines") ? "text-emerald-400" : "text-white/90 hover:text-white"
              )}
            >
              <Link href="/engines">Engines</Link>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="flex flex-col p-2 text-slate-800">
                  <Link href="/range-rover-engines" className={clsx("px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors font-medium", pathname === "/range-rover-engines" ? "text-primary bg-emerald-50" : "hover:text-primary")}>Range Rover Engines</Link>
                  <Link href="/land-rover-engines" className={clsx("px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors font-medium", pathname === "/land-rover-engines" ? "text-primary bg-emerald-50" : "hover:text-primary")}>Land Rover Engines</Link>
                  <Link href="/audi-engines" className={clsx("px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors font-medium", pathname === "/audi-engines" ? "text-primary bg-emerald-50" : "hover:text-primary")}>Audi Engines</Link>
                  <Link href="/bmw-engines" className={clsx("px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors font-medium", pathname === "/bmw-engines" ? "text-primary bg-emerald-50" : "hover:text-primary")}>BMW Engines</Link>
                  <Link href="/jaguar-engines" className={clsx("px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors font-medium", pathname === "/jaguar-engines" ? "text-primary bg-emerald-50" : "hover:text-primary")}>Jaguar Engines</Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className={clsx(
                "relative group cursor-pointer inline-flex items-center gap-1 font-medium transition-colors shrink-0",
                pathname.startsWith("/services") ? "text-emerald-400" : "text-white/90 hover:text-white"
              )}
            >
              <Link href="/services">Services</Link>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              <div className="absolute top-full -left-20 lg:-left-40 mt-2 w-[32rem] rounded-2xl bg-white shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-4 group-hover:translate-y-0 overflow-hidden">
                <div className="grid grid-cols-2 gap-1 p-4 text-slate-800">
                  {services.map((service) => {
                    const isServiceActive = pathname === `/services/${service.slug}`;
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={clsx(
                          "flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 hover:text-primary rounded-xl transition-all group/item",
                          isServiceActive ? "bg-emerald-50 text-primary" : ""
                        )}
                      >
                        <div className="bg-slate-50 p-2 rounded-lg group-hover/item:bg-white transition-colors text-primary shadow-sm border border-slate-100">
                          {service.icon}
                        </div>
                        <span className="font-semibold text-sm leading-tight">
                          {service.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "font-medium transition-colors shrink-0 text-xs xl:text-base",
                  isActive(link.href) ? "text-emerald-400" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:01375 531355"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-4 xl:px-5 py-2.5 bg-white text-primary font-bold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-md whitespace-nowrap text-sm xl:text-base"
            >
              <Phone className="w-4 h-4" />
              01375 531355
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-white shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#146c43] border-b border-[#146c43] absolute top-full left-0 w-full h-[calc(100vh-100%)] overflow-y-auto shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="flex flex-col p-4 space-y-4 text-white">
              <div className="flex flex-col space-y-2 pb-4 border-b border-white/20">
                <Link
                  href="/engines"
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "font-semibold text-sm uppercase px-2 tracking-wide transition-colors",
                    pathname === "/engines" ? "text-emerald-400" : "text-white/50 hover:text-white"
                  )}
                >
                  Engines
                </Link>
                {/* Engine sub-links mapping for mobile highlight */}
                {[
                  { name: "Range Rover Engines", href: "/range-rover-engines" },
                  { name: "Land Rover Engines", href: "/land-rover-engines" },
                  { name: "Audi Engines", href: "/audi-engines" },
                  { name: "BMW Engines", href: "/bmw-engines" },
                  { name: "Jaguar Engines", href: "/jaguar-engines" },
                ].map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={clsx(
                      "px-2 py-2 rounded-lg font-medium transition-colors",
                      pathname === item.href ? "bg-white/20 text-white" : "hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col space-y-2 pb-4 border-b border-white/20">
                <div className="font-semibold text-white/50 text-sm uppercase px-2 tracking-wide mb-2 pt-2">
                  Our Services
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {services.map((service) => {
                    const isServiceActive = pathname === `/services/${service.slug}`;
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={clsx(
                          "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors",
                          isServiceActive ? "bg-white/20 text-white" : "hover:bg-white/10"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="text-emerald-400 opacity-80 shrink-0">
                          {service.icon}
                        </div>
                        <span className="font-medium text-[15px]">
                          {service.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Standard Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "px-2 py-2 rounded-lg font-medium transition-colors",
                    isActive(link.href) ? "bg-white/20 text-white" : "hover:bg-white/10"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/20">
                <a
                  href="tel:01375 531355"
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 bg-white text-primary font-bold shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 01375 531355
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}