"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import HeroTrustLabels from "@/components/common/HeroTrustLabels";
import RegSearch from "@/components/common/RegSearch";
import type { AreaDetail } from "@/components/areas/areasDetailData";

type AreasDetailHeroSectionProps = {
  area: Pick<AreaDetail, "slug" | "name" | "heroSubtitle">;
};

export default function AreasDetailHeroSection({ area }: AreasDetailHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/car_bgg.webp"
          alt={area.name}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Areas Covered", href: "/areas" },
            { name: area.name, href: `/areas/${area.slug}` },
          ]}
        />

        <div className="mx-auto max-w-5xl pt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-white/80 backdrop-blur">
            <MapPin className="h-4 w-4 text-primary" />
            Local Coverage
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight text-white md:text-6xl">
            {area.name} Engine Support
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/85 md:text-lg">
            {area.heroSubtitle}
          </p>

          <div className="mt-8 flex justify-center">
            <RegSearch />
          </div>

          <HeroTrustLabels className="mt-5" />

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-colors hover:bg-emerald-600"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:01375531355"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black uppercase tracking-widest text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <Phone className="h-4 w-4" />
              Call 01375 531355
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
