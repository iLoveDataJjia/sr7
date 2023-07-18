"use client";

import StatIcon from "@/components/StatIcon";
import { Trace } from "@/data/characters";
import { Stat } from "@/data/utils";
import { useMouseCSSPos } from "@/hooks/Mouse";

/**
 * Trace pannel hover.
 */
export default function TracePannelHover({
  typeUID,
  name,
  desc,
  minors,
}: {
  typeUID: Trace;
  name: string;
  desc: string;
  minors: {
    stat: Stat;
    value: string;
    unlock: string;
  }[];
}) {
  // CSS
  const cssPos = useMouseCSSPos();

  // Return
  return (
    <div
      className={
        "absolute z-50 hidden w-96 space-y-4 rounded-md border-2 border-indigo-300 bg-slate-950 p-4 shadow group-hover:block" +
        ` ${cssPos}`
      }
    >
      <p className="font-bold text-blue-500">{name}</p>
      <div
        className="mx-auto flex w-40 items-center justify-center self-stretch rounded-md bg-slate-900 py-2 text-sm font-bold
        shadow"
      >
        {typeUID}
      </div>
      <p className="text-sm font-semibold text-amber-500">Major trace</p>
      <p className="break-all text-justify text-sm italic">{desc}</p>
      <p className="text-sm font-semibold">Minor traces</p>
      <div className="grid grid-flow-col justify-stretch divide-x-2 divide-slate-950 rounded-md bg-slate-900 shadow">
        {minors.map((minor, idx) => (
          <div key={idx} className="flex flex-col items-center py-3">
            <p className="text-sm font-bold">{minor.value}</p>
            <div className="flex items-center space-x-0.5">
              <StatIcon stat={minor.stat} className="h-5 w-5" />
              <p className="text-xs">{minor.stat}</p>
            </div>
            <p className="text-xs italic text-slate-500">{minor.unlock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
