import MaterialPannel from "../MaterialPannel";
import TotalTitleFormat from "./TotalTitleFormat";

/**
 * Total part of (?) materials.
 */
export default function TotalBlock({
  materials,
  format,
}: {
  materials: { name: string; quantity: number }[];
  format: string;
}): JSX.Element {
  // Render
  return (
    <div className="flex flex-1 flex-col border-l-2 border-slate-950 p-4">
      {/* Title */}
      <TotalTitleFormat format={format} />

      {/* Pannel */}
      <div className="m-auto space-y-3 p-2">
        {materials.map((_, idx) => (
          <MaterialPannel name={_.name} quantity={_.quantity} key={idx} />
        ))}
      </div>
    </div>
  );
}
