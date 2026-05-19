"use client";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import RegSearch from "@/components/common/RegSearch";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BmwRoundelMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <clipPath id="bmw_clip">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_clip)">
        <rect x="4" y="4" width="28" height="28" fill="#60a5fa" />
        <rect x="32" y="32" width="28" height="28" fill="#60a5fa" />
        <rect x="32" y="4" width="28" height="28" fill="#f8fafc" />
        <rect x="4" y="32" width="28" height="28" fill="#f8fafc" />
      </g>
      <circle cx="32" cy="32" r="27" fill="none" stroke="#0b0f19" strokeWidth="6" opacity="0.65" />
      <text x="32" y="16" textAnchor="middle" fontSize="10" fontWeight="900" fill="#f8fafc" fontFamily="ui-sans-serif, system-ui">
        BMW
      </text>
    </svg>
  );
}

const bmwTrustPoints = [
  "Free Same-Day Quote",
  "6-Month Warranty Included",
  "UK-Wide Collection & Delivery",
  "RAC-Approved Garage",
];

const bmwReasonsToTrust = [
  "Affordable BMW engine repair cost UK – Save up to 40% compared to main dealer prices",
  "Same-day free quote – Call or fill out our form and get a fast, transparent estimate",
  "Fast turnaround – Most engine repairs and replacements completed within 3–5 working days",
  "BMW-certified technicians – Our mechanics specialise exclusively in BMW engines",
  "Genuine & OEM-quality parts – Only approved components used on every job",
  "6-month parts and labour warranty – Every repair is fully guaranteed",
  "Nationwide service – We collect and deliver your BMW anywhere in the UK",
  "All models covered – BMW 1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 6 Series, 7 Series & X1",
];

const bmwServices = [
  {
    title: "BMW Head Gasket Repair",
    description: "Fast diagnosis and OEM-quality repair for head gasket failures — covering all BMW models with a 6-month warranty.",
    href: "/services/head-gasket-replacement",
  },
  {
    title: "BMW Timing Chain Replacement",
    description: "N47 and N20 timing chain specialists — early intervention before catastrophic failure at dealer-beating prices.",
    href: "/services/timing-chain-replacement",
  },
  {
    title: "BMW Turbo Replacement",
    description: "Supply and fit replacement turbos for diesel and petrol BMW variants — all work backed by our 6-month warranty.",
    href: "/services/turbo-replacement",
  },
  {
    title: "BMW Engine Rebuild",
    description: "Full strip-down and precision rebuild covering pistons, bearings, seals, and gaskets — up to 40% less than a new engine.",
    href: "/services/engine-rebuild",
  },
  {
    title: "BMW Engine Repair",
    description: "Oil leaks, misfires, overheating, and warning lights diagnosed and resolved with transparent, fixed-price quotes.",
    href: "/services/engine-repair",
  },
  {
    title: "BMW Engine Replacement",
    description: "Low-mileage tested replacements fitted to the highest standard — UK-wide collection and delivery included.",
    href: "/services/engine-replacement",
  },
  {
    title: "BMW Engine Swap",
    description: "Performance upgrades and full engine swaps across all BMW models — including ECU reconfiguration where required.",
    href: "/services/engine-swap",
  },
  {
    title: "BMW Timing Belt Replacement",
    description: "Manufacturer-approved belts and tensioners for older BMW petrol variants — water pump replacement recommended at the same time.",
    href: "/services/timing-belt-replacement",
  },
  {
    title: "BMW Engine Health Check",
    description: "Professional diagnostics covering fault codes, oil condition, coolant, and belt/chain inspection — full written report provided.",
    href: "/services/engine-health-check",
  },
];

