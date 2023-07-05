import { HeroName } from "../../hero.ts";
import { HeroPrimaryAttribute } from "../../mod.ts";

export interface DotaHeroListHero {
  id: number;
  name: HeroName;
  name_loc: string;
  name_english_loc: string;
  primary_attr: HeroPrimaryAttribute;
  complexity: number;
}
