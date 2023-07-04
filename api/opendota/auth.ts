import { createOpendotaRequester, setOpendotaRequester } from "./requester.ts";

export let apiKey: string | null = null;
export let endpoint = "api.opendota.com";

export function setApiKey(newKey: string) {
  apiKey = newKey;
  setOpendotaRequester(createOpendotaRequester());
}

export function setEndpoint(newEndpoint: string) {
  endpoint = newEndpoint;
  setOpendotaRequester(createOpendotaRequester());
}
