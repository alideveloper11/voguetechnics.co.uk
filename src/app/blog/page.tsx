import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import blogs from "@/data/blogs.json";

const PER_PAGE = 18;

export const metadata: Metadata = {
  title: "Blog & News | Vogue Technics",
  description: "Read our latest news, updates, and expert advice on Range Rover and Land Rover engine remanufacturing and maintenance.",
};

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Blog({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  const totalPages = Math.ceil(blogs.length / PER_PAGE);
  const safePage = Math.min(currentPage, totalPages);

  const start = (safePage - 1) * PER_PAGE;
  const pageBlogs = blogs.slice(start, start + PER_PAGE);

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
            Stay updated with the latest news, expert advice, and maintenance tips for your Range Rover or Land Rover engine.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pageBlogs.map((blog) => {
            const imageUrl = (Array.isArray(blog.image) ? blog.image[0] : blog.image) || "https://images.unsplash.com/photo-1486496146582-9ff1a5bf0114?q=80&w=800&auto=format&fit=crop";
            return (
              <article key={blog.id} className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group h-full">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-primary" />
                        {blog.author}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                      <Link href={`/blog/${blog.slug}`} className="focus:outline-none before:absolute before:inset-0">
                        {blog.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 line-clamp-3 leading-relaxed mb-6">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform self-start">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16 pb-3">
            {/* Prev */}
            <Link
              href={safePage > 1 ? `/blog?page=${safePage - 1}` : "#"}
              aria-disabled={safePage === 1}
              className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                safePage === 1
                  ? "border-slate-200 text-slate-300 pointer-events-none"
                  : "border-slate-300 text-slate-600 hover:border-primary hover:text-primary"
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </Link>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 2)
              .reduce<(number | "...")[]>((acc, p, idx, arr) => {
                if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("...");
                acc.push(p);
                return acc;
              }, [])
              .map((p, idx) =>
                p === "..." ? (
                  <span key={`ellipsis-${idx}`} className="px-2 text-slate-400 select-none">…</span>
                ) : (
                  <Link
                    key={p}
                    href={`/blog?page=${p}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all border ${
                      p === safePage
                        ? "bg-primary text-white border-primary"
                        : "border-slate-300 text-slate-600 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {p}
                  </Link>
                )
              )}

            {/* Next */}
            <Link
              href={safePage < totalPages ? `/blog?page=${safePage + 1}` : "#"}
              aria-disabled={safePage === totalPages}
              className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                safePage === totalPages
                  ? "border-slate-200 text-slate-300 pointer-events-none"
                  : "border-slate-300 text-slate-600 hover:border-primary hover:text-primary"
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
      <PartnerLogos />
    </div>
  );
}
