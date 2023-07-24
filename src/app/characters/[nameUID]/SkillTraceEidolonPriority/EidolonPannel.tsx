import EidolonPannelHover from "./EidolonPannelHover";
import { Character, Eidolon } from "@/data/characters";
import Image from "next/image";

/**
 * Eidolon pannel.
 */

export default function EidolonPannel({
  character,
  typeUID,
  priorityIdx,
}: {
  character: Character;
  typeUID: Eidolon;
  priorityIdx: number;
}) {
  // Get data
  const data = character.static.eidolons.filter((_) => _.typeUID === typeUID)[0];

  // Render
  return (
    <div className="group relative flex h-[119px] w-[100px] flex-col-reverse rounded-md bg-indigo-900 shadow hover:bg-indigo-800">
      {/* Displayed */}
      {priorityIdx !== -1 && (
        <div className="absolute -right-3 -top-3 h-7 w-7 rounded-full bg-gray-700 text-center shadow">
          <span className="font-semibold text-white">{priorityIdx + 1}</span>
        </div>
      )}
      <div
        className="flex flex-col items-center space-y-1 self-stretch rounded-md bg-gray-700 px-2 shadow
      group-hover:bg-gray-600"
      >
        <p className="text-center text-xs font-semibold">{typeUID}</p>
      </div>
      <div className="my-auto flex flex-col items-center space-y-3">
        <Image src={`/assets/characters/${character.nameUID}/${typeUID}.webp`} alt={data.name} width={40} height={40} />
        <p className="w-28 px-2 text-center text-xs font-semibold">{data.name}</p>
      </div>
      {/* Hovering */}
      <EidolonPannelHover typeUID={data.typeUID} name={data.name} desc={data.desc} />
    </div>
  );
}
