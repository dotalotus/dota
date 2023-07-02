import { isErr } from "../../deps.ts";
import { StratzRequester } from "./requester.ts";

interface Options {
  gameVersionId?: `${number}`;
  languageId?: `${number}`;
}

export async function fetchHeroData(
  options: Options = {},
) {
  const res = await StratzRequester.json("api/v1/Hero", {
    searchParams: new URLSearchParams(Object.entries(options)),
  });
  if (isErr(res)) return res;
  return res;
}
