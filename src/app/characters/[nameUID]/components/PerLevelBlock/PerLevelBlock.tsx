import MaterialPannel from "../MaterialPannel";
import LevelTitleFormat from "./LevelTitleFormat";

/**
 * Per level part(s) of (?) materials.
 */
export default function PerLevelBlock({
  level,
  materials,
  format,
}: {
  level: number;
  materials: { name: string; quantity: number }[];
  format: string;
}) {
  return (
    <div className="flex flex-col p-4">
      {/* Title */}
      <LevelTitleFormat level={level} format={format} />
      {/* Pannel */}
      <div className="space-y-4 p-4">
        {materials.map((_, idx) => (
          <div key={idx}>
            <MaterialPannel name={_.name} quantity={_.quantity} />
          </div>
        ))}
      </div>
    </div>
  );
}
