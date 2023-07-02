import { Requester } from "../../deps.ts";
import { bearerToken, endpoint } from "./auth.ts";

export let StratzRequester = new Requester({
  hostname: endpoint,
  requestInit: {
    headers: {
      Authorization: "Bearer " + bearerToken!,
      "Content-Type": "application/json",
    },
  },
});

export function setStratzRequester(requester: Requester) {
  StratzRequester = requester;
}

export function createStratzRequester() {
  return new Requester({
    hostname: endpoint,
    requestInit: {
      headers: {
        Authorization: "Bearer " + bearerToken!,
        "Content-Type": "application/json",
      },
    },
  });
}
