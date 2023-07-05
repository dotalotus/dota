import { isErr } from "../../deps.ts";
import { GameVersionID, Hero, LanguageID } from "../../mod.ts";
import { StratzRequester } from "../requesters/mod.ts";

interface Options {
  gameVersionId?: GameVersionID;
  languageId?: LanguageID;
}

export async function fetchHeroData(
  options: Options = {},
) {
  const res = await StratzRequester.json<Record<string, Hero>>("api/v1/Hero", {
    searchParams: new URLSearchParams(
      Object.entries(options).map(([key, value]) => [key, String(value)]),
    ),
  });
  if (isErr(res)) return res;
  return Object.values(res);
}
