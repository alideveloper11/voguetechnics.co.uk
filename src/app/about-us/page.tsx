import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, Clock3, Quote, ShieldCheck, Wrench } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PartnerLogos from "@/components/common/PartnerLogos";

export const metadata: Metadata = {
  title: "About Vogue Technics | Range Rover & Land Rover Engine Specialists   ",
  description:
    "Vogue Technics are independent Range Rover and Land Rover engine rebuild specialists based . IGA member, RAC Approved, Trading Standards accredited. Serving , Thurrock, and South East London since 2004. Main dealer expertise, independent pricing.",
};

const trustPoints = [
  "Independent Land Rover and Range Rover engine specialists since 2004.",
  "Main dealer knowledge without main dealer pricing.",
  "Transparent quoting, honest advice, and proper root-cause diagnosis.",
];

const highlights = [
  {
    icon: <Clock3 className="w-6 h-6" />,
    title: "Established 2004",
    text: "Over two decades of specialist engine rebuild, repair, and replacement experience.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Built For Engine Work",
    text: "A workshop environment designed around strip-down, rebuild, and precision repair work.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Accredited & Accountable",
    text: "IGA member, RAC Approved Garage, and Trading Standards Approved Code accredited.",
  },
];

const serviceAreas = [
  "",
  "Thurrock",
  "Dartford",
  "Romford",
  "Basildon",
  "South East London",
];

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Vogue Technics workshop background"
            fill
            priority
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/20 to-slate-900/5" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "About Us", href: "/about-us" }]} />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 shadow-[0_0_22px_rgba(25,135,84,0.18)]">
                About Vogue Technics
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-6xl">
                   Est. 2004 | Range Rover & Land Rover Engine Specialists
              </h1>
              <p className="mt-6 text-xl font-semibold text-white/95 md:text-2xl">
                We don't fix engines. We rebuild trust in them.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                Independent Land Rover and Range Rover engine specialists   doing things properly since day one.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/20 bg-slate-900/75 p-6 backdrop-blur-xl shadow-2xl">
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-400">Why Choose Us</p>
              <div className="space-y-4">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 rounded-xl bg-primary/25 p-2 text-emerald-300">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-relaxed text-slate-200">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-white/10 pt-4 flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-300">IGA Member · RAC Approved · Trading Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                <div className="relative h-[380px] md:h-[460px]">
                  <Image
                    src="/images/range-rover.webp"
                    alt="Vogue Technics workshop"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Since 2004</p>
                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">Built from the ground up, one engine at a time</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Story Since 2004</h2>
                <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
              </div>
              <div className="space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
                <p>
                  Vic didn't set out to build a business. He set out to do the job properly. After spending years working his way through automotive workshops around    learning the trade, developing his diagnostic instincts, and quietly becoming the person colleagues turned to when an engine job got complicated   he realised that the kind of work he wanted to do simply wasn't possible inside a main dealer structure. The targets, the time constraints, the pressure to upsell   none of it left room for the level of care he believed every engine deserved.
                </p>
                <p>
                  It was Land Rovers and Range Rovers that drew him in most. Not because they were fashionable, but because the engines themselves were genuinely complex, often misunderstood, and poorly served by generalist workshops. The TDV6 needed specialist knowledge. The V8 variants demanded attention to tolerances that most garages weren't equipped to assess, let alone correct. Vic saw a genuine need that wasn't being met.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
            <p>
              He opened Vogue Technics in , with a clear idea of what it would be: a workshop that operated at main dealer level but without the main dealer overheads or the main dealer attitude to pricing. The early months were lean. There was no marketing budget, no advertising campaign, no grand opening. The first customers came through word of mouth   people who had been recommended by a friend, or who had already been let down somewhere else and needed someone they could actually trust.
            </p>
            <p>
              That reputation grew steadily, one rebuilt engine at a time. Customers came back. They sent their colleagues, their partners, their parents. By the time Vogue Technics had been running for a few years, the business was operating almost entirely on referrals and returning customers. That's still largely true today. It's not something Vic planned. It's something that happened because the work was good and the people were treated fairly   and that, in his view, is the only kind of growth worth having.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Meet Vic   The Man Behind Vogue Technics</h2>
              <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                <p>
                  Vic has been working on engines for over two decades, specialising in Land Rover's TDV6 and SDV8 units, Jaguar's supercharged V8, and the Ingenium diesel family. He is one of a small number of independent technicians in the South East with the equipment and experience to handle full engine rebuilds on these vehicles.
                </p>
                <p>
                  What sets Vic apart isn't just technical knowledge — it's his approach. He looks beyond symptoms to understand why an engine failed and what it would take to fix it properly. If a vehicle isn't worth the spend, he'll say so. Customers tend to appreciate the honesty.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                <Quote className="h-4 w-4" /> A Word From Vic
              </span>
              <blockquote className="mt-6 text-base leading-relaxed text-slate-100 md:text-lg">
                "We'll tell you exactly what's wrong, what it will cost, and what we're going to do. We'll use the right parts and take the time it takes. If the numbers don't add up for you, we'll say so. That's how we've worked since 2004. Every vehicle that comes through our doors gets the same level of care — whether it's a diagnostic check or a complete engine rebuild. We don't cut corners, and we don't tell people what they want to hear."
              </blockquote>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Vic, Owner & Lead Technician, Vogue Technics
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8">
              <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Mission   What We Stand For</h2>
              <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
              <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
                <p>
                  The mission at Vogue Technics has never changed: carry out every job as if the vehicle belongs to someone you know. That might sound simple, but it has real implications. It means only using OEM-quality or better components   no cheap pattern parts that create new problems while solving old ones.
                </p>
                <p>
                  It means providing a transparent quote before work begins, and sticking to it. It means explaining to a customer exactly what has been done and why, in plain language, without jargon designed to obscure rather than inform.
                </p>
                <p>
                  Vogue Technics isn't chasing volume. There's no incentive here to push unnecessary work, upsell parts that aren't needed, or rush a job to free up a ramp. The business has been built on long-term relationships, and long-term relationships only work if customers feel they were treated well   not just this time, but every time.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                <Wrench className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Workshop   Built for the Job</h2>
              <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
              <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
                <p>
                  Engine work at this level requires the right environment. The Vogue Technics facility in  was put together specifically for Land Rover and Range Rover engine rebuild and repair work   not a general workshop that happens to take on engine jobs, but a space designed around the specific demands of this kind of strip-down, rebuild, and reconditioning work.
                </p>
                <p>
                  The diagnostic equipment includes specialist Land Rover and Jaguar Land Rover diagnostic systems capable of reading the full range of fault codes and live data across every engine variant in the current and recent model range.
                </p>
                <p>
                  The workshop itself is clean and organised in a way that reflects the standards applied to every job. Engine work is precision work. It requires clean components, controlled conditions, and careful handling throughout a rebuild. Customers who visit in person often comment on it   it's not what they expect from an independent garage. That's the point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Accreditations   Why They Matter</h2>
              <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
              <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
                <p>
                  Vogue Technics holds IGA membership, RAC Approved Garage status, and accreditation under the Approved Code of Practice from Trading Standards. These aren't decorative. IGA membership means the business is assessed against professional standards and operates within a framework of accountability that most garages aren't part of.
                </p>
                <p>
                  RAC Approved status means an independent body has audited the workshop   the facilities, the processes, and the customer service   and found them to be up to standard. The Approved Code Trading Standards accreditation provides an additional layer of consumer protection.
                </p>
                <p>
                  Together, these accreditations mean that choosing Vogue Technics comes with accountability built in   not just a verbal promise from a workshop owner, but independently verified standards.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold">Our Customers   Who We Serve</h3>
              <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
              <div className="mt-8 space-y-5 text-slate-300 leading-relaxed">
                <p>
                  Vogue Technics serves Range Rover, Land Rover, Jaguar, Audi, and BMW owners across , Thurrock, Dartford, Romford, Basildon, and into South East London.
                </p>
                <p>
                  Many arrive having just received a main dealer quote that stopped them in their tracks. Others have already spent money at a cheaper garage that diagnosed the problem incorrectly, carried out inadequate repair work, or both.
                </p>
                <p>
                  Customers regularly travel from well beyond the local area because they've been told   by a friend, a colleague, or even another mechanic   that this is where the job gets done properly.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span key={area} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-24 text-center text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
              Get in Touch   No Obligation, No Pressure
            </h2>
            <p className="mt-6 text-base leading-relaxed text-emerald-50 md:text-lg">
              Whether you've received a main dealer quote and want a second opinion, you're not sure what's wrong and need a proper diagnosis, or you simply want to talk to someone who knows these engines inside out   we're here. There's no script and no sales process. Just a conversation with a specialist who will tell you what you actually need to know.
            </p>
            <p className="mt-4 text-base leading-relaxed text-emerald-100 md:text-lg">
              Vogue Technics   . Call us, send an email, or drop in to the workshop. We'll take it from there.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Call 01375 531355
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-primary hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogos />
    </main>
  );
}
