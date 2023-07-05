import { OpendotaMatchDetails } from "../../mod.ts";
import { OpendotaRequester } from "../requesters/mod.ts";

export async function fetchMatchDetails(matchid: string | number) {
  return await OpendotaRequester.json<OpendotaMatchDetails>(
    `api/matches/${matchid}`,
  );
}
