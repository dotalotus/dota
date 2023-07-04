// deno-lint-ignore-file camelcase
import { isErr, normalizeSteamID } from "../../deps.ts";
import { GamemodeID, GameVersionID, HeroID, SteamID } from "../../mod.ts";
import { OpendotaRequester } from "./requester.ts";

interface PlayerRecentMatch {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  game_mode: GamemodeID;
  lobby_type: number;
  hero_id: HeroID;
  start_time: number;
  version: GameVersionID | null;
  kills: number;
  deaths: number;
  assists: number;
  skill: number | null;
  average_rank: number | null;
  xp_per_min: number;
  gold_per_min: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  last_hits: number;
  lane: number | null;
  lane_role: number | null;
  is_roaming: boolean | null;
  cluster: number;
  leaver_status: number;
  party_size: number;
}

export async function fetchPlayerRecentMatches(
  steamid: SteamID,
) {
  const id = normalizeSteamID(String(steamid));
  if (isErr(id)) {
    return id;
  }
  const res = await OpendotaRequester.json(
    "api/players/" + id.id32 + "/recentMatches",
  );
  if (isErr(res)) {
    return res;
  }
  return res as unknown as PlayerRecentMatch[];
}
