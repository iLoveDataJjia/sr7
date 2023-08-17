import MaterialPannel from "./MaterialPannel";

/**
 * Per level part(s) of ascension materials.
 */
export default function PerLevelBloc({
  level,
  materials,
}: {
  level: number;
  materials: { name: string; quantity: number }[];
}) {
  return (
    <div className="flex flex-col p-4">
      {/* Title */}
      <div className="flex items-center space-x-4">
        <span className="h-5 w-0.5 bg-blue-500" />
        <h1 className="font-bold">
          Lv. {level} &#8594; {level}+
        </h1>
      </div>

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
