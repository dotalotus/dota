import { isErr } from "../../deps.ts";
import { GameVersion } from "../../mod.ts";
import { StratzRequester } from "../requesters/mod.ts";

export async function fetchGameVersionData() {
  const response = await StratzRequester
    .json<GameVersion[]>("api/v1/GameVersion");
  if (isErr(response)) {
    return response;
  }
  return Object.values(response);
}
