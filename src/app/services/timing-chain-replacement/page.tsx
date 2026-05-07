"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, Gauge, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import RegSearch from "@/components/common/RegSearch";
import ReviewsSection from "@/components/common/ReviewsSection";

export default function TimingChainReplacementPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Timing chain replacement specialists"
            fill
            className="object-cover opacity-20 filter grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Timing Chain Replacement", href: "/services/timing-chain-replacement" },
            ]}
          />

          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 uppercase tracking-tight leading-tight italic"
            >
              Timing Chain Replacement Specialists{" "}
              <span className="text-primary italic">for Range Rover, Land Rover, Jaguar, Audi &amp; BMW</span>
            </motion.h1>

            <div className="flex justify-center w-full max-w-2xl mx-auto mb-10">
              <RegSearch />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="max-w-4xl mx-auto text-slate-300 leading-relaxed font-medium space-y-6 text-sm md:text-base"
            >
              <p>
                That rattling sound on a cold start is not something to investigate next month. On most prestige vehicles, a timing
                chain rattle is one of the clearest warnings an engine can give — and ignoring it is a decision that tends to end
                with a bill several times larger than the replacement would have cost.
              </p>
              <p>
                At Vogue Technics, we carry out timing chain replacement across Range Rover, Land Rover, Jaguar, Audi, and BMW. Every
                job uses OEM or OEM-specification parts, every quote is written and agreed before work begins, and every replacement
                carries a minimum six-month warranty. Based in Grays, Essex, with UK-wide collection available.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10">
              <Link
                href="/contact-us"
                className="bg-primary text-white font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:brightness-110 transition-all uppercase tracking-[0.2em] text-xs md:text-sm inline-flex items-center gap-3"
              >
                Get a Free Timing Chain Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01375531355"
                className="bg-white text-slate-950 font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
              >
                Call Us Today
              </a>
              <Link
                href="/contact-us"
                className="bg-white/15 text-white font-black px-10 py-5 rounded-[2rem] shadow-2xl hover:bg-white/20 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
              >
                Book an Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection subtitle="Hear from our satisfied customers who have experienced our professional specialist engine services." />

      {/* Gallery */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              { src: "/images/gallery/2g.webp", alt: "Timing chain replacement workshop" },
              { src: "/images/gallery/3g.webp", alt: "Engine service and diagnostic bay" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="relative h-[240px] sm:h-[300px] lg:h-[320px]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Is Your Timing Chain Failing? <span className="text-primary">Know the Signs</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base bg-slate-50 border border-slate-100 rounded-[3rem] p-10 md:p-12">
            <p>
              Timing chain problems rarely appear without warning. The difficulty is that the early signs are easy to dismiss —
              until the damage becomes irreversible.
            </p>
            <p>
              A metallic rattling or chattering sound on cold start that fades after the engine warms up is the most recognised
              symptom of timing chain wear. This sound is the chain slack moving against the tensioner before oil pressure builds
              fully. It should never be dismissed as normal. Other warning signs include a check engine light with camshaft position
              or timing-related fault codes, rough running or misfires caused by timing being slightly off, noticeable power loss as
              the engine struggles to maintain correct valve timing, and in serious cases, a complete timing chain failure that
              causes the engine to stop without warning and suffer catastrophic internal damage.
            </p>
            <p>
              If any of these apply to your vehicle, the timing chain needs specialist attention now — not after the next service.
            </p>
            <div className="pt-6">
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                Book a Timing Chain Inspection Today <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why cannot wait */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Why Timing Chain Replacement <span className="text-primary">Cannot Wait</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base bg-white border border-slate-100 rounded-[3rem] p-10 md:p-12 shadow-sm">
            <p>
              A worn timing chain does not just affect performance. When it fails completely — and it will, if left long enough —
              the consequences are severe. On interference engines, which includes the majority of modern prestige vehicle
              platforms, a snapped or jumped timing chain causes the pistons and valves to collide. The result is bent valves,
              damaged pistons, and in many cases a destroyed cylinder head. What started as a timing chain replacement becomes a
              full engine rebuild or replacement.
            </p>
            <p>
              The cost difference between a timing chain replacement carried out at the right time and an engine rebuild carried
              out after failure is significant. Acting on the warning signs is always the more sensible financial decision.
            </p>
          </div>
        </div>
      </section>

      {/* By vehicle */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight italic">
              Timing Chain Replacement <span className="text-primary">by Vehicle</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Range Rover Timing Chain Replacement",
                text: [
                  "Range Rover timing chain issues are well documented across several platforms — and owners who hear the cold start rattle and delay investigation consistently end up with more serious and costly repairs. We carry out Range Rover timing chain replacement across the full model range, covering TDV6, SDV6, TDV8, and Ingenium 2.0 diesel and petrol engines.",
                  "The Ingenium 2.0 diesel fitted to the Range Rover Evoque and newer Sport models is one of the most affected platforms — timing chain wear on this engine appears earlier than many owners expect, often before 80,000 miles. Range Rover timing chain replacement cost varies by platform and whether tensioners and guides require replacement alongside the chain. We always provide a full written quote following inspection.",
                  "Do Range Rovers have a timing belt or chain? All current Range Rover engines use a timing chain — there is no timing belt on any modern JLR petrol or diesel platform.",
                ],
                href: "/range-rover-engines",
              },
              {
                title: "Land Rover Timing Chain Replacement",
                text: [
                  "Land Rover timing chain replacement is one of the most frequently requested jobs across the Discovery Sport, Evoque, and Freelander range. The 2.0 Ingenium diesel — fitted across Discovery Sport, Evoque, and current Defender models — develops timing chain wear that requires specialist attention and OEM-specification parts to resolve correctly.",
                  "Land Rover Discovery timing chain replacement cost depends on the specific platform and the condition of the tensioners and guides at the time of replacement. We carry out a full assessment before quoting, and we include tensioner and guide inspection as standard on every timing chain job.",
                  "The Land Rover 5.0 petrol engine fitted to the Range Rover Sport and Discovery 4 V8 also requires timing chain tensioner replacement at recommended intervals — we cover this platform fully. Land Rover timing chain warranty is provided on every replacement we complete as part of our standard six-month cover.",
                ],
                href: "/land-rover-engines",
              },
              {
                title: "Jaguar Timing Chain Replacement",
                text: [
                  "Jaguar timing chain issues mirror those seen on Land Rover platforms — because the engines are shared. The 2.0 Ingenium diesel fitted to the XE, XF, E-Pace, and F-Pace develops timing chain wear that Jaguar owners across the UK have increasingly sought specialist help to resolve outside of main dealer pricing.",
                  "We carry out Jaguar timing chain replacement across the XE, XF, XJ, F-Pace, and E-Pace, covering Ingenium diesel and petrol platforms and the older 2.7 and 3.0 V6 diesel units. Jaguar timing chain replacement cost UK is always provided in a written quote following a proper diagnostic — and our pricing reflects independent specialist expertise rather than franchise overhead.",
                  "Jaguar timing chain recall and warranty queries are something we are asked about regularly. If your vehicle falls within a recall or extended warranty window, we will advise you honestly on your options before recommending any paid repair.",
                ],
                href: "/jaguar-engines",
              },
              {
                title: "Audi Timing Chain Replacement",
                text: [
                  "Audi timing chain noise — that distinctive cold start rattle on 2.0 TFSI and 2.0 TDI engines — is one of the most searched fault symptoms across the Audi A4, A5, and Q5 range. The timing chain tensioner on these platforms is a known weakness, and stretch develops progressively until the rattle becomes constant and fault codes begin to appear.",
                  "We carry out Audi timing chain replacement across the A3, A4, A5, A6, Q5, and Q7 range, covering 2.0 TFSI, 2.0 TDI, and 3.0 TDI platforms. Audi timing chain tensioner replacement is included as standard on every job — fitting a new chain onto a worn tensioner is a false economy that leads to premature failure.",
                  "Audi timing chain cost varies by platform. Audi timing chain stretch on the 2.0 TFSI in particular often appears alongside oil consumption symptoms — we carry out a full engine assessment alongside the chain replacement where this is the case.",
                ],
                href: "/audi-engines",
              },
              {
                title: "BMW Timing Chain Replacement",
                text: [
                  "BMW timing chain failure is one of the most serious and well-documented faults in the modern prestige vehicle market. The N47 2.0 diesel — fitted to the BMW 1 Series, 3 Series, and 5 Series — has a rear-mounted timing chain that develops stretch and tensioner failure, often without significant warning before complete failure occurs. BMW 318d and BMW 320d timing chain replacement are among the most critical repairs we carry out.",
                  "BMW N47 timing chain failure can happen suddenly and at relatively low mileage — we have seen complete failures on engines with under 80,000 miles. The N57 3.0 diesel is a more durable platform but still develops timing chain noise and tensioner wear over time.",
                  "We carry out BMW timing chain replacement across the 1, 2, 3, 4, and 5 Series covering N47, N57, N20, and B47 platforms. BMW timing chain cost is always provided in a written quote. BMW timing chain recall information is something we advise on at the point of enquiry — if your vehicle falls within any extended warranty or recall programme, we will tell you before recommending a paid repair.",
                ],
                href: "/bmw-engines",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight italic mb-6">{item.title}</h3>
                <div className="space-y-5 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                  {item.text.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
                <div className="pt-8 flex flex-wrap gap-4">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
                    Explore {item.title.split(" ")[0]} Timing Chain Replacement <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact-us" className="inline-flex items-center gap-2 text-primary font-black text-xs tracking-widest uppercase">
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
              Why Choose <span className="text-primary">Vogue Technics</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Platform-Specific Knowledge", text: "Timing chain replacement is not the same job on every engine. Our technicians know these differences in detail." },
              { icon: <Wrench className="w-5 h-5" />, title: "OEM and OEM-Specification Parts", text: "No budget chains, no pattern tensioners. Every replacement uses parts built to the same specification as the original components." },
              { icon: <Gauge className="w-5 h-5" />, title: "Tensioners and Guides Inspected", text: "Replacing the chain without assessing tensioners and guides is poor practice. We inspect and include replacement where required." },
              { icon: <Activity className="w-5 h-5" />, title: "Written Quotes, No Surprises", text: "Full itemised quote agreed before work begins. The figure you confirm is the figure you pay." },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Six-Month Warranty", text: "Every timing chain replacement carries a minimum six-month warranty on parts and labour." },
              { icon: <Wrench className="w-5 h-5" />, title: "UK-Wide Collection", text: "Based in Grays, Essex, we collect and deliver across the UK on all timing chain and engine work." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 text-primary p-2 rounded-xl flex-shrink-0">{item.icon}</div>
                  <div className="space-y-3">
                    <h3 className="font-extrabold uppercase tracking-tight italic text-sm md:text-base">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed font-medium text-sm md:text-base">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight italic">
                Our <span className="text-primary">Process</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                "Step 1 — Contact Us with your vehicle details and symptoms. We respond promptly with honest advice.",
                "Step 2 — Drop Off or Collection — visit our Grays workshop or arrange UK-wide collection.",
                "Step 3 — Inspection and Written Quote — full timing chain assessment including tensioners and guides, followed by a clear itemised quote.",
                "Step 4 — Replacement to OEM Specification — carried out by platform specialists using quality parts throughout.",
                "Step 5 — Quality Check and Return — post-replacement inspection, fault code clearance, and road test before handover.",
              ].map((text, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg mb-6 shadow-lg">
                    {idx + 1}
                  </div>
                  <p className="text-slate-200 leading-relaxed font-medium text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        title={<>Frequently <span className="text-primary italic">Asked Questions</span></>}
        subtitle="Clear answers about timing chain wear, pricing, and common platforms."
        items={[
          {
            question: "How much does timing chain replacement cost?",
            answer:
              "Cost varies by platform and whether tensioners and guides require replacement. We always quote after a proper inspection — contact us for a no-obligation estimate on your specific vehicle.",
          },
          {
            question: "How do I know if my timing chain needs replacing?",
            answer:
              "A cold start rattle that fades as the engine warms is the clearest sign. Timing-related fault codes and rough running are also common indicators. Book an inspection if you are unsure.",
          },
          {
            question: "Do Range Rovers and Land Rovers have a timing belt or chain?",
            answer:
              "All modern JLR engines use a timing chain. There is no timing belt on current Range Rover, Land Rover, or Jaguar petrol or diesel platforms.",
          },
          {
            question: "Do you cover BMW N47 timing chain replacement?",
            answer:
              "Yes — BMW N47 timing chain replacement is one of the most critical repairs we carry out. We advise on this platform specifically during the initial enquiry.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tight italic leading-tight">
            Do Not Wait for a Rattle <span className="text-slate-950">to Become a Rebuild</span>
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
            Act early, diagnose correctly, and replace the chain before catastrophic internal damage occurs.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact-us"
              className="bg-slate-950 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-4"
            >
              Request a Free Timing Chain Replacement Quote <ArrowRight className="w-6 h-6 text-primary" />
            </Link>
            <a
              href="tel:01375531355"
              className="bg-white text-slate-950 font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border-4 border-slate-950/10"
            >
              Call Us and Speak to a Specialist
            </a>
            <Link
              href="/contact-us"
              className="bg-white/20 text-white font-black px-12 py-6 rounded-[2rem] shadow-2xl hover:bg-white/25 transition-all uppercase tracking-[0.2em] text-xs md:text-sm border border-white/20"
            >
              Book a Timing Chain Inspection at Our Grays Workshop
            </Link>
          </div>

          <div className="mt-16 text-white/90 font-black uppercase tracking-widest text-[0.65rem]">
            Vogue Technics | Timing Chain Replacement Specialists | Grays, Essex | UK-Wide Collection &nbsp; Range Rover • Land Rover
            • Jaguar • Audi • BMW
          </div>
        </div>
      </section>

      <PartnerLogos />
    </main>
  );
}

