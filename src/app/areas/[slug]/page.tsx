import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreasDetailHeroSection from "@/components/areas/AreasDetailHeroSection";
import AreasDetailHighlightsSection from "@/components/areas/AreasDetailHighlightsSection";
import AreasDetailCoverageSection from "@/components/areas/AreasDetailCoverageSection";
import AreasDetailMapSection from "@/components/areas/AreasDetailMapSection";
import AreasDetailProcessSection from "@/components/areas/AreasDetailProcessSection";
import AreasDetailVehiclesCoveredSection from "@/components/areas/AreasDetailVehiclesCoveredSection";
import { areaDetails, getAreaBySlug } from "@/components/areas/areasDetailData";
import { coverageAreas } from "@/components/areas/areasPageData";
import SpecialistsBehindEveryJobSection from "@/components/common/SpecialistsBehindEveryJobSection";
import UkWideServiceSection from "@/components/common/UkWideServiceSection";
import EngineRepairCostSection from "@/components/common/EngineRepairCostSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import ServicesSection from "@/components/common/ServicesSection";
import FAQSection from "@/components/common/FAQSection";
import PartnerLogos from "@/components/common/PartnerLogos";
import WorkshopSection from "@/components/common/WorkshopSection";

export const dynamicParams = false;

export async function generateStaticParams() {
  return areaDetails.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return {
      title: "Area Not Found | Vogue Technics",
    };
  }

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `/areas/${slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://www.voguetechnics.co.uk/areas/${slug}`,
      siteName: "Vogue Technics",
      locale: "en_GB",
      type: "website",
    },
  };
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <AreasDetailHeroSection area={area} />

      <SpecialistsBehindEveryJobSection {...area.specialistsSection} />

      <ServicesSection
        limit={6}
        sectionClassName="py-20 bg-slate-50 relative overflow-hidden"
      />

      <UkWideServiceSection {...area.ukWideServiceSection} />

      <EngineRepairCostSection {...area.engineRepairCostSection} />

      <AreasDetailHighlightsSection
        label="Why Choose Us"
        heading={area.whyChooseHeading}
        paragraphs={area.overviewParagraphs}
        highlights={area.whyChoosePoints}
      />

      <AreasDetailCoverageSection
        heading={area.localCoverageHeading}
        paragraphs={area.localCoverageParagraphs}
        localPlaces={area.localPlaces}
        vehicleCoverage={area.vehicleCoverage}
      />

      <AreasDetailVehiclesCoveredSection areaName={area.name} />

      <AreasDetailMapSection
        areaName={area.name}
        areaSlug={area.slug}
        places={area.localPlaces}
        allAreas={coverageAreas}
      />

      <AreasDetailProcessSection
        heading={area.processHeading}
        steps={area.processSteps}
        ctaHeading={area.ctaHeading}
        ctaText={area.ctaText}
      />

      <ReviewsSection
        title={`What Customers Say in ${area.name}`}
        subtitle={`Customers value direct communication, collection support and the way we handle specialist engine work in ${area.name}.`}
      />

      <FAQSection
        title={
          <>
            Frequently Asked Questions for{" "}
            <span className="text-primary italic">{area.name}</span>
          </>
        }
        subtitle={`Answers to common questions about engine repair, rebuilds, replacement work and collection support in ${area.name}.`}
        items={area.faqs}
      />

      <PartnerLogos />
      <WorkshopSection />
    </main>
  );
}
