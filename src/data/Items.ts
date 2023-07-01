import items from "./items.json";

/**
 * Get item.
 */
export function getItem(nameUID: string) {
  return items.filter((_) => _.nameUID === nameUID)[0] as Item;
}

/**
 * Item.
 */
export interface Item {
  nameUID: string;
  star: 5 | 4 | 3 | 2;
}
