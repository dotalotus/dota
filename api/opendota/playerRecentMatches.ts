import { isErr, normalizeSteamID } from "../../deps.ts";
import { SteamID } from "../../mod.ts";
import { PlayerRecentMatch } from "./mod.ts";
import { OpendotaRequester } from "./requester.ts";

export async function fetchPlayerRecentMatches(
  steamid: SteamID,
) {
  const id = normalizeSteamID(String(steamid));
  if (isErr(id)) {
    return id;
  }
  const res = await OpendotaRequester.json<PlayerRecentMatch[]>(
    "api/players/" + id.id32 + "/recentMatches",
  );
  if (isErr(res)) {
    return res;
  }
  return res;
}
