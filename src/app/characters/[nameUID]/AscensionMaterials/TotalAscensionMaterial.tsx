import MaterialPannel from "./MaterialPannel";
import { Material } from "@/data/characters";

/**
 * Display the part "total" of Ascension materials.
 */
export default function TotalAscensionMat({ data }: { data: { materials: Material[] } }): JSX.Element {
  // Render
  return (
    <div className="flex flex-1 flex-col p-4">
      {/* Title */}
      <div className="flex items-center space-x-4">
        <span className="h-5 w-0.5 bg-blue-500" />
        <h1 className="font-bold">Total</h1>
      </div>

      {/* Pannel */}
      <div className="m-auto space-y-3 p-2">
        {data.materials.map((_, idx) => (
          <MaterialPannel name={_.name} quantity={_.quantity} key={idx} />
        ))}
      </div>
    </div>
  );
}
