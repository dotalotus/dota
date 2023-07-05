import { isErr, normalizeSteamID } from "../../deps.ts";
import {
  GamemodeID,
  GameVersionID,
  HeroID,
  LobbyTypeID,
  OpendotaPlayerRecentMatch,
  RegionID,
  SteamID,
} from "../../mod.ts";
import { OpendotaRequester } from "../requesters/mod.ts";

interface Options {
  limit?: number;
  offset?: number;
  win?: number;
  patch?: GameVersionID;
  game_mode?: GamemodeID;
  lobby_type?: LobbyTypeID;
  region?: RegionID;
  date?: number;
  lane_role?: number;
  hero_id?: HeroID;
  is_radiant?: number;
  included_account_id?: SteamID;
  excluded_account_id?: SteamID;
  with_hero_id?: HeroID;
  against_hero_id?: HeroID;
  significant?: number;
  having?: number;
  sort?: "asc" | "desc";
  project?: string;
}

export async function fetchPlayerMatches(
  steamid: SteamID,
  options: Options = {},
) {
  const id = normalizeSteamID(String(steamid));
  if (isErr(id)) {
    return id;
  }
  if (options.included_account_id) {
    const included_id = normalizeSteamID(String(options.included_account_id));
    if (isErr(included_id)) {
      return included_id;
    }
    options.included_account_id = included_id.id32;
  }
  if (options.excluded_account_id) {
    const excluded_id = normalizeSteamID(String(options.excluded_account_id));
    if (isErr(excluded_id)) {
      return excluded_id;
    }
    options.excluded_account_id = excluded_id.id32;
  }
  return await OpendotaRequester.json<OpendotaPlayerRecentMatch[]>(
    "api/players/" + id.id32 + "/matches",
    {
      searchParams: new URLSearchParams(
        Object.entries(options).map(([key, value]) => [key, String(value)]),
      ),
    },
  );
}
