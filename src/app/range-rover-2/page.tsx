import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import RangeRoverEngineSizePage from "@/components/range-rover/RangeRoverEngineSizePage";
import rangeRoverEngineSizePages from "@/data/rangeRoverEngineSizePages";

const data = rangeRoverEngineSizePages["range-rover-2"];

export const metadata: Metadata = pageMetadata.rangeRover2;

export default function RangeRover2Page() {
  return <RangeRoverEngineSizePage data={data} />;
}
