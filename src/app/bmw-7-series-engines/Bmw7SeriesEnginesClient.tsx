import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
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
        <clipPath id="bmw_roundel_clip_7s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_7s)">
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
  { title: "BMW 730D Engines", href: "/bmw-730d-engines" },
  { title: "BMW 730d xDrive Engines", href: "/bmw-730d-xdrive-engines" },
  { title: "BMW 740D Engines", href: "/bmw-740d-engines" },
  { title: "BMW 740D xDrive Engines", href: "/bmw-740d-xdrive-engines" },
  { title: "BMW 740d, Ld xDrive Engines", href: "/bmw-740d-ld-xdrive-engines" },
  { title: "BMW 750D xDrive Engines", href: "/bmw-750d-xdrive-engines" },
];

const heroParagraphs = [
  "The BMW 7 Series is a full-size luxury saloon with an engine lineup that has always been ambitious, complex, and genuinely impressive   from the naturally aspirated V8s of the E38 to the twin-turbo V8s and inline-six units of the F01 and G11.",
  "At Vogue Technics, we approach BMW 7 Series engine rebuilds, repairs, and replacements with the depth of expertise BMW's flagship demands, backed by over 25 years of dedicated specialist work.",
];

const whyChooseBlocks = [
  {
    title: "Flagship BMW Engines Require Flagship-Level Expertise",
    text: [
      "N63, N57, N62, M62 — we bring direct hands-on knowledge to every 7 Series engine job, not generic rebuild procedures.",
    ],
  },
  {
    title: "Over 25 Years of BMW Engine Work From ",
    text: [
      "E38 to G11 — our customer base is built almost entirely on referrals from owners who experienced our work directly.",
    ],
  },
  {
    title: "Fully Transparent Pricing   Agreed in Writing Before Any Work Starts",
    text: [
      "Fully itemised quote confirmed in writing before a single component is touched — no changes without prior agreement.",
    ],
  },
];

