import { Languages } from "../data/mod.ts";

export interface Language {
  id: number;
  name: string;
}

type raw = typeof Languages[number];
export type LanguageName = raw["name"];
export type LanguageID = raw["id"];
