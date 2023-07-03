import { fetchNPCData } from "../api/stratz/mod.ts";
import { isErr } from "../deps.ts";

const path = "./data/npcs.ts";

export async function updateNPCData() {
  const NPCData = await fetchNPCData();
  if (isErr(NPCData)) {
    throw NPCData;
  }
  await Deno.writeTextFile(
    path,
    `export const NPCs = ${JSON.stringify(NPCData)} as const;`,
    {
      create: true,
    },
  );
}
