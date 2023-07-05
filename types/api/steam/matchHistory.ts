// deno-lint-ignore-file camelcase
import { HeroID, LobbyTypeID, PlayerSlot } from "../../mod.ts";

export enum SteamMatchHistoryStatus {
  Success = 1,
  Error = 15,
}

export interface SteamMatchHistory {
  result: {
    status: number;
    num_results: number;
    total_results: number;
    results_remaining: number;
    matches: SteamMatchHistoryMatch[];
  };
}

export interface SteamMatchHistoryMatch {
  match_id: number;
  match_seq_num: number;
  start_time: number;
  lobby_type: LobbyTypeID;
  radiant_team_id: number;
  dire_team_id: number;
  players: SteamMatchHistoryPlayer[];
}

interface SteamMatchHistoryPlayer {
  account_id: number;
  player_slot: PlayerSlot;
  hero_id: HeroID;
}
