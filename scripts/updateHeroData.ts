import { fetchHeroData } from "../api/stratz/heroData.ts";
import { isErr } from "../deps.ts";

const path = "./data/heroes.ts";

export async function updateHeroData() {
  const heroData = await fetchHeroData();
  if (isErr(heroData)) {
    throw heroData;
  }
  await Deno.writeTextFile(
    path,
    `export const Heroes = ${JSON.stringify(heroData)} as const;`,
    {
      create: true,
    },
  );
}
