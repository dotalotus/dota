import { fetchGamemodeData } from "../api/stratz/mod.ts";
import { isErr } from "../deps.ts";

const path = "./data/gamemodes.ts";

export async function updateGamemodeData() {
  const gamemodeData = await fetchGamemodeData();
  if (isErr(gamemodeData)) {
    throw gamemodeData;
  }
  await Deno.writeTextFile(
    path,
    `export const Gamemodes = ${JSON.stringify(gamemodeData)} as const;`,
    {
      create: true,
    },
  );
}
