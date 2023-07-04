import { isErr } from "../../deps.ts";
import { StratzRequester } from "./requester.ts";

export async function fetchLanguageData() {
  const response = await StratzRequester.json<Record<string, string>>(
    "api/v1/Language",
  );
  if (isErr(response)) return response;
  return Object.entries(response).map(
    ([id, name]) => {
      return { id: Number(id), name };
    },
  );
}
