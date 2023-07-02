import { isErr } from "../../deps.ts";
import { StratzRequester } from "./requester.ts";

interface Hero {
  id: number;
  name: string;
  displayName: string;
  shortName: string;
  abilties: HeroAbility[];
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

interface Options {
  gameVersionId?: `${number}`;
  languageId?: `${number}`;
}

export async function fetchHeroData(
  options: Options = {},
) {
  const res = await StratzRequester.json("api/v1/Hero", {
    searchParams: new URLSearchParams(Object.entries(options)),
  });
  if (isErr(res)) return res;
  return Object.values(res as unknown as Record<string, Hero>);
}
