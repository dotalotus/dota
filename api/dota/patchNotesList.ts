import { isErr } from "../../deps.ts";
import { DotaPatchNotesListEntry } from "../../mod.ts";
import { DotaRequester } from "../requesters/mod.ts";

export async function getPatchNotesList(language = "english") {
  const res = await DotaRequester.json<{ patches: DotaPatchNotesListEntry[] }>(
    "datafeed/patchnotes",
    {
      searchParams: new URLSearchParams({ language }),
    },
  );
  if (isErr(res)) return res;
  return res.patches;
}
