"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap lg:overflow-visible pb-2 lg:pb-0 font-medium tracking-tight"
    >
      <Link
        href="/"
        className="flex items-center hover:text-primary transition-colors gap-1.5 group shrink-0"
      >
        <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span className="uppercase tracking-widest text-[0.7rem] font-bold">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2 shrink-0">
          <ChevronRight className="w-4 h-4 text-slate-200" />
          {index === items.length - 1 ? (
            <span className="text-primary font-black uppercase tracking-widest text-[0.7rem] px-2 py-0.5 bg-emerald-50 rounded-lg">{item.name}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors uppercase tracking-widest text-[0.7rem] font-bold"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </motion.nav>
  );
}