const serviceSections = [
  {
    title: "Our Complete BMW 7 Series Engine Services",
    paragraphs: [
      {
        heading: "Head Gasket Replacement",
        text: [
          "Head gasket failure across the BMW 7 Series presents differently depending on the engine. On the N63 twin-turbo V8, thermal concentration creates documented head gasket stress; on the N57 diesel, high-speed sustained use accumulates cumulative thermal stress.",
          "We use OEM-grade sealing components with a full cylinder head inspection covering flatness measurement, crack testing, and structural assessment before reassembly.",
        ],
      },
      {
        heading: "Timing Chain Replacement",
        text: [
          "Timing chain concerns affect the BMW 7 Series most acutely on the N57 diesel 730d and 740d variants. Sustained high-speed motorway use accelerates tensioner wear   a cold-start rattle that clears within a few seconds is the definitive early warning.",
          "We carry out timing chain replacement as a complete system job   chain, tensioners, guides, and sprockets replaced together without exception.",
        ],
      },
      {
        heading: "Timing Chain Repair",
        text: [
          "Where timing chain failure has already occurred, our repair service addresses the full scope of damage. We check for bent valves, damaged guides, sprocket wear, and secondary cylinder head damage, then confirm factory valve timing before the vehicle leaves our workshop.",
        ],
      },
      {
        heading: "Turbo Replacement",
        text: [
          "The N63 twin-turbo V8 presents the most specific challenges   with both turbos inside the engine V, oil feed contamination from a failing turbo circulates through the shared oil system before the failure is even diagnosed.",
          "We source and fit quality replacement turbochargers for all 7 Series variants with full post-installation testing. We assess the complete turbo system on every job, not just the presenting failure.",
        ],
      },
      {
        heading: "Engine Rebuild",
        text: [
          "A full BMW 7 Series engine rebuild is frequently the most cost-effective long-term investment for a flagship saloon with significant mileage. We strip completely, measure every component against factory tolerances, replace everything outside specification, and reassemble to the precision a BMW flagship demands.",
        ],
      },
      {
        heading: "Engine Repair",
        text: [
          "Not every BMW 7 Series engine problem requires a full rebuild. Our repair service begins with thorough diagnostic work   fault scanning, compression testing, oil analysis, and systematic inspection   so the work addresses the actual fault with precision.",
        ],
      },
      {
        heading: "Engine Replacement",
        text: [
          "When internal damage has progressed beyond economical repair, we supply and fit reconditioned and low-mileage used BMW 7 Series engines across all variants. Every replacement is sourced from verified suppliers and assessed before installation begins.",
        ],
      },
      {
        heading: "Engine Swap",
        text: [
          "Our BMW 7 Series engine swap service covers scenarios where a direct like-for-like replacement is not the objective. ECU calibration, drivetrain integration, ancillary mounting adaptations, and post-swap diagnostic verification are all addressed as standard   no shortcuts at any stage.",
        ],
      },
      {
        heading: "Timing Belt Replacement",
        text: [
          "Certain BMW 7 Series variants incorporate timing belt components within the valve train system. When a belt fails, engine damage is immediate and typically total. We carry timing belt kits for all applicable configurations and strongly recommend replacement at or ahead of BMW's specified service intervals.",
        ],
      },
      {
        heading: "Engine Health Check",
        text: [
          "Our BMW 7 Series engine health check covers full compression testing, oil analysis, comprehensive electronic diagnostic scanning, timing chain inspection, and turbocharger assessment where applicable.",
          "You receive a written report with clear, honest findings and straightforward recommendations   no upselling, no manufactured urgency.",
        ],
      },
    ],
  },
  {
    title: "Fast, Reliable UK-Wide Service From Our  Workshop",
    paragraphs: [
      {
        heading: "Engine Collection & Return   Full UK Coverage",
        text: [
          "Not within reach of our workshop? We operate a fully managed engine collection and delivery service covering the entire United Kingdom. Send your unit to us and we will return it rebuilt, repaired, or replaced   fully tested and ready to install.",
        ],
      },
      {
        heading: "Confirmed Turnaround Times   Agreed at Booking and Delivered",
        text: [
          "Most BMW 7 Series engine rebuilds are completed within 5–10 working days from parts confirmation. We confirm your specific timeframe at the point of booking and communicate proactively if anything changes.",
        ],
      },
      {
        heading: "Written Warranty on Every Job   Without Exception",
        text: [
          "Every engine rebuild, repair, and replacement carries a written warranty. We provide it because our standard of work warrants it   and every 7 Series owner who trusts us deserves complete confidence in what has been done.",
        ],
      },
    ],
  },
];

