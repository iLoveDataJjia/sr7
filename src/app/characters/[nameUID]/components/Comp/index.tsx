import Pannel from "./Pannel";
import { Character } from "@/data/Characters";

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
