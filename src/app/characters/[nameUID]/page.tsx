import Comp from "./components/Comp";
import Equipement from "./components/Equipement";
import General from "./components/General";
import SkillTracePriority from "./components/SkillTracePriority";
import { getCharacters } from "@/data/Characters";

/**
 * Route entrypoint.
 */
export default function Page({ params: { nameUID } }: { params: { nameUID: string } }) {
  // Get character
  const character = getCharacters([nameUID])[0];

  // Render
  return (
    <div className="m-4 space-y-8">
      <General character={character} />
      <Equipement character={character} />
      <SkillTracePriority character={character} />
      <Comp character={character} />
    </div>
  );
}
