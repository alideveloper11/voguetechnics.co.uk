"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import EngineCodesTable from "@/components/common/EngineCodesTable";
import type { EngineCodesEntry } from "@/data/engineCodes";

type RangeRoverVogueMk4EnginesClientProps = {
  engineCodes?: EngineCodesEntry | null;
};

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "A failing head gasket is one of the most common and costly issues on the MK4 Vogue. White smoke, overheating, or coolant loss are tell-tale signs. Our technicians replace head gaskets using OEM-grade components, ensuring a proper seal and long-term reliability. Catching it early saves your engine   don't delay.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "The 3.0 TDV6 engine in the Vogue MK4 is known for timing chain wear, particularly on higher-mileage vehicles. A stretched or snapped timing chain can cause catastrophic engine damage within seconds. We replace timing chains and associated tensioners, guides, and sprockets as a complete kit   not a half-measure.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "Loss of power, excessive smoke, or a whistling noise under acceleration often points to turbo failure. We source quality replacement turbos for all MK4 Vogue engine variants, fitting them correctly to manufacturer specifications with full post-installation testing.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "If your MK4 Vogue engine has high mileage or significant wear, a full rebuild is often the most cost-effective long-term solution. We strip the engine down completely, inspect every component, replace worn parts, and reassemble to factory tolerances. The result is essentially a fresh engine   at a fraction of the cost of a new one.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Not every engine problem requires a full rebuild. Our diagnostics team identifies the root cause precisely, so you only pay for what's actually needed. From oil leaks and bearing replacements to sensor faults and valve repairs, we handle all levels of engine repair on the Vogue MK4.",
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    body:
      "Sometimes replacement is the smarter call   especially when multiple components have failed. We supply and fit quality reconditioned or low-mileage used engines for the Range Rover Vogue MK4, sourced from trusted suppliers and tested before installation.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Upgrading from a diesel to the 5.0 V8 supercharged petrol, or fitting a newer engine variant into an earlier MK4 shell? Our engine swap service covers the full process   mapping, mounts, ancillaries, and post-swap diagnostics   done properly from start to finish.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "Certain MK4 Vogue variants use a timing belt rather than a chain. A snapped belt means instant engine destruction. We recommend replacing it at the manufacturer's specified interval   or earlier if you're unsure of its history. We carry belts and kits for all applicable MK4 engine configurations.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Not sure what's wrong   or just want peace of mind before buying a used MK4 Vogue? Our engine health check covers compression testing, oil analysis, diagnostic scanning, and a full visual inspection. You'll receive a written report with honest recommendations, no upselling, no fluff.",
  },
];

const faqs = [
  {
    question: "How much does a Range Rover Vogue MK4 engine rebuild cost in the UK?",
    answer:
      "The cost varies depending on the engine variant and extent of wear. A full rebuild on a 3.0 TDV6 typically starts from around £2,500–£4,500, while a 5.0 V8 rebuild will cost more due to complexity. Contact us for a bespoke quote based on your specific vehicle.",
  },
  {
    question: "What are the most common engine problems on the Range Rover Vogue MK4?",
    answer:
      "The most frequently reported issues include timing chain wear (especially on the 3.0 TDV6), turbo failure, head gasket failure, and oil leaks from the rear main seal. Early diagnosis prevents minor issues from becoming major ones.",
  },
  {
    question: "Is it worth rebuilding a Range Rover Vogue MK4 engine?",
    answer:
      "In most cases, yes   especially for vehicles in otherwise good condition. A quality rebuild significantly extends the vehicle's life and is far cheaper than buying a replacement car at this level.",
  },
  {
    question: "Do you offer a warranty on rebuilt engines?",
    answer:
      "Yes. All our rebuilt and replacement engines come with a written warranty. Terms are discussed clearly at the point of booking.",
  },
  {
    question: "Can you fit the engine as well as supply it?",
    answer:
      "Absolutely. We offer full supply and fit at our  workshop. We can also arrange fitting through our approved installer network if you're located elsewhere in the UK.",
  },
  {
    question: "How long does a Range Rover Vogue MK4 engine replacement take?",
    answer:
      "A straightforward engine replacement typically takes 3–5 working days. A full rebuild takes 5–10 working days depending on the parts required. We'll confirm your exact timeframe at the time of booking.",
  },
];

