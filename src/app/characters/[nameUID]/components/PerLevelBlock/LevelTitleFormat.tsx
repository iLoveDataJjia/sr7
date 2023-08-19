/**
 * Level Writing format of (?) materials.
 */
export default function LevelFormat({ level, format }: { level: number; format: string }) {
  return (
    <div className="flex items-center space-x-4">
      <span className="h-5 w-0.5 bg-blue-500" />
      <h1 className="font-bold">
        {format === "ascension" && `Lv. ${level} \u2192 ${level}+`}
        {format === "basicAtk" && `Lv. ${level - 1} \u2192 ${level}`}
      </h1>
    </div>
  );
}
