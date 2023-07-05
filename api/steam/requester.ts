import { Requester } from "../../deps.ts";
import { apiKey, endpoint } from "./auth.ts";

export let SteamRequester = new Requester({
  hostname: endpoint,
  searchParams: new URLSearchParams({ key: apiKey! }),
});

export function setSteamRequester(requester: Requester) {
  SteamRequester = requester;
}

export function createSteamRequester() {
  return new Requester({
    hostname: endpoint,
    searchParams: new URLSearchParams({ key: apiKey! }),
  });
}
