import { isErr } from "../../deps.ts";
import { GameVersion } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

export async function fetchGameVersionData() {
  const response = await StratzRequester
    .json("api/v1/GameVersion");
  if (isErr(response)) {
    return response;
  }
  return Object.values(response as unknown as GameVersion[]);
}
