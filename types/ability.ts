import { Abilities } from "../mod.ts";

type raw = typeof Abilities[number];
export type AbilityID = raw["id"];

interface AbilityLanguage {
  abilityId: number;
  gameVersionId: number;
  languageId: number;
  displayName?: string;
  description?: string;
  descriptionArray?: string[];
  attributes?: string;
  attributesArray?: string[];
  lore?: string;
  aghanimDescription?: string;
  notes?: string;
  notesArray?: string[];
  shardDescription?: string;
}

interface AbilityAttribute {
  abilityId: number;
  gameVersionId: number;
  name?: string;
  value?: string;
  linkedSpecialBonusAbilityId?: number;
  requiresScepter?: boolean;
  requiresShard?: boolean;
  linkedSpecialBonusValue?: string;
}

interface AbilityStat {
  abilityId: number;
  gameVersionId: number;
  type?: number;
  behavior?: number;
  unitTargetType?: number;
  unitTargetTeam?: number;
  unitTargetFlags?: number;
  unitDamageType?: number;
  spellImmunity?: number;
  modifierSupportValue?: number;
  modifierSupportBonus?: number;
  isOnCastbar?: boolean;
  isOnLearnbar?: boolean;
  fightRecapLevel?: number;
  isGrantedByScepter?: boolean;
  hasScepterUpgrade?: boolean;
  maxLevel?: number;
  levelsBetweenUpgrades?: number;
  requiredLevel?: number;
  hotKeyOverride?: string;
  displayAdditionalHeroes?: boolean;
  castRange?: string;
  castRangeArray?: number[];
  castRangeBuffer?: string;
  castRangeArrayBuffer?: number[];
  castPoint?: string;
  // deno-lint-ignore no-explicit-any
  castPointArray?: any[]; // The type for this field is not specified in the Swagger schema
  channelTime?: string;
  // deno-lint-ignore no-explicit-any
  channelTimeArray?: any[]; // The type for this field is not specified in the Swagger schema
  cooldown?: string;
  cooldownArray?: number[];
  damage?: string;
  hasDamage?: boolean;
  damageArray?: number[];
  manaCost?: string;
  manaCostArray?: number[];
  isUltimate?: boolean;
  duration?: string;
  charges?: string;
  chargeRestoreTime?: string;
  isGrantedByShard?: boolean;
  dispellable?: number;
  linkedAbilityId?: number;
}

export interface Ability {
  id: number;
  name: string;
  uri?: string;
  attributes?: AbilityAttribute[];
  language?: AbilityLanguage;
  stat?: AbilityStat;
  languages?: AbilityLanguage[];
  isTalent?: boolean;
  isTalentGoldIncome?: boolean;
  talentGoldIncomeValue?: number;
}
