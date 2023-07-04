import { Heroes } from "../mod.ts";
import { AbilityID } from "./ability.ts";
import { GameVersionID } from "./gameVersion.ts";

export interface Hero {
  id: HeroID;
  name: HeroName;
  displayName: HeroDisplayName;
  shortName: HeroShortName;
  abilities: HeroAbility[];
  roles: HeroRole[];
  talents: HeroTalent[];
  stat: HeroStats;
  language: HeroLanguage;
  aliases: HeroAlias[];
}

interface HeroAbility {
  slot: number;
  abilityId: AbilityID;
}

interface HeroRole {
  roleId: HeroRoleID;
  level: number;
}

interface HeroTalent {
  slot: number;
  gameVersionId: GameVersionID;
  abilityId: AbilityID;
}

interface HeroStats {
  gameVersionId: GameVersionID;
  enabled: boolean;
  heroUnlockOrder: number;
  team: boolean;
  cmEnabled: boolean;
  newPlayerEnabled: boolean;
  attackType: HeroAttackType;
  startingArmor: number;
  startingMagicArmor: number;
  startingDamageMin: number;
  startingDamageMax: number;
  attackRate: number;
  attackAnimationPoint: number;
  attackAcquisitionRange: number;
  attackRange: number;
  AttributePrimary: HeroPrimaryAttribute;
  heroPrimaryAttribute: number;
  strengthBase: number;
  strengthGain: number;
  intelligenceBase: number;
  intelligenceGain: number;
  agilityBase: number;
  agilityGain: number;
  hpRegen: number;
  mpRegen: number;
  moveSpeed: number;
  moveTurnRate: number;
  hpBarOffset: number;
  visionDaytimeRange: number;
  visionNighttimeRange: number;
  complexity: number;
  primaryAttributeEnum: number;
}

interface HeroLanguage {
  heroId: number;
  gameVersionId: number;
  languageId: number;
  displayName: string;
  bio: string;
  hype: string;
}

type raw = typeof Heroes[number];
export type HeroID = raw["id"];
export type HeroName = raw["name"];
export type HeroDisplayName = raw["displayName"];
export type HeroShortName = raw["shortName"];
export type HeroRoleID = raw["roles"][number]["roleId"];
export type HeroAbilityID = raw["abilities"][number]["abilityId"];
export type HeroAttackType = raw["stat"]["attackType"];
export type HeroPrimaryAttribute = raw["stat"]["AttributePrimary"];
export type HeroComplexity = raw["stat"]["complexity"];
export type HeroAlias = raw["aliases"][number];
