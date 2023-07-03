import { fetchLobbyTypeData } from "../api/stratz/mod.ts";
import { isErr } from "../deps.ts";

const path = "./data/lobbyType.ts";

export async function updateLobbyTypeData() {
  const lobbyTypeData = await fetchLobbyTypeData();
  if (isErr(lobbyTypeData)) {
    throw lobbyTypeData;
  }
  await Deno.writeTextFile(
    path,
    `export const LobbyTypes = ${JSON.stringify(lobbyTypeData)} as const;`,
    {
      create: true,
    },
  );
}
