// deno-lint-ignore-file camelcase
import { GameVersionID, HeroID, RegionID } from "../../mod.ts";
import { OpendotaRequester } from "./requester.ts";

export interface MatchDetails {
  match_id: number;
  barracks_status_dire: number;
  barracks_status_radiant: number;
  chat: Chat[];
  cluster: number;
  cosmetics: number[];
  dire_score: number;
  draft_timings: DraftTimings[];
  duration: number;
  engine: number;
  first_blood_time: number;
  game_mode: number;
  human_players: number;
  leagueid: number;
  lobby_type: number;
  match_seq_num: number;
  negative_votes: number;
  objectives: Objectives[];
  picks_bans: PicksBans[];
  positive_votes: number;
  radiant_gold_adv: number[];
  radiant_score: number;
  radiant_win: boolean;
  radiant_xp_adv: number[];
  start_time: number;
  teamfights: Teamfights[];
  tower_status_dire: number;
  tower_status_radiant: number;
  version: GameVersionID;
  replay_salt: number;
  series_id: number;
  series_type: number;
  // radiant_team: Player[];
  // dire_team: Player[];
  league: League;
  skill: number;
  players: Player[];
  patch: number;
  region: RegionID;
  all_word_counts: Record<string, number>;
  my_word_counts: Record<string, number>;
  throw: number;
  comeback: number;
  loss: number;
  win: number;
  replay_url: string;
}

interface Chat {
  time: number;
  unit: string;
  key: string;
  slot: number;
  player_slot: number;
}

interface DraftTimings {
  order: number;
  pick: boolean;
  active_team: number;
  hero_id: HeroID;
  player_slot: number;
  extra_time: number;
  total_time_taken: number;
}

interface Objectives {
}

interface Teamfights {
}

interface Player {
  match_id: number;
  player_slot: number | null;
  ability_upgrades_arr: number[];
  ability_uses: Record<string, number>;
  ability_targets: Record<string, number>;
  damage_targets: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  account_id: number;
  actions: Record<string, number>;
  additional_units: Array<Record<string, unknown>> | null;
  assists: number;
  backpack_0: number;
  backpack_1: number;
  backpack_2: number;
  buyback_log: BuybackEvent[];
  camps_stacked: number;
  connection_log: ConnectionEvent[];
  creeps_stacked: number;
  damage: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  damage_inflictor: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  damage_inflictor_received: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  damage_taken: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  deaths: number;
  denies: number;
  dn_t: number[];
  gold: number;
  gold_per_min: number;
  gold_reasons: Record<string, number>;
  gold_spent: number;
  gold_t: number[];
  hero_damage: number;
  hero_healing: number;
  hero_hits: Record<string, number>;
  hero_id: number;
  item_0: number;
  item_1: number;
  item_2: number;
  item_3: number;
  item_4: number;
  item_5: number;
  item_uses: Record<string, number>;
  kill_streaks: Record<string, number>;
  killed: Record<string, unknown> | null; // Replace 'unknown' with the appropriate type
  killed_by: Record<string, unknown> | null; // Replace 'unknown' with the appropriate type
  kills: number;
  kills_log: KillEvent[];
  lane_pos: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  last_hits: number;
  leaver_status: number;
  level: number;
  lh_t: number[];
  life_state: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  max_hero_hit: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  multi_kills: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  obs: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  obs_left_log: Record<string, unknown>[];
  obs_log: Record<string, unknown>[];
  obs_placed: number;
  party_id: number;
  permanent_buffs: Record<string, unknown>[];
  pings: number;
  purchase: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  purchase_log: PurchaseEvent[];
  rune_pickups: number;
  runes: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  runes_log: RuneEvent[];
  sen: Record<string, unknown>; // Replace 'unknown' with the appropriate type
  sen_left_log: Record<string, unknown>[];
  sen_log: Record<string, unknown>[];
  sen_placed: number;
  stuns: number;
  times: number[];
  tower_damage: number;
  xp_per_min: number;
  xp_reasons: Record<string, number>;
  xp_t: number[];
  personaname: string | null;
  name: string | null;
  last_login: string | null;
  radiant_win: boolean | null;
  start_time: number;
  duration: number;
  cluster: number;
  lobby_type: number;
  game_mode: number;
  patch: number;
  region: number;
  isRadiant: boolean;
  win: number;
  lose: number;
  total_gold: number;
  total_xp: number;
  kills_per_min: number;
  kda: number;
  abandons: number;
  neutral_kills: number;
  tower_kills: number;
  courier_kills: number;
  lane_kills: number;
  hero_kills: number;
  observer_kills: number;
  sentry_kills: number;
  roshan_kills: number;
  necronomicon_kills: number;
  ancient_kills: number;
  buyback_count: number;
  observer_uses: number;
  sentry_uses: number;
  lane_efficiency: number;
  lane_efficiency_pct: number;
  lane: number | null;
  lane_role: number | null;
  is_roaming: boolean | null;
  purchase_time: Record<string, number>;
  first_purchase_time: Record<string, number>;
  item_win: Record<string, number>;
  item_usage: Record<string, number>;
  purchase_tpscroll: number;
  actions_per_min: number;
  life_state_dead: number;
  rank_tier: number;
  cosmetics: Cosmetic[];
  benchmarks: Record<string, number>;
}

interface BuybackEvent {
  time: number;
  slot: number;
  player_slot: number | null;
}

interface ConnectionEvent {
  time: number;
  event: string;
  player_slot: number | null;
}

interface KillEvent {
  time: number;
  key: string;
}

interface PurchaseEvent {
  time: number;
  key: string;
  charges: number;
}

interface RuneEvent {
  time: number;
  key: number;
}

interface Cosmetic {
  item_id: number;
  name: string | null;
  prefab: string;
  creation_date: string | null;
  image_inventory: string | null;
  image_path: string | null;
  item_description: string | null;
  item_name: string;
  item_rarity: string | null;
  item_type_name: string | null;
  used_by_heroes: string | null;
}

interface League {
}

interface PicksBans {
  is_pick: boolean;
  hero_id: HeroID;
  team: number;
  order: number;
}

export async function fetchMatchDetails(matchid: string | number) {
  return await OpendotaRequester.json<MatchDetails>(`api/matches/${matchid}`);
}
