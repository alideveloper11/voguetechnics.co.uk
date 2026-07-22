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
        <clipPath id="bmw_roundel_clip_3s">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_roundel_clip_3s)">
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
  { title: "BMW 316D Engines", href: "/bmw-316d-engines" },
  { title: "BMW 316i Engines", href: "/bmw-316i-engines" },
  { title: "BMW 318D Engines", href: "/bmw-318d-engines" },
  { title: "BMW 318D xDrive Engines", href: "/bmw-318d-xdrive-engines" },
  { title: "BMW 320D Engines", href: "/bmw-320d-engines" },
  { title: "BMW 320D xDrive Engines", href: "/bmw-320d-xdrive-engines" },
  { title: "BMW 320i Engines", href: "/bmw-320i-engines" },
  { title: "BMW 325D Engines", href: "/bmw-325d-engines" },
  { title: "BMW 330D Engines", href: "/bmw-330d-engines" },
  { title: "BMW 330xd Engines", href: "/bmw-330xd-engines" },
  { title: "BMW 335D xDrive Engines", href: "/bmw-335d-xdrive-engines" },
];

const faqs = [
  {
    question: "How much does a BMW 3 Series engine rebuild cost in the UK?",
    answer:
      "Rebuild costs vary depending on the engine family, the specific variant, and the extent of internal wear identified during strip-down. We provide this service to you at a rate 40% lower than the main dealer. N47 timing chain jobs carry additional labour due to the rear-mounted chain location. Contact us for a tailored quote based on your specific model, engine code, and mileage.",
  },
  {
    question: "What are the most common engine problems on the BMW 3 Series?",
    answer:
      "The most frequently encountered issues across the 3 Series range include N47 timing chain failure, turbocharger wear on both diesel and petrol variants, head gasket failure   particularly following overheating events   EGR valve faults on diesel models, and oil leaks from various seals and gaskets as mileage accumulates. The N47 timing chain remains the single most significant and widely reported issue on diesel 3 Series models from the E90 and early F30 generations.",
  },
  {
    question: "Is a BMW 3 Series engine rebuild worth the investment?",
    answer:
      "In most cases, absolutely   particularly when the vehicle is otherwise in sound condition. A quality rebuild restores the engine to near-new performance levels, eliminates multiple outstanding issues in a single process, and extends the car's useful life considerably. The cost of a quality rebuild is a fraction of what a replacement vehicle at this level would cost.",
  },
  {
    question: "Do you provide a written warranty on rebuilt and replacement engines?",
    answer:
      "Yes, without exception. Every rebuilt and replacement engine supplied and fitted by Vogue Technics comes with a written warranty. The terms are explained clearly and in full before any work begins   no ambiguity, no conditions buried in small print.",
  },
  {
    question: "Can you supply and fit, or supply the engine only?",
    answer:
      "Both options are available. We carry out full supply and fit at our  workshop. We also supply engines to customers working with their own installer, and we can connect you with approved fitting partners in your area if local installation is the more practical option for you.",
  },
  {
    question: "How long does a BMW 3 Series engine replacement take?",
    answer:
      "A straightforward engine replacement typically takes 3–5 working days. A full engine rebuild takes 5–10 working days depending on parts availability and the extent of work required during the rebuild process. We confirm your specific timeframe at the point of booking and provide updates throughout.",
  },
  {
    question: "Do you work on all BMW 3 Series generations?",
    answer:
      "Yes. We work across all major 3 Series generations sold in the UK   E46, E90, F30, and G20   and across all significant engine variants including N47, B47, N55, B58, N20, and B48. If your engine code isn't listed here, contact us directly and we'll confirm availability and pricing.",
  },
];

