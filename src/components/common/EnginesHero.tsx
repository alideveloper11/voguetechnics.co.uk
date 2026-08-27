import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
// import Breadcrumbs from "@/components/Breadcrumbs";

interface EngineHeroProps {
  h1?: string;
  slug?: string;
}

export default function EngineHero({ h1, slug }: EngineHeroProps) {
  return (
    <div className="bg-slate-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#146c43]/20">
        <Image
          src="/images/car_bgg.webp"
          alt={h1 ?? "Engine specialist"}
          fill
          className="object-cover opacity-65 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent" />
      </div>
      <div className="container mx-auto relative z-10 max-w-4xl text-center">
        <Breadcrumbs
          items={[
            { name: "Audi Engines", href: "/audi-engines" },
            { name: h1 ?? "", href: `/${slug}` },
          ]}
        />
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          {h1}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:01375 531355"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(25,135,84,0.4)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" /> Call: 01375 531355
          </a>
          <Link
            href="/contact-us"
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/20 transition-all w-full sm:w-auto justify-center flex items-center"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}