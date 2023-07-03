import { GameVersions } from "../mod.ts";

export type raw = typeof GameVersions[number];
export type GameVersionID = raw["id"];
export type GameVersionName = raw["name"];

export interface GameVersion {
  id: number;
  name: string;
  startDate: string;
}
