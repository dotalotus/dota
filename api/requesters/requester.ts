import { Requester } from "../../deps.ts";
import {
  opendotaApiEndpoint,
  opendotaApiKey,
  steamApiKey,
  steamEndpoint,
  stratzBearerToken,
  stratzEndpoint,
} from "./auth.ts";

export let SteamRequester = createSteamRequester();

export function setSteamRequester(requester: Requester) {
  SteamRequester = requester;
}

export function createSteamRequester(
  requesterInit: ConstructorParameters<typeof Requester>[0] = {},
) {
  return new Requester({
    ...requesterInit,
    hostname: steamEndpoint,
    searchParams: new URLSearchParams({ key: steamApiKey! }),
  });
}

export let StratzRequester = createStratzRequester();

export function setStratzRequester(requester: Requester) {
  StratzRequester = requester;
}

export function createStratzRequester(
  requesterInit: ConstructorParameters<typeof Requester>[0] = {},
) {
  return new Requester({
    ...requesterInit,
    hostname: stratzEndpoint,
    requestInit: {
      headers: {
        Authorization: "Bearer " + stratzBearerToken!,
        "Content-Type": "application/json",
      },
    },
  });
}

export let OpendotaRequester = new Requester({
  hostname: opendotaApiEndpoint,
  searchParams: new URLSearchParams({ key: opendotaApiKey! }),
});

export function setOpendotaRequester(requester: Requester) {
  OpendotaRequester = requester;
}

export function createOpendotaRequester(
  requesterInit: ConstructorParameters<typeof Requester>[0] = {},
) {
  return new Requester({
    ...requesterInit,
    hostname: opendotaApiEndpoint,
    searchParams: new URLSearchParams({ api_key: opendotaApiKey! }),
  });
}

import { dotaEndpoint } from "./auth.ts";

export let DotaRequester = createDotaRequester();

export function setDotaRequester(requester: Requester) {
  DotaRequester = requester;
}

export function createDotaRequester(
  requesterInit: ConstructorParameters<typeof Requester>[0] = {},
) {
  return new Requester({
    ...requesterInit,
    hostname: dotaEndpoint,
  });
}
