import engineCodesData from "./engineCodesData.json";

export type EngineCodesEntry = {
  title: string;
  rows: Array<{
    make: string;
    model: string;
    engineCode: string;
    engineCodeHref?: string;
    valves: number | string;
    actualCC: number | string;
    powerKw: number | string;
    powerHp: number | string;
    yearRange: string;
  }>;
};

const engineCodesBySlug = engineCodesData as Record<string, EngineCodesEntry>;

export function getEngineCodesEntry(slug: string): EngineCodesEntry | null {
  return engineCodesBySlug[slug] ?? null;
}
