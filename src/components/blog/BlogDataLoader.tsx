// components/blog/BlogDataLoader.tsx
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
} from "lucide-react";
import localBlogs from "@/data/blogs.json";
import { getBlogs } from "@/lib/blogApi";

const PER_PAGE = 18;

type LoaderProps = {
  currentPage: number;
};

function formatDate(dateString?: string): string {
  if (!dateString) return "";
  if (!dateString.includes("T")) return dateString;
  try {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

export default async function BlogDataLoader({ currentPage }: LoaderProps) {
  // Fetch API blogs asynchronously
  const apiBlogs = await getBlogs().catch(() => []);

  // Normalize local blogs structure
  const normalizedLocalBlogs = localBlogs.map((blog) => ({
    id: String(blog.id),
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt,
    content: blog.content,
    image: Array.isArray(blog.image) ? blog.image[0] : blog.image,
    images: Array.isArray(blog.image)
      ? blog.image.map((img, index) => ({ id: index, image: img }))
      : [{ id: 0, image: blog.image }],
    date: blog.date,
    author: blog.author || "Vogue Technics",
  }));

  const combinedBlogs = [...apiBlogs, ...normalizedLocalBlogs];
  const totalPages = Math.ceil(combinedBlogs.length / PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);

  const start = (safePage - 1) * PER_PAGE;
  const pageBlogs = combinedBlogs.slice(start, start + PER_PAGE);

  if (pageBlogs.length === 0) {
    return (
      <p className="text-center text-slate-500 py-10">No articles found.</p>
    );
  }

  return (
    <>
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {pageBlogs.map((blog) => {
          const imageUrl =
            blog.image ||
            (blog.images && blog.images[0]?.image);
          return (
            <article
              key={blog.slug || blog.id}
              className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
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
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="focus:outline-none before:absolute before:inset-0"
                    >
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="flex items-center text-primary font-bold text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform self-start">
                  Read Article <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-16 pb-10">
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

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 2,
            )
            .reduce<(number | "...")[]>((acc, p, idx, arr) => {
              if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("...");
              acc.push(p);
              return acc;
            }, [])
            .map((p, idx) =>
              p === "..." ? (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-2 text-slate-400 select-none"
                >
                  …
                </span>
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
              ),
            )}

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
    </>
  );
}
