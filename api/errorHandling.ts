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
  const text = await CaptureErr("Text Error", async () => await res.text());
  if (isErr(text)) return text;
  const json = await CaptureErr(
    "JSON Error",
    (): T => JSON.parse(text),
  );
  if (isErr(json)) {
    return new Err(json.name, json.message + "\n" + text);
  }
  return json;
}
