"use client";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import RegSearch from "@/components/common/RegSearch";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BmwRoundelMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <clipPath id="bmw_clip">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0b0f19" />
      <circle cx="32" cy="32" r="28" fill="#111827" stroke="#e5e7eb" strokeWidth="2" />
      <g clipPath="url(#bmw_clip)">
        <rect x="4" y="4" width="28" height="28" fill="#60a5fa" />
        <rect x="32" y="32" width="28" height="28" fill="#60a5fa" />
        <rect x="32" y="4" width="28" height="28" fill="#f8fafc" />
        <rect x="4" y="32" width="28" height="28" fill="#f8fafc" />
      </g>
      <circle cx="32" cy="32" r="27" fill="none" stroke="#0b0f19" strokeWidth="6" opacity="0.65" />
      <text x="32" y="16" textAnchor="middle" fontSize="10" fontWeight="900" fill="#f8fafc" fontFamily="ui-sans-serif, system-ui">
        BMW
      </text>
    </svg>
  );
}

const bmwTrustPoints = [
  "Free Same-Day Quote",
  "6-Month Warranty Included",
  "UK-Wide Collection & Delivery",
  "RAC-Approved Garage",
];

const bmwReasonsToTrust = [
  "Affordable BMW engine repair cost UK – Save up to 40% compared to main dealer prices",
  "Same-day free quote – Call or fill out our form and get a fast, transparent estimate",
  "Fast turnaround – Most engine repairs and replacements completed within 3–5 working days",
  "BMW-certified technicians – Our mechanics specialise exclusively in BMW engines",
  "Genuine & OEM-quality parts – Only approved components used on every job",
  "6-month parts and labour warranty – Every repair is fully guaranteed",
  "Nationwide service – We collect and deliver your BMW anywhere in the UK",
  "All models covered – BMW 1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 6 Series, 7 Series & X1",
];

