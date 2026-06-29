import type { Metadata } from "next";
import AreasHeroSection from "@/components/areas/AreasHeroSection";
import AreasCoverageGrid from "@/components/areas/AreasCoverageGrid";
import AreasOverviewSection from "@/components/areas/AreasOverviewSection";
import AreasFaqSection from "@/components/areas/AreasFaqSection";
import {
  areaFaqs,
  areasLandingContent,
  coverageAreas,
} from "@/components/areas/areasPageData";
import ReviewsSection from "@/components/common/ReviewsSection";
import ServicesSection from "@/components/common/ServicesSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import WorkshopSection from "@/components/common/WorkshopSection";
import SpecialistsBehindEveryJobSection from "@/components/common/SpecialistsBehindEveryJobSection";
import UkWideServiceSection from "@/components/common/UkWideServiceSection";
import EngineRepairCostSection from "@/components/common/EngineRepairCostSection";
import { areasLandingSections } from "@/components/areas/areasPageData";

export const metadata: Metadata = {
  title: "Areas Covered | Vogue Technics",
  description:
    "Explore the areas covered by Vogue Technics for specialist engine repair, rebuilds, replacements, and collection support across the UK.",
  alternates: {
    canonical: "/areas",
  },
};

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-white">
      <AreasHeroSection
        title={areasLandingContent.hero.title}
        subtitle={areasLandingContent.hero.subtitle}
      />

      <SpecialistsBehindEveryJobSection {...areasLandingSections.specialistsSection} />

      <AreasCoverageGrid
        label={areasLandingContent.coverage.label}
        heading={areasLandingContent.coverage.heading}
        description={areasLandingContent.coverage.description}
        areas={coverageAreas}
      />

      <ReviewsSection
        title={areasLandingContent.reviews.title}
        subtitle={areasLandingContent.reviews.subtitle}
      />

      <ServicesSection
        limit={6}
        sectionClassName="py-20 bg-slate-50 relative overflow-hidden"
      />

      <AreasOverviewSection
        title={areasLandingContent.overview.title}
        paragraphs={areasLandingContent.overview.paragraphs}
      />

      <PartnerLogos />

      <UkWideServiceSection {...areasLandingSections.ukWideServiceSection} />

      <EngineRepairCostSection {...areasLandingSections.engineRepairCostSection} />

      <AreasFaqSection items={areaFaqs} />

      <WorkshopSection />
    </main>
  );
}
