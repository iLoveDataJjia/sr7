import data from "./ornaments.json";

/**
 * Get ornament(s).
 *  - https://honkailab.com/honkai-star-rail-relic/ (ornaments picture)
 */
export function getOrnaments(nameUIDs: string[]) {
  if (!nameUIDs) return data as Ornament[];
  else return (data as Ornament[]).filter((_) => nameUIDs.includes(_.nameUID));
}

/**
 * Ornament.
 */
interface Ornament {
  nameUID: string;
  setEffect2: string;
}
