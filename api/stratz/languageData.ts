import { isErr } from "../../deps.ts";
import { StratzRequester } from "./requester.ts";

export async function fetchLanguageData() {
  const response = await StratzRequester.json("api/v1/Language");
  if (isErr(response)) return response;
  return Object.entries(response as unknown as Record<string, string>).map(
    ([id, name]) => {
      return { id: Number(id), name };
    },
  );
}
