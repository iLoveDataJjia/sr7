import LightconeHover from "./LightconeHover";
import LightconePhoto from "./LightconePhoto";
import OrnamentHover from "./OrnamentHover";
import RelicHover from "./RelicHover";
import { Character } from "@/data/Characters";
import Image from "next/image";

/**
 * Equipement tab.
 */
export default function Equipement({ character }: { character: Character }) {
  return (
    // E0 the "Recommended banner" - TODO after
    <div className="flex justify-between divide-x-2 divide-slate-950 rounded-md bg-indigo-950">
      {/* Lightcones */}
      <div className="flex grow flex-col p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <h1 className="text-lg font-bold">Light Cones</h1>
        </div>
        <div className="m-auto space-y-8 p-4">
          {character.dynamic.lightcones.map((_, idx) => (
            <div
              key={idx}
              className="group relative flex items-center rounded-md bg-indigo-900 shadow hover:bg-indigo-800"
            >
              <LightconePhoto nameUID={_} className="relative">
                <div
                  className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-90 items-center justify-center
                  rounded-full bg-gray-700 px-3 py-1.5 text-sm font-bold shadow group-hover:bg-gray-600"
                >
                  {idx + 1}
                </div>
              </LightconePhoto>
              <p className="w-56 px-4 text-center font-semibold">{_}</p>
              <LightconeHover nameUID={_} className="absolute z-50 hidden group-hover:block" />
            </div>
          ))}
        </div>
      </div>

      {/* E2 & E3 */}
      <div className="flex flex-col divide-y-2 divide-slate-950">
        {/* E2 */}
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <span className="h-5 w-0.5 bg-blue-500" />
            <h1 className="text-lg font-bold">Relics & Ornaments</h1>
          </div>
          <div className="flex space-x-10 p-4">
            {/* Relics */}
            <div className="space-y-8">
              {character.dynamic.relics.map((_, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-center rounded-md bg-indigo-900 shadow hover:bg-indigo-800"
                >
                  <div className="relative h-14 w-14 rounded-md bg-indigo-700 p-1">
                    <Image src={`/assets/relics/${_}.webp`} alt={_} width={56} height={56} />
                    <div
                      className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-75 items-center justify-center
                      rounded-full bg-gray-700 px-3 py-1.5 text-sm font-bold shadow group-hover:bg-gray-600"
                    >
                      {idx + 1}
                    </div>
                  </div>
                  <p className="w-40 px-4 text-center text-sm font-semibold">{_}</p>
                  <RelicHover nameUID={_} className="absolute z-50 hidden group-hover:block" />
                </div>
              ))}
            </div>

            {/* Ornaments */}
            <div className="space-y-8">
              {character.dynamic.ornaments.map((_, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-center rounded-md bg-indigo-900 shadow hover:bg-indigo-800"
                >
                  <div className="relative h-14 w-14 rounded-md bg-indigo-700 p-1">
                    <Image src={`/assets/ornaments/${_}.webp`} alt={_} width={56} height={56} />
                    <div
                      className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-75 items-center justify-center
                      rounded-full bg-gray-700 px-3 py-1.5 text-sm font-bold shadow group-hover:bg-gray-600"
                    >
                      {idx + 1}
                    </div>
                  </div>
                  <p className="w-44 px-4 text-center text-sm font-semibold">{_}</p>
                  <OrnamentHover nameUID={_} className="absolute z-50 hidden group-hover:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* E3 */}
        <div className="flex grow flex-col p-4">
          <div className="flex items-center space-x-4">
            <span className="h-5 w-0.5 bg-blue-500" />
            <h1 className="text-lg font-bold">Stat priority</h1>
          </div>
          <div className="my-auto flex flex-col items-center space-y-4 p-4">
            {/* Main stats */}
            <div className="grid grid-flow-col grid-rows-2 gap-x-4 gap-y-2">
              {character.dynamic.statPriority.mainStats.map((_) => (
                <div
                  key={_.typeUID}
                  className="group flex w-52 items-center justify-between rounded-md bg-indigo-900 shadow hover:bg-indigo-800"
                >
                  <Image
                    src={`/assets/equipements/${_.typeUID}.webp`}
                    alt={_.typeUID}
                    className="rounded-md bg-gray-700 p-1 group-hover:bg-gray-600"
                    width={40}
                    height={40}
                  />
                  <p className="mx-auto text-xs font-semibold">{_.stats.join(" → ")}</p>
                </div>
              ))}
            </div>

            {/* Sub stats */}
            <div className="group flex items-center justify-between self-stretch rounded-md bg-indigo-900 shadow hover:bg-indigo-800">
              <div className="h-11 w-11 rounded-md bg-gray-700 p-1 text-center text-xs font-bold shadow group-hover:bg-gray-600">
                Sub Stats
              </div>
              <p className="mx-auto text-xs font-semibold">{character.dynamic.statPriority.subStats.join(" → ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
