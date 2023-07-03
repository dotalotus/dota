import { isErr } from "../../deps.ts";
import { Ability } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

export async function fetchAbilityData() {
  const response = await StratzRequester
    .json("api/v1/Ability");
  if (isErr(response)) {
    return response;
  }
  return Object.values(response as unknown as Record<string, Ability>);
}
