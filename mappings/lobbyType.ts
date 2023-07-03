import { LobbyType, LobbyTypes } from "../mod.ts";

export const LobbyTypeByID = new Map<number, LobbyType>(
  LobbyTypes.map((
    lobbyType,
  ) => [lobbyType.id, lobbyType as unknown as LobbyType]),
);

export const LobbyTypeByName = new Map<string, LobbyType>(
  LobbyTypes.map((
    lobbyType,
  ) => [lobbyType.name, lobbyType as unknown as LobbyType]),
);

export const LobbyTypeByLangKey = new Map<string, LobbyType>(
  LobbyTypes.map((
    lobbyType,
  ) => [lobbyType.langKey, lobbyType as unknown as LobbyType]),
);

export function GetLobbyType(selector: string | number) {
  if (!isNaN(+selector)) {
    const id = +selector;
    if (LobbyTypeByID.has(id)) return LobbyTypeByID.get(id);
    return null;
  }
  if (typeof selector === "string") {
    if (LobbyTypeByName.has(selector)) return LobbyTypeByName.get(selector);
    if (LobbyTypeByLangKey.has(selector)) {
      return LobbyTypeByLangKey.get(selector);
    }
  }
  return null;
}
