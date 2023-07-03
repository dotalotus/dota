import { api } from "./mod.ts";

if (!Deno.env.has("STRATZ_BEARER_TOKEN")) throw new Error("No api token");

api.stratz.setBearerToken(Deno.env.get("STRATZ_BEARER_TOKEN")!);

const result = await api.stratz.fetchGameVersionData();
console.log(result);
