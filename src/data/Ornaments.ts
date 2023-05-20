import data from "./ornaments.json";

/**
 * Get ornament(s).
 *  - https://honkailab.com/honkai-star-rail-relic/ (ornaments picture)
 */
export function getOrnaments(uids: string[]) {
  const out = (data as Ornament[]).filter((_) => uids.includes(_.nameUID));
  return out;
}

/**
 * Ornament.
 */
interface Ornament {
  nameUID: string;
  setEffect2: string;
}
