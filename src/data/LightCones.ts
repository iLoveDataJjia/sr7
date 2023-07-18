import data from "./lightcones.json";
import { Path } from "./utils";

/**
 * Get light cone(s).
 *  - https://honkailab.com/honkai-star-rail-light-cones/ (light cones picture)
 */
export function getLightCones(nameUIDs: string[]) {
  if (!nameUIDs) return data as LightCone[];
  else return (data as LightCone[]).filter((_) => nameUIDs.includes(_.nameUID));
}

/**
 * Light Cone.
 */
interface LightCone {
  nameUID: string;
  path: Path;
  star: 5 | 4 | 3;
  source: string;
  desc: string;
}
