import data from "./relics.json";

/**
 * Get relic(s).
 *  - https://honkailab.com/honkai-star-rail-relic/ (relics picture)
 */
export function getRelics(uids: string[]) {
  const out = (data as Relic[]).filter((_) => uids.includes(_.nameUID));
  return out;
}

/**
 * Relic.
 */
interface Relic {
  nameUID: string;
  setEffect2: string;
  setEffect4: string;
}
