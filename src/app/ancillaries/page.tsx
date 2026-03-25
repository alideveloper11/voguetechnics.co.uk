import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ancillaries & Car Parts | Vogue Technics",
  description: "Browse our extensive inventory of high-quality ancillaries and car parts including alternators, turbos, gearboxes, and more.",
};

export default function Ancillaries() {
  const parts = [
    "Alternator", "Crankshaft Pulley", "Cylinder Heads", "Exhaust Manifold",
    "Inlet Manifold", "Oil Pump", "Power Steering Pump", "Starter Motor",
    "Torque Converter", "Turbo", "Water Pump", "Flywheel",
    "Timing Belt", "Supercharger", "Gearboxes", "Diesel Injector",
    "EGR Valve", "High Pressure Fuel Pump", "DPF Filter", "Rear Diff",
    "Catalytic Converter", "Head Gasket", "Timing Chain", "NOx Sensor",
    "Transmission"
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold tracking-wider text-sm mb-4">
            PREMIUM AUTO PARTS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Engine Ancillaries & Parts
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We stock a massive variety of fully-tested, guaranteed genuine ancillaries for all major Range Rover, Land Rover, Audi, and BMW models.
          </p>
        </div>

        {/* Grid Section - Updated with Images and Explore Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {parts.map((part, idx) => (
            <Link 
              key={idx} 
              href={`/${part.toLowerCase().replace(/ /g, "-")}`}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative z-10 w-full aspect-[4/3] bg-slate-100 rounded-xl mb-6 flex flex-col items-center justify-center overflow-hidden group-hover:bg-slate-200/50 transition-colors">
                {/* ADD YOUR REAL IMAGES HERE -> <Image src={`/images/parts/${part}.jpg`} alt={part} fill className="object-cover" /> */}
                <span className="text-slate-400 text-xs font-semibold tracking-widest uppercase">Image Space</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                    {part}
                  </h3>
                </div>
                
                <div className="flex items-center text-primary font-medium mt-6 group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* COMPREHENSIVE SEO CONTENT SECTION */}
        <div className="w-full mt-24 space-y-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">Quality Range Rover and Land Rover Parts: <span className="text-primary">Affordable & Reliable</span></h2>
            <p className="text-slate-600 leading-relaxed">
              Find our comprehensive range of ancillaries to provide unbeatable value and great quality for your Land Rover or Range Rover. Whether you want to ensure it brings back the kick in your ride or simply gives you reliability miles ahead, our online store has your model covered from EGR valves to superchargers, all specially designed.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Right here at Vogue Technics, we fully understand the value of having your vehicle keep up its performance without necessarily having to step up. In short, that is where the quality of our parts comes in. Our parts are second to none when it comes to restoring your vehicle to its original performance. Click here to browse the full range of ancillaries and take the first steps in bringing your vehicle back to life.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our quality and level of commitment to customer satisfaction make us the first call for Land Rover and Range Rover ancillaries. Return your car to life - go to checkout now and feel the quality.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900">Our Most Popular Ancillaries:</h3>
            <p className="text-slate-600 mb-6">Here is a list of the most popular ancillaries that we offer:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600">
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">EGR Valve</h4>
                <p className="text-sm leading-relaxed">Keep your engine running smoothly and efficiently with our range of EGR valves, including the Range Rover Evoque EGR Valve and Land Rover Discovery 3 EGR Valve. Perfect for reducing emissions and improving your vehicle’s environmental performance. Order yours today!</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">Supercharger</h4>
                <p className="text-sm leading-relaxed">Boost your engine’s power with a high-quality supercharger. Our selection includes the Range Rover Sport Supercharger, designed to enhance your driving experience. Feel the power with a simple installation that promises remarkable performance enhancements.</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">Turbo</h4>
                <p className="text-sm leading-relaxed">Increase the efficiency and power of your engine with our robust turbochargers. With options like the Range Rover Evoque Turbo and the Land Rover Discovery 3 Turbo, you're sure to find the perfect match to boost your vehicle's performance.</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">Timing Chain</h4>
                <p className="text-sm leading-relaxed">Ensure reliable timing and exceptional engine performance with our durable timing chains. Choose from options such as the Range Rover Evoque Timing Chain and the Land Rover Discovery Sport Timing Chain for your maintenance needs.</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">Gearbox</h4>
                <p className="text-sm leading-relaxed">Experience smoother gear transitions with our high-quality gearboxes, including the Range Rover Evoque Gearbox and the Land Rover Defender Gearbox. Designed for durability, enjoy a seamless drive with our expertly reconditioned gearboxes.</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">Timing Belt</h4>
                <p className="text-sm leading-relaxed">Maintain your engine's synchronicity with our strong timing belts. Options like the Range Rover Evoque Timing Belt and the Land Rover Discovery 3 Timing Belt are available to keep your vehicle in top condition.</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">Alternator</h4>
                <p className="text-sm leading-relaxed">Keep your vehicle’s electrical systems running perfectly with our efficient alternators. Check out the Range Rover Evoque Alternator and the Land Rover Discovery 3 Alternator for dependable power delivery.</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">Starter Motor</h4>
                <p className="text-sm leading-relaxed">Get your engine going without a hitch with our reliable starter motors, including the Range Rover Evoque Starter Motor and the Land Rover Defender Starter Motor. Start your journey with confidence every time.</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">Rear Differential</h4>
                <p className="text-sm leading-relaxed">Optimise your vehicle's handling and stability with our precision-engineered rear differentials. From the Range Rover Evoque Rear Differential to the Land Rover Freelander 2 Rear Differential, enhance your driving experience with us.</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                <h4 className="text-lg font-bold text-slate-800">Catalytic Converter</h4>
                <p className="text-sm leading-relaxed">Reduce exhaust emissions with our effective catalytic converters, such as the Range Rover Evoque Catalytic Converter and the Land Rover Defender Catalytic Converter. Drive clean and green with these essential components.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8 mt-8 border-t border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900">Lowest Price & Hassle-Free Delivery All Over the UK</h3>
            <p className="text-slate-600 leading-relaxed">At Vogue Technics, we offer you very competitive pricing in the market for high-quality Land Rover and Range Rover Ancillaries. Our Competitive pricing ensures that the maintenance service is at your disposal without your bank account feeling a pinch.</p>
            <p className="text-slate-600 leading-relaxed">Enjoy the savings and convenience too. Ancillaries of all types are readily available to browse and purchase from the comfort of your armchair with our easy online ordering process. Wherever in the UK you are, from London to Edinburgh, count on us to provide the best products with the highest service level.</p>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-2xl font-bold text-slate-900">Peace of Mind Warranty</h3>
            <p className="text-slate-600 leading-relaxed">This backs up the quality of these products with comprehensive warranties, giving assurance to you. That is why many of our ancillary range is sold with a solid warranty that protects against defects and malfunctions, therefore shop with confidence because we have got you covered. Vogue Technics Warranty cover ensures your car runs reliably around the clock.</p>
          </div>

          <div className="space-y-6 pt-6 mt-8 bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white relative z-10">Why Choose Us?</h3>
            <p className="text-slate-300 mb-6 relative z-10">Before you choose where to buy your Land Rover and Range Rover ancillaries, consider what makes Vogue Technics stand out:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {[
                "Extensive range of high-quality parts",
                "Competitive pricing across all products",
                "Fast and reliable UK-wide delivery",
                "Comprehensive warranties for all items",
                "Easy and secure online ordering",
                "Expert support from our knowledgeable team",
                "Commitment to environmental sustainability",
                "Proven track record of customer satisfaction"
              ].map((item, i) => (
                <li key={i} className="flex flex-row items-center gap-3 text-slate-100 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0"/> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 text-center pt-12 pb-4">
            <h3 className="text-3xl font-extrabold text-slate-900">Buy Now!</h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 text-lg">
              Ready to get that vehicle of yours polished up with some top-quality Land Rover and Range Rover accessories? Then look no further, because our stocked items, such as key parts like the Land Rover Discovery Sport Timing Chain and the Range Rover Sport Supercharger, are just one click away. Whether you are upkeeping with the old classic or making changes to the new model, it doesn't matter because we have something for everyone.
            </p>
            <Link href="/contact-us" className="inline-block bg-primary hover:bg-emerald-500 text-white font-bold py-4 px-12 rounded-xl shadow-[0_0_20px_rgba(25,135,84,0.4)] transition-all transform hover:-translate-y-1 text-lg">
              Order Your Parts Today
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
