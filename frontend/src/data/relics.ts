import data from "./relics.json";

/**
 * Get relic(s).
 *  - https://honkailab.com/honkai-star-rail-relic/ (relics picture)
 */
export function getRelics(nameUIDs: string[]) {
  if (!nameUIDs) return data as Relic[];
  else return (data as Relic[]).filter((_) => nameUIDs.includes(_.nameUID));
}

/**
 * Relic.
 */
interface Relic {
  nameUID: string;
  setEffect2: string;
  setEffect4: string;
}
