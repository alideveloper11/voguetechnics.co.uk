import { services } from "@/data/servicesData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: "Service Not Found" };
    
    return {
      title: `${service.title} | Specialist Engine Repair | Vogue Technics`,
      description: service.shortDescription,
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter(s => s.slug !== slug).slice(0, 4);

  return <ServiceDetailClient service={service} relatedServices={relatedServices} />;
}
