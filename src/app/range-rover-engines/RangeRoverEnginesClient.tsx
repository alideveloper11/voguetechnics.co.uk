"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";

const rangeRoverModels = [
  { title: "Range Rover Evoque Engines", link: "/range-rover-evoque-engines", description: "Compact luxury SUV engine specialists — repairs, rebuilds and replacements with warranty-backed results." },
  { title: "Range Rover Sport Engines", link: "/range-rover-sport-engines", description: "Performance SUV engine solutions from timing chain work to full engine rebuilds across all Sport variants." },
  { title: "Range Rover Velar Engines", link: "/range-rover-velar-engines", description: "Velar engine specialists covering diesel and petrol variants — clearly quoted and warranty-backed." },
  { title: "Range Rover Vogue MK4 Engines", link: "/range-rover-vogue-new-mk-4-engines", description: "Fourth-gen Vogue engine experts — rebuilds, replacements and major repairs done properly." },
  { title: "Range Rover Vogue MK3 Engines", link: "/range-rover-vogue-old-mk-3-engines", description: "Classic Vogue engine solutions — specialist diagnosis, rebuilds and replacements across all variants." },
  { title: "Range Rover Sport SVR", link: "/range-rover-sport-svr-engines", description: "High-performance SVR engine specialists — precision diagnosis and premium rebuild service." },
];

