import { Hero, Heroes } from "../mod.ts";

export const HeroByID = new Map<number, Hero>(
  Heroes.map((hero) => [hero.id, hero]),
);
export const HeroByName = new Map<string, Hero>(
  Heroes.map((hero) => [hero.name, hero]),
);
export const HeroByShortName = new Map<string, Hero>(
  Heroes.map((hero) => [hero.shortName, hero]),
);
export function GetHero(selector: string | number) {
  if (!isNaN(+selector)) {
    const id = +selector;
    if (HeroByID.has(id)) return HeroByID.get(id);
    return null;
  }
  if (typeof selector === "string") {
    if (HeroByName.has(selector)) return HeroByName.get(selector);
    if (HeroByShortName.has(selector)) return HeroByShortName.get(selector);
  }
  return null;
}
