/**
 * Total Writing format of (?) materials.
 */
export default function TotalTitleFormat({ format }: { format: string }) {
  return (
    <div className="flex items-center space-x-4">
      <span className="h-5 w-0.5 bg-blue-500" />
      <h1 className="font-bold">{format === "ascension" || format === "basicAtk" ? "Total" : "Total for each"}</h1>
    </div>
  );
}
