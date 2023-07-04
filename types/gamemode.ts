import { Gamemodes } from "../mod.ts";

export interface Gamemode {
  id: number;
  name: string;
  langKey: string;
}

type raw = typeof Gamemodes[number];
export type GamemodeID = raw["id"];
export type GamemodeName = raw["name"];
export type GamemodeLangKey = raw["langKey"];
