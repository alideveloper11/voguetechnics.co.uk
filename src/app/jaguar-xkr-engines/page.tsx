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

export const metadata: Metadata = pageMetadata.jaguarXkr;

const engineCodes = getEngineCodesEntry("jaguar-xkr-engines");

const faqs = [
  {
    question: "How much does a Jaguar XKR engine rebuild cost in the UK?",
    answer:
      "Costs vary depending on whether your XKR is fitted with the 4.2 or 5.0 supercharged V8 and the extent of internal wear found during strip-down. Contact us for an accurate, itemised quote based on your engine code and symptoms.",
  },
  {
    question: "What are the most common Jaguar XKR engine problems?",
    answer:
      "Common issues include timing chain and tensioner wear, supercharger wear, cooling system failures, oil leaks and oil consumption at higher mileage. Accurate diagnosis first is essential on supercharged engines.",
  },
  {
    question: "Do you carry out supercharger repair and replacement?",
    answer:
      "Yes. We repair and replace superchargers on XKR engines and verify boost output after installation as part of our process.",
  },
  {
    question: "Do you offer UK-wide collection and delivery?",
    answer:
      "Yes. We offer UK-wide collection and delivery so you can access our  workshop expertise from anywhere in the country.",
  },
  {
    question: "Do you provide written warranty on engine work?",
    answer:
      "Yes. Rebuilds, replacements and major repairs are backed by written warranty terms agreed before any work begins.",
  },
];

export default function JaguarXKREnginesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Jaguar XKR engine specialists in "
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
              { name: "Jaguar XKR Engines", href: "/jaguar-xkr-engines" },
            ]}
          />

          <div className="max-w-3xl mx-auto text-center pt-8">
            <h1
              className="text-2xl font-black leading-[1.1] tracking-tight text-white md:text-4xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Jaguar XKR Engine
              </span>{" "}
                Supercharged V8 Supply, Rebuild & Fit Across the UK
            </h1>

            <div
              className="mt-6 flex justify-center"
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
              <h2 className="font-bold text-slate-900">Reconditioned & Used Supply</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">Engines supplied tested, documented, and covered by warranty terms.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Diagnostics in </h3>
              <p className="mt-3 text-slate-700 leading-relaxed">SameÃ¢â‚¬â€˜day diagnostics to confirm the exact failure before replacement decisions.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">Supply & Fit Available</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">Complete supply and fit, or UK-wide delivery for supply-only orders.</p>
            </div>
          </div>
        </div>
      </section>

      {engineCodes ? <EngineCodesTable title={engineCodes.title} rows={engineCodes.rows} /> : null}

      <FAQSection
        title={
          <>
            Frequently Asked Questions   <span className="text-primary italic">Jaguar XKR Engine</span>
          </>
        }
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Need an XKR engine quote?</h2>
            <p className="text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Call our  team to confirm your engine code and get a clear quote for supply, rebuild, or replacement.
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







