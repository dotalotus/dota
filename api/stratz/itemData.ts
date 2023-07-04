import { isErr } from "../../deps.ts";
import { GameVersionID, Item, LanguageID } from "../../mod.ts";
import { StratzRequester } from "./requester.ts";

interface Options {
  gameVersionId?: GameVersionID;
  lanaugageId?: LanguageID;
}

export async function fetchItemData(options: Options = {}) {
  const response = await StratzRequester.json<Record<string, Item>>(
    "api/v1/Item",
    {
      searchParams: new URLSearchParams(
        Object.entries(options).map(([key, value]) => [key, String(value)]),
      ),
    },
  );
  if (isErr(response)) return response;
  return Object.values(response);
}
