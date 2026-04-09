"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What engine models do you specialize in?",
    answer: "We specialize in Range Rover, Land Rover, Audi, BMW, and Jaguar engines. Our expertise covers both petrol and diesel variants, ranging from classic models to the latest high-performance engines.",
  },
  {
    question: "How long does a typical engine reconditioning take?",
    answer: "Most engine reconditioning and fitting projects take between 7 to 14 working days. This timeline allows for a thorough teardown, precision machining, high-quality part replacement, and rigorous testing.",
  },
  {
    question: "Do you offer a warranty on your reconditioned engines?",
    answer: "Yes, all of our reconditioned engines come with a comprehensive 6-month warranty, giving you total peace of mind.",
  },
  {
    question: "Can you supply and fit the engine at my location?",
    answer: "While we perform major installations at our specialized workshop in Grays, we offer nationwide collection and delivery services to make the process as seamless as possible for you.",
  },
  {
    question: "What is the difference between a used and reconditioned engine?",
    answer: "A used engine is a pre-owned unit that has been tested for performance. A reconditioned engine is completely disassembled, cleaned, and rebuilt with new or restored components to meet like-new standards.",
  },
  {
    question: "Do you use genuine OEM parts for engine rebuilds?",
    answer: "Absolutely. We pride ourselves on using only genuine OEM or high-quality certified parts for all our engine rebuilds and repairs to maintain the integrity of your vehicle.",
  },
  {
    question: "What payment methods do you accept for services?",
    answer: "We accept various payment methods including bank transfer, credit and debit cards, and secure online payments. Contact our team to discuss the most convenient option for you.",
  },
  {
    question: "Are your replacement engines tested before they are fitted?",
    answer: "Yes, every engine undergoes a series of rigorous tests, including compression and oil pressure checks, to ensure it meets our elite performance and reliability standards.",
  },
  {
    question: "Can I use my own mechanic for the installation?",
    answer: "Yes, we can supply the reconditioned engine directly to your chosen location if you prefer to use your own mechanic for the installation.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQItemProps[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border border-slate-100 rounded-[2rem] mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        onClick={onClick}
        className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group"
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
            <HelpCircle className="w-5 h-5" />
          </div>
          <span className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors pr-4">{question}</span>
        </div>
        <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : 'rotate-0'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-8 pb-8 text-slate-600 leading-relaxed text-base md:pl-20">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection({ items, title, subtitle }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayFaqs = items || faqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-12 pb-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none italic">
            {title || (
              <>Frequently <span className="text-primary italic italic">Asked Questions</span></>
            )}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 font-bold text-base md:text-lg italic">
            {subtitle || "Find expert answers to common questions about our engine reconditioning and fitting services."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {displayFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
