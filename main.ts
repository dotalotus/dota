import { api } from "./mod.ts";

if (!Deno.env.has("STRATZ_BEARER_TOKEN")) throw new Error("No api token");
if (!Deno.env.has("OPENDOTA_API_KEY")) throw new Error("No api token");

api.stratz.setBearerToken(Deno.env.get("STRATZ_BEARER_TOKEN")!);
api.opendota.setApiKey(Deno.env.get("OPENDOTA_API_KEY")!);

const result = await api.opendota.fetchPlayerOverview(291312264);
console.log(result);
