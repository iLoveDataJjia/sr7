import SkillPannelHover from "./SkillPannelHover";
import { Character, Skill } from "@/data/Characters";

/**
 * Skill pannel.
 */
export default function SkillPannel({ character, typeUID }: { character: Character; typeUID: Skill }) {
  // Get data
  const data = character.static.skills.filter((_) => _.typeUID === typeUID)[0];

  // Render
  return (
    <div className="group relative flex items-center rounded-md bg-indigo-900 shadow hover:bg-indigo-800">
      {/* Displayed */}
      <div
        className="flex h-24 w-16 flex-col items-center justify-center space-y-1 self-stretch rounded-md bg-gray-700 px-2 shadow
          group-hover:bg-gray-600"
      >
        <img src={`/characters/${character.nameUID}/${typeUID}.webp`} alt={data.name} className="h-10 w-10" />
        <p className="text-center text-xs font-semibold">{typeUID}</p>
      </div>
      <p className="w-28 px-2 text-center text-xs font-semibold">{data.name}</p>

      {/* Hovered */}
      <SkillPannelHover
        typeUID={data.typeUID}
        name={data.name}
        source={data.source}
        cost={data.cost}
        desc={data.desc}
        enhanced={data.enhanced}
      />
    </div>
  );
}
