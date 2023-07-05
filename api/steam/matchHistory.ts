// deno-lint-ignore-file camelcase
import { CaptureErr, Err, isErr, normalizeSteamID } from "../../deps.ts";
import {
  GamemodeID,
  HeroID,
  Skill,
  SteamID,
  SteamMatchHistory,
} from "../../mod.ts";
import { SteamRequester } from "./requester.ts";

interface Options {
  hero_id?: HeroID;
  game_mode?: GamemodeID;
  skill?: Skill;
  min_players?: number;
  account_id?: SteamID;
  league_id?: number;
  start_at_match_id?: number;
  matches_requested?: number;
  tournament_games_only?: boolean;
}

export async function fetchMatchHistory(options: Options = {}) {
  const searchParams = new URLSearchParams(
    Object.entries(options).map(([key, value]) => [key, value.toString()]),
  );
  if (options.account_id) {
    const steamid = normalizeSteamID(options.account_id.toString());
    if (isErr(steamid)) {
      return steamid;
    }
    searchParams.set("account_id", steamid.id32.toString());
  }
  const res = await SteamRequester.request(
    "IDOTA2Match_570/GetMatchHistory/v1",
    {
      searchParams,
    },
  );
  if (isErr(res)) {
    return res;
  }
  if (res.status === 403) {
    return new Err(
      "Invalid API Key",
      "You are either using an invalid API key or you haven't set one",
    );
  }
  const json = await CaptureErr(
    "JSON Error",
    async (): Promise<SteamMatchHistory> => await res.json(),
  );
  if (isErr(json)) {
    return json;
  }
  if (json.result.status === 15) {
    return new Err(
      "User Denied",
      "Cannot get match history for a suer that hasn't allowed it",
    );
  }
  return json.result;
}
