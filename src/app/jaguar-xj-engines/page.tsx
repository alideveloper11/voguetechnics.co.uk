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

export const metadata: Metadata = pageMetadata.jaguarXj;

const engineCodes = getEngineCodesEntry("jaguar-xj-engines");

const faqs = [
  {
    question: "How much does a Jaguar XJ engine rebuild cost in the UK?",
    answer:
      "Costs vary depending on whether your XJ is fitted with a V6 diesel/petrol or a V8 petrol (including supercharged variants) and the extent of internal wear found during strip-down. Contact us for an itemised quote based on your engine code and symptoms.",
  },
  {
    question: "What are common Jaguar XJ engine problems?",
    answer:
      "Higher-mileage XJ engines can develop oil pressure faults, bearing wear, timing-related issues and cooling system problems. Accurate diagnosis is essential before recommending repair, rebuild or replacement.",
  },
  {
    question: "Do you offer supply and fit for Jaguar XJ engines?",
    answer:
      "Yes. We offer supply-only with UK-wide delivery or complete supply and fit at our  workshop with clear quoting and written warranty terms agreed up-front.",
  },
  {
    question: "Can you collect my engine from anywhere in the UK?",
    answer:
      "Yes. We offer UK-wide collection and delivery so you can access our  workshop expertise from anywhere in the country.",
  },
];

export default function JaguarXJEnginesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.webp"
            alt="Jaguar XJ engine specialists in "
            fill
            className="object-cover opacity-65 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/35 to-slate-900/10" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Jaguar Engines", href: "/jaguar-engines" },
              { name: "Jaguar XJ Engines", href: "/jaguar-xj-engines" },
            ]}
          />

          <div className="max-w-3xl mx-auto text-center pt-8">
            <h1
              className="text-2xl font-black leading-[1.1] tracking-tight text-white md:text-4xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Jaguar XJ Engine
              </span>{" "}
                Reconditioned, Rebuilt & Used Supply and Fit Across the UK
            </h1>

            <div
              className="mt-6 flex flex-col items-center"
            >
              <RegSearch className="max-w-3xl" />
            <HeroTrustLabels className="mt-4" />
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold text-slate-900">Engine Supply (Tested)</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">Used and reconditioned units supplied with documentation and warranty.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Rebuilds & Repairs</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">From warning lights to internal faults   diagnose, rebuild, and fix properly.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Supply & Fit ()</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">Complete fitting service with the right supporting work and checks.</p>
            </div>
          </div>
        </div>
      </section>

      {engineCodes ? <EngineCodesTable title={engineCodes.title} rows={engineCodes.rows} /> : null}

      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">Jaguar XJ Engine</span>
          </>
        }
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Need a Jaguar XJ engine quote?</h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Call our  team for the quickest route to the correct engine specification and a clear, itemised quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 01375 531355
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
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







