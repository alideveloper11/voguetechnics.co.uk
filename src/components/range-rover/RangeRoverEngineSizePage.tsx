import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ShieldCheck, Wrench } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import NationwideSupportSection from "@/components/common/NationwideSupportSection";
import PrecisionEngineSection from "@/components/common/PrecisionEngineSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import WorkshopSection from "@/components/common/WorkshopSection";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import type { RangeRoverEngineSizePageData } from "@/data/rangeRoverEngineSizePages";

type RangeRoverEngineSizePageProps = {
  data: RangeRoverEngineSizePageData;
};

export default function RangeRoverEngineSizePage({ data }: RangeRoverEngineSizePageProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt={`${data.title} specialist`}
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Range Rover Engines", href: "/range-rover-engines" },
              { name: data.title, href: `/${data.slug}` },
            ]}
          />

          <div className="mx-auto flex max-w-4xl flex-col items-center pt-8 text-center">
            <div>
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                Range Rover {data.engineSize} engine specialists
              </span>
              <h1 className="mt-6 text-3xl md:text-5xl font-black leading-tight tracking-tight text-white">
                {data.title} Rebuild, Repair & Replacement
              </h1>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:01375531355"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-emerald-700"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 01375 531355
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <RegSearch className="mt-8 w-full max-w-3xl" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h2 className="mt-4 text-xl font-bold text-slate-900">Specialist Diagnosis First</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                We confirm the exact engine code, fault pattern and repair route before recommending rebuild or replacement.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <Wrench className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-slate-900">Supply, Fit or Rebuild</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Choose a used unit, reconditioned engine, targeted repair, or full measured rebuild depending on condition and budget.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-slate-900">Written Warranty</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Major engine work is backed by clear written warranty terms and itemised pricing before work starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {data.title} We Commonly Support
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.applications.map((item) => (
                  <div key={item} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-900 p-6 text-white">
              <h3 className="text-xl font-bold">Common Issues</h3>
              <ul className="mt-5 space-y-3">
                {data.commonIssues.map((issue) => (
                  <li key={issue} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NationwideSupportSection slug={data.slug} />
      <PrecisionEngineSection data={data.precision} />

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              What We Can Do for Your {data.engineSize} Engine
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.serviceHighlights.map((service) => (
              <div key={service} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">{service}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Our team handles this work in-house with proper inspection, clear quoting and warranty-backed completion.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        title={`Customer Feedback for ${data.title}`}
        subtitle="Real engine work, clear communication, and warranty-backed results from Vogue Technics."
      />
      <WorkshopSection />
      <FAQSection title={<>Frequently Asked Questions - <span className="text-primary italic">{data.title}</span></>} items={data.faqs} />
      <PartnerLogos />
    </div>
  );
}
