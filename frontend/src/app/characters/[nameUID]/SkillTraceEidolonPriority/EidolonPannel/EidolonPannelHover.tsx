"use client";

import { Eidolon } from "@/data/characters";
import { useMouseCSSPos } from "@/hooks/useMouseCSSPos";

/**
 * Eidolon pannel hover.
 */

export default function EidolonPannelHover({ typeUID, name, desc }: { typeUID: Eidolon; name: string; desc: string }) {
  // CSS
  const cssPos = useMouseCSSPos();

  // Render
  return (
    <div
      className={
        "absolute z-50 hidden w-96 space-y-4 rounded-md border-2 border-indigo-300 bg-slate-950 p-4 shadow group-hover:block" +
        ` ${cssPos}`
      }
    >
      <p className="font-bold text-blue-500">{name}</p>
      <div className="mx-auto w-40 rounded-md bg-slate-900 py-2 text-center text-sm font-bold shadow">{typeUID}</div>
      <p className="break-all text-justify text-sm italic">{desc}</p>
    </div>
  );
}
