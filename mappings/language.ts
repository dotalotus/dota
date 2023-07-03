import { Language, Languages } from "../mod.ts";

export const LanguageById = new Map<number, Language>(
  Languages.map((language) => [language.id, language as unknown as Language]),
);

export const LanguageByName = new Map<string, Language>(
  Languages.map((language) => [
    language.name,
    language as unknown as Language,
  ]),
);

export function GetLanguage(selector: string | number) {
  if (!isNaN(+selector)) {
    const id = +selector;
    if (LanguageById.has(id)) return LanguageById.get(id);
    return null;
  }
  if (typeof selector === "string") {
    if (LanguageByName.has(selector)) return LanguageByName.get(selector);
  }
  return null;
}
