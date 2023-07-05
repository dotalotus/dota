import { GameVersionID, GameVersionName } from "../../gameVersion.ts";

export interface DotaPatchNotesListEntry {
  patch_number: `${GameVersionID}`;
  patch_name: GameVersionName;
  patch_timestamp: number;
}
