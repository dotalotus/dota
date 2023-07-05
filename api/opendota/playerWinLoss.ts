import { isErr, normalizeSteamID } from "../../deps.ts";
import { OpendotaPlayerWinLoss, SteamID } from "../../mod.ts";
import { OpendotaRequester } from "../requesters/mod.ts";

export async function fetchPlayerWinLoss(
  steamid: SteamID,
) {
  const id = normalizeSteamID(String(steamid));
  if (isErr(id)) {
    return id;
  }
  return await OpendotaRequester.json<OpendotaPlayerWinLoss>(
    "api/players/" + id.id32 + "/wl",
  );
}
