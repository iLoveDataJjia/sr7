import Webp from "../../assets";
import { Character } from "../../data/Characters";

/**
 * Trace tab.
 */
export default function Trace({ character }: { character: Character }) {
  // Pannel & Seperator JSX
  const Pannel = ({ src, title, desc }: { src: string; title: string; desc: string }) => (
    <div className="flex items-center rounded bg-indigo-900 shadow">
      <div className="flex h-24 w-16 flex-col items-center justify-center space-y-1 self-stretch rounded bg-gray-700 p-1 shadow">
        <Webp src={src} className="h-10 w-10" />
        <p className="text-center text-xs font-semibold">{title}</p>
      </div>
      <p className="w-28 text-center text-xs font-semibold">{desc}</p>
    </div>
  );
  const Separator = () => <div className="px-2 text-3xl font-black drop-shadow">→</div>;

  // Render
  return (
    <div className="divide-y-2 divide-slate-950 rounded bg-indigo-950">
      {/* E1 */}
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
                  src={`./characters/${character.nameUID}/${skill}.webp`}
                  title={skill}
                  desc={character.static.skills.filter((_) => _.typeUID === skill)[0].name}
                />,
              ];
            else
              return [
                <Pannel
                  key={skill}
                  src={`./characters/${character.nameUID}/${skill}.webp`}
                  title={skill}
                  desc={character.static.skills.filter((_) => _.typeUID === skill)[0].name}
                />,
                <Separator key={idx} />,
              ];
          })}
        </div>
      </div>

      {/* E2 */}
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
                  src={`./characters/${character.nameUID}/${trace}.webp`}
                  title={trace}
                  desc={character.static.traces.filter((_) => _.typeUID === trace)[0].name}
                />,
              ];
            else
              return [
                <Pannel
                  key={trace}
                  src={`./characters/${character.nameUID}/${trace}.webp`}
                  title={trace}
                  desc={character.static.traces.filter((_) => _.typeUID === trace)[0].name}
                />,
                <Separator key={idx} />,
              ];
          })}
        </div>
      </div>
    </div>
  );
}
