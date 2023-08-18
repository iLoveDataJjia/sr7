import PerLevelBlock from "./PerLevelBlock";
import TotalBlock from "./TotalBlock";
import { Character } from "@/data/characters";
import Image from "next/image";

/**
 * Ascension materials tab.
 */
export default function AscensionMaterials({ character }: { character: Character }) {
  // Get Data
  const data = character.static.ascensionMats;

  // Render
  return (
    <div className="flex flex-col">
      {/* Section Title */}
      <div className="flex items-center space-x-4 self-start rounded-t-md border-t-2 border-t-amber-500 bg-indigo-950 px-4 py-2">
        <h1 className="text-lg font-bold">Ascension materials</h1>
        <div className="flex">
          <Image
            src={`/assets/items/materials/${data.total.materials[3].name}.webp`}
            alt={data.total.materials[3].name}
            width={30}
            height={30}
          />
          <Image
            src={`/assets/items/materials/${data.total.materials[0].name}.webp`}
            alt={data.total.materials[0].name}
            width={30}
            height={30}
          />
        </div>
      </div>

      {/* Materials display */}
      <div className="flex rounded-b-md rounded-r-md bg-indigo-950">
        <div className="grid grid-cols-3">
          {data.perLevel.map((materialsPerLevel, idx) => (
            <div key={idx} className={"border-r-2 border-slate-950" + (idx < 3 ? " border-b-2" : "")}>
              <PerLevelBlock level={materialsPerLevel.level} materials={materialsPerLevel.materials} />
            </div>
          ))}
        </div>
        <TotalBlock materials={data.total.materials} />
      </div>
    </div>
  );
}
