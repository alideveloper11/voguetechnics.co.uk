"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";

const services = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    body:
      "Head gasket failure on the MK3 Vogue is a serious fault that demands immediate attention. Persistent coolant loss with no visible external leak, white smoke from the exhaust on startup, and an engine running consistently warmer than normal are the three most telling symptoms. Left unaddressed, a failing head gasket will cause progressive internal engine damage that turns a manageable repair into a full replacement job. We carry out complete head gasket replacements using OEM-grade components, including a full cylinder head skim and pressure test to confirm absolute integrity before your vehicle leaves our workshop.",
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    body:
      "Timing chain failure is one of the most documented and costly problems on the Range Rover Vogue MK3. The 3.6 TDV8 and 4.4 TDV8 diesel engines are particularly susceptible to timing chain stretch on higher-mileage examples, especially where oil change intervals have been extended beyond the manufacturer's recommendation. A cold-start rattle — that distinctive metallic clattering noise that disappears once the engine warms — is the clearest early warning sign. We replace the complete timing chain assembly: chain, tensioners, guides, sprockets, and all associated seals, addressed as a single properly sequenced operation.",
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    body:
      "Turbocharger failure on MK3 Vogue diesel engines — particularly the 3.6 TDV8 and 4.4 TDV8 — is most commonly caused by oil starvation, extended idling without cool-down periods, and heat soak damage following periods of sustained high-load driving. Symptoms include a noticeable loss of power across the rev range, excessive blue or black smoke from the exhaust, and a high-pitched whining or whistling noise under acceleration. We supply and fit OEM-matched replacement turbos for all L322 engine variants, carry out full oil feed and return line inspection as part of every replacement, and run comprehensive post-installation boost pressure tests before the vehicle is returned.",
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    body:
      "When your MK3 Vogue engine has accumulated significant internal wear but the block remains structurally sound, a full engine rebuild is consistently the most cost-effective and longest-lasting solution available. We strip the engine completely, measure every critical component against manufacturer tolerances, replace worn bearings, piston rings, valve stem seals, and gaskets, then reassemble and test thoroughly before reinstallation. A correctly executed rebuild on an L322 engine doesn't just restore performance — it delivers reliability that a used replacement unit of unknown history simply cannot match.",
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    body:
      "Many MK3 Vogue engine faults don't require a full rebuild. They require accurate diagnosis and targeted repair from someone who genuinely understands this engine family. Our repair service covers the full range of common L322 engine problems — rear main seal oil leaks, crankshaft bearing wear, EGR valve clogging on diesel variants, DPF issues, coolant system faults, injector failures, misfires, and sensor-related running problems. We always diagnose first and quote second. You will never be recommended work your engine doesn't actually need.",
  },
  {
    title: "Engine Replacement — Used & Reconditioned MK3 Vogue Engines",
    slug: "engine-replacement",
    body:
      "When repair or rebuild isn't the right answer for your specific situation, we make the replacement process as straightforward as possible. We supply both used Range Rover Vogue MK3 engines for owners managing costs carefully and fully reconditioned L322 engines for those prioritising long-term reliability. Supply-only or complete engine supply and fit at our Grays workshop — we accommodate both clearly and without complication. Every engine comes with written warranty documentation and a fully itemised quote before any work begins.",
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    body:
      "Whether you're upgrading your MK3 Vogue from the naturally aspirated 4.4 V8 petrol to the supercharged 4.2 unit, switching from diesel to petrol for reliability reasons, or addressing a catastrophic failure that makes a like-for-like replacement impractical, our engine swap service manages the complete process. Drivetrain compatibility assessment, wiring loom adaptation, ECU configuration, ancillary fitment, and thorough road testing after completion — all handled in-house by our own team.",
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    body:
      "Certain Range Rover Vogue MK3 petrol variants — including the earlier 4.4 V8 — use a timing belt configuration rather than a chain. A snapped timing belt causes immediate, catastrophic engine damage with no warning whatsoever. If your MK3 Vogue is approaching its service interval for the timing belt, or if you're unsure of the belt's history following a second-hand purchase, this is not a job to defer. We carry out complete timing belt replacements including water pump inspection, tensioner condition assessment, and all associated seal changes as standard.",
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    body:
      "Not certain what's wrong with your Range Rover Vogue MK3 — or considering purchasing a used L322 and wanting an independent assessment of its true engine condition before you commit? Our comprehensive engine health check uses professional OBD diagnostic equipment alongside physical compression testing across all cylinders, oil condition analysis, and hands-on inspection targeting the known failure points specific to MK3 Vogue engine variants. You receive a clear written report with our honest recommendation — no jargon, no upselling, no pressure.",
  },
];

