import { fetchAbilityData } from "../api/stratz/mod.ts";
import { isErr } from "../deps.ts";

const path = "./data/abilities.ts";

export async function updateAbilityData() {
  const abilityData = await fetchAbilityData();
  if (isErr(abilityData)) {
    throw abilityData;
  }
  await Deno.writeTextFile(
    path,
    `export const Abilities = ${JSON.stringify(abilityData)} as const;`,
  );
}
