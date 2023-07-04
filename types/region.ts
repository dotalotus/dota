import { Regions } from "../mod.ts";

export interface Region {
  id: number;
  name: string;
  clientName?: string;
  displayName: string;
  leaderboardDivision?: number;
  langKey: string;
  latitude: number;
  longitude: number;
  code?: string;
  matchGroup: number;
  weekendTourneyDivision?: string;
}

type raw = typeof Regions[number];
export type RegionID = raw["id"];
export type RegionName = raw["name"];
export type RegionMatchGroups = raw["matchGroup"];
export type RegionDisplayName = raw["displayName"];
