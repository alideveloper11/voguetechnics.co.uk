import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import HeroTrustLabels from "@/components/common/HeroTrustLabels";
import FAQSection from "@/components/common/FAQSection";
import WarrantyPartsExcellence from "@/components/common/WarrantyPartsExcellence";
import PartnerLogos from "@/components/common/PartnerLogos";
import EngineCodesTable from "@/components/common/EngineCodesTable";
import type { EngineCodesEntry } from "@/data/engineCodes";

type LandRoverFreelander2EnginesClientProps = {
  engineCodes?: EngineCodesEntry | null;
};

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "Head gasket failure on the Freelander 2 2.2 TD4 is one of the most common serious faults we handle. Coolant disappearing without visible leaks, white smoke on cold start, persistent overheating, or a milky residue on the oil filler cap are common signs. Acting quickly saves the engine. We replace Freelander 2 head gaskets using OEM-grade components, machining the head surface where required to ensure a clean, permanent, reliable seal.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "This is arguably the single most important maintenance item on the Freelander 2 2.2 TD4. Unlike many other Land Rover engines that use a timing chain, the Freelander 2 diesel runs a timing belt   and a belt gives no warning before failure. If you're uncertain when it was last replaced, we strongly recommend immediate inspection and replacement rather than assumption. We carry complete timing belt kits for all Freelander 2 diesel variants and replace them to   or ahead of   manufacturer-specified intervals.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "The Freelander 2 TD4 turbocharger suffers when oil changes are stretched or the engine runs low on oil. Noticeable power loss, excessive smoke, a whistling/grinding noise, or reduced engine performance warnings are common signs. We source quality replacement turbos for all Freelander 2 variants and fit them to manufacturer specifications, carrying out full post-installation testing before the vehicle leaves our workshop.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "While the Freelander 2 diesel runs a belt, certain petrol variants incorporate timing chain systems that develop wear over time, particularly at higher mileage. Cold-start rattle and rough running are indicators. We replace complete timing chain assemblies   chain, tensioners, guides, and sprockets as a full system   ensuring the repair addresses the root cause.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When a Freelander 2 engine has accumulated significant mileage, suffered prolonged head gasket contamination, or developed wear across multiple components, a full rebuild is often the most cost-effective path forward. We strip the engine entirely, inspect every component against factory tolerances, replace everything that falls short, and rebuild to manufacturer specifications   backed by a written warranty.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every Freelander 2 engine fault demands a full rebuild. Our diagnostic process identifies the precise root cause before we recommend any course of action. Oil leaks, bearing wear, EGR faults, injector problems, sensor failures, valve damage   we handle every level of engine repair with accuracy and complete honesty.",
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    body:
      "When multiple major faults develop together, or replacement is the more sensible decision, we supply and fit quality reconditioned and low-mileage used Freelander 2 engines sourced from trusted UK suppliers. Every engine we supply is inspected and tested before it goes near your vehicle   we don't fit engines we haven't personally verified as fit for purpose.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Considering an engine conversion on your Freelander 2   upgrading from the TD4 to the more capable SD4, or exploring an alternative option? Our engine swap service covers mounts, ancillaries, wiring, ECU mapping, and thorough post-swap diagnostics   carried out by specialists who understand what each conversion involves.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "If your Freelander 2 has developed an engine system fault warning, reduced engine performance message, or any symptom you can't quite pin down, our engine health check gives you a clear and honest picture. We carry out compression testing, oil analysis, full diagnostic scanning, and a thorough visual inspection. You receive a written report with plain-English findings and genuine recommendations.",
  },
];

