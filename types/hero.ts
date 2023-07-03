import { Heroes } from "../mod.ts";

export interface Hero {
  id: number;
  name: string;
  displayName: string;
  shortName: string;
  abilities: HeroAbility[];
  roles: HeroRole[];
  talents: HeroTalent[];
  stat: HeroStats;
  language: HeroLanguage;
  aliases: string[];
}

interface HeroAbility {
  slot: number;
  abilityId: number;
}

interface HeroRole {
  roleId: number;
  level: number;
}

interface HeroTalent {
  slot: number;
  gameVersionId: number;
  abilityId: number;
}

interface HeroStats {
  gameVersionId: number;
  enabled: boolean;
  heroUnlockOrder: number;
  team: boolean;
  cmEnabled: boolean;
  newPlayerEnabled: boolean;
  attackType: string;
  startingArmor: number;
  startingMagicArmor: number;
  startingDamageMin: number;
  startingDamageMax: number;
  attackRate: number;
  attackAnimationPoint: number;
  attackAcquisitionRange: number;
  attackRange: number;
  AttributePrimary: string;
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
