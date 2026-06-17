"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type BrandSpecialism = {
  title: string;
  href: string;
  body: string;
};

interface BrandSpecialismsSliderProps {
  brands: BrandSpecialism[];
}

export default function BrandSpecialismsSlider({ brands }: BrandSpecialismsSliderProps) {
  const total = brands.length;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = ((index % total) + total) % total;
    const child = el.children.item(clamped) as HTMLElement | null;
    if (!child) return;

    // Only scroll the horizontal track, never the page itself.
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    setActive(clamped);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const handler = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (children.length === 0) return;

      const left = el.scrollLeft;
      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      for (let i = 0; i < children.length; i++) {
        const dist = Math.abs(children[i].offsetLeft - left);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      }

      setActive(bestIdx);
    };

    el.addEventListener("scroll", handler, { passive: true });
    handler();

    return () => el.removeEventListener("scroll", handler);
  }, [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const id = window.setInterval(() => {
      scrollToIndex(active + 1);
    }, 4500);

    return () => window.clearInterval(id);
  }, [active, isPaused, total]);

  const dots = useMemo(() => Array.from({ length: total }, (_, i) => i), [total]);

  return (
    <div
      className="relative overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute -top-16 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />

      <div
        ref={trackRef}
        className={[
          "flex gap-6 overflow-x-auto pb-4 px-1 sm:px-2",
          "snap-x snap-mandatory scroll-smooth",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        ].join(" ")}
        aria-label="Vehicle brands slider"
      >
        {brands.map((brand, idx) => (
          <motion.div
            key={brand.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.03 }}
            className={[
              "snap-start shrink-0",
              "w-[88%] sm:w-[75%] md:w-[48%] lg:w-[42%] xl:w-[36%]",
              "bg-white border border-slate-200 rounded-[2rem] p-5 shadow-sm",
              "hover:shadow-xl hover:border-primary/40 transition-all",
              "flex flex-col justify-between",
            ].join(" ")}
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                <Link href={brand.href} className="hover:text-primary transition-colors">
                  {brand.title}
                </Link>
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">{brand.body}</p>
            </div>

            <div className="pt-3">
              <Link
                href={brand.href}
                className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 rounded-xl hover:bg-primary-dark transition-colors text-sm"
              >
                Explore More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-end">
        <div className="flex items-center gap-2" aria-label="Slider dots">
          {dots.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all",
                i === active ? "bg-primary w-6" : "bg-slate-300 hover:bg-slate-400",
              ].join(" ")}
              aria-label={`Go to brand ${i + 1}`}
              aria-current={i === active ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
