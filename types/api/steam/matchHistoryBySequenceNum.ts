import {
  GamemodeID,
  HeroID,
  ItemID,
  LeaverStatus,
  LobbyTypeID,
  PlayerSlot,
} from "../../mod.ts";

export interface SteamMatchHistoryBySequenceNum {
  result: {
    status: number;
    matches: SteamMatchHistoryBySequenceNumMatch[];
  };
}

export interface SteamMatchHistoryBySequenceNumMatch {
  players: SteamMatchHistoryBySequenceNumPlayer[];
  radiant_win: boolean;
  duration: number;
  pre_game_duration: number;
  start_time: number;
  match_id: number;
  match_seq_num: number;
  tower_status_radiant: number;
  tower_status_dire: number;
  barracks_status_radiant: number;
  barracks_status_dire: number;
  cluster: number;
  first_blood_time: number;
  lobby_type: LobbyTypeID;
  human_players: number;
  leagueid: number;
  positive_votes: number;
  negative_votes: number;
  game_mode: GamemodeID;
  flags: number;
  engine: number;
  radiant_score: number;
  dire_score: number;
}

export interface SteamMatchHistoryBySequenceNumPlayer {
  account_id: number;
  player_slot: PlayerSlot;
  team_number: number;
  team_slot: number;
  hero_id: HeroID;
  item_0: ItemID;
  item_1: ItemID;
  item_2: ItemID;
  item_3: ItemID;
  item_4: ItemID;
  item_5: ItemID;
  backpack_0: ItemID;
  backpack_1: ItemID;
  backpack_2: ItemID;
  item_neutral: ItemID;
  kills: number;
  deaths: number;
  assists: number;
  leaver_status: LeaverStatus;
  last_hits: number;
  denies: number;
  gold_per_min: number;
  xp_per_min: number;
  level: number;
  net_worth: number;
  aghanims_scepter: number;
  aghanims_shard: number;
  moonshard: number;
}
