import Reveal from "@/components/common/Reveal";
import WarrantyPartsExcellence from "@/components/common/WarrantyPartsExcellence";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PartnerLogos from "@/components/common/PartnerLogos";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import HeroTrustLabels from "@/components/common/HeroTrustLabels";

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
            src="/images/car_bgg.webp"
            alt="Vogue Technics engine specialists"
            fill
            className="object-cover opacity-65 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/35 to-slate-900/10" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Our Engines", href: "/engines" }]} />
          
          <div className="max-w-5xl pt-8">
            <span
              className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 shadow-[0_0_22px_rgba(25,135,84,0.22)]"
            >
              Engine Specialists
            </span>
            <h1
              className="animate-fade-up mt-6 text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl"
              style={{ "--fade-delay": "0.1s" } as React.CSSProperties}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-green-400">
                Engine Repair, Rebuild & Replacement Specialists
              </span>{" "}
                Vogue Technics,
            </h1>
            <p
              className="animate-fade-up mt-5 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base"
              style={{ "--fade-delay": "0.2s" } as React.CSSProperties}
            >
              Some engine problems announce themselves loudly. Others build quietly over weeks and months   a slight drop in power here, an occasional rattle on a cold morning there   until the point where the damage is serious and the decision about what to do next cannot be deferred any longer.
              <br />
              <br />
              At that point, the garage you choose is everything.
            </p>

            <div
              className="animate-fade-up mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--fade-delay": "0.25s" } as React.CSSProperties}
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
            </div>

            <HeroTrustLabels align="start" className="mt-4" />

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

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">25 Years of Prestige Engine Experience</h3>
              <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                <p>
                  Owners travel from across the UK — not because there are no garages closer, but because genuine specialist knowledge of these platforms is rarer than most realise until they start looking for it.
                </p>
                <p>
                  Our technicians work on the N47, TDV6, Ingenium, and N57 every day — every failure mode understood, every tolerance known. These engines do not reward guesswork, and they receive none here. Every job is backed by a minimum six-month warranty, confirmed in writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-[1.5rem] bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3">OEM Standards — On Every Job</h3>
              <p className="text-slate-700 text-sm leading-relaxed line-clamp-5">
                No budget parts, no shortcuts. Every rebuild, replacement, turbo fitment, head gasket, and timing chain job uses OEM or OEM-specification components — fitted to the torque specifications the manufacturer defines.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3">Written Quotes. No Surprises.</h3>
              <p className="text-slate-700 text-sm leading-relaxed line-clamp-4">
                Every job begins with a thorough diagnostic and a detailed written quote covering all work and components. Nothing proceeds until you confirm it. The figure you agree is the figure you pay.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3">Over 25 Years. Warranty Standard.</h3>
              <div className="space-y-2">
                {[
                  "Over 25 years of engine work.",
                  "OEM and OEM-specification parts throughout.",
                  "Six-month warranty on every major job.",
                  "Written quotes before any work begins.",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <span className="mt-0.5 rounded-lg bg-primary/10 p-1.5 text-primary flex-shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-slate-700 text-sm leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <WarrantyPartsExcellence />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Engine Repair", slug: "engine-repair", body: "Targeted repairs for oil leaks, EGR faults, cooling failures, misfires, and cylinder head work — diagnosed accurately and priced honestly." },
              { title: "Engine Rebuild", slug: "engine-rebuild", body: "Full strip-and-rebuild to OEM specification — every wear component replaced, every clearance set correctly. Six-month warranty as standard." },
              { title: "Engine Replacement", slug: "engine-replacement", body: "Quality reconditioned and low-mileage units sourced, assessed, and fitted across all five brands. We verify every unit before installation." },
              { title: "Engine Swap", slug: "engine-swap", body: "Full engine swap service across all five brands — wiring loom mapping, ECU adaptation, and system integration handled by our specialists." },
              { title: "Head Gasket Replacement", slug: "head-gasket-replacement", body: "Combustion gas testing, cylinder head inspection, resurfacing where required, and full cooling system pressure testing before return." },
              { title: "Timing Chain Replacement", slug: "timing-chain-replacement", body: "Chain, tensioners, guides, and sprockets replaced as a complete system across all affected platforms — Ingenium, N47, Jaguar 3.0, Audi TDI." },
              { title: "Timing Belt Replacement", slug: "timing-belt-replacement", body: "Belt, tensioner, idlers, and water pump replaced to OEM specification at the correct interval — before failure, not after." },
              { title: "Turbo Replacement", slug: "turbo-replacement", body: "OEM and remanufactured turbos fitted across all platforms, with full oil system inspection and boost pressure verification on every job." },
              { title: "Engine Health Check", slug: "engine-health-check", body: "Full mechanical and electronic assessment — compression, oil condition, turbo, timing, and all control modules. Written report in plain language." },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-5">{item.body}</p>
                </div>
                <div className="pt-6">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 rounded-xl hover:bg-primary-dark transition-colors text-sm"
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
          <Reveal className="text-2xl md:text-4xl font-black text-white mb-6 tracking-tighter uppercase italic">
            <h2>Vogue Technics | Engine Specialists |  | UK-Wide Collection Available</h2>
          </Reveal>
          <Reveal delay={0.1} className="text-sm md:text-base text-emerald-50 mb-10 max-w-3xl mx-auto font-medium">
            <p>Range Rover • Land Rover • Jaguar • Audi • BMW</p>
          </Reveal>
          <Reveal
            variant="scale"
            distance={0.9}
            delay={0.2}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            <a href="tel:01375531355" className="bg-white text-primary font-black py-3.5 px-10 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 hover:bg-slate-50 text-sm uppercase tracking-widest">
              CALL 01375 531355
            </a>
            <Link href="/contact-us" className="bg-slate-900 text-white font-black py-3.5 px-10 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 hover:bg-slate-800 text-sm uppercase tracking-widest border border-white/10">
              REQUEST QUOTE
            </Link>
          </Reveal>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-64 -mt-64 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full -ml-64 -mb-64 blur-3xl pointer-events-none"></div>
      </section>

      <PartnerLogos />
    </div>
  );
}
