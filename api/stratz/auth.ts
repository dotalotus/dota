import { createStratzRequester, setStratzRequester } from "./requester.ts";

export let bearerToken: string | null = null;
export let endpoint = "api.stratz.com";

export function setBearerToken(newKey: string) {
  bearerToken = newKey;
  setStratzRequester(createStratzRequester());
}

export function setEndpoint(newEndpoint: string) {
  endpoint = newEndpoint;
  setStratzRequester(createStratzRequester());
}
