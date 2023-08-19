import MaterialPannel from "./MaterialPannel";

/**
 * Total part of (?) materials.
 */
export default function TotalBlock({
  materials,
  title,
}: {
  materials: { name: string; quantity: number }[];
  title: string;
}): JSX.Element {
  // Render
  return (
    <div className="flex flex-1 flex-col border-l-2 border-slate-950 p-4">
      {/* Title */}
      <div className="flex items-center space-x-4">
        <span className="h-5 w-0.5 bg-blue-500" />
        <h1 className="font-bold">{title}</h1>
      </div>

      {/* Pannel */}
      <div className="m-auto space-y-4 p-2">
        {materials.map((_, idx) => (
          <MaterialPannel name={_.name} quantity={_.quantity} key={idx} />
        ))}
      </div>
    </div>
  );
}
