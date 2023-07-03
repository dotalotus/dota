import { fetchLanguageData } from "../api/stratz/mod.ts";
import { isErr } from "../deps.ts";

const path = "./data/languages.ts";

export async function updateLanguageData() {
  const languageData = await fetchLanguageData();
  if (isErr(languageData)) {
    throw languageData;
  }
  await Deno.writeTextFile(
    path,
    `export const Languages = ${JSON.stringify(languageData)} as const;`,
    {
      create: true,
    },
  );
}
