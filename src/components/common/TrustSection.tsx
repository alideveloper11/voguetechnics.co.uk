import Link from "next/link";

interface TrustSectionProps {
  title?: string | undefined;
  paragraphs: string[] | undefined;
}

export default function TrustSection({
  title = "Trusted by Customers Across the UK",
  paragraphs,
}: TrustSectionProps) {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-full mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Dynamic Paragraphs */}
        <div className="max-w-full mx-auto text-slate-600 text-[1.05rem] leading-relaxed space-y-6">
          {paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>

        {/* Static Call to Action Buttons */}
        <div className="max-w-full mx-auto mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:01375531355"
            className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-dark transition-colors shadow-md transform hover:scale-[1.02]"
          >
            Call 01375 531355
          </a>
          <Link
            href="/get-quote"
            className="inline-flex items-center justify-center bg-white border-2 border-primary text-primary font-bold py-3 px-8 rounded-xl hover:bg-primary hover:text-white transition-colors shadow-sm transform hover:scale-[1.02]"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
