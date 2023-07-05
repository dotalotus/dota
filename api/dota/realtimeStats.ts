import { DotaRealtimeStats } from "../../types/api/dota/realtimeStats.ts";
import { handlePossibleErrorRequest } from "../errorHandling.ts";
import { SteamRequester } from "../requesters/requester.ts";

export async function fetchRealtimeStats(serverSteamId: string) {
  const res = await SteamRequester.request(
    "IDOTA2MatchStats_570/GetRealtimeStats/v1",
    {
      searchParams: new URLSearchParams({ server_steam_id: serverSteamId }),
    },
  );
  return handlePossibleErrorRequest<DotaRealtimeStats>(
    res,
  );
}
