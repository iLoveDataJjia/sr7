import { Character } from "../../data/Characters";
import Comp from "./Comp";
import Equipement from "./Equipement";
import General from "./General";
import SkillTracePriority from "./SkillTracePriority";

/**
 * Route entrypoint.
 */
export default function Index({ character }: { character: Character }) {
  return (
    <div className="m-4 space-y-8">
      <General character={character} />
      <Equipement character={character} />
      <SkillTracePriority character={character} />
      <Comp character={character} />
    </div>
  );
}
