import AscensionMaterialsPerLevel from "./AscensionMaterialsPerLevel";
import TotalAscensionMat from "./TotalAscensionMaterial";
import { Character } from "@/data/characters";
import Image from "next/image";

/**
 * Calculate the total ascension materials.
 */

export default function AscensionMaterials({ character }: { character: Character }) {
  // Get Data
  const data = character.static.ascensionsPerLevel;

  // Render
  return (
    <div className="flex flex-col">
      {/* Section Title */}
      <div className="flex items-center space-x-2 self-start rounded-t-md border-t-2 border-t-amber-300 bg-indigo-950 px-4 py-2">
        <h1 className="text-lg font-bold">Ascension materials</h1>
        <Image
          src={`/assets/items/materials/${data[2].materials[0].name}.webp`}
          alt={data[2].materials[0].name}
          width={30}
          height={30}
        />
        <Image
          src={`/assets/items/materials/${data[0].materials[0].name}.webp`}
          alt={data[0].materials[0].name}
          width={30}
          height={30}
        />
      </div>
      <div className="flex rounded-b-md rounded-r-md bg-indigo-950">
        {/* Materials display */}
        <div className="grid grid-cols-3">
          {data.map((ascensionPerLevel, idx) => (
            <div key={idx} className={"border-r-2 border-slate-950" + (idx < 3 ? " border-b-2" : "")}>
              <AscensionMaterialsPerLevel data={ascensionPerLevel} />
            </div>
          ))}
        </div>
        <TotalAscensionMat data={data} />
      </div>
    </div>
  );
}
