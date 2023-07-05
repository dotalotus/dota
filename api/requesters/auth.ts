import {
  createDotaRequester,
  createOpendotaRequester,
  createSteamRequester,
  createStratzRequester,
  setDotaRequester,
  setOpendotaRequester,
  setSteamRequester,
  setStratzRequester,
} from "./requester.ts";

export let steamApiKey: string | null = null;
export let steamEndpoint = "api.steampowered.com";

export function setSteamApiKey(newKey: string) {
  steamApiKey = newKey;
  setSteamRequester(createSteamRequester());
}

export function setSteamEndpoint(newEndpoint: string) {
  steamEndpoint = newEndpoint;
  setSteamRequester(createSteamRequester());
}

export let stratzBearerToken: string | null = null;
export let stratzEndpoint = "api.stratz.com";

export function setStratzBearerToken(newKey: string) {
  stratzBearerToken = newKey;
  setStratzRequester(createStratzRequester());
}

export function setStratzEndpoint(newEndpoint: string) {
  stratzEndpoint = newEndpoint;
  setStratzRequester(createStratzRequester());
}

export let opendotaApiKey: string | null = null;
export let opendotaApiEndpoint = "api.opendota.com";

export function setOpendotaApiKey(newKey: string) {
  opendotaApiKey = newKey;
  setOpendotaRequester(createOpendotaRequester());
}

export function setOpendotaEndpoint(newEndpoint: string) {
  opendotaApiEndpoint = newEndpoint;
  setOpendotaRequester(createOpendotaRequester());
}

export let dotaEndpoint = "www.dota2.com";

export function setDotaEndpoint(newEndpoint: string) {
  dotaEndpoint = newEndpoint;
  setDotaRequester(createDotaRequester());
}
