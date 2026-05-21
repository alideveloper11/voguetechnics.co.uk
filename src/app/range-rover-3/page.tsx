import type { Metadata } from "next";
import RangeRoverEngineSizePage from "@/components/range-rover/RangeRoverEngineSizePage";
import rangeRoverEngineSizePages from "@/data/rangeRoverEngineSizePages";

const data = rangeRoverEngineSizePages["range-rover-3"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/range-rover-3" },
};

export default function RangeRover3Page() {
  return <RangeRoverEngineSizePage data={data} />;
}
