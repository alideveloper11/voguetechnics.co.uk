import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import LandRoverEngineSizePage from "@/components/land-rover/LandRoverEngineSizePage";
import landRoverEngineSizePages from "@/data/landRoverEngineSizePages";

const data = landRoverEngineSizePages["land-rover-2"];

export const metadata: Metadata = pageMetadata.landRover2;

export default function LandRover2Page() {
  return <LandRoverEngineSizePage data={data} />;
}
