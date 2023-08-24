import MaterialBlock from "./components/MaterialBlock";
import { Character } from "@/data/characters";
import Image from "next/image";

/**
 * Skill, Talent & Ult materials tab.
 */
export default function SkillTalentUltMaterials({ character }: { character: Character }) {
  // Get Data
  const data = character.static.traceMats;

  // Render
  return (
    <div className="flex flex-col">
      {/* Section Title */}
      <div className="flex items-center space-x-4 self-start rounded-t-md border-y-2 border-b-slate-950 border-t-amber-500 bg-indigo-950 px-4 py-2">
        <h1 className="text-lg font-bold">Skill, Talent & Ult. materials</h1>
        <div className="flex">
          <Image
            src={`/assets/items/materials/${data.skillTalentUlt.total.materials[3].name}.webp`}
            alt={data.skillTalentUlt.total.materials[3].name}
            width={30}
            height={30}
          />
          <Image
            src={`/assets/items/materials/${data.skillTalentUlt.total.materials[0].name}.webp`}
            alt={data.skillTalentUlt.total.materials[0].name}
            width={30}
            height={30}
          />
          <Image
            src={`/assets/items/materials/${data.skillTalentUlt.total.materials[6].name}.webp`}
            alt={data.skillTalentUlt.total.materials[6].name}
            width={30}
            height={30}
          />
          <Image
            src={`/assets/items/materials/${data.skillTalentUlt.total.materials[7].name}.webp`}
            alt={data.skillTalentUlt.total.materials[7].name}
            width={30}
            height={30}
          />
        </div>
      </div>

      {/* Materials display */}
      <div className="flex rounded-b-md rounded-r-md bg-indigo-950">
        <div className="grid flex-grow grid-cols-3 border-r-2 border-slate-950">
          {data.skillTalentUlt.perLevel.map((materialsPerLevel, idx) => (
            <div
              key={idx}
              className={
                "border-slate-950" + (idx >= 3 ? " border-t-2" : "") + ((idx + 1) % 3 !== 0 ? " border-r-2" : "")
              }
            >
              <MaterialBlock
                title={"Lv. " + (materialsPerLevel.level - 1) + " \u2192 " + materialsPerLevel.level}
                materials={materialsPerLevel.materials}
              />
            </div>
          ))}
        </div>
        <MaterialBlock title="Total for each" materials={data.skillTalentUlt.total.materials} className="flex-grow" />
      </div>
    </div>
  );
}
