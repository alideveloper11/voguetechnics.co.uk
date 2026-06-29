import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import LandRoverEngineSizePage from "@/components/land-rover/LandRoverEngineSizePage";
import landRoverEngineSizePages from "@/data/landRoverEngineSizePages";

const data = landRoverEngineSizePages["land-rover-4.4"];

export const metadata: Metadata = pageMetadata.landRover44;

export default function LandRover44Page() {
  return <LandRoverEngineSizePage data={data} />;
}
