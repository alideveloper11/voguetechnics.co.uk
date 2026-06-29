import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import RangeRoverEngineSizePage from "@/components/range-rover/RangeRoverEngineSizePage";
import rangeRoverEngineSizePages from "@/data/rangeRoverEngineSizePages";

const data = rangeRoverEngineSizePages["range-rover-3"];

export const metadata: Metadata = pageMetadata.rangeRover3;

export default function RangeRover3Page() {
  return <RangeRoverEngineSizePage data={data} />;
}
