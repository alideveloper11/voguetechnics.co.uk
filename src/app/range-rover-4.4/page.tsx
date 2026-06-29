import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import RangeRoverEngineSizePage from "@/components/range-rover/RangeRoverEngineSizePage";
import rangeRoverEngineSizePages from "@/data/rangeRoverEngineSizePages";

const data = rangeRoverEngineSizePages["range-rover-4.4"];

export const metadata: Metadata = pageMetadata.rangeRover44;

export default function RangeRover44Page() {
  return <RangeRoverEngineSizePage data={data} />;
}