const bmwServices = [
  {
    title: "BMW Head Gasket Repair",
    description:
      "A blown head gasket is one of the most serious and common BMW engine faults, and if left untreated it can cause permanent engine damage. Our BMW-specialist mechanics diagnose head gasket failures quickly using advanced equipment, giving you an accurate repair cost before any work begins. We offer affordable BMW head gasket repair across the UK, using only OEM-quality gaskets and components to ensure a lasting fix. Whether you drive a BMW 1 Series, 3 Series, or X1, our team can complete the repair efficiently with minimal downtime. Book your BMW head gasket repair today and get a same-day quote.",
    href: "/services/head-gasket-replacement",
  },
  {
    title: "BMW Timing Chain Replacement",
    description:
      "A failing timing chain is a known issue across many BMW engines, particularly in the N47 and N20 engines found in the 1, 3, and 5 Series models. Symptoms include rattling noises on startup, engine warning lights, or poor performance. Our specialists carry out BMW timing chain replacement at a fraction of main dealer costs, using quality-assured parts built to BMW specifications. Ignoring a worn timing chain can lead to catastrophic engine failure, so early intervention is essential. Contact us now for a competitive BMW timing chain replacement cost UK quote.",
    href: "/services/timing-chain-replacement",
  },
  {
    title: "BMW Turbo Replacement",
    description:
      "Turbocharger failure is a frequent issue in modern BMW diesels and petrols, particularly in the 2 Series, 3 Series, 5 Series, and X1. Signs include excessive smoke, loss of power, or a whining noise from the engine bay. We supply and fit replacement turbos sourced from trusted UK suppliers, ensuring full compatibility with your BMW model and engine code. Our turbo replacement service is significantly cheaper than BMW main dealer pricing, and all work carries our 6-month warranty. Get your BMW turbo replacement quote today – same-day response guaranteed.",
    href: "/services/turbo-replacement",
  },
  {
    title: "BMW Engine Rebuild",
    description:
      "If your BMW engine has suffered severe wear, oil starvation, or internal damage, a full engine rebuild may be the most cost-effective long-term solution. Our engine rebuild specialists strip down, assess, and reconstruct your BMW engine using precision-machined components, replacing everything from pistons and bearings to seals and gaskets. A BMW engine rebuild with us costs far less than a brand-new engine while restoring full performance and reliability. We handle engine rebuilds for the entire BMW range including the 1 through 7 Series and X1. Book a free engine assessment now.",
    href: "/services/engine-rebuild",
  },
  {
    title: "BMW Engine Repair",
    description:
      "Whether you're dealing with oil leaks, overheating, misfires, or warning lights, our team diagnoses and resolves BMW engine problems at honest, transparent prices. We use the latest diagnostic tools to pinpoint faults accurately, avoiding unnecessary repairs. Our BMW engine repair service covers all petrol and diesel variants across the 1, 2, 3, 4, 5, 6, 7 Series and X1 models. With same-day quotes available and a 6-month warranty on all repairs, there's no better place to get your BMW fixed in the UK. Search no further for a trusted BMW specialist near me.",
    href: "/services/engine-repair",
  },
  {
    title: "BMW Engine Replacement",
    description:
      "When repair is no longer viable, a full BMW engine replacement is often the smartest and most affordable route. We source low-mileage, tested replacement engines from reliable UK suppliers and fit them to the highest standard. Our BMW engine replacement service includes full installation, all associated gaskets and seals, fluid refills, and a post-installation road test. We offer BMW engine replacement costs that beat main dealers by up to 40%, with UK-wide collection and delivery included. Call now for a fast, no-obligation BMW engine replacement quote.",
    href: "/services/engine-replacement",
  },
  {
    title: "BMW Engine Swap",
    description:
      "Planning a performance upgrade or replacing a written-off engine? Our BMW engine swap service covers everything from sourcing the correct engine variant to full installation and ECU reconfiguration where required. We work across all BMW models and engine codes, ensuring the swap is carried out safely and to manufacturer standards. Our team has extensive experience completing engine swaps on BMW 3 Series, 5 Series, and M-sport variants. Get in touch today for expert advice and a competitive engine swap cost UK quote.",
    href: "/services/engine-swap",
  },
  {
    title: "BMW Timing Belt Replacement",
    description:
      "While many modern BMWs use timing chains, several older petrol models use timing belts that require periodic replacement to prevent serious engine damage. Missing a timing belt service interval on your BMW can result in belt failure and a completely destroyed engine. Our BMW timing belt replacement service is carried out by experienced specialists using manufacturer-approved belts and tensioners. We recommend replacing the water pump at the same time to maximise value and reliability. Book your BMW timing belt replacement today at a price that won't break the bank.",
    href: "/services/timing-belt-replacement",
  },
  {
    title: "BMW Engine Health Check",
    description:
      "Unsure what's wrong with your BMW? Our comprehensive BMW engine health check uses professional-grade diagnostics to scan for fault codes, assess oil condition, check coolant levels, and inspect belts, chains, and ancillaries. This service is ideal for used BMW purchases, pre-MOT checks, or when warning lights appear. Our engine health check gives you a full written report of your BMW's condition along with a transparent quote for any work required. Available across the UK – book your BMW engine health check online or by phone.",
    href: "/services/engine-health-check",
  },
];

