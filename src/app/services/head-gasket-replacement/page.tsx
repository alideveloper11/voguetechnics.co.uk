"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Droplets,
  ThermometerSun,
  Cloud,
  Wrench,
} from "lucide-react";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import RegSearch from "@/components/common/RegSearch";
import HeroTrustLabels from "@/components/common/HeroTrustLabels";
import ReviewsSection from "@/components/common/ReviewsSection";
import FAQSection from "@/components/common/FAQSection";
import ServiceGallery from "@/components/common/ServiceGallery";
import PartnerLogos from "@/components/common/PartnerLogos";
import NationwideSupportSection from "@/components/common/NationwideSupportSection";

export default function HeadGasketReplacementPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Head gasket repair specialists"
            fill
            className="object-cover opacity-20 filter grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/15 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Head Gasket Repair", href: "/services/head-gasket-replacement" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight italic"
            >
              Head Gasket Repair Specialists{" "}
              <span className="text-primary italic">for Range Rover, Land Rover, Jaguar, Audi &amp; BMW</span>
            </motion.h1>

            <div className="flex w-full max-w-2xl mx-auto mb-10 flex-col items-center">
              <RegSearch />
            <HeroTrustLabels className="mt-4" />
            </div>


            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10">
              <Link
                href="/get-quote"
                className="bg-primary text-white font-black px-6 py-3 rounded-2xl shadow-2xl hover:brightness-110 transition-all uppercase tracking-[0.2em] text-xs md:text-sm inline-flex items-center gap-3"
              >
                Get Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center bg-white text-slate-950 font-black px-6 py-3 rounded-2xl shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." />
      <ServiceGallery
        title="Head Gasket Replacement Work"
        subtitle="A look at some of the head gasket replacement jobs carried out at our workshop."
        images={[
          { src: "/head_gasket/head_gasket%201.png", alt: "Head gasket replacement 1" },
          { src: "/head_gasket/head_gasket%202.png", alt: "Head gasket replacement 2" },
          { src: "/head_gasket/head_gasket%203.png", alt: "Head gasket replacement 3" },
        ]}
      />

      {/* Symptoms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Head Gasket Failure <span className="text-primary">  Know the Symptoms</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
              Head gasket failure does not always announce itself dramatically. In some cases the signs are subtle and easy to
              attribute to something less serious   until the damage has progressed significantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic mb-4">White Smoke</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                White smoke from the exhaust, particularly on start-up, is often caused by coolant entering the combustion
                chamber and burning off.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic mb-4">Coolant Loss</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                Coolant loss without a visible external leak   where the level drops consistently but there is no puddle under
                the car   is a strong indicator.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center mb-6">
                <ThermometerSun className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight italic mb-4">Overheating</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                Engine overheating that returns after a cooling system repair, persistent bubbling in the coolant reservoir, and
                a sweet smell from the exhaust under load all warrant investigation.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-12 bg-slate-900 text-white rounded-[3rem] p-10 border border-slate-800 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight italic">
                  If any symptoms apply, book a specialist diagnostic.
                </h3>
                <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base">
                  Subtle presentations are often the most dangerous   acting early keeps costs contained and protects your
                  engine.
                </p>
              </div>
              <Link
                href="/services/engine-health-check"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm"
              >
                Book a Same-Day Diagnostic <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationwideSupportSection slug="head-gasket-replacement" />

      {/* Why cannot delay */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Why Head Gasket Repair <span className="text-primary">Cannot Be Delayed</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              <p>
                A failing head gasket does not stabilise. It deteriorates   and as it does, the damage spreads. Coolant
                contaminating the engine oil destroys bearing surfaces and accelerates internal wear throughout the engine.
                Overheating caused by coolant loss can warp the cylinder head, turning a head gasket replacement into a cylinder
                head rebuild or replacement. In the most serious cases, prolonged operation with a blown head gasket results in
                engine seizure.
              </p>
              <p>
                The difference in cost between a head gasket repair carried out at the early symptom stage and one carried out
                after the cylinder head has warped   or after the engine has suffered internal damage from oil contamination  
                is substantial. Acting on the symptoms, having the vehicle properly diagnosed, and committing to the repair
                while the damage is still contained is always the financially sensible decision.
              </p>
            </div>
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-black text-slate-400 mb-6">Next step</p>
              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-4">
                Address it early.
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-8">
                Accurate diagnosis and a written quote are the correct starting point for any head gasket repair.
              </p>
              <Link
                href="/get-quote"
                className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-8 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs md:text-sm"
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Repair by vehicle */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Head Gasket Repair <span className="text-primary">by Vehicle</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Range Rover Head Gasket Repair",
                body: (
                  <>
                    <p>
                      Range Rover head gasket failure is a fault pattern we see regularly across several platforms   and one that
                      requires a specialist approach rather than a generic repair. We carry out Range Rover head gasket repair and
                      replacement across the Vogue, Sport, Velar, and Evoque, covering TDV6, SDV6, TDV8, Ingenium 2.0 diesel and
                      petrol platforms.
                    </p>
                    <p>
                      The TDV6 3.0 diesel fitted to the Range Rover Sport is one of the platforms we see most frequently for head
                      gasket related work. Coolant loss, overheating, and oil contamination on this engine are often traced back to
                      EGR cooler failure that has allowed coolant to enter the system   a fault that needs to be identified and
                      resolved alongside the head gasket repair itself, not after.
                    </p>
                    <p>
                      Range Rover head gasket repair cost and Range Rover head gasket replacement cost vary by platform and the
                      extent of cylinder head damage found during inspection. Range Rover Sport head gasket repair at our 
                      workshop is carried out with OEM-specification gaskets and head bolts, full cylinder head assessment, and a
                      skim where required to restore the mating surface. We provide a full written quote covering all work before
                      anything proceeds.
                    </p>
                  </>
                ),
                href: "/range-rover-engines",
                cta: "Explore Range Rover Head Gasket Repair",
              },
              {
                title: "Land Rover Head Gasket Replacement",
                body: (
                  <>
                    <p>
                      Land Rover head gasket replacement is one of the most established services we carry out   with the Discovery
                      2, Discovery 3, and Freelander platforms all carrying well-documented head gasket fault histories that owners
                      and specialists have been managing for years.
                    </p>
                    <p>
                      The Land Rover Discovery 2 head gasket is one of the most recognised failures in the Land Rover ownership
                      community. The 2003 Land Rover Discovery 2 head gasket fault, often presenting with overheating and coolant
                      loss, is a repair we carry out correctly   with a full cylinder head inspection, pressure test, and skim where
                      required   rather than as a quick turn-around job that reuses components that should be replaced.
                    </p>
                    <p>
                      Land Rover head gasket replacement cost UK varies by model and the condition of the cylinder head at the time
                      of repair. A 2013 Land Rover head gasket replacement on a later Discovery or Freelander platform may involve
                      different considerations to an older Discovery 2 job   and we always provide a written quote following a proper
                      assessment rather than estimating from symptoms alone. UK-wide collection is available for those who cannot
                      reach our  workshop.
                    </p>
                  </>
                ),
                href: "/land-rover-engines",
                cta: "Explore Land Rover Head Gasket Replacement",
              },
              {
                title: "Jaguar Head Gasket Repair",
                body: (
                  <>
                    <p>
                      Jaguar head gasket repair covers several platforms with distinct fault characteristics   and the cost of repair
                      varies considerably depending on the engine, the extent of gasket failure, and whether the cylinder head has
                      sustained additional damage.
                    </p>
                    <p>
                      The Jaguar S-Type head gasket is one of the most frequently requested repairs we carry out on older Jaguar
                      petrol platforms. Jaguar S-Type blown head gasket repair requires careful assessment of the V6 or V8 cylinder
                      heads before work proceeds   warping caused by overheating is common on this platform.
                    </p>
                    <p>
                      Jaguar X-Type head gasket repair cost is another common enquiry   the X-Type diesel and petrol platforms both
                      develop head gasket faults that require specialist attention. We always provide a written estimate following a
                      thorough diagnostic rather than quoting figures based on vehicle model alone. UK-wide collection is available on
                      all head gasket repair work.
                    </p>
                  </>
                ),
                href: "/jaguar-engines",
                cta: "Explore Jaguar Head Gasket Repair",
              },
              {
                title: "Audi Head Gasket Repair",
                body: (
                  <>
                    <p>
                      Audi head gasket failure presents differently across the TDI diesel and TFSI petrol platforms   and diagnosing
                      the fault accurately before committing to a repair approach is essential on these engines. We carry out Audi head
                      gasket repair and replacement across the A4, A5, A6, TT, and Q5 range, covering 1.8T, 2.0 TFSI, 2.0 TDI, and
                      3.0 TDI platforms.
                    </p>
                    <p>
                      Audi 2.0 TFSI head gasket failure is one of the most common faults we see on this petrol platform   often
                      presenting alongside the oil consumption issues this engine is known for. Coolant loss, overheating, and white
                      smoke under load are the typical symptoms.
                    </p>
                    <p>
                      Audi head gasket cost is always provided following a proper diagnostic and cylinder head inspection. Audi head
                      gasket specialist near me is a search we serve from , with UK-wide collection available.
                    </p>
                  </>
                ),
                href: "/audi-engines",
                cta: "Explore Audi Head Gasket Repair",
              },
              {
                title: "BMW Head Gasket Repair",
                body: (
                  <>
                    <p>
                      BMW head gasket repair requires platform-specific knowledge that varies considerably between the N52, N54, and
                      N20 petrol engines   each of which develops head gasket related faults in distinct ways and at different mileage
                      points. We carry out BMW head gasket repair and replacement across the 3 Series, 5 Series, X3, and X5.
                    </p>
                    <p>
                      BMW N52 head gasket failure is one of the most documented faults on the naturally aspirated straight-six
                      platform. Coolant loss and overheating on the N52 frequently traces back to a head gasket that has begun to fail.
                      Careful cylinder head inspection and surface measurement is essential before the replacement gasket is fitted.
                    </p>
                    <p>
                      BMW head gasket cost is always provided in a written quote following a full assessment   BMW head gasket symptoms
                      should never be managed conservatively, as the secondary damage from delayed repair is always more expensive than
                      the repair itself.
                    </p>
                  </>
                ),
                href: "/bmw-engines",
                cta: "Explore BMW Head Gasket Repair",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-6 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-3">{item.title}</h3>
                <div className="line-clamp-4 text-slate-600 leading-relaxed font-medium text-sm">{item.body}</div>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    {item.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/get-quote" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose + process */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-primary/20 blur-[160px] rounded-full -ml-64 -mt-64"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">
              Why Choose <span className="text-primary">Vogue Technics</span> for Head Gasket Repair
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Accurate Diagnosis Before Any Repair Recommendation",
                text: "Head gasket failure can be mimicked by other cooling system faults   and a proper diagnostic, including a combustion gas test and cylinder compression assessment, is the only way to confirm the fault before recommending repair. We never skip this step.",
              },
              {
                title: "Cylinder Head Inspection Included on Every Job",
                text: "A head gasket replacement carried out without inspecting and measuring the cylinder head for warping is an incomplete repair. We assess every cylinder head before refitting   and skim or replace where necessary.",
              },
              {
                title: "OEM and OEM-Specification Parts Throughout",
                text: "Every head gasket replacement uses OEM or OEM-specification gaskets, head bolts, and associated sealing components. Head bolts are always replaced on reassembly.",
              },
              {
                title: "Written Quotes, No Surprises",
                text: "The figure you agree is the figure you pay. No additions without approval and no work carried out beyond what has been confirmed.",
              },
              {
                title: "Six-Month Warranty on All Head Gasket Repairs",
                text: "Every head gasket repair carries a minimum six-month warranty on parts and labour, confirmed in writing at handover.",
              },
              {
                title: "UK-Wide Collection and Delivery",
                text: "Based in    we collect and deliver across the UK on all head gasket and engine work.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-primary p-2 rounded-xl flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <h3 className="font-extrabold uppercase tracking-tight italic text-sm">{item.title}</h3>
                    <p className="text-slate-300 font-medium text-sm line-clamp-3">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">
                Our Head Gasket <span className="text-primary">Repair Process</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                "Step 1   Contact Us with your symptoms and vehicle details. We provide honest initial advice from the first call.",
                "Step 2   Drop Off or Collection   visit our  workshop or arrange UK-wide collection.",
                "Step 3   Diagnostic and Written Quote   combustion gas test, compression test, cooling system assessment, and cylinder head inspection. Full written quote covering all work before anything proceeds.",
                "Step 4   Head Gasket Repair to OEM Specification   new gasket, new head bolts, cylinder head skim where required, full reassembly with correct torque settings throughout.",
                "Step 5   Cooling System Flush and Refill   full coolant system flush, refill with correct specification coolant, and pressure test before the engine is started.",
                "Step 6   Road Test and Quality Check   temperature monitoring, pressure check, and road test before handover. Warranty documentation confirmed in writing.",
              ].map((text, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 hover:bg-white/10 transition-all duration-500">
                  <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-base mb-3 shadow-lg">
                    {idx + 1}
                  </div>
                  <p className="text-slate-200 font-medium text-sm line-clamp-3">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        title={<>Frequently <span className="text-primary italic">Asked Questions</span></>}
        subtitle="Clear answers to the questions we hear most about head gasket diagnosis and replacement."
        items={[
          {
            question: "How much does head gasket repair cost?",
            answer:
              "Head gasket repair cost varies by platform, engine, and the condition of the cylinder head at the time of repair. A head that requires skimming adds cost to the job. We always quote following a proper diagnostic   contact us for a no-obligation estimate on your specific vehicle.",
          },
          {
            question: "Can a blown head gasket be repaired with a sealer product?",
            answer:
              "No. Liquid sealers are a temporary measure that does not address the underlying failure and frequently causes additional problems   blocked coolant passages, damaged water pump impellers, and masked symptoms that allow further damage to develop. A proper head gasket replacement is always the correct repair.",
          },
          {
            question: "How do I know if my head gasket is blown?",
            answer:
              "White smoke from the exhaust, coolant loss without a visible leak, milky oil on the dipstick, persistent overheating, and bubbling in the coolant reservoir are the primary symptoms. A combustion gas test confirms the diagnosis definitively.",
          },
          {
            question: "Do you replace head bolts during a head gasket repair?",
            answer:
              "Yes, always. Head bolts on modern engines are stretch bolts designed for single use. Reusing them compromises the clamping load on the new gasket and is not an acceptable practice. We replace head bolts on every head gasket job.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-4 uppercase tracking-tight italic leading-tight">
            Address Your Head Gasket <span className="text-slate-950">Before It Becomes an Engine</span>
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-6 max-w-3xl mx-auto font-medium leading-relaxed">
            If you suspect a head gasket issue, the correct next step is a proper diagnostic and a written quote before any work
            begins.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link
              href="/get-quote"
              className="bg-slate-950 text-white font-black px-4 py-2 rounded-xl shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs"
            >
              Request Quote
            </Link>
            <a
              href="tel:01375531355"
              className="bg-white text-slate-950 font-black px-4 py-2 rounded-xl shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs border-4 border-slate-950/10"
            >
              Call Us
            </a>
            <Link
              href="/services/engine-health-check"
              className="bg-white/20 text-white font-black px-4 py-2 rounded-xl shadow-2xl hover:bg-white/25 transition-all uppercase tracking-[0.2em] text-xs border border-white/20"
            >
              Book Inspection
            </Link>
          </div>

          <div className="mt-8 text-white/90 font-black uppercase tracking-widest text-[0.65rem]">
            Vogue Technics | Head Gasket Repair Specialists |  | UK-Wide Collection &nbsp; Range Rover • Land Rover •
            Jaguar • Audi • BMW
          </div>
        </div>
      </section>

      <PartnerLogos />
    </main>
  );
}


