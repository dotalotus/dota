import { fetchItemData } from "../api/stratz/mod.ts";
import { isErr } from "../deps.ts";

const path = "./data/items.ts";

export async function updateItemData() {
  const gameVersionData = await fetchItemData();
  if (isErr(gameVersionData)) {
    throw gameVersionData;
  }
  await Deno.writeTextFile(
    path,
    `export const Items = ${JSON.stringify(gameVersionData)} as const;`,
    {
      create: true,
    },
  );
}
