import { isErr } from "../../deps.ts";
import { Gamemode } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

export async function fetchGamemodeData() {
  const response = await StratzRequester.json<Record<string, Gamemode>>(
    "api/v1/Gamemode",
  );
  if (isErr(response)) return response;
  return Object.values(response);
}
