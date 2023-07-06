import { LobbyTypes } from "../mod.ts";

export interface LobbyType {
  id: LobbyTypeID;
  name: string;
  langKey: string;
}

type raw = typeof LobbyTypes[number];
export type LobbyTypeName = raw["name"];
export type LobbyTypeID = raw["id"];
export type LobbyLangKey = raw["langKey"];
