type FeatureItem = {
  title: string;
  description: string;
};

const defaultFeatures: FeatureItem[] = [
  {
    title: "Specialist Diagnosis First",
    description:
      "We identify the exact Land Rover engine code, failure pattern and repair route before recommending rebuild or replacement.",
  },
  {
    title: "Supply, Fit or Rebuild",
    description:
      "Choose a used unit, reconditioned engine, targeted repair, or full measured rebuild depending on condition and budget.",
  },
  {
    title: "Written Warranty",
    description:
      "Major engine work is backed by clear written warranty terms and itemised pricing before work starts.",
  },
];

type FeatureCardsProps = {
  features?: FeatureItem[];
  className?: string;
};

export default function FeatureCards({
  features = defaultFeatures,
  className = "py-16 md:py-20 bg-white",
}: FeatureCardsProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
