import { CaptureErr, Err, isErr } from "../../deps.ts";
import { SteamMatchHistoryBySequenceNum } from "../../mod.ts";
import { SteamRequester } from "../steam/requester.ts";

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
  if (isErr(res)) {
    return res;
  }
  if (res.status === 403) {
    return new Err(
      "Invalid API Key",
      "You are either using an invalid API key or you haven't set one",
    );
  }
  if (res.status === 429) {
    return new Err(
      "Rate Limit Exceeded",
      "You have exceeded the rate limit for this endpoint",
    );
  }
  const json = await CaptureErr(
    "JSON Error",
    async (): Promise<SteamMatchHistoryBySequenceNum> => await res.json(),
  );
  if (isErr(json)) {
    return json;
  }
  if (json.result.status === 8) {
    return new Err(
      "Invalid Matches Requested",
      "matches_requested must be greater than 0",
    );
  }
  return json.result.matches;
}
