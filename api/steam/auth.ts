import { createSteamRequester, setSteamRequester } from "./requester.ts";

export let apiKey: string | null = null;
export let endpoint = "api.steampowered.com";

export function setApiKey(newKey: string) {
  apiKey = newKey;
  setSteamRequester(createSteamRequester());
}

export function setEndpoint(newEndpoint: string) {
  endpoint = newEndpoint;
  setSteamRequester(createSteamRequester());
}
