"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PartnerLogos from "@/components/common/PartnerLogos";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";

export default function EnginesPortalClient() {
  const faqs = [
    {
      question: "How much does engine repair or rebuild cost at Vogue Technics?",
      answer:
        "Costs vary depending on the platform, the specific fault, and the extent of internal wear identified during assessment. We always provide a detailed written quote following a proper diagnostic   never a generalised estimate that changes once work begins. Contact us directly for a no-obligation quote on your vehicle.",
    },
    {
      question: "Is an engine rebuild worth it, or should I replace the engine?",
      answer:
        "In most cases involving a prestige vehicle in otherwise sound condition, a specialist rebuild is the more cost-effective long-term decision   particularly where sourcing a quality replacement unit of verified history is difficult. We advise honestly on which route makes most sense for your specific engine and situation.",
    },
    {
      question: "Do you offer a warranty on all engine work?",
      answer:
        "Yes. Every major engine repair, rebuild, replacement, turbo fitment, head gasket job, and timing chain replacement carries a minimum six-month warranty on both parts and labour, confirmed in writing at handover.",
    },
    {
      question: "Can you collect my vehicle from anywhere in the UK?",
      answer:
        "Yes. We offer UK-wide collection and return delivery on all major engine work. Many of our customers are not local to , and the process is straightforward from first contact through to return.",
    },
    {
      question: "How long does an engine rebuild take?",
      answer:
        "Timescales vary by platform and the extent of work required. We provide an honest, confirmed timeframe at the point of quoting and keep you updated throughout the process without you needing to chase for information.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Vogue Technics engine specialists"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Our Engines", href: "/engines" }]} />
          
          <div className="max-w-5xl pt-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 shadow-[0_0_22px_rgba(25,135,84,0.22)]"
            >
              Engine Specialists   
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Engine Repair, Rebuild & Replacement Specialists
              </span>{" "}
                Vogue Technics, 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base"
            >
              Some engine problems announce themselves loudly. Others build quietly over weeks and months   a slight drop in power here, an occasional rattle on a cold morning there   until the point where the damage is serious and the decision about what to do next cannot be deferred any longer.
              <br />
              <br />
              At that point, the garage you choose is everything.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Request a Free Engine Quote
              </Link>
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Call Us Today
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-white hover:text-slate-900 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Book an Engine Inspection
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 max-w-5xl text-sm leading-relaxed text-slate-300 md:text-base"
            >
              At Vogue Technics, we do one thing and we do it to a standard that general garages simply cannot match. Based in , we are dedicated engine specialists working exclusively on five of the most demanding and rewarding vehicles on British roads   Range Rover, Land Rover, Jaguar, Audi, and BMW. Engine repair, engine rebuild, engine replacement, turbo replacement, timing chain replacement, head gasket repair   every service we offer is carried out by technicians who have spent years working on these specific platforms, not generalists applying broad mechanical knowledge to whatever comes through the door.
              <br />
              <br />
              Over 25 years of engine work. OEM and OEM-specification parts throughout. A minimum six-month warranty on every major job. Written quotes agreed before a single component is touched.
              <br />
              <br />
              If your engine needs attention   whatever the fault and wherever you are in the UK   you have found the right place.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">The Specialists Behind Every Job</h2>
              <div className="h-1 w-24 rounded-full bg-primary" />
              <div className="space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
                <p>
                  There is a meaningful difference between a garage that has worked on a Range Rover TDV6 a handful of times and a specialist team that has rebuilt dozens of them   that has seen every failure mode, understands every tolerance, and knows before the strip-down begins where the problems are most likely to be found.
                </p>
                <p>
                  That difference is what Vogue Technics represents.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">25 Years of Prestige Engine Experience</h3>
              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  We have been operating from  for over two decades, and in that time we have built a reputation that reaches well beyond the local area. Jaguar XF Sportbrake owners travel from Scotland. BMW X5 owners come from Wales. Range Rover Sport customers arrange collection from the north of England   not because there are no garages closer to them, but because genuine specialist knowledge of these engine platforms is rarer than most owners realise until they start looking for it.
                </p>
                <p>
                  Our technicians work on the engines we cover every day. The N47 rear-chain architecture. The TDV6 oil contamination failure pattern. The Ingenium timing chain vulnerability on early Discovery Sport and Evoque models. The N57 tensioner-led failure sequence. These are not engines that reward guesswork, and they are not engines that receive any at Vogue Technics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">OEM Standards   On Every Job, Without Exception</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                There are no budget alternatives in our workshop. No pattern parts selected to protect a margin. No corners cut on components that will not be visible at the point of collection. Every engine rebuild, replacement, turbo fitment, head gasket repair, and timing chain job uses OEM or OEM-specification components   the same standard of part your vehicle was manufactured with, fitted to the same torque specifications the manufacturer defines.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                That is not a marketing position. It is the only way to carry out this work to a standard worth standing behind.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Written Quotes. No Additions. No Surprises.</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Engine work on a prestige vehicle is a significant financial decision, and we treat it as one. Every job at Vogue Technics begins with a thorough diagnostic assessment followed by a detailed written quote   covering every element of the work, every component to be used, and the complete cost. Nothing proceeds until you have reviewed and confirmed that quote.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                The figure you agree is the figure you pay. No additions appear mid-job. No unexpected costs surface when you come to collect.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Over 25 Years. Warranty Standard.</h3>
              <div className="mt-5 space-y-3">
                {[
                  "Over 25 years of engine work.",
                  "OEM and OEM-specification parts throughout.",
                  "A minimum six-month warranty on every major job.",
                  "Written quotes agreed before a single component is touched.",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-xl bg-primary/10 p-2 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <p className="text-slate-700 leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Engine Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We cover the full range of engine work across Range Rover, Land Rover, Jaguar, Audi, and BMW   from targeted single-fault repairs through to complete strip-and-rebuild jobs and full engine replacements. Every service is carried out to OEM specification with a warranty as standard on all major work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Engine Repair",
                slug: "engine-repair",
                body: "Not every engine fault requires a full rebuild, and recommending one when a targeted repair will genuinely resolve the problem is something we simply do not do. Our engine repair service covers oil leaks, EGR faults, cooling system failures, misfires, sensor faults, cylinder head work, and more   diagnosed accurately, addressed completely, and priced honestly.",
              },
              {
                title: "Engine Rebuild",
                slug: "engine-rebuild",
                body: "A specialist engine rebuild restores your original unit to OEM specification   every wear component replaced, every clearance measured and set correctly, every seal and gasket renewed. For vehicles with significant internal wear or damage, a rebuild carried out by specialists who know the platform often represents better long-term value than a replacement unit of uncertain history. Every rebuild we complete carries a minimum six-month warranty.",
              },
              {
                title: "Engine Replacement",
                slug: "engine-replacement",
                body: "When rebuild is no longer the economical path forward, we source and fit quality reconditioned and low-mileage used engines across all five brands and all engine families we cover. Every unit is assessed and tested at our  workshop before installation   compression verified, oil condition checked, overall integrity confirmed. We do not fit engines we have not ourselves verified.",
              },
              {
                title: "Head Gasket Replacement",
                slug: "head-gasket-replacement",
                body: "Coolant loss without an obvious external source, white exhaust smoke on a cold start that clears as the engine warms, an overheating warning that keeps returning despite top-ups   head gasket failure develops gradually and is frequently underestimated until it causes secondary damage. We carry out head gasket replacement across all platforms we cover, including combustion gas testing before quoting, cylinder head inspection and resurfacing where required, and full cooling system pressure testing before return.",
              },
              {
                title: "Timing Chain Replacement",
                slug: "timing-chain-replacement",
                body: "A metallic cold-start rattle that owners frequently dismiss as normal is rarely that. On the Land Rover Ingenium, the BMW N47, the Jaguar 3.0 diesel, and the Audi 2.0 TDI, timing chain wear follows well-understood patterns   and a chain that has reached the point of rattling audibly has already progressed into territory where delay becomes expensive. We carry out complete timing chain replacement   chain, tensioners, guides, and sprockets replaced together as a system   across all affected platforms.",
              },
              {
                title: "Timing Belt Replacement",
                slug: "timing-belt-replacement",
                body: "A timing belt does not gradually announce its failure the way a timing chain does. It simply breaks   and on an interference engine, the consequences are immediate, internal, and severe. Pistons meet valves. The damage that follows is rarely limited to a single component, and the repair bill that results is always significantly higher than the belt replacement that would have prevented it.\n\nTiming belt replacement at the correct manufacturer-specified interval is one of the most important preventative services a prestige vehicle owner can carry out   and one that is frequently deferred because the belt shows no obvious outward signs of wear before it fails. That is precisely why the interval exists.",
              },
              {
                title: "Turbo Replacement",
                slug: "turbo-replacement",
                body: "Power loss under acceleration, black or blue smoke under load, a whistle or whine from the engine bay that appears under boost   turbocharger deterioration tends to make itself known clearly, and acting on those signs early prevents debris from entering the engine oil circuit and compounding the repair significantly. We source and fit OEM and remanufactured turbos across all platforms, with full oil system inspection and boost pressure verification on every fitment.",
              },
              {
                title: "Engine Health Check & Diagnostics",
                slug: "engine-health-check",
                body: "Our engine health check goes well beyond a basic fault code read. We carry out a full mechanical and electronic assessment   compression testing across every cylinder, oil condition and contamination analysis, turbocharger condition and response, timing component assessment, and a complete electronic scan across all relevant control modules. You receive a written report in plain language: precise findings, honest recommendations, and a clear account of your engine's actual condition ranked by urgency.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm flex flex-col justify-between">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <div className="mt-4 space-y-4 text-slate-700 leading-relaxed whitespace-pre-line">
                  {item.body}
                </div>

                <div className="pt-6">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-dark transition-colors"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Every Vehicle. Every Engine. Every Platform.</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              Our specialist knowledge covers every significant engine fitted to the five brands we work on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Range Rover",
                body: "TDV6, SDV6, TDV8, SDV8, Ingenium 2.0, 5.0 Supercharged V8 across Vogue, Sport, Velar, and Evoque.",
                href: "/range-rover-engines",
              },
              {
                title: "Land Rover",
                body: "Ingenium 2.0 diesel and petrol, 2.7 and 3.0 TDV6, across Defender, Discovery 3, 4 and 5, Discovery Sport, and Freelander.",
                href: "/land-rover-engines",
              },
              {
                title: "Jaguar",
                body: "Ingenium 2.0, 3.0 V6 diesel, and V8 platforms across XF, XF Sportbrake, XE, XJ, F-Pace, and E-Pace.",
                href: "/jaguar-engines",
              },
              {
                title: "Audi",
                body: "2.0 TDI and TFSI, 3.0 TDI V6, and V8 platforms across A3, A4, A5, A6, Q5, Q7, and RS range.",
                href: "/audi-engines",
              },
              {
                title: "BMW",
                body: "N47, B47, N57, B57, N54, N55, B58, S55, and S63 across 1, 2, 3, 4, 5, 7 Series, X3, X5, X6, and M-range.",
                href: "/bmw-engines",
              },
            ].map((b) => (
              <div key={b.title} className="rounded-[2rem] bg-white border border-slate-200 p-7 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">{b.body}</p>
                </div>
                <div className="pt-6">
                  <Link
                    href={b.href}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-dark transition-colors"
                  >
                    Explore Engines
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">UK-Wide Service From Our  Workshop</h2>
              <div className="h-1 w-24 rounded-full bg-primary" />
              <div className="space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
                <p>
                  Being based in  puts us within straightforward reach of London, the Home Counties, Kent, and the wider South East. But a significant proportion of our customers are not local   and that is not a barrier.
                </p>
                <p>
                  We offer engine collection and return delivery covering the whole of the United Kingdom. Your engine comes to us, the work is carried out to the same standard regardless of your location, and it comes back to you fully tested and covered by our written warranty. For customers who require the complete vehicle to be transported, we can advise on the most straightforward logistics options.
                </p>
                <p>
                  Distance is not a reason to compromise on the quality of specialist you use.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-slate-900 text-white p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold">Whatever the engine, whatever the fault</h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Whatever the engine, whatever the fault, whatever the platform   do not leave it to a garage that works from general experience and hope for the best result. Vogue Technics is based in , serves customers across the whole of the United Kingdom, and brings over 25 years of dedicated prestige engine experience to every job that comes through our doors.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-4 font-bold text-white transition-all hover:bg-emerald-600 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
                >
                  Request a Free Engine Quote   No Obligation
                </Link>
                <a
                  href="tel:01375531355"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-bold text-slate-900 transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
                >
                  Call Us and Speak to a Specialist Today
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-4 font-bold text-white transition-all hover:bg-white hover:text-slate-900 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
                >
                  Book an Engine Inspection at Our  Workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-white mb-6 tracking-tighter uppercase italic"
          >
            Vogue Technics | Engine Specialists |  | UK-Wide Collection Available
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-emerald-50 mb-10 max-w-3xl mx-auto font-medium"
          >
            Range Rover • Land Rover • Jaguar • Audi • BMW
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            <a href="tel:01375531355" className="bg-white text-primary font-black py-6 px-16 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 hover:bg-slate-50 text-xl uppercase tracking-widest min-w-[320px]">
              CALL 01375 531355
            </a>
            <Link href="/contact-us" className="bg-slate-900 text-white font-black py-6 px-16 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 hover:bg-slate-800 text-xl uppercase tracking-widest min-w-[320px] border border-white/10">
              REQUEST A FREE ENGINE QUOTE
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-64 -mt-64 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full -ml-64 -mb-64 blur-3xl pointer-events-none"></div>
      </section>

      <PartnerLogos />
    </div>
  );
}
