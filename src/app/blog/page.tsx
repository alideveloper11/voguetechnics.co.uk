// app/blog/page.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import PartnerLogos from "@/components/common/PartnerLogos";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import BlogDataLoader from "@/components/blog/BlogDataLoader";
import BlogSkeleton from "@/components/blog/BlogSkeleton";

export const metadata: Metadata = {
  title: { absolute: "Blog & News | Vogue Technics" },
  description:
    "Read our latest news, updates, and expert advice on Range Rover and Land Rover engine remanufacturing and maintenance.",
  alternates: { canonical: "/blog" },
};

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Blog({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold tracking-wider text-sm mb-4">
            LATEST NEWS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Blog
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Stay updated with the latest news, expert advice, and maintenance
            tips for your Range Rover or Land Rover engine.
          </p>
        </div>

        {/* SUSPENSE BOUNDARY BLOCK WITH SKELETON LOADER */}
        <Suspense key={currentPage} fallback={<BlogSkeleton />}>
          <BlogDataLoader currentPage={currentPage} />
        </Suspense>
      </div>
      <PartnerLogos />
    </div>
  );
}