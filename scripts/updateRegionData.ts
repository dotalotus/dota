import { fetchRegionData } from "../api/stratz/mod.ts";
import { isErr } from "../deps.ts";

const path = "./data/regions.ts";

export async function updateRegionData() {
  const RegionData = await fetchRegionData();
  if (isErr(RegionData)) {
    throw RegionData;
  }
  await Deno.writeTextFile(
    path,
    `export const Regions = ${JSON.stringify(RegionData)} as const;`,
    {
      create: true,
    },
  );
}
