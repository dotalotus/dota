import { color } from "../deps.ts";
import { runUpdateScripts } from "./mod.ts";

switch (Deno.args[0]) {
  case "update":
    runUpdateScripts();
    break;
  default:
    console.error(color.red("Unknown command: "), Deno.args[0]);
    break;
}
