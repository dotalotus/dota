import { DotaTopLiveGame } from "../../mod.ts";
import { handlePossibleErrorRequest } from "../errorHandling.ts";
import { SteamRequester } from "../requesters/requester.ts";

export async function fetchTopLiveGames(partner: number | string) {
  const res = await SteamRequester.request(
    "IDOTA2Match_570/GetTopLiveGame/v1",
    {
      searchParams: new URLSearchParams({ partner: partner.toString() }),
    },
  );
  return await handlePossibleErrorRequest<DotaTopLiveGame>(res);
}
