import { Requester } from "../../deps.ts";
import { apiKey, endpoint } from "./auth.ts";

export let OpendotaRequester = new Requester({
  hostname: endpoint,
  searchParams: new URLSearchParams({ key: apiKey! }),
});

export function setOpendotaRequester(requester: Requester) {
  OpendotaRequester = requester;
}

export function createOpendotaRequester() {
  return new Requester({
    hostname: endpoint,
    searchParams: new URLSearchParams({ key: apiKey! }),
  });
}
