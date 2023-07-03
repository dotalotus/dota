import { NPCs } from "../mod.ts";

export interface NPC {
  id: number;
  name: string;
  stat?: {
    npcId: number;
    gameVersionId: number;
    level: number;
    statusHealth: number;
    statusHealthRegen: number;
    statusMana: number;
    statusManaRegen: number;
    movementSpeed: number;
    movementTurnRate: number;
    dayTimeVision: number;
    nightTimeVision: number;
    attackRangeBuffer: number;
    attackRange: number;
    isNeutralUnitType: boolean;
    isAncient: boolean;
    canBeDominated: boolean;
    autoAttacksByDefault: boolean;
    attackDamageMin: number;
    attackDamageMax: number;
    attackRate: number;
    attackAnimationPoint: number;
    projectileSpeed: number;
    teamName: string;
    combatClassAttack: string;
    combatClassDefend: string;
    unitRelationshipClass: string;
    attackDesire: number;
    hasInventory: boolean;
    wakesNeutrals: boolean;
  };
}

type raw = typeof NPCs[number];
export type NPCName = raw["name"];
export type NPCID = raw["id"];
