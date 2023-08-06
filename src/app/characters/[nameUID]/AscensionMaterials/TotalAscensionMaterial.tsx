import MaterialPannel from "./MaterialPannel";
import TextHighlighter from "@/components/TextHighlighter";
import { Ascension } from "@/data/characters";

/**
 * Swap two elements of an ascension list.
 */

function swapList({
  ascensions,
  index_a,
  index_b,
}: {
  ascensions: Ascension[];
  index_a: number;
  index_b: number;
}): Ascension[] {
  const tempAscension = ascensions[index_a];
  ascensions[index_a] = ascensions[index_b];
  ascensions[index_b] = tempAscension;
  return ascensions;
}

/**
 * Calculate the total of each materials needed.
 */

function CalcAscensionMat(data: { level: number; materials: Ascension[] }[]) {
  // Initializing
  var totalMaterials: Ascension[] = [];
  const materialSeen: string[] = [];

  // Computing
  data.forEach((ascension) => {
    ascension.materials.forEach((material) => {
      if (materialSeen.includes(material.name)) {
        const materialIdx = materialSeen.indexOf(material.name);
        totalMaterials[materialIdx].quantity += material.quantity;
      } else {
        totalMaterials.push(Object.assign({}, material));
        materialSeen.push(material.name);
      }
    });
  });

  totalMaterials = swapList({ ascensions: totalMaterials, index_a: 1, index_b: 2 });
  totalMaterials = swapList({ ascensions: totalMaterials, index_a: 1, index_b: 3 });
  totalMaterials = swapList({ ascensions: totalMaterials, index_a: 2, index_b: 4 });

  return totalMaterials;
}

/**
 * Display the part "total" of Ascension materials.
 */

export default function TotalAscensionMat({
  data,
}: {
  data: { level: number; materials: Ascension[] }[];
}): JSX.Element {
  // Get total of each Materials
  const totalMaterials = CalcAscensionMat(data);

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
        {totalMaterials.map((_, idx) => (
          <MaterialPannel name={_.name} quantity={_.quantity} key={idx} />
        ))}
      </div>
    </div>
  );
}
