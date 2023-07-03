import { Item, Items } from "../mod.ts";

export const ItemByID = new Map<number, Item>(
  Items.map((item) => [item.id as number, item as unknown as Item]),
);

export const ItemByName = new Map<string, Item>(
  Items.map((item) => [item.name as string, item as unknown as Item]),
);

export const ItemByShortName = new Map<string, Item>(
  Items.map((item) => [item.shortName as string, item as unknown as Item]),
);

export const ItemByDisplayName = new Map<string, Item>(
  Items.map((item) => [item.displayName as string, item as unknown as Item]),
);

export function GetItem(selector: string | number) {
  if (!isNaN(+selector)) {
    const id = +selector;
    if (ItemByID.has(id)) return ItemByID.get(id);
    return null;
  }
  if (typeof selector === "string") {
    if (ItemByName.has(selector)) return ItemByName.get(selector);
    if (ItemByShortName.has(selector)) return ItemByShortName.get(selector);
    if (ItemByDisplayName.has(selector)) return ItemByDisplayName.get(selector);
  }
  return null;
}
