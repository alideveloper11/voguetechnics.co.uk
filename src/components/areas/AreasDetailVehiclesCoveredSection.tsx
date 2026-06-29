import Link from "next/link";
import { ChevronRight } from "lucide-react";

type AreasDetailVehiclesCoveredSectionProps = {
  areaName: string;
  label?: string;
  heading?: string;
};

export default function AreasDetailVehiclesCoveredSection({
  areaName,
  label = "Specialisms",
  heading = "Vehicles We Cover",
}: AreasDetailVehiclesCoveredSectionProps) {
  const vehicles = [
    {
      title: "Range Rover",
      href: "/range-rover-engines",
      description: `Range Rover Vogue, Sport, Evoque and Velar are among the most common vehicles we support for customers in ${areaName}. We carry out diagnosis-led engine rebuilds, replacements and repair work across the diesel and petrol platforms fitted to these models.`,
    },
    {
      title: "Land Rover",
      href: "/land-rover-engines",
      description: `Discovery, Discovery Sport, Freelander and Defender models are regular workshop jobs for our team. From TDV6 failures to timing chain issues and complete engine replacement work, we support Land Rover owners in ${areaName} with specialist engine solutions.`,
    },
    {
      title: "Jaguar",
      href: "/jaguar-engines",
      description: `XF, XE, XJ, XK, F-Pace and E-Pace models all come through our workshop for engine repair and rebuild work. We handle common Jaguar diesel and petrol engine faults with the same specialist approach used across all major engine jobs.`,
    },
    {
      title: "Audi",
      href: "/audi-engines",
      description: `We also support Audi owners in ${areaName} with engine repair, rebuild and replacement work across popular A, Q and performance model ranges. When an Audi engine fault needs more than a general garage approach, we can advise on the right next step.`,
    },
    {
      title: "BMW",
      href: "/bmw-engines",
      description: `BMW engine work includes diagnosis, repair and replacement support across saloon, coupe, estate and SUV models. From timing chain faults to full engine replacement projects, we provide workshop-backed BMW support for customers in ${areaName}.`,
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-4 py-20"
      style={{
        backgroundImage: "url('/images/offers.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="container relative z-10 mx-auto px-0 lg:px-0">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {label}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">{heading}</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="flex w-full flex-col rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="flex-1">
                <h3 className="mb-4 text-lg font-bold text-white">{vehicle.title}</h3>
                <p className="text-sm leading-relaxed text-gray-200">
                  {vehicle.description}
                </p>
              </div>

              <Link
                href={vehicle.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#8FF0B9] transition hover:text-white"
              >
                View Detail
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
