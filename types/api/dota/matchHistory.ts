import { HeroID, LobbyTypeID, PlayerSlot } from "../../mod.ts";

export enum DotaMatchHistoryStatus {
  Success = 1,
  Error = 15,
}

export interface DotaMatchHistory {
  result: {
    status: number;
    num_results: number;
    total_results: number;
    results_remaining: number;
    matches: DotaMatchHistoryMatch[];
  };
}

export interface DotaMatchHistoryMatch {
  match_id: number;
  match_seq_num: number;
  start_time: number;
  lobby_type: LobbyTypeID;
  radiant_team_id: number;
  dire_team_id: number;
  players: DotaMatchHistoryPlayer[];
}

interface DotaMatchHistoryPlayer {
  account_id: number;
  player_slot: PlayerSlot;
  hero_id: HeroID;
}
