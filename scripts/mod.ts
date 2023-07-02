import { setBearerToken } from "../api/stratz/auth.ts";
import { color } from "../deps.ts";
import { api } from "../mod.ts";

import { fmtData } from "./fmtData.ts";
import { updateHeroData } from "./updateHeroData.ts";

export const updateScripts = [
  updateHeroData,
];

export async function runUpdateScripts() {
  const key = Deno.env.get("STRATZ_BEARER_TOKEN");
  if (key === undefined) {
    throw new Error(
      color.red("Bearer token not set for Stratz: ") + "STRATZ_BEARER_TOKEN",
    );
  }
  api.stratz.setBearerToken(key);
  console.info(
    `${color.gray("[     ms ]")} ${color.blue("Running Update Scripts...")}`,
  );
  for (const updateScript of updateScripts) {
    const now = String(performance.now());
    console.info(
      `${color.gray(`[ ${now.slice(0, now.indexOf(".") + 2).padStart(6)} ]`)} ${
        color.white("Running script")
      } ${color.yellow(updateScript.name)}`,
    );
    await updateScript();
  }
  await fmtData();
}