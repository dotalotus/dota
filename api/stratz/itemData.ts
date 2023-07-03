import { isErr } from "../../deps.ts";
import { Item } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

export async function fetchItemData() {
  const response = await StratzRequester.json("api/v1/Item");
  if (isErr(response)) return response;
  return Object.values(response as unknown as Record<string, Item>);
}
