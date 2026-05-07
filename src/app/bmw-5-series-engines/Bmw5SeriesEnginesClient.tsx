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
        <clipPath id="bmw_roundel_clip_5s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_5s)">
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
  { title: "BMW 518D Engines", href: "/bmw-518d-engines" },
  { title: "BMW 520D Engines", href: "/bmw-520d-engines" },
  { title: "BMW 520D xDrive Engines", href: "/bmw-520d-xdrive-engines" },
  { title: "BMW 525I Engines", href: "/bmw-525i-engines" },
  { title: "BMW 525D xDrive Engines", href: "/bmw-525d-xdrive-engines" },
  { title: "BMW 530D Engines", href: "/bmw-530d-engines" },
  { title: "BMW 530D xDrive Engines", href: "/bmw-530d-xdrive-engines" },
  { title: "BMW 535D xDrive Engines", href: "/bmw-535d-xdrive-engines" },
  { title: "BMW M550d xDrive Engines", href: "/bmw-m550d-xdrive-engines" },
];

const faqs = [
  {
    question: "How much does a BMW 5 Series engine rebuild cost in the UK?",
    answer:
      "Cost varies considerably depending on the engine family and internal condition found during stripdown. We provide this service to you at a rate 40% lower than the main dealer. A six-cylinder diesel starts from around £2,500–£4,500. Twin-turbo V8 units such as the N63 or S63 in the 550i and M5 are considerably more involved and priced accordingly. Contact Vogue Technics for an accurate, no-obligation quote specific to your generation, engine code, and mileage.",
  },
  {
    question: "Which BMW 5 Series engine has the most problems?",
    answer:
      "The N47D20C four-cylinder diesel — fitted to F10 518d and 520d models — is the most frequently flagged for timing chain failure. The N63B44 V8 in the 550i is well known for oil consumption issues. The N57 six-cylinder diesel is generally more reliable but is susceptible to swirl flap failure and EGR faults on higher-mileage examples. All are manageable with the right specialist.",
  },
  {
    question: "Is it worth rebuilding a BMW 5 Series engine?",
    answer:
      "In most cases, yes — particularly for F10 and G30 examples in otherwise good condition. A quality rebuild extends the vehicle's useful life considerably and costs significantly less than replacing the car. For E60 generation vehicles, the rebuild-versus-replace decision depends more on overall vehicle condition — we'll advise honestly when you contact us.",
  },
  {
    question: "Do you cover all 5 Series generations — E60, F10, G30?",
    answer:
      "Yes — we work across all three generations, every engine family, both diesel and petrol, including the high-performance M5 variants.",
  },
  {
    question: "Can you supply and fit a replacement engine as well as rebuild my existing one?",
    answer:
      "Both services are available at our Grays, Essex workshop. We can also arrange professional installation through our approved UK fitter network for owners based elsewhere in the country.",
  },
  {
    question: "How long does a BMW 5 Series engine replacement take?",
    answer:
      "A straightforward replacement typically takes 3–5 working days. A full rebuild takes 5–12 working days depending on engine complexity and parts required. We confirm your exact timeframe at the point of booking and hold to it.",
  },
];

export default function Bmw5SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW 5 Series Engine Specialists"
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
              { name: "BMW 5 Series", href: "/bmw-5-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 5 Series Specialists (UK)
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 5 Series Engine Rebuild
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
              The BMW 5 Series has been one of Britain&apos;s most popular executive cars for decades — and for good reason. Whether you drive an F10
              530d, a G30 520d, an older E60 525d, or a high-performance F10 M5, the engineering underneath you is sophisticated, capable, and —
              when it develops problems — demanding of genuine specialist knowledge.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="text-base md:text-lg text-slate-200/90 max-w-4xl mx-auto leading-relaxed"
            >
              The 5 Series spans three distinct generations and an enormous range of engine families. The N47&apos;s rear-mounted timing chain in the F10
              diesel. The N57&apos;s swirl flap vulnerability across the 530d and 535d. The N63&apos;s well-documented oil consumption issues in the 550i. The
              S63&apos;s extraordinary rebuild complexity in the M5. Each engine has its own failure patterns, its own rebuild requirements, and its own
              specific demands. A generic approach to any of them produces generic results — which is precisely why 5 Series owners across the UK
              bring their cars to us.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-slate-200/90 max-w-4xl mx-auto leading-relaxed"
            >
              At Vogue Technics, based in Grays, Essex, we&apos;ve worked on BMW 5 Series engines across every generation and every engine family for over
              25 years. Whatever your variant, whatever your problem, you&apos;ve found the right specialist.
            </motion.p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[160px] rounded-full -mr-64 -mt-64 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why BMW 5 Series Owners Across the UK Choose Vogue Technics
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "We Know Every Engine the 5 Series Has Ever Used",
                  text: "The breadth of the BMW 5 Series engine range is genuinely impressive — and genuinely demanding for anyone trying to service it properly. From the M47N2 four-cylinder diesel in the E60 520d through to the B57D30B six-cylinder diesel in the G30 540d xDrive, from the N20B20 four-cylinder petrol in the F10 520i to the twin-turbo S63B44 V8 in the M5 — every one of these engines has distinct characteristics, distinct failure modes, and distinct rebuild requirements. We cover all of them. Not as a list of capabilities on a website, but as the result of 25 years of direct, hands-on work across every significant engine code the 5 Series has carried. When your car comes into our Grays workshop, the technician working on it has seen that engine before — many times.",
                },
                {
                  title: "Three Generations, One Specialist",
                  text: "The E60/E61, F10/F11, and G30/G31 generations each represent a distinct engineering era — with different engine families, different failure patterns, and different rebuild considerations. F10 520d owners face the N47's rear-mounted timing chain as their primary concern. G30 530d owners are dealing with B57 EGR sensitivity and swirl flap risk. E60 535d owners are working with the M57TU2 twin-turbo diesel — a capable but demanding unit that requires very specific knowledge during rebuild. We understand these generational differences in practice, not just on paper. That's what genuine 5 Series expertise looks like.",
                },
                {
                  title: "Honest Pricing — Fully Itemised Before We Begin",
                  text: "Engine work on an executive BMW deserves complete financial clarity. Before any work starts, you'll receive a fully itemised quote covering all parts, labour, and ancillary requirements. No vague figures, no additions at collection. Call us or submit an online enquiry and we'll come back to you promptly with an honest, detailed breakdown.",
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

      {/* FIND YOUR BMW */}
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

      {/* FAQ */}
      <FAQSection
        title={
          <>
            Frequently Asked Questions — <span className="text-primary italic">BMW 5 Series Engine Rebuild &amp; Repair</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-tight">
            Ready to give your BMW 5 Series the specialist attention it deserves?
          </h2>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Call Vogue Technics today or use our online enquiry form for a fast, honest, no-obligation quote. We&apos;re based in Grays, Essex, and we
            work with BMW 5 Series owners across the entire United Kingdom — every generation, every engine, every problem, done properly.
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

