import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import RangeRoverEngineSizePage from "@/components/range-rover/RangeRoverEngineSizePage";
import rangeRoverEngineSizePages from "@/data/rangeRoverEngineSizePages";

const data = rangeRoverEngineSizePages["range-rover-5"];

export const metadata: Metadata = pageMetadata.rangeRover5;

export default function RangeRover5Page() {
  return <RangeRoverEngineSizePage data={data} />;
}
