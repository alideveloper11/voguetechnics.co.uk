import type { Metadata } from "next";
import LandRoverEngineSizePage from "@/components/land-rover/LandRoverEngineSizePage";
import landRoverEngineSizePages from "@/data/landRoverEngineSizePages";

const data = landRoverEngineSizePages["land-rover-4.4"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/land-rover-4.4" },
};

export default function LandRover44Page() {
  return <LandRoverEngineSizePage data={data} />;
}