const bmwModels = [
  {
    title: "BMW 1 Series Engine Repair & Replacement",
    href: "/bmw-1-series-engines",
    description:
      "The BMW 1 Series is a popular compact hatchback, but its engines are prone to issues such as timing chain failure in the N47 diesel, turbo problems, and coolant leaks. We offer specialist BMW 1 Series engine repair across the UK at prices significantly lower than franchised dealers. Whether you need a BMW 1 Series engine rebuild, a full replacement, or a head gasket repair, our team has the expertise and parts to get you back on the road fast. Search for affordable BMW 1 Series mechanics near me and you'll find us at the top for a reason – quality work at honest prices.",
  },
  {
    title: "BMW 2 Series Engine Repair & Replacement",
    href: "/bmw-2-series-engines",
    description:
      "The BMW 2 Series includes coupe and active tourer variants powered by a range of petrol and diesel engines, many of which share fault patterns with the 1 and 3 Series. Common issues include injector failure, turbocharger wear, and EGR valve problems. Our BMW 2 Series engine repair specialists diagnose and fix these faults quickly and affordably. We offer same-day BMW 2 Series engine replacement quotes and carry out all work with a full warranty. Whether it's a 218i, 220d, or 225xe, we have the knowledge to fix it right.",
  },
  {
    title: "BMW 3 Series Engine Repair & Replacement",
    href: "/bmw-3-series-engines",
    description:
      "The BMW 3 Series is one of the most popular cars on UK roads, and we are one of the most trusted specialists for BMW 3 Series engine repair in the country. From the N47 timing chain rattle in the 320d to the N55 turbo failure in the 335i, we've seen and fixed it all. Our BMW 3 Series engine rebuild cost is up to 40% less than BMW dealer pricing, with no compromise on quality. Whether you drive an E90, F30, or G20 generation, our mechanics understand every variant inside and out. Get your expert 3 Series engine repair or replacement quote today.",
  },
  {
    title: "BMW 4 Series Engine Repair & Replacement",
    href: "/bmw-4-series-engines",
    description:
      "The BMW 4 Series shares its engine lineup with the 3 Series, meaning similar fault profiles and repair requirements. Issues with turbocharger wear, timing chain stretch, and oil feed pipe blockages are all regularly seen in the 420d, 428i, and 430d variants. Our BMW 4 Series engine repair service covers all engine codes and transmission combinations. We offer affordable BMW 4 Series engine replacement across the UK with a 6-month warranty and nationwide collection and delivery. Don't pay main dealer prices – get your free same-day quote from our specialists now.",
  },
  {
    title: "BMW 5 Series Engine Repair & Replacement",
    href: "/bmw-5-series-engines",
    description:
      "The BMW 5 Series is a flagship executive saloon that deserves specialist attention when engine problems arise. Common faults include high-pressure fuel pump failure, timing chain wear in diesel variants, and injector issues across the 520d, 525d, and 530d models. Our BMW 5 Series engine repair team provides comprehensive diagnostics and cost-effective solutions for all faults. We carry out BMW 5 Series engine replacements and rebuilds to the highest standard, using genuine and OEM-quality components. Get a BMW 5 Series engine repair cost UK quote today with a same-day response.",
  },
  {
    title: "BMW 6 Series Engine Repair & Replacement",
    href: "/bmw-6-series-engines",
    description:
      "The BMW 6 Series is a luxury grand tourer, and when it develops engine problems the repair costs at main dealers can be eye-watering. Our specialists offer BMW 6 Series engine repair and replacement at prices that are dramatically lower, without cutting corners on quality or parts. We work on the N54, N55, and N63 engines found across the 630i, 640d, and 650i variants. All work is carried out by experienced BMW technicians and backed by our 6-month warranty. Call now for an affordable BMW 6 Series engine repair quote anywhere in the UK.",
  },
  {
    title: "BMW 7 Series Engine Repair & Replacement",
    href: "/bmw-7-series-engines",
    description:
      "The BMW 7 Series is BMW's top-tier executive saloon, and engine faults in these cars demand specialist knowledge. We offer BMW 7 Series engine repair and full engine replacement for all variants including the 730d, 740i, and 750Li, covering both petrol and diesel powertrains. Our technicians are fully familiar with the V8 and straight-six engines used throughout the 7 Series range. Choosing our independent specialist service over a BMW main dealer can save you thousands of pounds. Contact us today for a transparent, competitive BMW 7 Series engine repair cost UK quote.",
  },
  {
    title: "BMW X1 Engine Repair & Replacement",
    href: "/bmw-x1-engines",
    description:
      "The BMW X1 is one of the UK's best-selling compact SUVs, but its diesel engines – particularly the N47 – are well known for timing chain faults, turbo wear, and EGR issues. Our BMW X1 engine repair service covers all generations including the E84 and F48 models, with same-day quotes and UK-wide collection available. We offer BMW X1 engine replacement at prices that undercut BMW dealerships significantly, using tested and warrantied units. Whether you need a BMW X1 specialist garage for a minor repair or a complete engine swap, we're ready to help. Book your BMW X1 engine repair quote now.",
  },
  {
    title: "BMW X3 Engine Repair & Replacement",
    href: "/bmw-x3-engines",
    description:
      "The BMW X3 is one of the UK's most popular premium SUVs, but its diesel engines can suffer from timing chain issues (especially N47 and N57 variants), EGR faults, turbocharger wear, and coolant-related problems at higher mileages. Our BMW X3 engine repair service covers E83, F25, and G01 generations, including four-cylinder and inline-six diesel variants. We offer same-day quotes, transparent pricing, and UK-wide collection and delivery. Whether you need a targeted repair, a full engine rebuild, or a complete replacement, our BMW specialists can restore your X3 properly.",
  },
  {
    title: "BMW X2 Engine Repair & Replacement",
    href: "/bmw-x2-engines",
    description:
      "The BMW X2 combines sporty design with compact SUV practicality, but like many modern BMW engines, it can develop issues such as timing chain wear, turbocharger faults, and oil leaks over time. We provide expert BMW X2 engine repair and full engine replacement services for all variants, including petrol and diesel models across the F39 range. Our skilled technicians diagnose faults quickly and offer cost-effective BMW X2 engine rebuild and replacement solutions using high-quality, tested engines. Choosing our specialist garage instead of a BMW main dealer can significantly reduce your BMW X2 engine repair cost in the UK. Get in touch today for a fast, competitive quote and nationwide collection service.",
  },
  {
    title: "BMW X5 Engine Repair & Replacement",
    href: "/bmw-x5-engines",
    description:
      "The BMW X5 is a premium SUV known for performance and comfort, but its powerful engines – including straight-six and V8 options – can face issues such as timing chain failure, turbo problems, and excessive oil consumption. We offer professional BMW X5 engine repair and complete engine replacement services for all models, including E70, F15, and G05 variants. Our BMW specialists provide reliable diagnostics, affordable BMW X5 engine rebuild options, and fully warrantied replacement engines. With UK-wide collection and prices far lower than main dealerships, we make BMW X5 engine repair simple and cost-effective. Contact us now to book your BMW X5 engine repair quote and get back on the road with confidence.",
  },
];

