import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type PopularEngineSizeItem = {
  label: string;
  href: string;
};

type PopularEngineSizesProps = {
  title?: string;
  subtitle?: string;
  items: PopularEngineSizeItem[];
  className?: string;
};

export default function PopularEngineSizes({
  title = "Popular Engine Sizes",
  subtitle,
  items,
  className = "",
}: PopularEngineSizesProps) {
  if (items.length === 0) return null;

  return (
    <section className={`bg-[#f3f3f3] py-10 md:py-12 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-normal text-black">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-center text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="group flex min-h-16 items-center justify-between rounded-md bg-white px-4 py-4 text-primary shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span className="min-w-0 pr-4 text-xl font-bold leading-snug text-primary">
                {item.label}
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
