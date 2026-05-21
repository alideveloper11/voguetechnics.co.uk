"use client";

import { Star, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "James Wilson",
    rating: 5,
    text: "Outstanding service! My Range Rover Sport engine was reconditioned perfectly. The team kept me updated throughout the entire process. Highly recommend Vogue Technics.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    rating: 5,
    text: "Fast and professional. I was worried about my engine failure, but they handled it with ease. The pricing was transparent and much better than the dealer.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "David Miller",
    rating: 5,
    text: "Expert mechanics who truly know their Land Rovers. My Discovery 4 is running like new again. Exceptional quality and very friendly staff.",
    date: "3 weeks ago",
  },
];

function ReviewCard({ review, idx }: { review: (typeof reviews)[0]; idx: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="bg-white p-5 rounded-[1.5rem] shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
    >
      <div>
        <div className="flex gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className={`text-slate-700 italic leading-relaxed font-medium text-sm ${expanded ? "" : "line-clamp-2"}`}>
          &ldquo;{review.text}&rdquo;
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-primary text-xs font-bold uppercase tracking-wide hover:underline"
        >
          {expanded ? "View Less" : "View More"}
        </button>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-3">
        <div>
          <h4 className="font-bold text-slate-900 text-base uppercase tracking-tight">{review.name}</h4>
          <p className="text-xs text-slate-400 font-medium">{review.date}</p>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <CheckCircle className="w-3.5 h-3.5" />
          Verified
        </div>
      </div>
    </motion.div>
  );
}

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ReviewsSection({
  title = "What Our Customers Say",
  subtitle = "Hear from our satisfied customers who have experienced our professional engine services.",
}: ReviewsSectionProps) {
  return (
    <section id="reviews" className="pt-24 pb-12 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-6">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter italic">
              {title}
            </h2>
          </div>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 text-lg font-medium leading-relaxed uppercase tracking-wide">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard key={review.id} review={review} idx={idx} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-3 bg-white border-2 border-primary text-primary px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg group"
          >
            View All Testimonials <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
