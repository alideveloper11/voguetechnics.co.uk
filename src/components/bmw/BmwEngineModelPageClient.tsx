"use client";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import RegSearch from "@/components/common/RegSearch";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type BmwModelBreadcrumb = { name: string; href: string };

export type BmwModelFaq = { question: string; answer: string };

export type BmwModelReview = { name: string; quote: string };

export type BmwModelSection = {
  title: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
};

export type BmwEngineModelPageProps = {
  breadcrumbs: BmwModelBreadcrumb[];
  badgeText: string;
  h1Accent: string;
  h1Rest: string;
  heroIntroParagraphs: string[];
  sections: BmwModelSection[];
  reviews?: { title: string; items: BmwModelReview[] };
  faqs?: { title: React.ReactNode; items: BmwModelFaq[] };
  finalCta?: { heading: string; paragraph: string };
};

function BmwRoundelMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <clipPath id="bmw_roundel_clip_generic">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_generic)">
        <rect x="4" y="4" width="28" height="28" fill="#60a5fa" />
        <rect x="32" y="32" width="28" height="28" fill="#60a5fa" />
        <rect x="32" y="4" width="28" height="28" fill="#f8fafc" />
        <rect x="4" y="32" width="28" height="28" fill="#f8fafc" />
      </g>
      <circle cx="32" cy="32" r="27" fill="none" stroke="#0b0f19" strokeWidth="6" opacity="0.65" />
      <text
        x="32"
        y="16"
        textAnchor="middle"
        fontSize="10"
        fontWeight="900"
        fill="#f8fafc"
        fontFamily="ui-sans-serif, system-ui"
      >
        BMW
      </text>
    </svg>
  );
}

function isLikelySubheading(line: string) {
  const s = line.trim();
  if (!s) return false;
  if (s.length > 85) return false;
  if (/[.!?]$/.test(s)) return false;
  // If it looks like a URL or contains too much punctuation, treat as paragraph
  if (s.includes("http://") || s.includes("https://")) return false;
  // Keep it simple: short, headline-like strings
  const words = s.split(/\s+/).filter(Boolean);
  if (words.length < 2) return false;
  return true;
}

export default function BmwEngineModelPageClient(props: BmwEngineModelPageProps) {
  const { breadcrumbs, badgeText, h1Accent, h1Rest, heroIntroParagraphs, sections, reviews, faqs, finalCta } = props;

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW Engine Specialists"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              {badgeText}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                {h1Accent}
              </span>{" "}
              {h1Rest}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="flex justify-center mt-6 mb-8 w-full"
            >
              <RegSearch />
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[160px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10 relative">
            {sections.map((s) => (
              <div
                key={s.title}
                className="rounded-[2.25rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-12 shadow-sm"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{s.title}</h2>
                    <div className="mt-4 h-1 w-20 rounded-full bg-primary/80"></div>
                  </div>
                </div>

                <div className="mt-8 space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
                  {s.paragraphs.map((p) => {
                    const key = p.slice(0, 80);
                    const trimmed = p.trim();

                    if (isLikelySubheading(trimmed)) {
                      return (
                        <h3
                          key={key}
                          className="pt-4 text-base md:text-lg font-extrabold text-slate-900 tracking-tight"
                        >
                          <span className="inline-block mr-3 align-middle h-2.5 w-2.5 rounded-full bg-primary/80" />
                          {trimmed}
                        </h3>
                      );
                    }

                    return (
                      <p key={key} className="text-slate-700">
                        {p}
                      </p>
                    );
                  })}
                </div>

                {s.cta ? (
                  <div className="mt-6">
                    <Link
                      href={s.cta.href}
                      className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-extrabold text-xs tracking-[0.14em] hover:bg-primary/90 transition-colors"
                    >
                      {s.cta.label} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      {reviews ? (
        <section className="pt-24 pb-12 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex justify-center mb-6">
                <h2 className="bg-primary text-white text-3xl md:text-5xl font-bold px-6 py-3 rounded-lg shadow-lg tracking-tight uppercase italic">
                  {reviews.title}
                </h2>
              </div>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.items.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-primary/90">Verified</span>
                    </div>
                    <p className="text-slate-700 italic mb-8 leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div className="border-t border-slate-50 pt-6">
                    <h4 className="font-bold text-slate-900 text-sm md:text-base uppercase tracking-tight">{t.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {faqs ? <FAQSection title={faqs.title} items={faqs.items} /> : null}

      {/* FINAL CTA */}
      {finalCta ? (
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-tight">
              {finalCta.heading}
            </h2>
            <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              {finalCta.paragraph}
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center pt-4">
              <Link
                href="/contact-us"
                className="bg-slate-900 hover:bg-slate-800 text-white font-black py-5 px-10 md:px-12 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 text-lg md:text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em]"
              >
                Book online
              </Link>
              <a
                href="tel:01375531355"
                className="bg-white text-slate-900 font-black py-5 px-10 md:px-12 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 text-lg md:text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] hover:bg-slate-100"
              >
                <Phone className="w-6 h-6 text-primary" /> 01375 531355
              </a>
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 text-slate-400 text-xs font-bold tracking-widest uppercase">
            <span className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-2">
              <BmwRoundelMark />
            </span>
            Vogue Technics |  | UK-Wide Service
          </div>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}

