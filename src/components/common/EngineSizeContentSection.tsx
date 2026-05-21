export type EngineSizeContentBlock = {
  heading: string;
  kicker?: string;
  paragraphs: string[];
};

type EngineSizeContentSectionProps = {
  blocks?: EngineSizeContentBlock[];
};

export default function EngineSizeContentSection({ blocks = [] }: EngineSizeContentSectionProps) {
  if (blocks.length === 0) return null;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-10">
          {blocks.map((block) => (
            <article key={block.heading} className="border-l-4 border-primary bg-slate-50 px-5 py-6 md:px-8 md:py-7">
              {block.kicker ? (
                <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-primary">{block.kicker}</p>
              ) : null}
              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">{block.heading}</h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700 md:text-base">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
