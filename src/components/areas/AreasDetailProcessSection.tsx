import Link from "next/link";
import { ArrowRight } from "lucide-react";

type AreasDetailProcessSectionProps = {
  heading: string;
  steps: Array<{ title: string; description: string }>;
  ctaHeading: string;
  ctaText: string;
};

export default function AreasDetailProcessSection({
  heading,
  steps,
  ctaHeading,
  ctaText,
}: AreasDetailProcessSectionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-black text-primary">
                {index + 1}
              </div>
              <h3 className="mt-4 text-base font-black tracking-tight text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <h3 className="text-2xl font-black tracking-tight md:text-3xl">
                {ctaHeading}
              </h3>
              <p className="text-sm leading-7 text-slate-300 md:text-base">
                {ctaText}
              </p>
            </div>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-emerald-600"
            >
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
