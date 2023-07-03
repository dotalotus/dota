import { Abilities, Ability } from "../mod.ts";

export const AbilityByID = new Map<number, Ability>(
  Abilities.map((ability) => [ability.id as number, ability as Ability]),
);

export function GetAbility(id: string | number) {
  if (!isNaN(Number(id))) {
    if (AbilityByID.has(Number(id))) {
      return AbilityByID.get(Number(id));
    }
    return null;
  }
  return null;
}
