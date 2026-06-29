import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PartnerLogos from "@/components/common/PartnerLogos";
import blogs from "@/data/blogs.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Vogue Technics`,
    description: blog.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

function sanitizeContent(html: string): string {
  return html
    .replace(/<!-- wp:[^>]*-->/g, "")
    .replace(/<!-- \/wp:[^>]*-->/g, "")
    .replace(/<div[^>]*id="blogContent"[^>]*>/g, "")
    .replace(/<div[^>]*class="[^"]*prose[^"]*"[^>]*>/g, "")
    .replace(/<\/div>\s*$/, "")
    .trim();
}

// Remove all <figure> blocks from HTML (we place images manually)
function stripFigures(html: string): string {
  return html.replace(/<figure[\s\S]*?<\/figure>/gi, "");
}

// Resolve 3 images from the image array — repeat first if fewer than 3
function resolveImages(images: string | string[]): [string, string, string] {
  const list = Array.isArray(images) ? images : [images];
  const first = list[0] || "";
  return [first, list[1] || first, list[2] || first];
}

// Split HTML into 3 sections at <h2> boundaries
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
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const clean = sanitizeContent(blog.content);
  const [img1, img2, img3] = resolveImages(blog.image);
  const textOnly = stripFigures(clean);
  const [sec1, sec2, sec3] = splitIntoThree(textOnly);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: blog.title, href: `/blog/${blog.slug}` },
          ]}
        />

        {/* Meta */}
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

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-tight"
          dangerouslySetInnerHTML={{ __html: blog.title }}
        />

        {/* Image 1 */}
        <div className="relative w-full aspect-[16/6] rounded-2xl overflow-hidden shadow-md mb-10">
          <Image src={img1} alt={blog.title} fill className="object-cover" sizes="100vw" priority />
        </div>

        {/* Text 1 */}
        {sec1 && (
          <div className="blog-content mb-10" dangerouslySetInnerHTML={{ __html: sec1 }} />
        )}

        {/* Image 2 */}
        <div className="relative w-full aspect-[16/6] rounded-2xl overflow-hidden shadow-md mb-10">
          <Image src={img2} alt={blog.title} fill className="object-cover" sizes="100vw" />
        </div>

        {/* Text 2 */}
        {sec2 && (
          <div className="blog-content mb-10" dangerouslySetInnerHTML={{ __html: sec2 }} />
        )}

        {/* Image 3 */}
        <div className="relative w-full aspect-[16/6] rounded-2xl overflow-hidden shadow-md mb-10">
          <Image src={img3} alt={blog.title} fill className="object-cover" sizes="100vw" />
        </div>

        {/* Text 3 */}
        {sec3 && (
          <div className="blog-content mb-10" dangerouslySetInnerHTML={{ __html: sec3 }} />
        )}

        {/* Back Link */}
        <div className="mt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:-translate-x-1 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      <PartnerLogos />
    </div>
  );
}
