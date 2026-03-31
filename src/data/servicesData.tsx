import { Settings, Zap, Wrench, RefreshCw, Layers, ShieldCheck, Activity, Gauge } from "lucide-react";
import React from "react";

export interface Service {
  title: string;
  slug: string;
  icon: React.ReactNode;
  shortDescription: string;
  longDescription: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    icon: <ShieldCheck className="w-6 h-6" />,
    shortDescription: "Expert repair of engine head gaskets to prevent overheating and power loss.",
    longDescription: "Our specialized head gasket replacement service ensures your engine's integrity. We use high-grade gaskets and precision tools to seal your engine, preventing leaks and maintaining optimal compression.",
    features: ["Pressure testing", "Precision surfacing", "Premium gaskets", "Full engine diagnostic"]
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    icon: <Activity className="w-6 h-6" />,
    shortDescription: "Durable timing chain solutions to keep your engine's internal components in perfect sync.",
    longDescription: "A worn timing chain can lead to catastrophic engine failure. Our replacement service uses genuine or high-quality OEM chains and tensioners to ensure perfect synchronization of your engine's valves and pistons.",
    features: ["OEM spec chains", "New tensioners", "Guide rail inspection", "Precision timing setup"]
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    icon: <Zap className="w-6 h-6" />,
    shortDescription: "High-performance turbocharger replacements to restore power and efficiency.",
    longDescription: "Restore your vehicle's acceleration and fuel efficiency with our turbo replacement service. We supply and fit high-performance turbos for all major makes and models.",
    features: ["Core balancing", "Oil feed cleaning", "Wastegate testing", "Performance calibration"]
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    icon: <Wrench className="w-6 h-6" />,
    shortDescription: "Comprehensive diagnosis and precision repair of all major engine components.",
    longDescription: "From minor leaks to major mechanical issues, our engine repair service covers it all. Our specialist technicians use state-of-the-art diagnostics to identify and fix problems efficiently.",
    features: ["Advanced diagnostics", "Mechanical repairs", "Electrical troubleshooting", "Part replacement"]
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    icon: <RefreshCw className="w-6 h-6" />,
    shortDescription: "Complete engine replacement services with high-quality used or reconditioned units.",
    longDescription: "When an engine is beyond repair, our replacement service offers a cost-effective solution. We provide low-mileage used or fully reconditioned internal combustion engines to get you back on the road.",
    features: ["Full unit swap", "System integration", "Fluids & filter refresh", "Extensive testing"]
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    icon: <RefreshCw className="w-6 h-6" />,
    shortDescription: "Efficient engine swapping for performance upgrades or exact model matches.",
    longDescription: "Our engine swap service is perfect for those looking for an exact model replacement or a specialized upgrade. We handle the entire process from extraction to final configuration.",
    features: ["Precision removal", "Harness integration", "Cooling system check", "Performance tuning"]
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    icon: <Settings className="w-6 h-6" />,
    shortDescription: "Precision engine rebuilding back to factory specifications with new internal parts.",
    longDescription: "Our engine rebuild service involves stripping down your unit and replacing all worn internal components. We restore your engine to like-new condition with improved durability.",
    features: ["Full strip down", "New pistons & rings", "Bearing replacement", "Block machining"]
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    icon: <Layers className="w-6 h-6" />,
    shortDescription: "Essential timing belt servicing to prevent valve-to-piston interference.",
    longDescription: "Prevent engine damage with our timely timing belt replacement service. We use high-quality belts and water pumps to ensure your engine runs smoothly for thousands of miles.",
    features: ["High-durability belts", "Water pump replacement", "Tensioner check", "Interval reset"]
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    icon: <Gauge className="w-6 h-6" />,
    shortDescription: "Comprehensive diagnostic inspection to ensure your engine is performing optimally.",
    longDescription: "Our engine health check identifies potential issues before they become expensive failures. We check compression, diagnostics, and overall mechanical performance.",
    features: ["Compression test", "ECU scanning", "Fluid analysis", "Cooling system check"]
  }
];
