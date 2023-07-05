import { Division, DotaLeaderboard } from "../../mod.ts";
import { DotaRequester } from "../requesters/mod.ts";

export async function fetchLeaderboard(division: Division = "americas") {
  return await DotaRequester.json<DotaLeaderboard>(
    "webapi/ILeaderboard/GetDivisionLeaderboard/v0001",
    {
      searchParams: new URLSearchParams({ division, leaderboard: "0" }),
    },
  );
}
