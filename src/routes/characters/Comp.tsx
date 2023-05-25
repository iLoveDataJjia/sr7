import Webp from "../../assets";
import { Character, getCharacters } from "../../data/Characters";
import { Role } from "../../data/Characters";
import { Element } from "../../data/Utils";

/**
 * Comp tab.
 */
export default function Comp({ character }: { character: Character }) {
  // Get data
  const bestTeam = character.dynamic.comp.best.map(({ char, role }) => ({
    nameUID: char,
    element: getCharacters([char])[0].static.element,
    role: role,
  }));
  const f2pTeam = character.dynamic.comp.f2p.map(({ char, role }) => ({
    nameUID: char,
    element: getCharacters([char])[0].static.element,
    role: role,
  }));

  // Pannel
  const Pannel = ({ nameUID, element, role }: { nameUID: string; element: Element; role: Role }) => (
    <div className="w-44 rounded-md bg-indigo-900 shadow">
      <div className="flex flex-col items-center space-y-3 px-6 py-3 shadow">
        <Webp src={`./characters/${nameUID}/photo.webp`} className="h-24 w-24 rounded-full shadow" />
        <p className="text-2xl font-semibold">
          {
            // Regex to fix "Trailblazer (?)" into "Trailblazer"
            nameUID.replace(/(\w+) .*/, "$1")
          }
        </p>{" "}
        <span className="h-[0.1px] w-full bg-white opacity-50" />
        <Webp src={`./elements/${element}.webp`} className="h-14 w-14 drop-shadow" />
      </div>
      <div className="rounded bg-gray-700 p-1.5 text-center font-semibold">{role}</div>
    </div>
  );

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
          {bestTeam.map(({ nameUID, element, role }) => (
            <Pannel key={nameUID} nameUID={nameUID} element={element} role={role} />
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
          {f2pTeam.map(({ nameUID, element, role }) => (
            <Pannel key={nameUID} nameUID={nameUID} element={element} role={role} />
          ))}
        </div>
      </div>
    </div>
  );
}