export default function RangeRoverEnginesClient() {
  const services = [
    {
      title: "Head Gasket Replacement",
      slug: "head-gasket-replacement",
      body:
        "A blown head gasket is one of the most damaging faults a Range Rover can suffer. Left untreated, it leads to catastrophic engine failure. Our specialists diagnose head gasket failure accurately and carry out full replacements using quality-matched components   restoring compression, sealing integrity, and engine performance to factory standard.",
    },
    {
      title: "Timing Chain & Timing Belt Replacement",
      slug: "timing-chain-replacement",
      body:
        "Timing chain and timing belt failures are common across Range Rover models, particularly on TDV6 and TDV8 engines. We carry out both timing chain replacements and timing belt replacements with precision, ensuring correct tension, alignment, and component condition throughout. This is not a job to delay   a snapped timing chain can write off an engine in seconds.",
    },
    {
      title: "Turbo Replacement",
      slug: "turbo-replacement",
      body:
        "Turbocharger failure is a frequent issue on Range Rover diesel engines. Symptoms include excessive smoke, loss of power, or a distinctive whining noise. Our team carries out full turbo replacements using OEM-matched units, complete with oil feed line inspection and post-installation testing to confirm correct boost pressure.",
    },
    {
      title: "Engine Rebuild Service",
      slug: "engine-rebuild",
      body:
        "When an engine is worn but structurally sound, a full Range Rover engine rebuild is often the most cost-effective and long-lasting solution. We strip the engine completely, inspect every component, replace worn bearings, rings, seals, and gaskets, then reassemble and dyno-test to manufacturer tolerances. A properly rebuilt Range Rover engine can last as long as a brand-new unit.",
    },
    {
      title: "Engine Repair",
      slug: "engine-repair",
      body:
        "Not every fault requires a full rebuild. Our engine repair service covers everything from oil leaks and coolant loss to sensor faults, misfires, and internal wear issues. We diagnose correctly before we quote, so you only pay for what your engine actually needs.",
    },
    {
      title: "Engine Replacement   Used & Reconditioned",
      slug: "engine-replacement",
      body:
        "When repair or rebuild isn't viable, engine replacement is the answer. We offer both used Range Rover engines and fully reconditioned Range Rover engines for sale, covering all popular variants including the 3.0 diesel, 4.4 petrol, 5.0 supercharged V8, and more. Supply-only or full supply and fit   the choice is yours.",
    },
    {
      title: "Engine Swap",
      slug: "engine-swap",
      body:
        "Need to upgrade your Range Rover's engine or switch between fuel types? Our engine swap service covers full drivetrain compatibility checks, loom adaptation, and ECU remapping where required. We've completed complex engine swaps across multiple Range Rover generations with excellent results.",
    },
    {
      title: "Engine Health Check",
      slug: "engine-health-check",
      body:
        "Not sure what's wrong with your Range Rover? Start with our comprehensive engine health check. Using the latest diagnostic equipment, we identify fault codes, compression issues, oil condition problems, and mechanical wear   giving you a full picture before committing to any work.",
    },
  ];

  const faqs = [
    {
      question: "How much does a Range Rover engine rebuild cost in the UK?",
      answer:
        "The cost of a Range Rover engine rebuild varies depending on the model, engine type, and extent of wear. At Vogue Technics, rebuilds typically start from a competitive base price   contact us with your registration for an accurate quote.",
    },
    {
      question: "What is the difference between a used and a reconditioned Range Rover engine?",
      answer:
        "A used engine is a second-hand unit removed from a donor vehicle, tested, and sold as-is. A reconditioned engine has been fully stripped, inspected, worn parts replaced, and reassembled to manufacturer specification. Reconditioned units carry a longer warranty and generally offer greater longevity.",
    },
    {
      question: "Do you offer a Range Rover engine rebuild near me if I'm outside ?",
      answer:
        "Yes. While our workshop is based in , we regularly serve customers from across the UK. We also offer engine collection and delivery services for customers who cannot travel to us.",
    },
    {
      question: "How long does a Range Rover engine replacement take?",
      answer:
        "Most engine replacements are completed within 3 to 5 working days, depending on parts availability and the complexity of the fitment. We'll give you a realistic timeframe when you book .",
    },
    {
      question: "Do your reconditioned Range Rover engines come with a warranty?",
      answer:
        "Yes. All reconditioned engines supplied by Vogue Technics come with a minimum 6-month warranty as standard. Extended warranty options are also available   ask our team for details.",
    },
    {
      question: "Can I buy a Range Rover engine online and have it delivered?",
      answer:
        "Absolutely. We offer UK-wide delivery on all stock engines. Simply contact us with your registration number and required engine specification, and we'll confirm availability, pricing, and delivery timescales.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Range Rover engine specialist in "
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/80 to-slate-950" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Range Rover Engines", href: "/range-rover-engines" }]} />
          
          <div className="max-w-4xl mx-auto pt-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 shadow-[0_0_22px_rgba(25,135,84,0.22)]">
                Range Rover Engine Specialist   , UK
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Range Rover Engine Specialist in , UK
              </span>{" "}
              – Expert Rebuilds, Repairs & Replacements
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7"
            >
              <RegSearch className="max-w-3xl mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Why Choose Vogue Technics as Your Range Rover Engine Specialist?</h2>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-4">
                When it comes to your Range Rover, cutting corners isn't an option. These vehicles are engineered to perform at the highest level, and they demand specialist knowledge that general mechanics simply don't have. At Vogue Technics, every technician on our team has been trained specifically on Range Rover engine systems   from the classic V8 to the modern 3.0 TDV6 and the turbocharged 2.0-litre Ingenium units.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">25 Years of Dedicated Range Rover Engine Expertise</h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-4">
                Since we opened our doors in , we've built our entire reputation around one thing: getting Range Rover engines right. We've handled thousands of engine rebuilds, replacements, and repairs across every model   Sport, Evoque, Velar, Discovery, and Defender. That depth of experience means faster diagnosis, fewer return visits, and engines that last.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">Tested, Guaranteed, and Warranty-Backed Engines</h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-4">
                Every engine we supply   whether used or fully reconditioned   goes through a rigorous multi-point testing process before it leaves our workshop. All reconditioned Range Rover engines come with a minimum 6-month warranty, giving you full peace of mind long after the job is done. We only source from trusted suppliers, so you'll never receive an engine we wouldn't fit to our own vehicle.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm lg:col-span-3">
              <h3 className="text-base font-bold text-slate-900">Competitive, Transparent Pricing   No Hidden Costs</h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-3">
                We understand that engine work is a significant investment. That's why we offer some of the most affordable Range Rover engine prices in the UK, without compromising on quality. You'll receive a clear, itemised quote upfront   no surprises, no inflated labour charges, and no pressure to approve work you don't need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Range Rover Engine Services in </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer a full spectrum of engine services tailored specifically to Range Rover vehicles. Whatever your engine problem, we have the tools, parts, and expertise to solve it properly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed line-clamp-4">{service.body}</p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Reconditioned & Used Range Rover Engines for Sale   , UK</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900 mb-3">All Models & Capacities in Stock</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                We stock used and fully reconditioned engines covering every popular Range Rover variant — 3.0, 4.4, diesel, petrol, and V8 units. Whether you need a specific engine number or just a capacity, we source quickly and test before dispatch.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900 mb-3">Sport, Evoque & Velar Engines</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Range Rover Sport engines from the 4.4 V8 to the 3.0 SDV6 and Ingenium diesel. Evoque and Velar units in both used and reconditioned condition — all supplied with full test reports and warranty documentation.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-l-4 border-primary bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900 mb-3">Fast UK Delivery & Local Fitting</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                UK-wide engine delivery available on all stock units. For customers in  and the surrounding areas — Thurrock, Basildon, Dartford — we provide a complete supply and fit service at our fully equipped workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-slate-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/25 blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-[90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <div className="mt-6 flex items-center justify-center gap-2 text-emerald-200/90">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-emerald-300" />
                ))}
              </div>
              <span className="text-xs md:text-sm font-semibold tracking-wide">Rated highly by customers across  & the wider UK</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  '"Vogue Technics rebuilt my Range Rover Sport engine after two other garages quoted me for a full replacement. They saved me over £2,000 and the car runs better than ever."',
                by: "  David R., ",
              },
              {
                quote:
                  '"Brilliant service from start to finish. They diagnosed the timing chain issue the same day, gave me an honest quote, and had the car back to me within the week. Highly recommended."',
                by: "  Sarah M., Thurrock",
              },
              {
                quote:
                  '"I was quoted nearly £8,000 by a main dealer. Vogue Technics did a full engine replacement for less than half that price, with a 6-month warranty. Couldn\'t be happier."',
                by: "  James T., Basildon",
              },
            ].map((t, idx) => (
              <motion.div
                key={t.by}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx }}
                className="h-full"
              >
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md">
                  <div className="flex items-center gap-1 text-emerald-300/90">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-slate-100/90 leading-relaxed italic">{t.quote}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-300/70">{t.by}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RANGE ROVER MODELS GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Find your <span className="text-primary">Range Rover</span>
            </h2>
            <p className="text-slate-700 mt-2 text-sm md:text-base">
              Replacement engines for the entire Range Rover range
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rangeRoverModels.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
              >
                <Link href={model.link} className="group block h-full">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5">
                        <Image src="/range_rover.png" alt="Range Rover" width={80} height={40} className="h-8 w-auto object-contain" />
                      </div>
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-primary/90">Engines</span>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug tracking-tight">
                        {model.title}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    <div className="flex items-center text-primary font-extrabold text-[0.7rem] mt-6 group-hover:translate-x-2 transition-transform tracking-widest">
                      Read more <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection
        title={<>Frequently Asked Questions   <span className="text-primary italic">Range Rover Engine Specialist</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to get your Range Rover back on the road?
            </h2>
            <p className="text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Call us today or enter your registration above to get a fast, no-obligation quote from ' leading Range Rover engine specialists. We're here to help   honestly, expertly, and affordably.
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
