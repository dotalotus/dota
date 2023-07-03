import { CaptureErr, color, isErr } from "../deps.ts";
import { api } from "../mod.ts";

import { fmtData } from "./fmtData.ts";
import { updateAbilityData } from "./updateAbilityData.ts";
import { updateGameVersionData } from "./updateGameVersionData.ts";
import { updateGamemodeData } from "./updateGamemodeData.ts";
import { updateHeroData } from "./updateHeroData.ts";
import { updateItemData } from "./updateItemData.ts";

export const dataUpdateScripts = [
  updateHeroData,
  updateAbilityData,
  updateGameVersionData,
  updateItemData,
  updateGamemodeData,
];

export async function runDataUpdateScripts() {
  const dir = CaptureErr(
    "Data dir doesn't exist",
    () => Deno.readDirSync("./data"),
  );
  if (isErr(dir)) await Deno.mkdir("./data");
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
  for (const updateScript of dataUpdateScripts) {
    const now = String(performance.now());
    console.info(
      `${color.gray(`[ ${now.slice(0, now.indexOf(".") + 2).padStart(6)} ]`)} ${
        color.white("Running script")
      } ${color.yellow(updateScript.name)}`,
    );
    // deno-lint-ignore no-await-in-loop
    await updateScript();
  }
  await fmtData();
}
