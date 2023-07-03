import { GameVersion, GameVersions } from "../mod.ts";

export const GameVersionByID = new Map<number, GameVersion>(
  GameVersions.map((version) => [version.id as number, version as GameVersion]),
);
export const GameVersionByName = new Map<string, GameVersion>(
  GameVersions.map((
    version,
  ) => [version.name as string, version as GameVersion]),
);

export function GetGameVersion(id: string | number) {
  if (!isNaN(Number(id))) {
    if (GameVersionByID.has(Number(id))) return GameVersionByID.get(Number(id));
    return null;
  }
  if (GameVersionByName.has(id as string)) {
    return GameVersionByName.get(id as string);
  }
  return null;
}
