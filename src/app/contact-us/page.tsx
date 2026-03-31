import { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us | Vogue Technics",
  description: "Get in touch with Vogue Technics for engine repair, replacements, or inquiries. Call us at 01375 531355 or visit our workshop in Grays, Essex.",
};

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs items={[{ name: "Contact Us", href: "/contact-us" }]} />
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Need an engine replacement, have a question about our stock, or require expert diagnostics? Our team is ready to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</div>
                    <a href="tel:01375531355" className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">01375 531355</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:info@voguetechnics.co.uk" className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">info@voguetechnics.co.uk</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</div>
                    <div className="text-lg font-medium text-slate-900">UNIT 1D Hedley Avenue, Grays,<br />Essex RM20 4EL</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Working Hours</div>
                    <div className="text-lg font-medium text-slate-900">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 2:00 PM (only for booking)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
