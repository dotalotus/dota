import { NPC, NPCs } from "../mod.ts";

export const NPCByID = new Map<number, NPC>(
  NPCs.map((npc) => [npc.id, npc as NPC]),
);

export const NPCByName = new Map<string, NPC>(
  NPCs.map((npc) => [npc.name, npc as NPC]),
);

export function GetNPC(selector: string | number) {
  if (!isNaN(+selector)) {
    const id = +selector;
    if (NPCByID.has(id)) return NPCByID.get(id);
    return null;
  }
  if (typeof selector === "string") {
    if (NPCByName.has(selector)) return NPCByName.get(selector);
  }
  return null;
}
