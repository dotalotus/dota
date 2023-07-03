import { isErr } from "../../deps.ts";
import { Gamemode } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

export async function fetchGamemodeData() {
  const response = await StratzRequester.json("api/v1/Gamemode");
  if (isErr(response)) return response;
  return Object.values(response as unknown as Record<string, Gamemode>);
}
