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
    <div className="group relative flex h-32 w-24 flex-col-reverse rounded-md bg-indigo-900 shadow hover:bg-indigo-800">
      {/* Displayed */}
      {priorityIdx !== -1 && (
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 scale-90 rounded-full bg-gray-700 px-3 py-1.5 text-sm font-bold shadow group-hover:bg-gray-600">
          {priorityIdx + 1}
        </div>
      )}
      <div
        className="flex flex-col items-center space-y-1 self-stretch rounded-md bg-gray-700 px-2 shadow
      group-hover:bg-gray-600"
      >
        <p className="p-0.5 text-center text-xs font-semibold">{typeUID}</p>
      </div>
      <div className="my-auto flex flex-col items-center space-y-3">
        <Image src={`/assets/characters/${character.nameUID}/${typeUID}.webp`} alt={data.name} width={40} height={40} />
        <p className="w-28 px-5 pb-0.5 text-center text-xs font-semibold">{data.name}</p>
      </div>

      {/* Hovering */}
      <EidolonPannelHover typeUID={data.typeUID} name={data.name} desc={data.desc} />
    </div>
  );
}
