import { Region, Regions } from "../mod.ts";

export const RegionByID = new Map<number, Region>(
  Regions.map((region) => [region.id, region as unknown as Region]),
);

export const RegionByName = new Map<string, Region>(
  Regions.map((region) => [region.name, region as unknown as Region]),
);

export function GetRegion(selector: string | number) {
  if (!isNaN(+selector)) {
    const id = +selector;
    if (RegionByID.has(id)) return RegionByID.get(id);
    return null;
  }
  if (typeof selector === "string") {
    if (RegionByName.has(selector)) return RegionByName.get(selector);
  }
  return null;
}
