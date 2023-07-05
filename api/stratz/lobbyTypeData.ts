import { isErr } from "../../deps.ts";
import { LobbyType } from "../../mod.ts";
import { StratzRequester } from "../requesters/mod.ts";

export async function fetchLobbyTypeData() {
  const response = await StratzRequester.json<Record<string, LobbyType>>(
    "api/v1/LobbyType",
  );
  if (isErr(response)) return response;
  return Object.values(response);
}
