import LatestVideos from "@/components/common/LatestVideos";
import PartnerLogos from "@/components/common/PartnerLogos";
import { CheckCircle2, Shield, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us | Vogue Technics",
  description: "Learn about Vogue Technics, our 20+ years of experience in the automobile industry, and our dedication to providing premium reconditioned engines.",
};

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2600&auto=format&fit=crop"
            alt="Engine rebuilding facility"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <Breadcrumbs items={[{ name: "About Us", href: "/about-us" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Story</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Pioneers in engine rebuilding, ensuring excellence on the road for over two decades.
          </p>
        </div>
      </div>

      {/* Central Trust Badges */}
      <PartnerLogos />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 mt-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              The Most Trusted Engine Specialist in the UK
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Our success story started 20 years ago when we single-mindedly aimed to become the most reliable and trustworthy name in providing Land Rover and Range Rover new, used and remanufactured engines. We understood that to achieve our aim to become the best we would require a purpose-built state of the art facility that would compliment Land Rover and Range Rover setup. So, we set about to purchase and setup equipment that was especially helpful in fixing and rebuilding the specific brand that we were eyeing from day one.
              </p>
              <p>
                After two decades of hard work and dedication to our craft, Vogue Technics has become one of the most trusted and reliable places to procure and provide fitting of Land Rover and Range Rover new, used and reconditioned engines. Due to our valuable experience in this brand and our investment in the specialist equipment, we are known to provide the best reconditioned engines and are the best fitting facility in United Kingdom. 
              </p>
              <p>
                For the reconditioning process, we have established dismantling, machining, assembling and quality control departments. We replace and fit the engines and compression and run test them for complete peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold text-2xl text-slate-900">10k+</h4>
                <div className="text-sm text-slate-500 font-medium mt-1">Happy Clients</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold text-2xl text-slate-900">20+</h4>
                <div className="text-sm text-slate-500 font-medium mt-1">Years Experience</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold text-2xl text-slate-900">1 Yr</h4>
                <div className="text-sm text-slate-500 font-medium mt-1">Warranty</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5] lg:aspect-square">
              <Image
                src="/images/expert-mechanicss.webp"
                alt="Expert mechanics working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Latest Videos Component added via User Request */}
      <LatestVideos />

    </div>
  );
}
