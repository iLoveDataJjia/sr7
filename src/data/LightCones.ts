import { Path } from "./Utils";
import data from "./lightcones.json";

/**
 * Get light cone(s).
 *  - https://honkailab.com/honkai-star-rail-light-cones/ (light cones picture)
 */
export function getLightCones(uids: string[]) {
  const out = (data as LightCone[]).filter((_) => uids.includes(_.nameUID));
  return out;
}

/**
 * Light Cone.
 */
interface LightCone {
  nameUID: string;
  path: Path;
  star: number;
  source: string;
  desc: string;
}
