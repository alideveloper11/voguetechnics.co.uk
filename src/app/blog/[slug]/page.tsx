import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PartnerLogos from "@/components/common/PartnerLogos";
import localBlogs from "@/data/blogs.json";
import { fetchBlog, getBlogs } from "@/lib/blogApi";
import ContactForm from "@/components/forms/ContactForm"; // Adjust path to where your ContactForm component lives

import styles from "./blogDetail.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const apiBlogs = await getBlogs().catch(() => []);
  const localPaths = localBlogs.map((blog) => ({ slug: blog.slug }));
  const apiPaths = apiBlogs.map((blog) => ({ slug: blog.slug }));
  return [...apiPaths, ...localPaths];
}

async function getSingleBlog(slug: string) {
  let blog = await fetchBlog(slug).catch(() => null);

  if (!blog) {
    const localMatch = localBlogs.find((b) => b.slug === slug);
    if (localMatch) {
      const imagesArray = Array.isArray(localMatch.image)
        ? localMatch.image.map((img, i) => ({ id: i, image: img }))
        : [{ id: 0, image: localMatch.image || "" }];

      blog = {
        id: String(localMatch.id),
        slug: localMatch.slug,
        title: localMatch.title,
        excerpt: localMatch.excerpt,
        content: localMatch.content,
        image: imagesArray[0]?.image || "",
        images: imagesArray,
        date: localMatch.date,
        author: localMatch.author || "Vogue Technics",
      };
    }
  }
  return blog;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Vogue Technics`,
    description: blog.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

function sanitizeContent(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<div[^>]*id="blogContent"[^>]*>/g, "")
    .replace(/<div[^>]*class="[^"]*prose[^"]*"[^>]*>/g, "")
    .replace(/<\/div>\s*$/, "")
    .trim();
}

function stripFigures(html: string): string {
  return html.replace(/<figure[\s\S]*?<\/figure>/gi, "");
}

function splitIntoThree(html: string): [string, string, string] {
  const parts = html.split(/(?=<h2\b)/i).filter((s) => s.trim());
  const total = parts.length;

  if (total === 0) return ["", "", ""];
  if (total === 1) return [parts[0], "", ""];
  if (total === 2) return [parts[0], parts[1], ""];

  const a = Math.ceil(total / 3);
  const b = Math.ceil((2 * total) / 3);

  return [
    parts.slice(0, a).join(""),
    parts.slice(a, b).join(""),
    parts.slice(b).join(""),
  ];
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) notFound();

  const clean = sanitizeContent(blog.content || "");
  const textOnly = stripFigures(clean);
  const [sec1, sec2, sec3] = splitIntoThree(textOnly);

  const bannerImage = blog.image || blog.images?.[0]?.image || "";
  const extraImages = blog.images?.slice(1) || [];

  return (
    <div className="pt-32 pb-15 bg-slate-50 min-h-screen ">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl mb-9">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: blog.title, href: `/blog/${blog.slug}` },
          ]}
        />

        {/* BACK LINK */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:-translate-x-1 transition-transform mb-8 mt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* 2-COLUMN GRID LAYOUT */}
        <div className="flex flex-col lg:grid lg:grid-cols-[8fr_4fr] gap-8 items-start">
          {/* LEFT COLUMN: MAIN CONTENT */}
          <div className="min-w-0 w-full">
            {/* Meta details */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                {blog.date?.includes("T")
                  ? new Date(blog.date).toLocaleDateString("en-GB")
                  : blog.date}
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" />
                {blog.author}
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight"
              dangerouslySetInnerHTML={{ __html: blog.title }}
            />

            {/* Cover Hero Image */}
            {bannerImage && (
              <div className="w-full rounded-2xl overflow-hidden shadow-sm mb-10 border border-slate-200 bg-white">
                <Image
                  src={bannerImage}
                  alt={blog.title}
                  width={1200}
                  height={650}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            )}

            {/* Section Segment 1 */}
            {sec1 && (
              <div
                className={`${styles.blogContent} mb-10`}
                dangerouslySetInnerHTML={{ __html: sec1 }}
              />
            )}

            {/* Section Segment 2 */}
            {sec2 && (
              <div
                className={`${styles.blogContent} mb-10`}
                dangerouslySetInnerHTML={{ __html: sec2 }}
              />
            )}

            {/* Section Segment 3 */}
            {sec3 && (
              <div
                className={`${styles.blogContent} mb-10`}
                dangerouslySetInnerHTML={{ __html: sec3 }}
              />
            )}

            {/* DYNAMIC EXTRA IMAGES GALLERY */}
            {extraImages.length > 0 && (
              <section className="mt-16 grid gap-6 sm:grid-cols-2 border-t border-slate-200 pt-10">
                {extraImages.map((img, i) => (
                  <div
                    key={img.id ?? i}
                    className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white"
                  >
                    <Image
                      src={img.image}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                ))}
              </section>
            )}
          </div>

          <aside className="w-full lg:h-full">
            <div className="lg:sticky lg:top-32 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto scrollbar-none">
              {/* Explicitly passing variant="sidebar" maps the layout context here perfectly */}
              <ContactForm variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
      <PartnerLogos />
    </div>
  );
}
