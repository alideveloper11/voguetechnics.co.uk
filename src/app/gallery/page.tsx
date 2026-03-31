import { Metadata } from "next";
import Image from "next/image";
import LatestVideos from "@/components/common/LatestVideos";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Gallery | Vogue Technics",
  description: "Explore our state-of-the-art facility, expertly remanufactured engines, and behind-the-scenes precision engineering at Vogue Technics.",
};

export default function Gallery() {
  const images = [
    { src: "/images/gallery/1g.webp", alt: "Vogue Technics Facility" },
    { src: "/images/gallery/2g.webp", alt: "Vogue Technics Engine Rebuild" },
    { src: "/images/gallery/3g.webp", alt: "Land Rover Diagnostics" },
    { src: "/images/gallery/4g.webp", alt: "Range Rover Workshop" },
    { src: "/images/gallery/5g.webp", alt: "Premium Engine Components" },
    { src: "/images/gallery/6g.webp", alt: "Vogue Technics Mechanics" },
    { src: "/images/gallery/7g.webp", alt: "Reconditioned Engine Bay" },
    { src: "/images/gallery/8g.webp", alt: "Specialist Tools In Use" },
    { src: "/images/gallery/9g.webp", alt: "Range Rover Service Center" },
    { src: "/images/gallery/10g.webp", alt: "Vogue Technics Operations" },
    { src: "/images/gallery/11g.webp", alt: "Quality Assurance Testing" },
    { src: "/images/gallery/12g.webp", alt: "Land Rover Engine Remanufacturing" },
    { src: "/images/gallery/13g.webp", alt: "Workshop Precision Setup" },
    { src: "/images/gallery/14g.webp", alt: "Range Rover Rebuilt Parts" },
    { src: "/images/gallery/15g.webp", alt: "Precision Machining" },
    { src: "/images/gallery/16g.webp", alt: "Professional Diagnostic Bay" },
    { src: "/images/gallery/17g.webp", alt: "Vogue Technics Engineering" },
    { src: "/images/gallery/18g.webp", alt: "UK Range Rover Specialists" },
  ];

  return (
    <div className="bg-white flex flex-col">
      <div className="pt-32 pb-24 bg-slate-50 flex-1">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />
        
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold tracking-wider text-sm mb-4">
            OUR FACILITY
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Workshop & Gallery
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Take a look inside our state-of-the-art facility where we bring luxury vehicle engines back to life with unparalleled precision.
          </p>
        </div>

        {/* Masonry/Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 ${
                idx === 2 || idx === 5 ? "md:col-span-2 lg:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg tracking-wide">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Latest Videos Component added via User Request */}
      <LatestVideos />

    </div>
  );
}
