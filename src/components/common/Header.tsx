"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ancillaries", href: "/ancillaries" },
    { name: "About", href: "/about-us" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
  ];

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
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="py-2">
              <img src="/images/logo.png" alt="Vogue Technics" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group cursor-pointer inline-flex items-center gap-1 font-medium text-white/90 hover:text-white transition-colors">
              <span>Engines</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="flex flex-col p-2 text-slate-800">
                  <Link href="/range-rover-engines" className="px-4 py-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium">Range Rover Engines</Link>
                  <Link href="/audi-engines" className="px-4 py-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium">Audi Engines</Link>
                  <Link href="/bmw-engines" className="px-4 py-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium">BMW Engines</Link>
                  <Link href="/jaguar-engines" className="px-4 py-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium">Jaguar Engines</Link>
                </div>
              </div>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01375 531355"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 bg-white text-primary font-bold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-md"
            >
              <Phone className="w-4 h-4" />
              01375 531355
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#146c43] border-b border-[#146c43] absolute top-full left-0 w-full max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col p-4 space-y-4 text-white">
              <div className="flex flex-col space-y-2 pb-4 border-b border-white/20">
                <div className="font-semibold text-white/50 text-sm uppercase px-2 tracking-wide">Engines</div>
                <Link href="/range-rover-engines" className="px-2 py-2 hover:bg-white/10 rounded-lg font-medium">Range Rover Engines</Link>
                <Link href="/audi-engines" className="px-2 py-2 hover:bg-white/10 rounded-lg font-medium">Audi Engines</Link>
                <Link href="/bmw-engines" className="px-2 py-2 hover:bg-white/10 rounded-lg font-medium">BMW Engines</Link>
                <Link href="/jaguar-engines" className="px-2 py-2 hover:bg-white/10 rounded-lg font-medium">Jaguar Engines</Link>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-2 py-2 hover:bg-white/10 rounded-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20">
                <a
                  href="tel:01375 531355"
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 bg-white text-primary font-bold shadow-md"
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