export default function RangeRoverVogueMk4EnginesClient({ engineCodes }: RangeRoverVogueMk4EnginesClientProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Range Rover Vogue MK4 engine specialist in "
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
              { name: "Range Rover Vogue MK4 Engines", href: "/range-rover-vogue-new-mk-4-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Range Rover Vogue MK4 Engines
              </span>{" "}
                Expert Rebuilds, Repairs & Replacements Across the UK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-7"
            >
              <RegSearch className="max-w-3xl" />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why Choose Vogue Technics for Your Range Rover Vogue MK4 Engine?
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900 text-sm">Specialists, Not Generalists</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  Every technician is trained solely on Land Rover and Range Rover platforms. The MK4's TDV6, V8 diesel, and V8 supercharged engines each have unique quirks — we know all of them.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900 text-sm">Over 25 Years Serving UK Drivers</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  Thousands of engines rebuilt and replaced for Range Rover owners across the UK. Our reputation has been built entirely on word of mouth — because when we fix it, it stays fixed.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900 text-sm">Transparent Pricing, No Surprises</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3">
                  Clear, itemised quote upfront — no vague estimates, no nasty surprises on collection day. Call us or use our online form to get started.
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Range Rover Vogue MK4 Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services for the Range Rover Vogue MK4. Whatever the problem   from a cracked head gasket to a complete engine swap   we have the solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-4">{service.body}</p>
                </div>
                <div className="pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 text-sm rounded-xl hover:bg-emerald-600 transition-colors"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Fast UK-Wide Delivery & Local Service in 
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                We understand that being without your Range Rover Vogue is frustrating   and expensive if it's your daily driver. That's why we work quickly without cutting corners.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 text-sm">UK-Wide Collection & Delivery</h3>
                  <p className="mt-2 text-sm line-clamp-3">
                    Can't get to us? We collect, rebuild, and return your engine fully tested — or arrange fitting through our approved installer network nationwide.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 text-sm">Fast Turnaround Times</h3>
                  <p className="mt-2 text-sm line-clamp-3">
                    Most rebuilds completed within 5–10 working days. Replacements and repairs often quicker. We give a realistic timeframe and stick to it.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 text-sm">Warranty on All Engine Work</h3>
                  <p className="mt-2 text-sm line-clamp-3">
                    Every rebuild, replacement, and major repair comes with a written warranty. We stand behind our work because we know it's done right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-slate-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/25 blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-[90px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"Vogue Technics rebuilt the 3.0 TDV6 in my 2016 Range Rover Vogue. Brilliant communication throughout, fair price, and the engine runs better than ever. Highly recommend to any Range Rover owner."',
                by: "  James R., London",
              },
              {
                quote:
                  '"I was quoted nearly £9,000 elsewhere for an engine replacement. Vogue Technics did the job for significantly less and gave me a warranty too. Absolute professionals."',
                by: "  Karen M., Birmingham",
              },
              {
                quote:
                  '"Sent my engine down from Manchester. It came back beautifully rebuilt, well packaged, and ahead of schedule. Five stars."',
                by: "  Paul T., Manchester",
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
        title={<>Frequently Asked Questions   <span className="text-primary italic">Range Rover Vogue MK4 Engines</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to get your Range Rover Vogue MK4 back on the road?
            </h2>
            <p className="text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Call Vogue Technics today or fill in our online enquiry form for a fast, no-obligation quote. We're based in , and serve Range Rover owners across the whole of the United Kingdom. Don&apos;t trust your Vogue to just anyone   trust the specialists.
            </p>
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