const faqs = [
  {
    question: "What engines were fitted to the Range Rover Vogue MK3 (L322)?",
    answer:
      "The MK3 L322 Vogue was produced from 2002 to 2012 and offered a broad engine range across its production life. Diesel options included the 3.0 TD6, the 3.6 TDV8, and the 4.4 TDV8. Petrol variants covered the 4.4 V8 naturally aspirated and the 4.2 supercharged V8 used in the Sport and Autobiography specifications. Our team confirms exact fitment compatibility for your specific model year and specification before any supply or rebuild order is confirmed.",
  },
  {
    question: "What are the most common engine problems on the Range Rover Vogue MK3?",
    answer:
      "The most frequently reported issues include timing chain wear and failure on diesel variants, rear main seal oil leaks, turbocharger failure on the 3.6 and 4.4 TDV8 diesels, EGR valve clogging, DPF blockage, crankshaft bearing wear on high-mileage petrol units, and head gasket failure across multiple variants. Our engine health check service identifies all of these accurately before any repair decisions are made.",
  },
  {
    question: "How much does a Range Rover Vogue MK3 timing chain replacement cost?",
    answer:
      "The cost depends on the specific engine variant and the extent of associated wear on tensioners, guides, and sprockets. We provide a full written quote following initial inspection — always before any work begins. Our pricing is consistently more competitive than main dealer and large specialist chain alternatives.",
  },
  {
    question: "Is it worth rebuilding a Range Rover Vogue MK3 engine rather than replacing it?",
    answer:
      "In the majority of cases where the block remains structurally sound, yes — a full rebuild is the more cost-effective and longer-lasting solution. A well-executed rebuild addresses the root causes of failure rather than simply substituting a used unit of unknown internal history. We always assess your specific engine honestly before recommending a course of action.",
  },
  {
    question: "How long does an MK3 Vogue engine rebuild take at your Grays workshop?",
    answer:
      "Most engine rebuilds are completed within five to ten working days depending on parts availability and the specific engine variant. Engine replacements and targeted repairs are often completed more quickly. We confirm your exact timescale at booking and provide updates throughout the process.",
  },
  {
    question: "What warranty comes with a rebuilt or reconditioned MK3 Vogue engine?",
    answer:
      "All rebuilt and reconditioned engines carried out by Vogue Technics come with a written warranty as standard. Minimum cover is six months, with extended options available on request. Speak to our team when you enquire for full details.",
  },
  {
    question: "Do you offer supply and fit for MK3 Vogue engines in Grays, Essex?",
    answer:
      "Yes. Our Grays workshop provides a complete supply and fit service for all L322 Vogue engine variants. We also offer supply-only with fast tracked UK-wide delivery for customers arranging their own fitting locally or through an approved installer.",
  },
  {
    question: "How do I know if my MK3 Vogue has a timing chain problem?",
    answer:
      "The clearest early warning sign is a cold-start metallic rattle that clears within the first minute of running. As the fault progresses, the rattle may persist longer into the warm-up period, and the engine management light will typically illuminate. If you're experiencing either symptom, contact us immediately — early intervention keeps repair costs manageable and prevents secondary engine damage.",
  },
];

