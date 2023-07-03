import { fetchGameVersionData } from "../api/stratz/mod.ts";
import { isErr } from "../deps.ts";

const path = "./data/gameVersions.ts";

export async function updateGameVersionData() {
  const gameVersionData = await fetchGameVersionData();
  if (isErr(gameVersionData)) {
    throw gameVersionData;
  }
  await Deno.writeTextFile(
    path,
    `export const GameVersions = ${JSON.stringify(gameVersionData)} as const;`,
    {
      create: true,
    },
  );
}
