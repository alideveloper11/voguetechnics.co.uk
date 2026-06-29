import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import LandRoverEngineSizePage from "@/components/land-rover/LandRoverEngineSizePage";
import landRoverEngineSizePages from "@/data/landRoverEngineSizePages";

const data = landRoverEngineSizePages["land-rover-5"];

export const metadata: Metadata = pageMetadata.landRover5;

export default function LandRover5Page() {
  return <LandRoverEngineSizePage data={data} />;
}
