import { CheckCircle2 } from "lucide-react";

const heroTrustLabels = [
  "Save Up to 40% when you enquire online",
  "Free Expert Technical Advice about your engine problems",
  "Advanced Engine Diagnostics and Fitting Services",
  "Vehicle Recovery service available",
];

type HeroTrustLabelsProps = {
  className?: string;
  align?: "center" | "start";
};

export default function HeroTrustLabels({ className = "", align = "center" }: HeroTrustLabelsProps) {
  const alignment = align === "start" ? "justify-start" : "justify-center";

  return (
    <div className={`flex max-w-5xl flex-wrap gap-2 ${alignment} ${className}`}>
      {heroTrustLabels.map((label) => (
        <div
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-base font-semibold leading-snug text-white shadow-sm backdrop-blur"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
