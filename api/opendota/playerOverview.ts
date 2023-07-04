// deno-lint-ignore-file camelcase
import { isErr, normalizeSteamID } from "../../deps.ts";
import { SteamID } from "../../mod.ts";
import { OpendotaRequester } from "./requester.ts";

export interface PlayerOverview {
  solo_competitive_rank: number | null;
  competitive_rank: number | null;
  rank_tier: number | null;
  leaderboard_rank: number | null;
  mmr_estimate: {
    estimate: number | null;
  };
  profile: {
    account_id: number;
    personaname: string | null;
    name: string | null;
    plus: boolean;
    cheese: number | null;
    steamid: string | null;
    avatar: string | null;
    avatarmedium: string | null;
    avatarfull: string | null;
    profileurl: string | null;
    last_login: string | null;
    loccountrycode: string | null;
    is_contributor: boolean;
    is_subscriber: boolean;
  };
}

export async function fetchPlayerOverview(steamid: SteamID) {
  const id = normalizeSteamID(String(steamid));
  if (isErr(id)) return id;
  return await OpendotaRequester.json<PlayerOverview>(
    "api/players/" + id.id32,
  );
}
