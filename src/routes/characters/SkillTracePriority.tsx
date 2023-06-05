import { Character, Trace, Skill } from "../../data/Characters";

/**
 * Pannel.
 */
function Pannel({ src, typeUID, name }: { src: string; typeUID: Skill | Trace; name: string }) {
  return (
    <div className="flex items-center rounded-md bg-indigo-900 shadow">
      <div className="flex h-24 w-16 flex-col items-center justify-center space-y-1 self-stretch rounded-md bg-gray-700 px-2 shadow">
        <img src={src} alt={name} className="h-10 w-10" />
        <p className="text-center text-xs font-semibold">{typeUID}</p>
      </div>
      <p className="w-28 px-2 text-center text-xs font-semibold">{name}</p>
    </div>
  );
}

/**
 * Pannel separator.
 */
function Separator() {
  return <div className="px-2 text-3xl font-black drop-shadow">→</div>;
}

/**
 * Skill & trace priority tab.
 */
export default function SkillTracePriority({ character }: { character: Character }) {
  return (
    <div className="divide-y-2 divide-slate-950 rounded-md bg-indigo-950">
      {/* Skill priority */}
      <div className="space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <p className="text-lg font-bold">Skill priority</p>
        </div>
        <div className="flex items-center justify-center">
          {character.dynamic.skillPriority.flatMap((skill, idx) => {
            if (idx === character.dynamic.skillPriority.length - 1)
              return [
                <Pannel
                  key={skill}
                  src={`/characters/${character.nameUID}/${skill}.webp`}
                  typeUID={skill}
                  name={character.static.skills.filter((_) => _.typeUID === skill)[0].name}
                />,
              ];
            else
              return [
                <Pannel
                  key={skill}
                  src={`/characters/${character.nameUID}/${skill}.webp`}
                  typeUID={skill}
                  name={character.static.skills.filter((_) => _.typeUID === skill)[0].name}
                />,
                <Separator key={idx} />,
              ];
          })}
        </div>
      </div>

      {/* Trace priority */}
      <div className="space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <p className="text-lg font-bold">Trace priority</p>
        </div>
        <div className="flex items-center justify-center">
          {character.dynamic.tracePriority.flatMap((trace, idx) => {
            if (idx === character.dynamic.tracePriority.length - 1)
              return [
                <Pannel
                  key={trace}
                  src={`/characters/${character.nameUID}/${trace}.webp`}
                  typeUID={trace}
                  name={character.static.traces.filter((_) => _.typeUID === trace)[0].name}
                />,
              ];
            else
              return [
                <Pannel
                  key={trace}
                  src={`/characters/${character.nameUID}/${trace}.webp`}
                  typeUID={trace}
                  name={character.static.traces.filter((_) => _.typeUID === trace)[0].name}
                />,
                <Separator key={idx} />,
              ];
          })}
        </div>
      </div>
    </div>
  );
}
