"use client";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import RegSearch from "@/components/common/RegSearch";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BmwRoundelMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <clipPath id="bmw_roundel_clip_4s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_4s)">
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

const findYourBmwCards = [
  { title: "BMW 418D Engines", href: "/bmw-418d-engines" },
  { title: "BMW 420D Engines", href: "/bmw-420d-engines" },
  { title: "BMW 420D xDrive Engines", href: "/bmw-420d-xdrive-engines" },
  { title: "BMW 425D Engines", href: "/bmw-425d-engines" },
  { title: "BMW 435D xDrive Engines", href: "/bmw-435d-xdrive-engines" },
];

const faqs = [
  {
    question: "How much does a BMW 4 Series engine rebuild cost in the UK?",
    answer:
      "Costs vary depending on the engine variant and the extent of internal wear found during our initial inspection.We provide this service to you at a rate 40% lower than the main dealer. Contact Vogue Technics for an accurate, no-obligation quote specific to your model and engine code.",
  },
  {
    question: "Which BMW 4 Series engine has the most problems?",
    answer:
      "The N47D20 four-cylinder diesel — fitted to the 420d across the F32, F33, and F36 — is the most frequently flagged for timing chain issues. The N20 petrol is known for oil consumption, and the N57 diesel can suffer turbocharger wear on higher-mileage examples. All are entirely manageable with the right specialist.",
  },
  {
    question: "Is it worth rebuilding a BMW 4 Series engine?",
    answer:
      "In most cases, yes — particularly when the rest of the car is in good condition. A properly executed rebuild extends the vehicle's useful life significantly and costs considerably less than replacing the car at this level.",
  },
  {
    question: "Do you cover all BMW 4 Series variants — F32, F33, F36, G22?",
    answer:
      "Yes. We work across the full 4 Series range — every chassis variant, every engine family, both diesel and petrol — including the high-performance M4 S55 twin-turbo engine.",
  },
  {
    question: "Can you supply and fit the engine as well as rebuild it?",
    answer:
      "Absolutely. Full supply and fit is available at our Grays, Essex workshop. We can also arrange professional installation through our approved UK fitter network if you're based elsewhere in the country.",
  },
  {
    question: "How long does a BMW 4 Series engine replacement take?",
    answer:
      "A straightforward engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on parts required. We confirm your exact timeframe at the point of booking and stick to it.",
  },
];

export default function Bmw4SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW 4 Series Engine Specialists"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "BMW Engines", href: "/bmw-engines" },
              { name: "BMW 4 Series", href: "/bmw-4-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 4 Series Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 4 Series Engine Rebuild
              </span>{" "}
              — Expert Reconditioning, Repair &amp; Replacement Across the UK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="flex justify-center mt-6 mb-8 w-full"
            >
              <RegSearch />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="text-base md:text-lg text-slate-200 mb-6 max-w-4xl mx-auto leading-relaxed"
            >
              The BMW 4 Series sits in a class of its own — a coupe, convertible, or Gran Coupé that delivers genuine driving pleasure alongside
              everyday practicality. But beneath that elegant exterior, the engine families powering these cars carry well-documented vulnerabilities
              that catch owners off guard, often at significant cost. Whether you drive an F32 420d with the N47&apos;s notorious timing chain concerns,
              a G22 430i running the B48 petrol unit, or an F36 Gran Coupé with an N57 six-cylinder diesel, the principle remains the same — when the
              engine needs attention, it needs a specialist.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="text-base md:text-lg text-slate-200/90 max-w-4xl mx-auto leading-relaxed"
            >
              At Vogue Technics, based in Grays, Essex, we&apos;ve been working on BMW engines for over 25 years. We know the 4 Series engine families —
              their strengths, their weaknesses, and exactly what&apos;s required to put them right. Whether you need a full BMW 4 Series engine rebuild,
              a quality reconditioned replacement, or targeted repair work on a specific component, we bring the depth of knowledge and the standard
              of workmanship this car genuinely deserves.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[160px] rounded-full -mr-64 -mt-64 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why BMW 4 Series Owners Across the UK Choose Vogue Technics
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "We Know Every Engine Variant the 4 Series Has Ever Used",
                  text: "The 4 Series has run across two generations and multiple chassis variants — F32, F33, F36, G22, G23 — with an engine range that spans four-cylinder petrols, six-cylinder diesels, and the high-performance S55 twin-turbo in the M4. Each engine family has its own characteristic failure patterns. The N47 diesel's timing chain vulnerability. The N20 petrol's oil consumption tendencies. The B47's EGR cooler sensitivity. The N57's turbocharger wear under sustained motorway loads. We know all of them — not from a technical bulletin, but from years of hands-on work.",
                },
                {
                  title: "25 Years of BMW Engine Expertise, Based in Grays, Essex",
                  text: "Our reputation across the UK has been built entirely on the quality of our work over 25 years. BMW owners travel to us from London, the South East, the Midlands, and further afield — not because we're the closest option, but because they know the standard they'll receive. We've rebuilt and reconditioned more BMW 4 Series engines than most workshops will ever see. That accumulated experience shows in everything we do.",
                },
                {
                  title: "Fully Transparent Pricing — Every Time",
                  text: "Engine work on a premium BMW deserves complete financial clarity. Before we touch your car, you'll receive a fully itemised quote detailing exactly what work is planned, what parts will be used, and what the total cost will be. No vague estimates, no additions that appear at collection. Call us today or submit an online enquiry and we'll come back to you promptly with an honest, detailed quote.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight">{item.title}</h3>
                      <p className="mt-3 text-slate-700 leading-relaxed text-sm md:text-base">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Find your <span className="text-primary">BMW</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {findYourBmwCards.map((m) => (
              <Link key={`${m.title}-${m.href}`} href={m.href} className="group block h-full">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center mb-5">
                    <div className="rounded-full bg-slate-50 border border-slate-200 p-3 group-hover:border-primary/40 transition-colors">
                      <BmwRoundelMark />
                    </div>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 text-center group-hover:text-primary transition-colors">
                    {m.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-center text-primary font-extrabold text-[0.7rem] tracking-widest uppercase group-hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions — <span className="text-primary italic">BMW 4 Series Engine Rebuild &amp; Repair</span>
          </>
        }
        items={faqs}
      />

      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-tight">
            Ready to get your BMW 4 Series back performing as it should?
          </h2>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Call Vogue Technics today or use our online enquiry form for a fast, honest, no-obligation quote. We&apos;re based in Grays, Essex, and we
            serve BMW 4 Series owners right across the United Kingdom. Whatever the variant, whatever the engine, whatever the problem — we have the
            expertise to fix it properly.
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

      <PartnerLogos />
    </div>
  );
}

