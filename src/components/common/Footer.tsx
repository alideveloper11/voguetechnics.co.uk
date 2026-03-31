import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto z-10 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src="/images/logo.png" alt="Vogue Technics" className="h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-slate-400 mt-4 max-w-sm">
              Experience the Vogue Technics difference with top-quality reconditioned and used Range Rover engines. Our expert service will get your vehicle back on the road.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-primary transition-colors block">About Us</Link>
              </li>
              <li>
                <Link href="/ancillaries" className="hover:text-primary transition-colors block">Ancillaries</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors block">Gallery</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors block">Blog</Link>
              </li>
              <li>
                <Link href="/areas-we-cover" className="hover:text-primary transition-colors block">Areas We Cover</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary transition-colors block">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Specialities</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/range-rover-engines" className="hover:text-primary transition-colors block">Range Rover Engines</Link>
              </li>
              <li>
                <Link href="/audi-engines" className="hover:text-primary transition-colors block">Audi Engines</Link>
              </li>
              <li>
                <Link href="/bmw-engines" className="hover:text-primary transition-colors block">BMW Engines</Link>
              </li>
              <li>
                <Link href="/jaguar-engines" className="hover:text-primary transition-colors block">Jaguar Engines</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/head-gasket-replacement" className="hover:text-primary transition-colors block">Head Gasket Replacement</Link></li>
              <li><Link href="/services/timing-chain-replacement" className="hover:text-primary transition-colors block">Timing Chain Replacement</Link></li>
              <li><Link href="/services/turbo-replacement" className="hover:text-primary transition-colors block">Turbo Replacement</Link></li>
              <li><Link href="/services/engine-repair" className="hover:text-primary transition-colors block">Engine Repair</Link></li>
              <li><Link href="/services/engine-replacement" className="hover:text-primary transition-colors block">Engine Replacement</Link></li>
              <li><Link href="/services/engine-swap" className="hover:text-primary transition-colors block">Engine Swap</Link></li>
              <li><Link href="/services/engine-rebuild" className="hover:text-primary transition-colors block">Engine Rebuild</Link></li>
              <li><Link href="/services/timing-belt-replacement" className="hover:text-primary transition-colors block">Timing Belt Replacement</Link></li>
              <li><Link href="/services/engine-health-check" className="hover:text-primary transition-colors block">Engine Health Check</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400">
                <MapPin className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span>UNIT 1D Hedley Avenue, Grays,<br/>Essex RM20 4EL</span>
              </li>
              <li>
                <a href="tel:01375 531355" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 shrink-0 text-primary" />
                  01375 531355
                </a>
              </li>
              <li>
                <a href="mailto:info@voguetechnics.co.uk" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 shrink-0 text-primary" />
                  info@voguetechnics.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Vogue Technics. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
