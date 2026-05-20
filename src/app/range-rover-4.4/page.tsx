import type { Metadata } from "next";
import RangeRoverEngineSizePage from "@/components/range-rover/RangeRoverEngineSizePage";
import rangeRoverEngineSizePages from "@/data/rangeRoverEngineSizePages";

const data = rangeRoverEngineSizePages["range-rover-4.4"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/range-rover-4.4" },
};

export default function RangeRover44Page() {
  return <RangeRoverEngineSizePage data={data} />;
}
