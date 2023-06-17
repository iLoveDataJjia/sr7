import TracePannelHover from "./TracePannelHover";
import { Character, Trace } from "@/data/Characters";

/**
 * Trace pannel.
 */
export default function TracePannel({ character, typeUID }: { character: Character; typeUID: Trace }) {
  // Get data
  const data = character.static.traces.filter((_) => _.typeUID === typeUID)[0];

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
      <TracePannelHover typeUID={typeUID} name={data.name} desc={data.desc} minors={data.minors} />
    </div>
  );
}
