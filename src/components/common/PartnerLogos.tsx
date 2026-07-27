import Image from "next/image";

export default function PartnerLogos() {
  return (
    <div className="w-full bg-white py-10 border-t border-b border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-12 max-w-6xl mx-auto opacity-90">
          <Image
            src="/images/partnerlogo/BIG-Awards-1.webp"
            alt="IGA Independent Garage Association"
            width={513}
            height={203}
            className="h-[75px] md:h-[90px] w-auto object-contain hover:scale-105 transition-transform"
          />
          <Image
            src="/images/partnerlogo/logo-Approved-Code.webp"
            alt="CTSI Approved Code"
            width={444}
            height={228}
            className="h-20 md:h-[105px] w-auto object-contain hover:scale-105 transition-transform"
          />
          <Image
            src="/images/partnerlogo/RAC-approved-garage.webp"
            alt="RAC Approved Garage"
            width={431}
            height={203}
            className="h-14 md:h-[70px] w-auto object-contain hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}
