import { audiEngineSizesModels } from "@/data/audiModelsData";
import type { ServiceItem } from "@/components/common/EngineServicesGrid";
import type { TestimonialItem } from "@/components/common/TestimonialsSection";

export interface AudiEngineData {
  slug: string;
  h1: string;
  metaTitle?: string;
  metaDescription?: string;
  whyAudiHeading?: string;
  keyBenefits?: { title: string; paragraphs: string[] }[];
  servicesHeading?: string;
  services?: ServiceItem[];
  trustData?: { title: string; paragraphs: string[] };
  precisionEngineSectionData?: {
    heading: string;
    intro: string;
    steps: string[];
    imageAlt?: string;
  };
  testimonials?: TestimonialItem[];
  faqs: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
}

export function getAudiEngineDataBySlug(slug: string): AudiEngineData | null {
  const data =
    audiEngineSizesModels[slug as keyof typeof audiEngineSizesModels];
  return data ? (data as unknown as AudiEngineData) : null;
}
