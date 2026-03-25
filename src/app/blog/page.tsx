import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import PartnerLogos from "@/components/common/PartnerLogos";

export const metadata: Metadata = {
  title: "Blog & News | Vogue Technics",
  description: "Read our latest news, updates, and expert advice on Range Rover and Land Rover engine remanufacturing and maintenance.",
};

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Why You Should Recondition Your Range Rover Engine",
      excerpt: "Engine reconditioning can save you thousands compared to buying a new one. Here is what you need to know about the process and benefits for your 4x4.",
      date: "Mar 15, 2026",
      author: "Vogue Technics",
      image: "https://images.unsplash.com/photo-1486496146582-9ff1a5bf0114?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Top 5 Common Issues with Land Rover Discovery Engines",
      excerpt: "From timing chain rattle to EGR valve blockages, learn about the most common issues faced by Land Rover Discovery owners so you can catch them early.",
      date: "Feb 28, 2026",
      author: "Vogue Technics",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Understanding Your Vehicle's Diagnostic Fault Codes",
      excerpt: "When the check engine light comes on, it's crucial to understand what your vehicle is trying to tell you. Let's break down the common fault codes.",
      date: "Jan 20, 2026",
      author: "Vogue Technics",
      image: "https://images.unsplash.com/photo-1503375806307-55444ca93cfd?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "How to Maintain Your Turbocharger for Maximum Longevity",
      excerpt: "Turbochargers are vital for modern engine performance. Follow these simple maintenance steps to ensure your turbo lasts the lifetime of your car.",
      date: "Dec 10, 2025",
      author: "Vogue Technics",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Signs It's Time for a Premium Gearbox Replacement",
      excerpt: "Slipping gears, strange noises, and difficulty shifting are all signs of terminal gearbox failure. Here is exactly what you need to look out for.",
      date: "Nov 05, 2025",
      author: "Vogue Technics",
      image: "https://images.unsplash.com/photo-1558235286-90e8d029fcf9?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "The Importance of Using Genuine OEM Land Rover Parts",
      excerpt: "When restoring a premium vehicle like a Range Rover, using cheap aftermarket parts is a false economy. Find out why OEM is the absolute only way to go.",
      date: "Oct 18, 2025",
      author: "Vogue Technics",
      image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        
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
          {blogs.map((blog) => (
            <article key={blog.id} className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group h-full">
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={blog.image}
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
                    <Link href={`/blog#`} className="focus:outline-none before:absolute before:inset-0">
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
          ))}
        </div>

      </div>
      <PartnerLogos />
    </div>
  );
}
