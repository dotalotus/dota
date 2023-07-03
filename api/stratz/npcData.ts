import { isErr } from "../../deps.ts";
import { NPC } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

export async function fetchNPCData() {
  const response = await StratzRequester.json("api/v1/NPC");
  if (isErr(response)) return response;
  return Object.values(response as unknown as Record<string, NPC>);
}