const faqs = [
  {
    question: "How much does a Land Rover Freelander 2 engine repair cost in the UK?",
    answer:
      "Repair costs depend on the specific fault and engine variant. A head gasket replacement on the 2.2 TD4 typically starts from around £900–£1,800. A full engine rebuild starts from approximately £1,800–£3,200. Contact us for a precise, itemised quote tailored to your vehicle and the fault you're experiencing.",
  },
  {
    question: "What are the most common Freelander 2 engine problems?",
    answer:
      "The most frequent faults are 2.2 TD4 head gasket failure, timing belt failure due to missed replacement intervals, turbocharger failure, EGR system faults causing reduced engine performance, and oil leaks from ageing seals on higher-mileage units.",
  },
  {
    question: "How often should the Freelander 2 timing belt be replaced?",
    answer:
      "Land Rover recommends timing belt replacement on the 2.2 TD4 at specified mileage and age intervals   typically every 72,000 miles or 6 years, whichever comes first. If you're unsure when it was last replaced, we strongly recommend immediate inspection and replacement rather than waiting.",
  },
  {
    question: "Is the Land Rover Freelander 2 worth repairing?",
    answer:
      "For vehicles in otherwise sound condition, yes   absolutely. A quality engine rebuild or replacement costs significantly less than sourcing a replacement Freelander 2 at current used market prices, and it comes with a written warranty.",
  },
  {
    question: "Do you supply reconditioned Freelander 2 engines for sale in the UK?",
    answer:
      "Yes. We supply quality reconditioned and low-mileage used Freelander 2 engines for all variants   2.2 TD4, 2.2 SD4, and petrol units. Contact us for current availability and accurate pricing.",
  },
  {
    question: "What does the Freelander 2 engine system fault warning mean?",
    answer:
      "This warning typically indicates a fault within the engine management system   anything from a sensor issue through to turbo failure or more serious internal problems. We recommend booking a diagnostic check immediately. Continuing to drive risks escalating an existing fault.",
  },
  {
    question: "How long does Freelander 2 engine repair or replacement take?",
    answer:
      "Targeted repairs and engine replacements are typically completed within 3–7 working days. Full rebuilds take 5–10 working days depending on parts availability. We confirm your exact timeline at booking and honour it without exception.",
  },
];

export default function LandRoverFreelander2EnginesClient({ engineCodes }: LandRoverFreelander2EnginesClientProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.webp"
            alt="Land Rover Freelander 2 engine specialist in "
            fill
            className="object-cover opacity-65 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/35 to-slate-900/10" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Land Rover Engines", href: "/land-rover-engines" },
              { name: "Land Rover Freelander 2 Engines", href: "/land-rover-freelander-2-engines" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center pt-8">
            <h1
              className="animate-fade-up text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
              style={{ "--fade-y": "18px" } as React.CSSProperties}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Land Rover Freelander 2
              </span>{" "}
              Engine Repair, Rebuild & Replacement   Specialists in 
            </h1>

            <div
              className="animate-fade-up mt-7 flex flex-col items-center"
              style={{ "--fade-y": "18px", "--fade-delay": "0.12s" } as React.CSSProperties}
            >
              <RegSearch className="max-w-3xl" />
            <HeroTrustLabels className="mt-4" />
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Freelander 2 Owners Choose Vogue Technics</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Land Rover Exclusivity   Every Technician, Every Day</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Every technician works exclusively on Land Rover and Range Rover platforms. The Freelander 2's 2.2 TD4 and SD4 engines have specific failure characteristics   and our team has dealt with every one repeatedly.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">25 Years of Results That Speak for Themselves</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  We've rebuilt and repaired hundreds of Freelander 2 engines for owners across the UK. Our reputation is built through the quality and durability of our work.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Itemised Quotes   Before We Touch Your Vehicle</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  We provide a full itemised quote covering parts, labour, and a confirmed timeline before we lift a single tool. No evolving estimates. No surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {engineCodes ? <EngineCodesTable title={engineCodes.title} rows={engineCodes.rows} /> : null}

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Complete Land Rover Freelander 2 Engine Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We cover every engine service the Freelander 2 requires   all variants, all model years from 2006 to 2015, and all levels of fault from a single component repair through to a complete engine replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-xs text-slate-700 leading-relaxed line-clamp-4">{service.body}</p>
                </div>
                <div className="pt-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-600 transition-colors"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <WarrantyPartsExcellence />
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-slate-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/25 blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-[90px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              What Our Freelander 2 Customers Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"My Freelander 2 TD4 had been misdiagnosed at two different garages   both replaced parts that didn\'t fix the problem. Vogue Technics found the real fault immediately, gave me a clear quote, and resolved it properly first time. Wish I\'d called them initially."',
                by: "  Andrew H., Suffolk",
              },
              {
                quote:
                  '"Sent my 2.2 TD4 engine down from Leeds after a head gasket failure that had gone too far to repair in situ. It came back beautifully rebuilt, packaged properly, and arrived ahead of the date I\'d been given. Exceptional."',
                by: "  Lisa M., Leeds",
              },
              {
                quote:
                  '"I was quoted over £4,800 by two garages for a Freelander 2 engine replacement. Vogue Technics completed the same job with a warranty for significantly less. Professional, honest, and genuinely knowledgeable about the vehicle."',
                by: "  Simon R., Berkshire",
              },
            ].map((t) => (
              <div
                key={t.by}
                className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md"
              >
                <div className="flex items-center gap-1 text-emerald-300/90">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-slate-100/90 leading-relaxed italic">{t.quote}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-300/70">{t.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title={<>Frequently Asked Questions   <span className="text-primary italic">Land Rover Freelander 2 Engines</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Book Your Freelander 2 Engine Work Today   Call Vogue Technics
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 01375 531355
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}

