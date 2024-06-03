"use client";

import Star from "@/assets/general/star.svg";
import TextHighlighter from "@/components/TextHighlighter";
import { getLightCones } from "@/data/lightcones";
import { useMouseCSSPos } from "@/hooks/Mouse";
import Image from "next/image";

/**
 * Lightcone hover pannel.
 */
export default function LightconeHover({ nameUID, className }: { nameUID: string; className?: string }) {
  // Get data & Pannel position
  const { star, path, source, desc } = getLightCones([nameUID])[0];
  const cssPos = useMouseCSSPos();

  // Render
  return (
    <div
      className={
        `w-96 space-y-4 rounded-md border-2 border-indigo-300 bg-slate-950 p-4 shadow` +
        ` ${cssPos}` +
        (className ? ` ${className}` : "")
      }
    >
      <p className="font-bold text-blue-500">{nameUID}</p>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex w-40 items-center justify-center space-x-2 self-stretch rounded-md bg-slate-900 py-2 shadow">
          <Image src={`/sr7/assets/paths/${path}.webp`} alt={path} width={20} height={20} />
          <p className="text-sm font-medium">{path}</p>
        </div>
        <div className="flex w-40 justify-center self-stretch rounded-md bg-slate-900 py-2 shadow">
          {Array.from({ length: star }, (_, idx) => (
            <Star key={idx} className="h-5 w-5 fill-yellow-500" />
          ))}
        </div>
      </div>
      <p className="text-sm font-semibold text-amber-500">{source}</p>
      <TextHighlighter
        text={desc}
        regexGroup={/((?:\d+(?:\.\d+)?\/)+(?:\d+(?:\.\d+)?%?))/g}
        cssHighlight="font-bold text-indigo-500"
        className="break-all text-justify text-sm italic"
      />
    </div>
  );
}