const bmwModels = [
  {
    title: "BMW 1 Series Engine Repair & Replacement",
    href: "/bmw-1-series-engines",
    description: "Timing chain, turbo, and head gasket specialists for the N47 diesel — repairs and rebuilds at dealer-beating prices.",
  },
  {
    title: "BMW 2 Series Engine Repair & Replacement",
    href: "/bmw-2-series-engines",
    description: "Coupe and Active Tourer engine repairs across all variants — injector failure, turbo wear, and EGR faults fixed properly.",
  },
  {
    title: "BMW 3 Series Engine Repair & Replacement",
    href: "/bmw-3-series-engines",
    description: "N47 timing chain, N55 turbo, and more across E90, F30, and G20 generations — rebuilds up to 40% less than dealer pricing.",
  },
  {
    title: "BMW 4 Series Engine Repair & Replacement",
    href: "/bmw-4-series-engines",
    description: "Shares engine codes with the 3 Series — turbocharger wear, timing chain stretch, and oil pipe issues resolved with warranty.",
  },
  {
    title: "BMW 5 Series Engine Repair & Replacement",
    href: "/bmw-5-series-engines",
    description: "Fuel pump failures, timing chain wear, and injector faults across 520d, 525d, and 530d — fast diagnosis and clear quotes.",
  },
  {
    title: "BMW 6 Series Engine Repair & Replacement",
    href: "/bmw-6-series-engines",
    description: "N54, N55, and N63 engine repairs for the 630i, 640d, and 650i — specialist work at a fraction of main dealer cost.",
  },
  {
    title: "BMW 7 Series Engine Repair & Replacement",
    href: "/bmw-7-series-engines",
    description: "V8 and straight-six engine specialists for the 730d, 740i, and 750Li — saving you thousands over BMW dealer pricing.",
  },
  {
    title: "BMW X1 Engine Repair & Replacement",
    href: "/bmw-x1-engines",
    description: "N47 timing chain faults and turbo wear covered across E84 and F48 — fast quotes, UK-wide collection, warrantied units.",
  },
  {
    title: "BMW X3 Engine Repair & Replacement",
    href: "/bmw-x3-engines",
    description: "Timing chain, EGR, and turbo faults across E83, F25, and G01 generations — transparent pricing and UK-wide collection.",
  },
  {
    title: "BMW X2 Engine Repair & Replacement",
    href: "/bmw-x2-engines",
    description: "Timing chain wear, turbo faults, and oil leaks across the F39 range — specialist repairs and replacements at honest prices.",
  },
  {
    title: "BMW X5 Engine Repair & Replacement",
    href: "/bmw-x5-engines",
    description: "Straight-six and V8 engine specialists for E70, F15, and G05 — timing chain, turbo, and rebuild services with UK-wide collection.",
  },
];

const bmwWhyChoose = [
  "BMW-certified technicians with decades of combined experience",
  "RAC-approved garage – a trusted name in UK automotive services",
  "6-month parts and labour warranty on all engine work",
  "Up to 40% cheaper than BMW main dealer pricing",
  "UK-wide collection and delivery – we come to you anywhere in England, Scotland, and Wales",
  "Transparent, fixed-price quotes with no hidden charges",
  "Fast diagnostics – most engine faults identified within hours",
  "All BMW models covered from 1 Series to 7 Series and X1",
  "Genuine and OEM-quality parts used on every repair",
];

const bmwTestimonials = [
  {
    name: 'James R. – BMW 3 Series, Engine Rebuild, Manchester',
    quote:
      "I had a complete engine rebuild done on my F30 320d after a timing chain failure. The team gave me a quote the same day I called, the price was almost half what my local BMW dealer quoted, and the car was back with me in four days. Absolutely brilliant service – the car runs better than ever. I'd recommend them to any BMW owner in the UK without hesitation.",
  },
  {
    name: "Sarah T. – BMW X1, Engine Replacement, Birmingham",
    quote:
      "My X1 needed a full engine replacement after overheating damage. I was dreading the cost but these specialists were incredible – honest, fast, and far more affordable than I expected. They collected the car from my home, kept me updated throughout, and delivered it back running perfectly. The 6-month warranty gave me real peace of mind too. Outstanding.",
  },
  {
    name: "David M. – BMW 5 Series, Turbo Replacement, London",
    quote:
      "I'd been quoted over £2,000 by a BMW dealership for a turbo replacement on my 530d. This team did the same job for significantly less, using quality parts and finishing it in just two days. The mechanic explained everything clearly, the invoice matched the quote exactly, and the car pulls like new again. Best BMW specialist I've found in years.",
  },
];

