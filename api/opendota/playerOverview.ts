import { isErr, normalizeSteamID } from "../../deps.ts";
import { OpendotaPlayerOverview, SteamID } from "../../mod.ts";
import { OpendotaRequester } from "../requesters/mod.ts";

export async function fetchPlayerOverview(steamid: SteamID) {
  const id = normalizeSteamID(String(steamid));
  if (isErr(id)) return id;
  return await OpendotaRequester.json<OpendotaPlayerOverview>(
    "api/players/" + id.id32,
  );
}
