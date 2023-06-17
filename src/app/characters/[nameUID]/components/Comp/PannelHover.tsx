import Star from "@/assets/general/star.svg";
import { Character } from "@/data/Characters";
import { Role } from "@/data/Characters";
import { useMouseCSSPos } from "@/hooks/Mouse";
import Image from "next/image";

/**
 * Pannel hover.
 */
export default function PannelHover({
  charData,
  role,
  className,
}: {
  charData: Character;
  role: Role;
  className?: string;
}) {
  // CSS
  const cssPos = useMouseCSSPos();

  // Render
  return (
    <div
      className={
        "w-96 space-y-4 rounded-md border-2 border-indigo-300 bg-slate-950 p-4 shadow" +
        ` ${cssPos}` +
        (className ? ` ${className}` : "")
      }
    >
      <p className="font-bold text-blue-500">{charData.nameUID}</p>
      <div className="mx-auto flex w-40 justify-center self-stretch rounded-md bg-slate-900 py-2 shadow">
        {Array.from({ length: charData.static.star }, (_, idx) => (
          <Star key={idx} className="h-5 w-5 fill-yellow-500" />
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <div className="flex w-40 items-center justify-center space-x-2 self-stretch rounded-md bg-slate-900 py-2 shadow">
          <Image
            src={`/elements/${charData.static.element}.webp`}
            alt={charData.static.element}
            width={20}
            height={20}
          />
          <p className="text-sm font-medium">{charData.static.element}</p>
        </div>
        <div className="flex w-40 items-center justify-center space-x-2 self-stretch rounded-md bg-slate-900 py-2 shadow">
          <Image src={`/paths/${charData.static.path}.webp`} alt={charData.static.path} width={20} height={20} />
          <p className="text-sm font-medium">{charData.static.path}</p>
        </div>
      </div>
      <div className="mx-auto flex w-40 items-center justify-center space-x-1.5 self-stretch rounded-md bg-slate-900 py-1.5 shadow">
        <Image
          src={`/lightcones/${charData.dynamic.lightcones[0]}.webp`}
          alt={charData.dynamic.lightcones[0]}
          width={24}
          height={24}
        />
        <Image
          src={`/relics/${charData.dynamic.relics[0]}.webp`}
          alt={charData.dynamic.relics[0]}
          width={24}
          height={24}
        />
        <Image
          src={`/ornaments/${charData.dynamic.ornaments[0]}.webp`}
          alt={charData.dynamic.ornaments[0]}
          width={24}
          height={24}
        />
      </div>
      <p className="text-sm font-semibold text-amber-500">{role}</p>
      <p className="break-all text-justify text-sm italic">{charData.dynamic.playstyle}</p>
    </div>
  );
}
