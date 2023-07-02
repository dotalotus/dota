import { color } from "../deps.ts";
import { runDataUpdateScripts } from "./mod.ts";

switch (Deno.args[0]) {
  case "update":
    runDataUpdateScripts();
    break;
  default:
    console.error(color.red("Unknown command: "), Deno.args[0]);
    break;
}
