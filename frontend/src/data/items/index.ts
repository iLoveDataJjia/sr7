import consumables from "./consumables.json";
import generals from "./generals.json";
import materials from "./materials.json";

/**
 * Get item.
 */
export function getItem(nameUID: string) {
  // Search
  const consumable = consumables.filter((_) => _.nameUID === nameUID).at(0);
  const material = materials.filter((_) => _.nameUID === nameUID).at(0);
  const general = generals.filter((_) => _.nameUID === nameUID)[0];

  // Reduce & Return
  const item = consumable ? consumable : material ? material : general;
  const itemType = consumable ? ItemType["consumables"] : general ? ItemType["generals"] : ItemType["materials"];
  return { ...item, type: itemType } as Item;
}

/**
 * Item.
 */
export interface Item {
  nameUID: string;
  type: ItemType;
  star: 5 | 4 | 3 | 2;
}

/**
 * Item type.
 */
export enum ItemType {
  "consumables" = "consumables",
  "generals" = "generals",
  "materials" = "materials",
}
