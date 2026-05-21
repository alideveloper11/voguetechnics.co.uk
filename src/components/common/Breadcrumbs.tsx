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
      className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-2 overflow-hidden text-sm font-medium tracking-tight text-slate-400"
    >
      <Link
        href="/"
        className="flex items-center hover:text-primary transition-colors gap-1.5 group shrink-0"
      >
        <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span className="uppercase tracking-widest text-[0.7rem] font-bold">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex min-w-0 items-center gap-2">
          <ChevronRight className="w-4 h-4 text-slate-200" />
          {index === items.length - 1 ? (
            <span className="max-w-[180px] truncate rounded-lg bg-emerald-50 px-2 py-0.5 text-[0.7rem] font-black uppercase tracking-widest text-primary sm:max-w-none">
              {item.name}
            </span>
          ) : (
            <Link
              href={item.href}
              className="max-w-[170px] truncate text-[0.7rem] font-bold uppercase tracking-widest transition-colors hover:text-primary sm:max-w-none"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </motion.nav>
  );
}