export default function RangeRoverVogueMk3EnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Range Rover Vogue MK3 engine specialist in Grays"
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
              { name: "Range Rover Vogue MK3 Engines", href: "/range-rover-vogue-old-mk-3-engines" },
            ]}
          />

          <div className="max-w-5xl pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Range Rover Vogue Old MK3 Engines
              </span>{" "}
              – Expert Rebuilds, Repairs & Replacements in Grays, UK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-7"
            >
              <RegSearch className="max-w-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mt-7 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base space-y-4"
            >
              <p>
                If you own a Range Rover Vogue MK3 — the iconic L322, produced from 2002 to 2012 — and you're facing engine trouble, you've found the right specialist. At Vogue Technics, based in Grays, Essex, we work exclusively on Land Rover and Range Rover engines, and the MK3 Vogue is a model we know with a depth that only comes from over 25 years of dedicated, hands-on experience.
              </p>
              <p>
                The L322 is a vehicle that rewards proper care and punishes shortcuts. Its engine range — spanning the 3.0 TD6, the 4.4 V8 petrol, the 4.4 TDV8 diesel, the 3.6 TDV8, and the 4.2 supercharged V8 — each carries its own specific characteristics, known failure patterns, and service requirements. We know every one of them intimately. Whether your MK3 Vogue needs a timing chain replacement, a full engine rebuild, an urgent turbo fix, or a complete engine swap, we deliver the quality, transparency, and expertise this vehicle genuinely deserves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why Trust Vogue Technics With Your Range Rover Vogue MK3 Engine?
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900">MK3 Vogue Specialists — Not General Mechanics</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Every technician at Vogue Technics has been trained specifically on Land Rover and Range Rover engine platforms. We don't service family hatchbacks between Range Rover jobs. The MK3 Vogue is a constant presence in our Grays workshop, and that daily familiarity with the L322's engine family translates directly into faster, more accurate diagnosis and repairs that hold up properly over time.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900">25 Years of Range Rover Engine Experience in Grays, Essex</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Since we first opened our doors, we've rebuilt and replaced thousands of engines for Range Rover owners across Grays, Thurrock, Basildon, Dartford, and throughout the wider UK. Our reputation has been built entirely on the quality of our work and the honesty of our advice — not on marketing claims. When we rebuild your MK3 Vogue engine, it stays rebuilt.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900">Transparent Pricing — Written Quotes Before Any Work Begins</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Engine work on a Range Rover Vogue MK3 is a significant investment, and you deserve to know exactly what you're committing to before a single bolt is turned. We provide clear, itemised written quotes covering all parts, labour, and any ancillary work required — with no hidden additions, no vague estimates, and no pressure to approve anything you haven't requested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Range Rover Vogue MK3 Engine Services — Complete Care for the L322
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed">
              We offer the full spectrum of engine services for the Range Rover Vogue MK3, all carried out in-house by our specialist team at our Grays workshop. Whatever your L322 needs — from a targeted repair to a complete ground-up rebuild — we have the knowledge, the tooling, and the parts to do the job correctly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">{service.body}</p>
                </div>
                <div className="pt-6">
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

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Common Range Rover Vogue MK3 Engine Problems — And How We Fix Them
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                The L322 is a vehicle of genuine engineering quality, but 25 years of working on this platform has given us a thorough understanding of where it falls short. Knowing the common failure patterns helps owners act before minor issues escalate into serious costs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900">Timing Chain Failure — Symptoms & Repair</h3>
                  <p className="mt-3">
                    Timing chain problems on the L322 are most prevalent on the 3.6 TDV8 and 4.4 TDV8 diesel engines. The most recognisable symptom is a cold-start rattle that clears within the first minute of running. As the chain stretches further, the rattle may persist longer, and the engine management light will often illuminate as cam and crank timing deviates from specification. Repair involves replacing the complete chain assembly — not just the chain itself.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900">Engine Oil Leaks — Causes & Solutions</h3>
                  <p className="mt-3">
                    Oil leaks are one of the most frequently reported issues across all MK3 Vogue engine variants. The rear main seal is the most common source on higher-mileage examples, followed by rocker cover gaskets, sump gaskets, and oil cooler connections on diesel variants. Left unaddressed, persistent oil loss leads to bearing wear, overheating, and ultimately far more expensive internal damage.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900">EGR Valve Clogging & DPF Issues (Diesel)</h3>
                  <p className="mt-3">
                    The 3.6 TDV8 and 4.4 TDV8 diesel engines fitted to the MK3 Vogue are particularly susceptible to EGR valve clogging, especially on vehicles used predominantly for short urban journeys. A clogged EGR valve causes rough running, increased fuel consumption, black smoke under load, and progressive power loss. DPF blockage on later diesel L322 variants produces similar symptoms alongside a dedicated warning light.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Fast UK-Wide Delivery & Local Fitting in Grays, Essex
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
              <p>
                Being without your Range Rover Vogue is frustrating and, for many owners, genuinely disruptive to daily life. We work with urgency as well as care — because speed and quality are not mutually exclusive when the people doing the work know exactly what they're doing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Engine Supply & Delivery Across the UK</h3>
                  <p className="mt-3">
                    Can't reach us in Grays? No problem. We offer fast, tracked UK-wide delivery on all stock and rebuilt engines, fully packaged with technical documentation and warranty paperwork. Send us your core unit where required, and we'll return your rebuilt engine tested, sealed, and ready to fit — or we can recommend fitting through our trusted network of approved installers where appropriate.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">Realistic Turnaround Times — And We Stick to Them</h3>
                  <p className="mt-3">
                    Most MK3 Vogue engine rebuilds are completed within five to ten working days depending on parts requirements and the specific engine variant. Replacements and targeted repairs are often completed more quickly. We give you a realistic timescale when you book — and we honour it, keeping you updated throughout the process.
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
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              What Our Customers Say About Vogue Technics
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote:
                  '"Vogue Technics rebuilt the 4.4 TDV8 in my L322 after a timing chain failure that another garage had completely misdiagnosed as a turbo problem. They identified the real issue immediately, gave me a fair written quote, and had the car back to me running better than it had in years. I can\'t recommend them highly enough."',
                by: "— Robert K., Grays, Essex",
              },
              {
                quote:
                  '"I was quoted over £8,000 by a Land Rover specialist in London for a full engine replacement on my MK3 Vogue. Vogue Technics rebuilt my existing engine for considerably less and gave me a written warranty. The car has been faultless for over a year since."',
                by: "— Angela M., Thurrock",
              },
              {
                quote:
                  '"Sent my 3.6 TDV8 engine down from Newcastle after finding Vogue Technics online. It came back completely transformed — beautifully rebuilt, clearly tested, and with a full written report explaining everything they\'d replaced. Exceptional service from start to finish."',
                by: "— Gary P., Newcastle",
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
        title={<>Frequently Asked Questions — <span className="text-primary italic">Range Rover Vogue MK3 Engines</span></>}
        items={faqs}
      />

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Your Range Rover Vogue MK3 deserves more than a guess and a generic garage.
            </h2>
            <p className="text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Call Vogue Technics today or enter your registration above for a fast, no-obligation quote from Grays' most experienced Range Rover Vogue MK3 engine specialists. We're ready to help — with genuine expertise, complete transparency, and work that stands behind itself.
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

