"use client";

import { Star, CheckCircle, Quote, MapPin, Calendar, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";

const reviews = [
  {
    id: 1,
    name: "James Wilson",
    rating: 5,
    text: "Outstanding service! My Range Rover Sport engine was reconditioned perfectly. The team kept me updated throughout the entire process. Highly recommend Vogue Technics.",
    date: "2 weeks ago",
    location: "London, UK",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    rating: 5,
    text: "Fast and professional. I was worried about my engine failure, but they handled it with ease. The pricing was transparent and much better than the dealer.",
    date: "1 month ago",
    location: "Essex",
  },
  {
    id: 3,
    name: "David Miller",
    rating: 5,
    text: "Expert mechanics who truly know their Land Rovers. My Discovery 4 is running like new again. Exceptional quality and very friendly staff.",
    date: "3 weeks ago",
    location: "Surrey",
  },
  {
    id: 4,
    name: "Michael Roberts",
    rating: 5,
    text: "Very impressed with the supply and fit service. They picked up my car and returned it with a fully reconditioned engine. 5-star experience.",
    date: "2 months ago",
    location: "Kent",
  },
  {
    id: 5,
    name: "Emma Knight",
    rating: 5,
    text: "Saved me thousands compared to the main dealer quote. The engine is running flawlessly and the warranty gives me total peace of mind.",
    date: "1 week ago",
    location: "Hertfordshire",
  },
  {
    id: 6,
    name: "Robert Hughes",
    rating: 5,
    text: "Vogue Technics are the go-to specialists for Range Rover engines. Their knowledge and professionalism are second to none in the UK.",
    date: "3 months ago",
    location: "Oxfordshire",
  },
  {
    id: 7,
    name: "Chris Bennett",
    rating: 5,
    text: "Highly recommended for any Land Rover owner. They diagnosed the issue quickly and provided a cost-effective rebuild solution.",
    date: "5 days ago",
    location: "Birmingham",
  },
  {
    id: 8,
    name: "Linda Foster",
    rating: 5,
    text: "The team at Vogue Technics is amazing. They explained everything clearly and got my Evoque back on the road in no time.",
    date: "1 month ago",
    location: "Cambridge",
  },
  {
    id: 9,
    name: "Mark Stevens",
    rating: 5,
    text: "Brilliant engine specialists. I've had multiple Range Rovers serviced here over the years and the quality is always top-notch.",
    date: "2 months ago",
    location: "Grays",
  },
  {
    id: 10,
    name: "Thomas Wright",
    rating: 5,
    text: "Professional, reliable, and expert staff. They really care about the quality of their work. Best engine specialist in the country.",
    date: "3 weeks ago",
    location: "Manchester",
  },
  {
    id: 11,
    name: "Sophie Clark",
    rating: 5,
    text: "Excellent communication throughout the rebuild process. The final result exceeded my expectations. Many thanks to the whole team.",
    date: "4 months ago",
    location: "Bristol",
  },
  {
    id: 12,
    name: "Andrew Payne",
    rating: 5,
    text: "If you need a Range Rover engine, this is the place to go. Honest advice and superb technical skill. Highly satisfied customer.",
    date: "2 weeks ago",
    location: "Leeds",
  },
];

export default function ReviewsClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.jpg"
            alt="Customer Testimonials"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Customer Reviews", href: "/reviews" }]} />
          
          <div className="max-w-4xl pt-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary/20 text-emerald-400 font-black tracking-[0.2em] text-xs mb-8 border border-primary/30 uppercase shadow-[0_0_20px_rgba(25,135,84,0.3)]">
              <Award className="w-4 h-4" /> Trusted Specialists
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none uppercase">
              Our <span className="text-primary italic">Customer</span> <br/> Testimonials
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium">
              See what Range Rover and Land Rover owners have to say about our professional engine services and expert craftsmanship.
            </motion.p>

            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-white font-bold tracking-tight">4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[0.65rem] bg-primary/10 px-4 py-2 rounded-xl">
                 <ShieldCheck className="w-4 h-4" /> 100% Genuine Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group relative"
              >
                <div className="absolute top-8 right-10 text-slate-100 group-hover:text-primary/10 transition-colors duration-500">
                  <Quote className="w-16 h-16 fill-current" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 leading-relaxed font-bold text-lg">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-10 mt-auto relative z-10">
                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-xl uppercase tracking-tighter">{review.name}</h4>
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                       <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {review.location}</span>
                       <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {review.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-emerald-600 font-black uppercase tracking-[0.2em] text-[0.6rem]">
                    <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                       <CheckCircle className="w-5 h-5" />
                    </div>
                    Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CALL TO ACTION */}
          <div className="mt-24 text-center">
            <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">Experience Our <br/><span className="text-primary underline underline-offset-[12px] decoration-white/20">Elite Service</span></h2>
                 <p className="text-slate-300 text-lg md:text-xl font-medium tracking-tight">Ready to get your vehicle back on the road? Join our list of satisfied customers today.</p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact-us" className="bg-primary hover:bg-emerald-600 text-white font-black py-5 px-12 rounded-[2rem] shadow-xl transition-all transform hover:-translate-y-2 uppercase tracking-widest flex items-center justify-center gap-3 group">
                       Book An Appointment <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <a href="tel:01375531355" className="bg-white text-slate-900 font-black py-5 px-12 rounded-[2rem] shadow-xl transition-all transform hover:-translate-y-2 uppercase tracking-widest flex items-center justify-center gap-3">
                       01375 531355
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
