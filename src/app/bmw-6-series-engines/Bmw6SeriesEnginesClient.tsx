import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import WarrantyPartsExcellence from "@/components/common/WarrantyPartsExcellence";
import PartnerLogos from "@/components/common/PartnerLogos";
import RegSearch from "@/components/common/RegSearch";
import HeroTrustLabels from "@/components/common/HeroTrustLabels";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BmwRoundelMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <clipPath id="bmw_roundel_clip_6s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_6s)">
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
  { title: "BMW 640D Engines", href: "/bmw-640d-engines" },
  { title: "BMW 640D xDrive Engines", href: "/bmw-640d-xdrive-engines" },
];

const heroParagraphs = [
  "The BMW 6 Series is a grand tourer spanning engine options from composed straight-six diesels to thunderous twin-turbo V8s. Whether you own an E63, F12, F06, or G32 Gran Turismo, it deserves specialist attention that matches its engineering complexity.",
  "At Vogue Technics, we carry out BMW 6 Series engine rebuilds, repairs, and replacements across all generations and engine families, backed by over 25 years of dedicated BMW engine work.",
];

const whyChooseBlocks = [
  {
    title: "Genuine Cross-Generation BMW Engine Expertise",
    text: [
      "N63, S63, N57, S85 — we know every 6 Series engine's failure patterns and rebuild requirements from hands-on experience.",
    ],
  },
  {
    title: "Over 25 Years of BMW Engine Work From ",
    text: [
      "Built on referrals across every 6 Series generation — when we fix your engine, it stays fixed.",
    ],
  },
  {
    title: "Clear, Honest Pricing Before Any Work Begins",
    text: [
      "Fully itemised quote confirmed in writing before any work begins — no shifting estimates, no surprise additions.",
    ],
  },
];

const serviceSections = [
  {
    title: "Our Complete BMW 6 Series Engine Services",
    paragraphs: [
      {
        heading: "Head Gasket Replacement & Blown Head Gasket Repair",
        text: [
          "Head gasket failure across the BMW 6 Series range presents differently depending on the engine. On the N57 and N63 units, turbocharger boost pressure places the head gasket under sustained stress; on the naturally aspirated E63 engines, failure is more gradual.",
          "White or grey exhaust smoke, coolant that disappears without a visible leak, milky oil, or a climbing temperature all require prompt investigation. We use OEM-grade components with a full cylinder head inspection before reassembly.",
        ],
      },
      {
        heading: "Timing Chain Replacement & Timing Chain Repair",
        text: [
          "Timing chain concerns affect the BMW 6 Series across multiple engine families, most notably the N57 diesel and N55 petrol units. A cold-start rattle that clears within a few seconds is the most reliable early warning sign.",
          "We carry out timing chain replacement as a complete system job   chain, tensioners, guides, and sprockets replaced together. We also handle timing chain repair where secondary valve train damage has already occurred.",
        ],
      },
      {
        heading: "Turbo Replacement & Turbocharger Service",
        text: [
          "Turbocharger work on the BMW 6 Series covers a wide range of scenarios. The N55, N57, N63, and S63 each fail differently and require different replacement procedures   the N63's hot-V layout in particular demands inspection of the oil feed system and wider thermal management components.",
          "We source and fit quality replacement turbochargers for all 6 Series variants with post-installation testing covering boost pressure and oil feed integrity. We assess the wider system   not just the failed component.",
        ],
      },
      {
        heading: "Engine Rebuild",
        text: [
          "A full BMW 6 Series engine rebuild requires genuine technical breadth across the S85 V10, S63 twin-turbo V8, and N63 hot-V. We strip completely, measure every component against factory tolerances, replace everything outside specification, and reassemble with precision.",
          "For the S85 V10 in the E63 M6, we carry out a full bearing assessment on every rebuild as standard   the consequences of missing bearing wear on this engine are immediate and total.",
        ],
      },
      {
        heading: "Engine Repair",
        text: [
          "Not every BMW 6 Series engine problem warrants a full rebuild. Our repair service begins with thorough diagnostic work   fault scanning, compression testing, oil analysis, and systematic inspection   so the work is precisely targeted to the actual fault.",
        ],
      },
      {
        heading: "Engine Replacement & Engine Swap",
        text: [
          "When internal damage makes repair uneconomical, we supply and fit reconditioned and low-mileage used BMW 6 Series engines across all variants, sourced from verified suppliers and tested before installation.",
          "Our engine swap service manages the entire process   removal, full installation, all ancillary connections, ECU calibration, and comprehensive post-installation diagnostic testing.",
        ],
      },
      {
        heading: "Timing Belt Replacement",
        text: [
          "Certain BMW 6 Series variants incorporate timing belt components. Unlike a chain, a belt gives very little warning before failure   when it snaps, engine damage is immediate and typically total. We carry timing belt kits for all applicable 6 Series configurations.",
        ],
      },
      {
        heading: "Engine Health Check & Diagnostic",
        text: [
          "Our BMW 6 Series engine health check covers full compression testing, oil analysis, comprehensive electronic diagnostic scanning, and a detailed visual inspection. You receive a written report with clear findings and honest recommendations.",
        ],
      },
    ],
  },
  {
    title: "UK-Wide Service, Fast Turnaround, From Our  Workshop",
    paragraphs: [
      {
        heading: "Engine Collection & Return   Nationwide Coverage",
        text: [
          "Not within reach of our workshop? We operate a fully managed engine collection and delivery service covering the whole of the United Kingdom. Send your unit to us and we will return it rebuilt, repaired, or replaced   fully tested and ready to install.",
        ],
      },
      {
        heading: "Honest Turnaround Times   Confirmed at Booking",
        text: [
          "Most BMW 6 Series engine rebuilds are completed within 5–10 working days from parts confirmation. We confirm your specific timeframe at the point of booking and communicate clearly if anything changes.",
        ],
      },
      {
        heading: "Written Warranty on Every Engine Job",
        text: [
          "Every engine rebuild, repair, and replacement carries a written warranty. We provide it because our work warrants it and every 6 Series owner who trusts us deserves complete confidence in what has been done.",
        ],
      },
    ],
  },
];

