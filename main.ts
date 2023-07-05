import { isErr } from "./deps.ts";
import { api, GetHero, HeroAlias, HeroByAlias } from "./mod.ts";

if (!Deno.env.has("STRATZ_BEARER_TOKEN")) throw new Error("No api token");

api.stratz.setBearerToken(Deno.env.get("STRATZ_BEARER_TOKEN")!);

// const result = await api.opendota.fetchPlayerMatches(76561198251577992n, {
//   hero_id: GetHero("bara")?.id,
// });

const result = await api.opendota.fetchMatchDetails(7163956977);

console.log(result);
