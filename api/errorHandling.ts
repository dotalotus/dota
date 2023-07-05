import { CaptureErr, Err, isErr, Requester } from "../deps.ts";

type InnerType<T> = T extends Promise<infer U> ? U : never;
type RequesterResponse = ReturnType<InstanceType<typeof Requester>["request"]>;

export async function handlePossibleErrorRequest<T>(
  res: InnerType<RequesterResponse>,
) {
  if (isErr(res)) return res;
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
    async (): Promise<T> => await res.json(),
  );
  if (isErr(json)) return json;
  return json;
}
