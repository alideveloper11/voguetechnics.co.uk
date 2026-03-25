import { Play } from "lucide-react";
import Image from "next/image";

export default function LatestVideos() {
  const videos = [
    {
      title: "Vogue Technics Engine Services",
      date: "15 Feb 2026",
      image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Expert Engine Rebuilds",
      date: "14 Feb 2026",
      image: "https://images.unsplash.com/photo-1486496146582-9ff1a5bf0114?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Land Rover & Jaguar Specialists",
      date: "12 Feb 2026",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Premium Component Fitting",
      date: "05 Feb 2026",
      image: "https://images.unsplash.com/photo-1581092334651-ddf7209a6a1e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Behind the Scenes Diagnostics",
      date: "28 Jan 2026",
      image: "https://images.unsplash.com/photo-1558235286-90e8d029fcf9?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Range Rover Engine Testing",
      date: "15 Jan 2026",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D2447] tracking-wider uppercase">LATEST VIDEOS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((vid, idx) => (
            <div key={idx} className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-200 flex flex-col group cursor-pointer">
              {/* Video Thumbnail Area */}
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image 
                  src={vid.image}
                  alt={vid.title} 
                  fill 
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300 group-hover:scale-105"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#198754] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#146c43] transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="p-6 text-center space-y-1.5 pt-8">
                <h3 className="text-slate-800 font-medium text-[15px]">{vid.title}</h3>
                <p className="text-slate-400 text-[13px] font-medium">{vid.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
