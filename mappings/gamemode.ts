import { Gamemode, Gamemodes } from "../mod.ts";

export const GamemodeByID = new Map<number, Gamemode>(
  Gamemodes.map((gamemode) => [gamemode.id, gamemode as unknown as Gamemode]),
);

export const GamemodeByName = new Map<string, Gamemode>(
  Gamemodes.map((gamemode) => [gamemode.name, gamemode as unknown as Gamemode]),
);

export function GetGamemode(selector: string | number) {
  if (!isNaN(+selector)) {
    const id = +selector;
    if (GamemodeByID.has(id)) return GamemodeByID.get(id);
    return null;
  }
  if (typeof selector === "string") {
    if (GamemodeByName.has(selector)) return GamemodeByName.get(selector);
  }
  return null;
}
