import Reveal from "@/components/common/Reveal";

type Highlight = {
  title: string;
  description: string;
};

type AreasDetailHighlightsSectionProps = {
  label: string;
  heading: string;
  paragraphs: string[];
  highlights: Highlight[];
};

export default function AreasDetailHighlightsSection({
  label,
  heading,
  paragraphs,
  highlights,
}: AreasDetailHighlightsSectionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
            {label}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="mx-auto mt-6 max-w-4xl space-y-4 text-center">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-7 text-slate-600 md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((highlight, index) => (
            <Reveal
              key={highlight.title}
              distance={16}
              duration={0.35}
              delay={index * 0.08}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <h3 className="text-base font-black tracking-tight text-slate-900">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {highlight.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