export default function Bmw3SeriesEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.webp"
            alt="BMW 3 Series Engine Specialists"
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
              { name: "BMW 3 Series", href: "/bmw-3-series-engines" },
            ]}
          />

          <div className="text-center max-w-5xl mx-auto">
            <span
              className="animate-fade-up inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]"
            >
              BMW 3 Series Specialists (UK)
            </span>

            <h1
              className="animate-fade-up text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight"
              style={{ "--fade-delay": "0.1s" } as React.CSSProperties}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW 3 Series Engine Rebuild
              </span>{" "}
                Expert Repairs, Reconditioning &amp; Replacements Across the UK
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
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[160px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why BMW 3 Series Owners Across the UK Choose Vogue Technics
            </h2>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Choosing the right specialist for your BMW 3 Series engine is one of the most consequential decisions you&apos;ll make as an owner. The
              wrong workshop can turn a manageable problem into a catastrophic one. Here is why our customers trust us consistently, and why that
              trust is well placed.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "We Know the BMW 3 Series Engine Families in Genuine Depth",
                  text: "From the N47 diesel to the B58 inline-six petrol, we've rebuilt more 3 Series engines than most garages have ever seen.",
                },
                {
                  title: "Over 25 Years of Specialist BMW Engine Experience",
                  text: "Covering E46, E90, F30, and G20 generations — our reputation is built on results that hold up and prices that are honest.",
                },
                {
                  title: "Transparent Pricing and Honest Recommendations",
                  text: "Clear, itemised quotes before any work begins — no vague estimates, no surprise charges at collection.",
                },
              ].map((item) => (
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
              <Link key={m.title} href={m.href} className="group block h-full">
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our BMW 3 Series Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services tailored specifically to BMW 3 Series vehicles. Whatever your engine problem, we have the tools, parts, and expertise to solve it properly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Head Gasket Replacement", body: "OEM-grade head gasket repair for N47 and B47 units — full cylinder head inspection and pressure testing included.", href: "/services/head-gasket-replacement" },
              { title: "Timing Chain Replacement", body: "Full timing chain kit for N47D20 and B47 units — chain, tensioners, guides, and sprockets replaced together.", href: "/services/timing-chain-replacement" },
              { title: "Timing Belt Replacement", body: "Manufacturer-approved belts and tensioners for applicable 3 Series petrol variants — water pump replacement recommended at the same time.", href: "/services/timing-belt-replacement" },
              { title: "Turbo Replacement", body: "Quality replacement turbos for all 3 Series variants — post-installation boost pressure and oil feed testing included.", href: "/services/turbo-replacement" },
              { title: "Engine Rebuild", body: "Full strip-down and precision rebuild covering pistons, bearings, seals, and gaskets — up to 40% less than a new engine.", href: "/services/engine-rebuild" },
              { title: "Engine Repair", body: "Oil leaks, misfires, overheating, and warning lights diagnosed and resolved with transparent, fixed-price quotes.", href: "/services/engine-repair" },
              { title: "Engine Replacement", body: "Low-mileage tested replacements fitted to the highest standard — UK-wide collection and delivery included.", href: "/services/engine-replacement" },
              { title: "Engine Swap", body: "Performance upgrades and full engine swaps across all 3 Series variants — including ECU reconfiguration where required.", href: "/services/engine-swap" },
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

      {/* UK-WIDE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-[2.25rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nationwide BMW 3 Series Engine Service From 
            </h2>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Our workshop is based in , but the service we provide reaches BMW 3 Series owners right across the United Kingdom. Distance
              is not a barrier   we&apos;ve made it straightforward for customers from Scotland to Cornwall to access the same quality of work that our
              local customers receive.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Engine Collection &amp; Delivery Across the UK</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  We offer a fully managed engine collection and delivery service covering the whole of Great Britain. We collect your old unit, carry out the rebuild or
                  replacement at our workshop, and return the finished engine fully tested and ready to fit.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <h3 className="font-extrabold text-slate-900 tracking-tight">Realistic Turnaround Times   Confirmed and Kept</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Most BMW 3 Series engine rebuilds are completed within 5–10 working days. We give you a genuine, considered timeframe at the point of booking and consistently deliver on it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">BMW 3 Series Engine Rebuild &amp; Repair</span>
          </>
        }
        items={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Ready to get your BMW 3 Series back on the road — properly handled?
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

