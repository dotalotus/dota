import { Hero, Heroes } from "../mod.ts";

export const HeroByID = new Map<number, Hero>(
  Heroes.map((hero) => [hero.id, hero as unknown as Hero]),
);
export const HeroByName = new Map<string, Hero>(
  Heroes.map((hero) => [hero.name, hero as unknown as Hero]),
);
export const HeroByShortName = new Map<string, Hero>(
  Heroes.map((hero) => [hero.shortName, hero as unknown as Hero]),
);
export const HeroByAlias = new Map<string, Hero>(
  Heroes.flatMap((hero) =>
    hero.aliases.map((alias) => [alias, hero as unknown as Hero])
  ),
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
    if (HeroByAlias.has(selector)) return HeroByAlias.get(selector);
  }
  return null;
}