const faqs = [
  {
    question: "How much does a BMW 7 Series engine rebuild cost in the UK?",
    answer:
      "Costs vary considerably depending on engine variant and the extent of wear or damage. A straight-six diesel rebuild typically starts from around £2,500–£4,500. N63 and N57 twin-turbo rebuilds start from around £3,500–£6,500 due to the complexity involved. Earlier naturally aspirated V8 rebuilds are priced on application based on the specific unit and its condition. Contact us for a fully itemised, bespoke quote specific to your vehicle.",
  },
  {
    question: "What are the most common BMW 7 Series engine problems?",
    answer:
      "Issues vary by engine family. The N63 twin-turbo V8 is documented for oil consumption, hot-V thermal management challenges, and turbo failures. The N57 diesel carries well-established timing chain tensioner failure risks that are particularly relevant in 7 Series high-mileage motorway applications. The N62 naturally aspirated V8 presents valve stem seal wear and oil leak patterns at higher mileages. The B58 straight-six can develop oil system and timing-related issues over accumulated mileage. Early diagnosis consistently prevents the most expensive outcomes.",
  },
  {
    question: "Is it worth rebuilding a BMW 7 Series engine?",
    answer:
      "In most cases, yes   particularly when the vehicle is otherwise in sound condition. The 7 Series is extremely expensive to replace at an equivalent level of specification, refinement, and technology. A properly executed engine rebuild extends the vehicle's working life considerably and represents far better value than replacement at this level of the market.",
  },
  {
    question: "Do you provide a warranty on rebuilt and reconditioned engines?",
    answer:
      "Yes. Every rebuilt and replacement engine supplied or fitted by Vogue Technics carries a written warranty. Full terms are clearly explained and agreed before any work commences   no ambiguity, no small print.",
  },
  {
    question: "Can you handle both petrol and diesel 7 Series engines?",
    answer:
      "Yes. We work across the full BMW 7 Series engine range   M62, N62, N63, B58, N57, B57, and applicable M and Alpina variants   covering naturally aspirated, turbocharged, and twin-turbo engines across E38, E65, F01, F02, and G11 chassis generations.",
  },
  {
    question: "Do you offer supply and fit, or just engine supply?",
    answer:
      "Both options are available. We offer complete supply and fit at our  workshop. For customers located across the rest of the UK, we arrange fitting through our trusted approved installer network.",
  },
  {
    question: "How long does a BMW 7 Series engine replacement take?",
    answer:
      "A standard engine replacement typically takes 3–5 working days. A full rebuild takes between 5–10 working days depending on the engine variant and scope of work involved. Your confirmed timeframe is agreed clearly at the point of booking.",
  },
];

export default function Bmw7SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.webp"
            alt="BMW 7 Series Engine Specialists"
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
              { name: "BMW 7 Series", href: "/bmw-7-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <span
              className="animate-fade-up inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 7 Series Specialists (UK)
            </span>

            <h1
              className="animate-fade-up text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
              style={{ "--fade-delay": "0.1s" } as React.CSSProperties}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 7 Series Engine Rebuild
              </span>{" "}
                Flagship Specialist, Full Reconditioning &amp; Engine Services Across the UK
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
              Why BMW 7 Series Owners Choose Vogue Technics
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our BMW 7 Series Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services tailored specifically to BMW 7 Series vehicles. Whatever your engine problem, we have the tools, parts, and expertise to solve it properly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Head Gasket Replacement", body: "OEM-grade head gasket repair for N63, N57, and N62 units — full cylinder head inspection and pressure testing included.", href: "/services/head-gasket-replacement" },
              { title: "Timing Chain Replacement", body: "Full timing chain kit for N57 and applicable petrol units — chain, tensioners, guides, and sprockets replaced together.", href: "/services/timing-chain-replacement" },
              { title: "Timing Belt Replacement", body: "Manufacturer-approved belts and tensioners for applicable 7 Series variants — water pump replacement recommended at the same time.", href: "/services/timing-belt-replacement" },
              { title: "Turbo Replacement", body: "Quality replacement turbos for all 7 Series variants including N63 hot-V twin turbos — post-installation boost pressure and oil feed testing included.", href: "/services/turbo-replacement" },
              { title: "Engine Rebuild", body: "Full strip-down and precision rebuild for N63, N57, N62, and B58 units — up to 40% less than a new engine.", href: "/services/engine-rebuild" },
              { title: "Engine Repair", body: "Oil leaks, misfires, overheating, and warning lights diagnosed and resolved with transparent, fixed-price quotes.", href: "/services/engine-repair" },
              { title: "Engine Replacement", body: "Low-mileage tested replacements fitted to the highest standard — UK-wide collection and delivery included.", href: "/services/engine-replacement" },
              { title: "Engine Swap", body: "Performance upgrades and full engine swaps across all 7 Series variants — including ECU reconfiguration where required.", href: "/services/engine-swap" },
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
            Frequently Asked Questions   <span className="text-primary italic">BMW 7 Series Engine Work</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Ready to get your BMW 7 Series back to the standard its engineering deserves?
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

