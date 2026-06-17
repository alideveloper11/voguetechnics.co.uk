 "use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const videoUrls = [
  {
    url: "https://www.youtube.com/shorts/cJtu6-QfIfI",
    title: "Vogue Technics Range I Rover Engine Specialist I Customer Review",
  },
  {
    url: "https://www.youtube.com/shorts/gla68Gui2fk",
    title: "Range Rover Timing Chain Fix I Vogue Technics I Happy Client",
  },
  {
    url: "https://www.youtube.com/watch?v=_KVRBkHdyEo",
    title: "Vogue Technics - Land Rover Specialist - Engine Specialist",
  },
  {
    url: "https://www.youtube.com/watch?v=EVTmrDVDrRQ",
    title: "Another Positive Review from a Customer for Range Rover Engine Rebuild Service | Vogue Technics",
  },
  {
    url: "https://www.youtube.com/shorts/GEIvh7n-twU",
    title: "They Deliver Top-Notch Engines Rebuild & Care | Positive Review | Vogue Technics",
  },
  {
    url: "https://www.youtube.com/shorts/EgK7YVxxVR8",
    title: "Another Recommendation From a Customer for Replacing Range Rover Engine | Vogue Technics",
  },
];

function getYoutubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/shorts/")) {
        return parsed.pathname.split("/")[2] ?? "";
      }

      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v") ?? "";
      }
    }

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }
  } catch {
    return "";
  }

  return "";
}

export default function LatestVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = videoUrls
    .map((video) => {
      const id = getYoutubeVideoId(video.url);

      if (!id) return null;

      return {
        id,
        url: video.url,
        title: video.title,
        embedUrl: `https://www.youtube.com/embed/${id}`,
        thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      };
    })
    .filter((video): video is NonNullable<typeof video> => Boolean(video));

  return (
    <section className="border-t border-slate-100 bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-[#0D2447] md:text-3xl">
            Latest Videos
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group flex flex-col overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-slate-900">
                {activeVideo === video.id ? (
                  <iframe
                    src={`${video.embedUrl}?autoplay=1&rel=0`}
                    title={video.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video.id)}
                    className="relative h-full w-full"
                    aria-label={`Play ${video.title}`}
                  >
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      unoptimized
                      className="object-cover opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-slate-900/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#198754] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#146c43]">
                        <Play className="ml-0.5 h-5 w-5 text-white" fill="currentColor" />
                      </span>
                    </div>
                  </button>
                )}
              </div>
              <div className="space-y-1.5 px-4 py-5 text-center">
                <p className="!m-0 line-clamp-2 text-[14px] font-bold leading-[1.2] text-slate-800">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
