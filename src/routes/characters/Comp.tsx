import { ReactComponent as Star } from "../../assets/general/star.svg";
import { Character, getCharacters } from "../../data/Characters";
import { Role } from "../../data/Characters";
import { useMouseCSSPos } from "../../hooks/Mouse";
import { Link } from "react-router-dom";

/**
 * Pannel hover.
 */
function PannelHover({ charData, role, className }: { charData: Character; role: Role; className?: string }) {
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
          <img src={`/elements/${charData.static.element}.webp`} alt={charData.static.element} className="h-5 w-5" />
          <p className="text-sm font-medium">{charData.static.element}</p>
        </div>
        <div className="flex w-40 items-center justify-center space-x-2 self-stretch rounded-md bg-slate-900 py-2 shadow">
          <img src={`/paths/${charData.static.path}.webp`} alt={charData.static.path} className="h-5 w-5" />
          <p className="text-sm font-medium">{charData.static.path}</p>
        </div>
      </div>
      <div className="mx-auto flex w-40 items-center justify-center space-x-2 self-stretch rounded-md bg-slate-900 py-2 shadow">
        <img
          src={`/lightcones/${charData.dynamic.lightcones[0]}.webp`}
          alt={charData.dynamic.lightcones[0]}
          className="h-5 w-5"
        />
        <img src={`/relics/${charData.dynamic.relics[0]}.webp`} alt={charData.dynamic.relics[0]} className="h-5 w-5" />
        <img
          src={`/ornaments/${charData.dynamic.ornaments[0]}.webp`}
          alt={charData.dynamic.ornaments[0]}
          className="h-5 w-5"
        />
      </div>
      <p className="text-sm font-semibold text-amber-500">{role}</p>
      <p className="break-all text-justify text-sm italic">{charData.dynamic.playstyle}</p>
    </div>
  );
}

/**
 * Pannel.
 */
function Pannel({ nameUID, role }: { nameUID: string; role: Role }) {
  // Get data
  const charData = getCharacters([nameUID])[0];

  // Render
  return (
    <Link
      className="group relative w-44 rounded-md bg-indigo-900 hover:bg-indigo-800"
      to={`/characters/${nameUID.toLowerCase()}`}
      onClick={() => window.scroll({ top: 0, left: 0 })}
    >
      {/* Displayed */}
      <div className="flex flex-col items-center space-y-3 px-6 py-3 shadow">
        <img src={`/characters/${nameUID}/photo.webp`} alt={nameUID} className="h-24 w-24 rounded-full shadow" />
        <p className="text-2xl font-semibold">
          {
            // Regex to fix "Trailblazer (?)" into "Trailblazer"
            nameUID.replace(/(\w+) \(.*\)/, "$1")
          }
        </p>
        <span className="h-[0.1px] w-full bg-white opacity-50" />
        <img
          src={`/elements/${charData.static.element}.webp`}
          alt={charData.static.element}
          className="h-14 w-14 drop-shadow"
        />
      </div>
      <div className="rounded-md bg-gray-700 p-1.5 text-center font-semibold shadow group-hover:bg-gray-600">
        {role}
      </div>

      {/* Hovered */}
      <PannelHover charData={charData} role={role} className="absolute z-50 hidden group-hover:block" />
    </Link>
  );
}

/**
 * Comp tab.
 */
export default function Comp({ character }: { character: Character }) {
  // Get data
  const bestTeam = character.dynamic.comp.best.map(({ char, role }) => ({
    nameUID: char,
    role: role,
  }));
  const f2pTeam = character.dynamic.comp.f2p.map(({ char, role }) => ({
    nameUID: char,
    role: role,
  }));

  // Render
  return (
    <div className="divide-y-2 divide-slate-950 rounded-md bg-indigo-950">
      {/* E1 */}
      <div className="space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <p className="text-lg font-bold">Best team</p>
        </div>
        <div className="flex justify-evenly space-x-4">
          {bestTeam.map(({ nameUID, role }) => (
            <Pannel key={nameUID} nameUID={nameUID} role={role} />
          ))}
        </div>
      </div>

      {/* E2 */}
      <div className="space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <p className="text-lg font-bold">F2P team</p>
        </div>
        <div className="flex justify-evenly space-x-4">
          {f2pTeam.map(({ nameUID, role }) => (
            <Pannel key={nameUID} nameUID={nameUID} role={role} />
          ))}
        </div>
      </div>
    </div>
  );
}