const faqs = [
  {
    question: "How much does a BMW 6 Series engine rebuild cost in the UK?",
    answer:
      "Costs vary significantly depending on the engine variant and the extent of wear or damage. We provide this service to you at a rate 40% lower than the main dealer. The S85 V10 rebuild in the E63 M6 is priced on application given the unique nature of the work involved. Contact us for a fully itemised, bespoke quote based on your specific vehicle.",
  },
  {
    question: "What are the most common BMW 6 Series engine problems?",
    answer:
      "Issues vary by engine. The N57 diesel is known for timing chain tensioner failure. The N63 petrol V8 is documented for excessive oil consumption, thermal management issues, and hot-V turbo failures. The S85 V10 in the E63 M6 presents rod bearing failure risks on higher-mileage examples. The N55 straight-six carries timing chain tensioner vulnerabilities. Early diagnosis consistently prevents the most expensive outcomes.",
  },
  {
    question: "Is it worth rebuilding a BMW 6 Series engine?",
    answer:
      "In most cases, yes   particularly when the vehicle is otherwise in sound condition. The 6 Series is expensive to replace at an equivalent level of quality and performance. A properly executed engine rebuild extends the vehicle's usable life significantly and represents far better value than replacement.",
  },
  {
    question: "Do you provide a warranty on rebuilt engines?",
    answer:
      "Yes. Every rebuilt and replacement engine supplied or fitted by Vogue Technics carries a written warranty. Full terms are explained and agreed before any work commences.",
  },
  {
    question: "Can you handle both petrol and diesel 6 Series engines?",
    answer:
      "Yes. We work across the full BMW 6 Series engine range   N52, N55, N57, N62, N63, S63, S85, M57, B47, B57, and B58   covering petrol, diesel, naturally aspirated, turbocharged, and high-performance M variants across E63, E64, F06, F12, F13, and G32 chassis generations.",
  },
  {
    question: "Can you supply and fit, or just supply the engine?",
    answer:
      "Both options are available. We offer complete supply and fit at our  workshop. For customers elsewhere in the UK, we arrange fitting through our network of approved installers.",
  },
  {
    question: "How long does a BMW 6 Series engine replacement take?",
    answer:
      "A standard engine replacement typically takes 3–5 working days. A full rebuild takes between 5–10 working days depending on the engine variant and scope of work. Your confirmed timeframe is agreed at the point of booking.",
  },
];

