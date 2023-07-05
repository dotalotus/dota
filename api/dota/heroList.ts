import { isErr } from "../../deps.ts";
import { DotaHeroListHero } from "../../mod.ts";
import { DotaRequester } from "../requesters/mod.ts";

export async function fetchHeroList(language = "english") {
  const res = await DotaRequester.json<
    { result: { data: { heroes: DotaHeroListHero[] } } }
  >("datafeed/herolist", {
    searchParams: new URLSearchParams({ language }),
  });
  if (isErr(res)) return res;
  return res.result.data.heroes;
}
