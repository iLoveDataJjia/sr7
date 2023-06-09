import { ReactComponent as Star } from "../../assets/general/star.svg";
import TextHighlighter from "../../components/TextHighlighter";
import { Character } from "../../data/Characters";
import { getLightCones } from "../../data/LightCones";
import { getOrnaments } from "../../data/Ornaments";
import { getRelics } from "../../data/Relics";
import { useMouseCSSPos } from "../../hooks/Mouse";

/**
 * Lightcone photo.
 */
function LightconePhoto({
  nameUID,
  className,
  children,
}: {
  nameUID: string;
  className?: string;
  children?: JSX.Element;
}) {
  // Gradient color
  const star = getLightCones([nameUID])[0].star;
  const cssGradColor = (() => {
    switch (star) {
      case 5:
        return "bg-gradient-to-b from-amber-700 via-amber-500 via-60% to-amber-200";
      case 4:
        return "bg-gradient-to-b from-purple-950 via-purple-700 via-60% to-purple-400";
      case 3:
        return "bg-gradient-to-b from-blue-950 via-blue-800 via-60% to-blue-500";
      default:
        return undefined;
    }
  })();

  // Render
  if (cssGradColor)
    return (
      <div className={`rounded-md ${cssGradColor} p-1 shadow` + (className ? ` ${className}` : "")}>
        <img src={`/lightcones/${nameUID}.webp`} alt={nameUID} />
        {children && children}
      </div>
    );
  return className ? <span className={className} /> : <span />;
}

/**
 * Lightcone hover pannel.
 */
function LightconeHover({ nameUID, className }: { nameUID: string; className?: string }) {
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
          <img src={`/paths/${path}.webp`} alt={path} className="h-5 w-5" />
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

/**
 * Relic hover pannel.
 */
function RelicHover({ nameUID, className }: { nameUID: string; className?: string }) {
  // Get data & Pannel position
  const { setEffect2, setEffect4 } = getRelics([nameUID])[0];
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
          <div className="rounded-md bg-slate-900 px-2.5 py-0.5 font-bold text-amber-500">2</div>
          <div className="break-all text-justify text-sm italic">{setEffect2}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="rounded-md bg-slate-900 px-2.5 py-0.5 font-bold text-amber-500">4</div>
          <div className="break-all text-justify text-sm italic">{setEffect4}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Ornament hover pannel.
 */
function OrnamentHover({ nameUID, className }: { nameUID: string; className?: string }) {
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
          <p className="text-lg font-bold">Light Cones</p>
        </div>
        <div className="m-auto space-y-8 p-4">
          {character.dynamic.lightcones.map((_, idx) => (
            <div
              key={idx}
              className="group relative flex items-center rounded-md bg-indigo-900 shadow hover:bg-indigo-800"
            >
              <LightconePhoto nameUID={_} className="relative h-16 w-16">
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
            <p className="text-lg font-bold">Relics & Ornaments</p>
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
                    <img src={`/relics/${_}.webp`} alt={_} />
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
                    <img src={`/ornaments/${_}.webp`} alt={_} />
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
            <p className="text-lg font-bold">Stat priority</p>
          </div>
          <div className="my-auto flex flex-col items-center space-y-4 p-4">
            {/* Main stats */}
            <div className="grid grid-flow-col grid-rows-2 gap-x-4 gap-y-2">
              {character.dynamic.statPriority.mainStats.map((_) => (
                <div key={_.typeUID} className="flex w-52 items-center justify-between rounded-md bg-indigo-900 shadow">
                  <img
                    src={`/general/${_.typeUID}.webp`}
                    alt={_.typeUID}
                    className="h-10 w-10 rounded-md bg-gray-700 p-1"
                  />
                  <p className="mx-auto text-xs font-semibold">{_.stats.join(" → ")}</p>
                </div>
              ))}
            </div>

            {/* Sub stats */}
            <div className="flex items-center justify-between self-stretch rounded-md bg-indigo-900 shadow">
              <div className="h-11 w-11 rounded-md bg-gray-700 p-1 text-center text-xs font-bold shadow">Sub Stats</div>
              <p className="mx-auto text-xs font-semibold">{character.dynamic.statPriority.subStats.join(" → ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
