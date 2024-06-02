import MaterialPanel from "./MaterialPanel";

/**
 * Display one block containing material panels.
 */
export default function MaterialBlock({
  title,
  materials,
  className,
}: {
  title: string;
  materials: { name: string; quantity: number }[];
  className?: string;
}) {
  // Render
  return (
    <div className={"flex flex-col p-4" + (className ? ` ${className}` : "")}>
      {/* Title */}
      <div className="flex items-center space-x-4">
        <span className="h-5 w-0.5 bg-blue-500" />
        <h1 className="font-bold">{title}</h1>
      </div>

      {/* Panel */}
      <div className="m-auto space-y-4 py-4">
        {materials.map((_, idx) => (
          <MaterialPanel name={_.name} quantity={_.quantity} key={idx} />
        ))}
      </div>
    </div>
  );
}
