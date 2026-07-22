import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import HeroTrustLabels from "@/components/common/HeroTrustLabels";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import EngineCodesTable from "@/components/common/EngineCodesTable";
import { getEngineCodesEntry } from "@/data/engineCodes";

export const metadata: Metadata = pageMetadata.jaguarEPace;

const engineCodes = getEngineCodesEntry("jaguar-e-pace-engines");

const faqs = [
  {
    question: "How much does a Jaguar E-Pace engine rebuild cost in the UK?",
    answer:
      "Rebuild costs depend on the specific Ingenium variant and the extent of internal wear identified during strip-down. Contact us for an accurate, itemised quote based on your engine code and current symptoms.",
  },
  {
    question: "What are the most common engine problems on the Jaguar E-Pace?",
    answer:
      "On Ingenium diesel variants, timing chain tensioner wear, EGR/DPF related faults, and turbocharger deterioration are common. On petrol variants, timing chain behaviour and high-pressure fuel system sensitivity can be key concerns. Early diagnosis reduces repair cost.",
  },
  {
    question: "Is it worth rebuilding a Jaguar E-Pace Ingenium engine?",
    answer:
      "In the vast majority of cases, yes   particularly when the rest of the vehicle is in good condition. A correctly executed rebuild restores performance and reliability and is often more cost-effective than replacement vehicle costs.",
  },
  {
    question: "Do you work on both diesel and petrol Jaguar E-Pace engines?",
    answer:
      "Yes. We work across all Ingenium variants fitted to the E-Pace, including 2.0 diesel outputs and 2.0 petrol specifications. We confirm exact engine code by registration/VIN.",
  },
  {
    question: "Do you provide a written warranty on Jaguar E-Pace engine work?",
    answer:
      "Yes. Rebuilds, replacements and major repairs are backed by a written warranty with clear terms agreed before work begins.",
  },
  {
    question: "How long does a Jaguar E-Pace engine rebuild take?",
    answer:
      "Most Ingenium rebuilds are typically completed within 7–10 working days depending on parts required and the extent of internal work identified during strip-down.",
  },
  {
    question: "Can you collect my engine from anywhere in the UK?",
    answer:
      "Yes. We offer UK-wide collection and delivery so you can access our  workshop expertise from anywhere in the country.",
  },
];

export default function JaguarEPaceEnginesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/images/car_bgg.webp" alt="Jaguar E-Pace engine rebuild specialists in " fill className="object-cover opacity-65 mix-blend-overlay" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/35 to-slate-900/10" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Jaguar Engines", href: "/jaguar-engines" }, { name: "Jaguar E-Pace Engines", href: "/jaguar-e-pace-engines" }]} />
          <div className="max-w-3xl mx-auto text-center pt-8">
            <h1 className="text-2xl font-black leading-[1.1] tracking-tight text-white md:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">Jaguar E-Pace Engine Rebuild</span>{" "}
                Ingenium 2.0 Supply, Reconditioning & Fit Across the UK
            </h1>
            <div className="mt-6 flex flex-col items-center">
              <RegSearch className="max-w-3xl" />
            <HeroTrustLabels className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-slate-900">Why Jaguar E-Pace owners choose Vogue Technics</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "We know the Ingenium engine family inside out   diagnosis first, not guesswork.",
                  "25+ years of specialist engine expertise from our  workshop.",
                  "Clear, itemised quotes before any work is authorised.",
                  "Written warranty on rebuilds, replacements and major repairs.",
                  "UK-wide collection and delivery available.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Our Jaguar E-Pace engine services</h3>
              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="font-bold text-slate-900">Engine rebuild</span>: complete strip-down, inspection and rebuild to the correct
                  tolerances for your Ingenium variant.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Timing chain replacement</span>: chain, tensioners, guides and sprockets replaced as a
                  complete system   not piecemeal.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Turbo replacement</span>: full assessment first, then correct-spec turbo with oil feed
                  system checks and post-install verification.
                </p>
                <p>
                  <span className="font-bold text-slate-900">Head gasket repair</span>: crack test and surface checks where required, cooling system
                  verified before return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {engineCodes ? <EngineCodesTable title={engineCodes.title} rows={engineCodes.rows} /> : null}

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold text-slate-900">Full rebuild & exchange</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Complete strip, inspect and rebuild using quality components   tested before dispatch.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Known failure modes addressed</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Timing chain, turbo/injector concerns, and liner condition assessed properly   not guessed.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">UK-wide service</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Supply-only delivery supported with technical guidance, or supply & fit at .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title={<>Frequently Asked Questions   <span className="text-primary italic">Jaguar E-Pace</span></>} items={faqs} />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">Need an E-Pace Ingenium rebuild?</h2>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01375531355" className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]">
                <Phone className="w-5 h-5 mr-2" />
                Call 01375 531355
              </a>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]">
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