const bmwWhyChoose = [
  "BMW-certified technicians with decades of combined experience",
  "RAC-approved garage – a trusted name in UK automotive services",
  "6-month parts and labour warranty on all engine work",
  "Up to 40% cheaper than BMW main dealer pricing",
  "UK-wide collection and delivery – we come to you anywhere in England, Scotland, and Wales",
  "Transparent, fixed-price quotes with no hidden charges",
  "Fast diagnostics – most engine faults identified within hours",
  "All BMW models covered from 1 Series to 7 Series and X1",
  "Genuine and OEM-quality parts used on every repair",
];

const bmwTestimonials = [
  {
    name: 'James R. – BMW 3 Series, Engine Rebuild, Manchester',
    quote:
      "I had a complete engine rebuild done on my F30 320d after a timing chain failure. The team gave me a quote the same day I called, the price was almost half what my local BMW dealer quoted, and the car was back with me in four days. Absolutely brilliant service – the car runs better than ever. I'd recommend them to any BMW owner in the UK without hesitation.",
  },
  {
    name: "Sarah T. – BMW X1, Engine Replacement, Birmingham",
    quote:
      "My X1 needed a full engine replacement after overheating damage. I was dreading the cost but these specialists were incredible – honest, fast, and far more affordable than I expected. They collected the car from my home, kept me updated throughout, and delivered it back running perfectly. The 6-month warranty gave me real peace of mind too. Outstanding.",
  },
  {
    name: "David M. – BMW 5 Series, Turbo Replacement, London",
    quote:
      "I'd been quoted over £2,000 by a BMW dealership for a turbo replacement on my 530d. This team did the same job for significantly less, using quality parts and finishing it in just two days. The mechanic explained everything clearly, the invoice matched the quote exactly, and the car pulls like new again. Best BMW specialist I've found in years.",
  },
];

const bmwFaqs = [
  {
    question: "How long does BMW engine replacement take?",
    answer:
      "A typical BMW engine replacement takes between 3 to 5 working days, depending on the model, engine type, and parts availability. In many cases, where stock is readily available, we can complete the replacement faster. Our team will give you a realistic timeframe when you book, and we keep you updated throughout the process. UK-wide collection and delivery is included, so you don't even need to drop the car off yourself.",
  },
  {
    question: "Do you cover all BMW models including 1 Series through 7 Series and X1?",
    answer:
      "Yes, we cover the full BMW range including the 1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 6 Series, 7 Series, and X1 across all engine variants, generations, and fuel types. Whether you drive a petrol, diesel, or plug-in hybrid BMW, our technicians have the knowledge and tooling to carry out repairs, replacements, and rebuilds to the highest standard.",
  },
  {
    question: "Is there a warranty included with your BMW engine services?",
    answer:
      "Yes. All engine repairs, replacements, and rebuilds carried out by our team come with a 6-month parts and labour warranty as standard. This covers the work done and the parts fitted, giving you complete confidence that your BMW is in safe hands. Extended warranty options may also be available on request.",
  },
  {
    question: "Do you offer UK-wide collection and delivery?",
    answer:
      "Absolutely. We offer a fully managed UK-wide collection and delivery service, meaning we can pick up your BMW from your home or workplace anywhere in England, Scotland, or Wales and return it to you once the work is complete. There's no need to arrange transport or take time off work. This service is included with all major engine repair and replacement bookings.",
  },
  {
    question: "What are the most common BMW engine problems?",
    answer:
      "Some of the most frequently seen BMW engine faults include timing chain wear (particularly in N47 diesel engines), turbocharger failure across diesel and petrol variants, high-pressure fuel pump failure in direct injection models, head gasket failure in older engines, oil feed pipe blockages causing bearing damage, coolant leaks from plastic thermostat housings, and EGR valve fouling in diesel models. If your BMW is displaying warning lights, running roughly, producing unusual smoke, or losing power, contact us immediately for a fast diagnostic and same-day repair quote.",
  },
];

