import Image from "next/image";
import Link from "next/link";

type AreasOverviewSectionProps = {
  title: string;
  paragraphs: string[];
};

export default function AreasOverviewSection({
  title,
  paragraphs,
}: AreasOverviewSectionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <Image
            src="/images/expert-mechanicss.webp"
            alt="Vogue Technics workshop support across the UK"
            fill
            className="object-contain object-center p-4"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
            Why Customers Choose Us
          </p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h2>
          <div className="space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-slate-600 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-6 py-3.5 text-sm font-black uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-slate-800"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
