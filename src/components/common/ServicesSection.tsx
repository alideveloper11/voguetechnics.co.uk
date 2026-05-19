"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/servicesData";
import React from 'react';

interface ServicesSectionProps {
  limit?: number;
  showTitle?: boolean;
  sectionClassName?: string;
}

export default function ServicesSection({ limit, showTitle = true, sectionClassName }: ServicesSectionProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className={sectionClassName ?? "py-20 bg-white relative overflow-hidden"}>
      <div className="container mx-auto px-4 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight italic leading-none"
            >
              Our Specialist <span className="text-primary italic">Services</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 96 }}
              viewport={{ once: true }}
              className="h-1 bg-primary mx-auto rounded-full mb-8"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg font-medium"
            >
              Vogue Technics provides a full suite of engine specialty services to keep your vehicle in peak condition.
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedServices.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-slate-50 border border-slate-100 rounded-[1.5rem] hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Service Image */}
              {service.image && (
                <div className="relative w-full h-48 shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                {/* Service Icon Container */}
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors uppercase tracking-tight italic">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors mb-3 line-clamp-3">{service.shortDescription}</p>
                </div>

                {/* Action Button */}
                <div className="relative z-10 pt-2 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all"
                  >
                    Explore Details <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="p-2 rounded-full bg-slate-200/50 group-hover:bg-primary/10 group-hover:translate-x-2 transition-all">
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                  </div>
                </div>

                {/* Background Accent */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100 blur-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/services" 
                className="inline-flex items-center gap-3 bg-white border-2 border-primary text-primary px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all shadow-lg hover:-translate-y-1 active:scale-95 group"
              >
                <span>View All 9 Specialist Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
