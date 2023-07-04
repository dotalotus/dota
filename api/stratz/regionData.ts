import { isErr } from "../../deps.ts";
import { Region } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

export async function fetchRegionData() {
  const response = await StratzRequester.json<Region[]>("api/v1/Region");
  if (isErr(response)) return response;
  return response;
}
