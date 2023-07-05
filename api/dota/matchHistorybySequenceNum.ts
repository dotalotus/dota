import { isErr } from "../../deps.ts";
import { DotaMatchHistoryBySequenceNum } from "../../mod.ts";
import { handlePossibleErrorRequest } from "../errorHandling.ts";
import { SteamRequester } from "../requesters/requester.ts";

interface Options {
  start_at_match_seq_num?: number;
  matches_requested?: number;
}

export async function fetchMatchHistoryBySequenceNum(options: Options = {}) {
  const searchParams = new URLSearchParams(
    Object.entries(options).map(([key, value]) => [key, value.toString()]),
  );
  const res = await SteamRequester.request(
    "IDOTA2Match_570/GetMatchHistoryBySequenceNum/v1",
    {
      searchParams,
    },
  );
  const json = await handlePossibleErrorRequest<DotaMatchHistoryBySequenceNum>(
    res,
  );
  if (isErr(json)) return json;
  return json.result.matches;
}
