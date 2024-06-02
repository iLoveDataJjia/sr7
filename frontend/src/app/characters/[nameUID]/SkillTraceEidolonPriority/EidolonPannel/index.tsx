import EidolonPannelHover from "./EidolonPannelHover";
import { Character, Eidolon } from "@/data/characters";
import Image from "next/image";

/**
 * Eidolon pannel.
 */
export default function EidolonPannel({
  character,
  typeUID,
  priorityNumber,
}: {
  character: Character;
  typeUID: Eidolon;
  priorityNumber: number | undefined;
}) {
  // Get data
  const data = character.static.eidolons.filter((_) => _.typeUID === typeUID)[0];

  // Render
  return (
    <div className="group relative flex w-24 flex-col self-stretch rounded-md bg-indigo-900 shadow hover:bg-indigo-800">
      {/* Displayed */}
      {priorityNumber && (
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 scale-90 rounded-full bg-gray-700 px-3 py-1.5 text-sm font-bold shadow group-hover:bg-gray-600">
          {priorityNumber}
        </div>
      )}
      <div className="my-auto flex flex-col items-center space-y-1 px-1.5 py-3">
        <Image src={`/assets/characters/${character.nameUID}/${typeUID}.webp`} alt={data.name} width={40} height={40} />
        <p className="text-center text-xs font-semibold">{data.name}</p>
      </div>
      <p className="rounded-md bg-gray-700 py-1 text-center text-xs font-semibold shadow group-hover:bg-gray-600">
        {typeUID}
      </p>

      {/* Hovered */}
      <EidolonPannelHover typeUID={data.typeUID} name={data.name} desc={data.desc} />
    </div>
  );
}