export default function Bmw6SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.webp"
            alt="BMW 6 Series Engine Specialists"
            fill
            className="object-cover opacity-65 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/25 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "BMW Engines", href: "/bmw-engines" },
              { name: "BMW 6 Series", href: "/bmw-6-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <span
              className="animate-fade-up inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 6 Series Specialists (UK)
            </span>

            <h1
              className="animate-fade-up text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
              style={{ "--fade-delay": "0.1s" } as React.CSSProperties}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 6 Series Engine Rebuild
              </span>{" "}
                Expert Reconditioning, Repair &amp; Replacement Across the UK
            </h1>

            <div
              className="animate-fade-up mt-6 mb-8 flex w-full flex-col items-center justify-center"
              style={{ "--fade-delay": "0.18s" } as React.CSSProperties}
            >
              <RegSearch />
            <HeroTrustLabels className="mt-4" />
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[160px] rounded-full -mr-64 -mt-64 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why BMW 6 Series Owners Choose Vogue Technics
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyChooseBlocks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight">{item.title}</h3>
                      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed text-sm md:text-base">
                        {item.text.map((t) => (
                          <p key={t.slice(0, 60)}>{t}</p>
                        ))}
                      </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <WarrantyPartsExcellence />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our BMW 6 Series Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services tailored specifically to BMW 6 Series vehicles. Whatever your engine problem, we have the tools, parts, and expertise to solve it properly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Head Gasket Replacement", body: "OEM-grade head gasket repair for N57, N63, and N52 units — full cylinder head inspection and pressure testing included.", href: "/services/head-gasket-replacement" },
              { title: "Timing Chain Replacement", body: "Full timing chain kit for N57 and N55 units — chain, tensioners, guides, and sprockets replaced together.", href: "/services/timing-chain-replacement" },
              { title: "Timing Belt Replacement", body: "Manufacturer-approved belts and tensioners for applicable 6 Series variants — water pump replacement recommended at the same time.", href: "/services/timing-belt-replacement" },
              { title: "Turbo Replacement", body: "Quality replacement turbos for all 6 Series variants including N63 hot-V — post-installation boost pressure and oil feed testing included.", href: "/services/turbo-replacement" },
              { title: "Engine Rebuild", body: "Full strip-down and precision rebuild for N63, S63, S85, and N57 units — up to 40% less than a new engine.", href: "/services/engine-rebuild" },
              { title: "Engine Repair", body: "Oil leaks, misfires, overheating, and warning lights diagnosed and resolved with transparent, fixed-price quotes.", href: "/services/engine-repair" },
              { title: "Engine Replacement", body: "Low-mileage tested replacements fitted to the highest standard — UK-wide collection and delivery included.", href: "/services/engine-replacement" },
              { title: "Engine Swap", body: "Performance upgrades and full engine swaps across all 6 Series variants — including ECU reconfiguration where required.", href: "/services/engine-swap" },
              { title: "Engine Health Check", body: "Professional diagnostics covering fault codes, oil condition, coolant, and belt/chain inspection — full written report provided.", href: "/services/engine-health-check" },
            ].map((s) => (
              <div key={s.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed line-clamp-4">{s.body}</p>
                </div>
                <div className="pt-4">
                  <Link href={s.href} className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 text-sm rounded-xl hover:bg-emerald-600 transition-colors">
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">BMW 6 Series Engine Work</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Ready to get your BMW 6 Series back to the standard it deserves?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5"
            >
              Book online
            </Link>
            <a
              href="tel:01375531355"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5"
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

