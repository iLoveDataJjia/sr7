import MaterialPannel from "./MaterialPannel";
import { Ascension } from "@/data/characters";

/**
 * Display one block of Ascension materials per level.
 */

export default function AscensionMaterialsPerLevel({ data }: { data: { level: number; materials: Ascension[] } }) {
  // Render
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center space-x-3 self-start">
        {/* Title */}
        <span className="h-5 w-0.5 bg-blue-500" />
        <h1 className="font-bold">
          Lv. {data.level} &#8594; {data.level}+
        </h1>
      </div>
      {/* Pannel */}
      <div className="space-y-4 p-4">
        {data.materials.map((_, idx) => (
          <div key={idx} className="">
            <MaterialPannel name={_.name} quantity={_.quantity} />
          </div>
        ))}
      </div>
    </div>
  );
}
