"use client";

import { getOrnaments } from "@/data/ornaments";
import { useMouseCSSPos } from "@/hooks/useMouseCSSPos";

/**
 * Ornament hover pannel.
 */
export default function OrnamentHover({ nameUID, className }: { nameUID: string; className?: string }) {
  // Get data & Pannel position
  const { setEffect2 } = getOrnaments([nameUID])[0];
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
      <div className="space-y-4 px-4">
        <div className="flex items-center space-x-4">
          <div className="shrink rounded-md bg-slate-900 px-2.5 py-0.5 font-bold text-amber-500">2</div>
          <div className="break-all text-justify text-sm italic">{setEffect2}</div>
        </div>
      </div>
    </div>
  );
}
