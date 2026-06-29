import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import LandRoverEngineSizePage from "@/components/land-rover/LandRoverEngineSizePage";
import landRoverEngineSizePages from "@/data/landRoverEngineSizePages";

const data = landRoverEngineSizePages["land-rover-3"];

export const metadata: Metadata = pageMetadata.landRover3;

export default function LandRover3Page() {
  return <LandRoverEngineSizePage data={data} />;
}
