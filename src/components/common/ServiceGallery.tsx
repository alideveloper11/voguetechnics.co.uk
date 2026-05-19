"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ServiceGalleryImage {
  src: string;
  alt: string;
}

interface ServiceGalleryProps {
  title: string;
  subtitle?: string;
  images: ServiceGalleryImage[];
}

export default function ServiceGallery({ title, subtitle, images }: ServiceGalleryProps) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const total = images.length;

  const scrollToIndex = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = ((index % total) + total) % total;
    const child = el.children.item(clamped) as HTMLElement | null;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    setActive(clamped);
  };

  // Sync dots when user swipes manually
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handler = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      let bestIdx = 0;
      let bestDist = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - el.scrollLeft);
        if (dist < bestDist) { bestDist = dist; bestIdx = i; }
      });
      setActive(bestIdx);
    };
    el.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => el.removeEventListener("scroll", handler);
  }, [total]);

  // Auto-advance
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const id = window.setInterval(() => scrollToIndex(active + 1), 3500);
    return () => window.clearInterval(id);
  }, [active, isPaused, total]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Text above */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          {subtitle && (
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-full sm:w-[80%] md:w-[65%] lg:w-[55%] relative rounded-3xl overflow-hidden shadow-xl"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, (min-width: 768px) 65vw, 80vw"
                />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === active ? "true" : "false"}
                className={[
                  "h-2.5 rounded-full transition-all duration-300",
                  i === active
                    ? "bg-primary w-6"
                    : "bg-slate-300 hover:bg-slate-400 w-2.5",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
