import { Metadata } from "next";
import { getEngineCodesEntry } from "@/data/engineCodes";
import RangeRoverSportSVREnginesClient from "./RangeRoverSportSVREnginesClient";

export const metadata: Metadata = {
  title: "Range Rover Sport SVR Engine Rebuild & Replacement   Specialists in ",
  description:
    "Vogue Technics are Range Rover Sport SVR AJ133 5.0 V8 supercharged engine specialists . Expert rebuilds, repairs, replacements and supply & fit   with transparent pricing and written warranty.",
  alternates: { canonical: "/range-rover-sport-svr-engines" },
};

export default function RangeRoverSportSVREnginesPage() {
  return <RangeRoverSportSVREnginesClient engineCodes={getEngineCodesEntry("range-rover-sport-svr-engines")} />;
}

