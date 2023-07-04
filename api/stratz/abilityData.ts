import { isErr } from "../../deps.ts";
import { Ability, GameVersionID, LanguageID } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

interface Options {
  gameVersionId?: GameVersionID;
  lanaugageId?: LanguageID;
}

export async function fetchAbilityData(options: Options = {}) {
  const response = await StratzRequester
    .json<Record<string, Ability>>("api/v1/Ability", {
      searchParams: new URLSearchParams(
        Object.entries(options).map(([key, value]) => [key, String(value)]),
      ),
    });
  if (isErr(response)) {
    return response;
  }
  return Object.values(response);
}