export default function BmwEnginesClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="BMW Engine Specialist"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "BMW Engines", href: "/bmw-engines" }]} />
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-emerald-300 font-semibold tracking-wide text-sm mb-6 border border-primary/30 shadow-[0_0_15px_rgba(25,135,84,0.25)]">
            BMW Engine Specialists (UK)
          </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-50 tracking-tight mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300">
                BMW Engine Repair, Replacement & Rebuild
              </span>{" "}
              Specialists for All Series – Trusted UK Garage
            </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="flex justify-center mt-6 mb-8 w-full">
            <RegSearch />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            RAC-approved, warranty-backed, and up to 40% cheaper than BMW main dealers. Call today for a free same-day quote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {bmwTrustPoints.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold tracking-wide text-slate-200"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>


      {/* WHY THOUSANDS TRUST US */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Thousands of BMW Owners Trust Us
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {bmwReasonsToTrust.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                  <p className="text-slate-800 leading-relaxed text-sm md:text-base font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR BMW ENGINE SERVICES */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our BMW Engine Services
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {bmwServices.map((s) => (
                <div key={s.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-slate-700 leading-relaxed text-sm md:text-base">{s.description}</p>
                  <Link
                    href={s.href}
                    className="mt-5 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-extrabold text-xs tracking-[0.14em] hover:bg-primary/90 transition-colors"
                  >
                    Explore More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BMW MODEL-SPECIFIC ENGINE SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              BMW Model-Specific Engine Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bmwModels.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
              >
                <Link href={m.href} className="group block h-full">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white">
                          <BmwRoundelMark />
                        </span>
                        <span className="text-[11px] font-extrabold tracking-wide text-slate-900">BMW</span>
                      </div>
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-primary/90">Engines</span>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug tracking-tight">
                        {m.title}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{m.description}</p>
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

      {/* WHY CHOOSE OUR BMW ENGINE SPECIALISTS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Our BMW Engine Specialists?
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {bmwWhyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                  <p className="text-slate-800 leading-relaxed text-sm md:text-base font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT OUR CUSTOMERS SAY */}
      <section className="pt-24 pb-12 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <h2 className="bg-primary text-white text-3xl md:text-5xl font-bold px-6 py-3 rounded-lg shadow-lg tracking-tight uppercase italic">
                What Our Customers Say
              </h2>
            </div>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bmwTestimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-primary/90">
                      Verified
                    </span>
                  </div>

                  <p className="text-slate-700 italic mb-8 leading-relaxed font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-50 pt-6">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base uppercase tracking-tight">{t.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title={<>Frequently Asked Questions</>}
        items={bmwFaqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-tight">
            Get Your Free BMW Engine Repair Quote Today
          </h2>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Don&apos;t let engine problems leave you stranded or pay over the odds at a BMW main dealer. Our specialist team is ready to help with fast, affordable, and professional BMW engine repair, replacement, and rebuild services across the entire UK.
          </p>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Whether you drive a BMW 1 Series or a 7 Series, a 3 Series or an X1 – we have the expertise, the parts, and the experience to fix it right at a price that makes sense.
          </p>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Call us now for a free same-day quote. We&apos;re available Monday to Saturday and our team responds fast.
          </p>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Book online or call directly – UK collection and delivery available, 6-month warranty included, no hidden fees. Get your BMW running like new again without the main dealer bill.
          </p>
          <p className="text-emerald-100 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Your BMW deserves a specialist. We&apos;re ready when you are.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center pt-4">
            <Link
              href="/contact-us"
              className="bg-slate-900 hover:bg-slate-800 text-white font-black py-5 px-10 md:px-12 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 text-lg md:text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em]"
            >
              Book online
            </Link>
            <a
              href="tel:01375531355"
              className="bg-white text-slate-900 font-black py-5 px-10 md:px-12 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 text-lg md:text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] hover:bg-slate-100"
            >
              <Phone className="w-6 h-6 text-primary" /> 01375 531355
            </a>
          </div>
        </div>
      </section>

      <PartnerLogos />
    </div>
  );
}
