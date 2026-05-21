import type { Metadata } from "next";
import RangeRoverEngineSizePage from "@/components/range-rover/RangeRoverEngineSizePage";
import rangeRoverEngineSizePages from "@/data/rangeRoverEngineSizePages";

const data = rangeRoverEngineSizePages["range-rover-2"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/range-rover-2" },
};

export default function RangeRover2Page() {
  return <RangeRoverEngineSizePage data={data} />;
}