const bmwFaqs = [
  {
    question: "How long does BMW engine replacement take?",
    answer:
      "A typical BMW engine replacement takes between 3 to 5 working days, depending on the model, engine type, and parts availability. In many cases, where stock is readily available, we can complete the replacement faster. Our team will give you a realistic timeframe when you book, and we keep you updated throughout the process. UK-wide collection and delivery is included, so you don't even need to drop the car off yourself.",
  },
  {
    question: "Do you cover all BMW models including 1 Series through 7 Series and X1?",
    answer:
      "Yes, we cover the full BMW range including the 1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 6 Series, 7 Series, and X1 across all engine variants, generations, and fuel types. Whether you drive a petrol, diesel, or plug-in hybrid BMW, our technicians have the knowledge and tooling to carry out repairs, replacements, and rebuilds to the highest standard.",
  },
  {
    question: "Is there a warranty included with your BMW engine services?",
    answer:
      "Yes. All engine repairs, replacements, and rebuilds carried out by our team come with a 6-month parts and labour warranty as standard. This covers the work done and the parts fitted, giving you complete confidence that your BMW is in safe hands. Extended warranty options may also be available on request.",
  },
  {
    question: "Do you offer UK-wide collection and delivery?",
    answer:
      "Absolutely. We offer a fully managed UK-wide collection and delivery service, meaning we can pick up your BMW from your home or workplace anywhere in England, Scotland, or Wales and return it to you once the work is complete. There's no need to arrange transport or take time off work. This service is included with all major engine repair and replacement bookings.",
  },
  {
    question: "What are the most common BMW engine problems?",
    answer:
      "Some of the most frequently seen BMW engine faults include timing chain wear (particularly in N47 diesel engines), turbocharger failure across diesel and petrol variants, high-pressure fuel pump failure in direct injection models, head gasket failure in older engines, oil feed pipe blockages causing bearing damage, coolant leaks from plastic thermostat housings, and EGR valve fouling in diesel models. If your BMW is displaying warning lights, running roughly, producing unusual smoke, or losing power, contact us immediately for a fast diagnostic and same-day repair quote.",
  },
];

export default function BmwEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW Engine Specialist"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "BMW Engines", href: "/bmw-engines" }]} />
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]">
            BMW Engine Specialists (UK)
          </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW Engine Repair, Replacement & Rebuild
              </span>{" "}
              Specialists for All Series – Trusted UK Garage
            </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="flex justify-center mt-6 mb-8 w-full">
            <RegSearch />
          </motion.div>

        </div>
      </div>
    </section>


      {/* WHY THOUSANDS TRUST US */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Thousands of BMW Owners Trust Us
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {bmwReasonsToTrust.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                  <p className="text-slate-800 leading-relaxed text-sm md:text-base font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR BMW ENGINE SERVICES */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our BMW Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services tailored specifically to BMW vehicles. Whatever your engine problem, we have the tools, parts, and expertise to solve it properly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bmwServices.map((s) => (
              <div key={s.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed line-clamp-4">{s.description}</p>
                </div>
                <div className="pt-4">
                  <Link
                    href={s.href}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 text-sm rounded-xl hover:bg-emerald-600 transition-colors"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMW MODEL-SPECIFIC ENGINE SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              BMW Model-Specific Engine Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bmwModels.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
              >
                <Link href={m.href} className="group block h-full">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white">
                          <BmwRoundelMark />
                        </span>
                        <span className="text-[11px] font-extrabold tracking-wide text-slate-900">BMW</span>
                      </div>
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-primary/90">Engines</span>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug tracking-tight">
                        {m.title}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{m.description}</p>
                    </div>

                    <div className="flex items-center text-primary font-extrabold text-[0.7rem] mt-6 group-hover:translate-x-2 transition-transform tracking-widest">
                      Read more <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR BMW ENGINE SPECIALISTS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Our BMW Engine Specialists?
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {bmwWhyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                  <p className="text-slate-800 leading-relaxed text-sm md:text-base font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT OUR CUSTOMERS SAY */}
      <section className="pt-24 pb-12 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <h2 className="bg-primary text-white text-3xl md:text-5xl font-bold px-6 py-3 rounded-lg shadow-lg tracking-tight uppercase italic">
                What Our Customers Say
              </h2>
            </div>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bmwTestimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-primary/90">
                      Verified
                    </span>
                  </div>

                  <p className="text-slate-700 italic leading-relaxed font-medium line-clamp-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <Link href="/reviews" className="text-primary font-extrabold text-[0.7rem] tracking-widest uppercase flex items-center gap-1 mt-2 hover:translate-x-1 transition-transform">
                    Read more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="border-t border-slate-50 pt-6">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base uppercase tracking-tight">{t.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title={<>Frequently Asked Questions</>}
        items={bmwFaqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Get Your Free BMW Engine Repair Quote Today
          </h2>


          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
            >
              Book online
            </Link>
            <a
              href="tel:01375531355"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
            >
              <Phone className="w-5 h-5 mr-2 text-primary" /> 01375 531355
            </a>
          </div>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}
