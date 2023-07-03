import { isErr } from "../../deps.ts";
import { GameVersionID, NPC } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

interface Options {
  gameVersionId?: GameVersionID;
}

export async function fetchNPCData(options: Options = {}) {
  const response = await StratzRequester.json("api/v1/NPC", {
    searchParams: new URLSearchParams(
      Object.entries(options).map(([key, value]) => [key, String(value)]),
    ),
  });
  if (isErr(response)) return response;
  return Object.values(response as unknown as Record<string, NPC>);
}
