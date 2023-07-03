import { Heroes } from "../data/heroes.ts";

export type Hero = typeof Heroes[number];
export type HeroID = Hero["id"];
export type HeroName = Hero["name"];
export type HeroDisplayName = Hero["displayName"];
export type HeroShortName = Hero["shortName"];
export type HeroRoleID = Hero["roles"][number]["roleId"];
export type HeroAbilityID = Hero["abilities"][number]["abilityId"];
export type HeroAttackType = Hero["stat"]["attackType"];
export type HeroPrimaryAttribute = Hero["stat"]["AttributePrimary"];
export type HeroComplexity = Hero["stat"]["complexity"];
export type HeroAlias = Hero["aliases"][number];
