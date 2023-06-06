import TextHighlighter from "../../components/TextHighlighter";
import { Character, Trace, Skill } from "../../data/Characters";
import { useMouseCSSPos } from "../../hooks/Mouse";

/**
 * Skill pannel core elements.
 */
function SkillPannelCore({
  name,
  type,
  cost,
  source,
  desc,
}: {
  name: string;
  type: string;
  cost: string | null;
  source: string;
  desc: string;
}) {
  return (
    <>
      <p className="font-bold text-blue-500">{name}</p>
      <div className="flex items-center justify-center space-x-4">
        <div
          className="flex w-40 items-center justify-center self-stretch rounded-md bg-slate-900
          py-2 text-sm font-bold shadow"
        >
          {type}
        </div>
        {cost && (
          <div
            className="flex w-40 items-center justify-center self-stretch rounded-md bg-slate-900 py-2
          text-sm font-bold text-emerald-500 shadow"
          >
            {cost}
          </div>
        )}
      </div>
      <p className="text-sm font-semibold text-amber-500">{source}</p>
      <TextHighlighter
        text={desc}
        regexGroup={/((?:\d+(?:\.\d+)?\/)+(?:\d+(?:\.\d+)?%?))/g}
        cssHighlight="font-bold text-indigo-500"
        className="break-all text-justify text-sm italic"
      />
    </>
  );
}

/**
 * Skill pannel.
 */
function SkillPannel({ character, typeUID, className }: { character: Character; typeUID: Skill; className?: string }) {
  // Get data & CSS Mouse
  const data = character.static.skills.filter((_) => _.typeUID === typeUID)[0];
  const cssPos = useMouseCSSPos();
  const remark =
    typeUID === Skill["Normal ATK"] ? "(Values shown for levels 1/6/7)" : "(Values shown for levels 1/10/12)";

  // Render
  return (
    <div
      className={
        "group relative flex items-center rounded-md bg-indigo-900 shadow hover:bg-indigo-800" +
        (className ? ` ${className}` : "")
      }
    >
      {/* Displayed */}
      <div className="flex h-24 w-16 flex-col items-center justify-center space-y-1 self-stretch rounded-md bg-gray-700 px-2 shadow group-hover:bg-gray-600">
        <img src={`/characters/${character.nameUID}/${typeUID}.webp`} alt={data.name} className="h-10 w-10" />
        <p className="text-center text-xs font-semibold">{typeUID}</p>
      </div>
      <p className="w-28 px-2 text-center text-xs font-semibold">{data.name}</p>

      {/* Hovered */}
      <div
        className={
          "absolute z-50 hidden w-96 space-y-4 rounded-md border-2 border-indigo-300 bg-slate-950 p-4 shadow group-hover:block" +
          ` ${cssPos}`
        }
      >
        <SkillPannelCore name={data.name} type={data.typeUID} cost={data.cost} source={data.source} desc={data.desc} />
        {data.enhanced.map((skillEnhanced) => (
          <SkillPannelCore
            name={skillEnhanced.nameUID}
            type="Enhanced"
            cost={null}
            source={skillEnhanced.source}
            desc={skillEnhanced.desc}
            key={skillEnhanced.nameUID}
          />
        ))}
        <TextHighlighter
          text={remark}
          regexGroup={/((?:\d+(?:\.\d+)?\/)+(?:\d+(?:\.\d+)?%?))/g}
          cssHighlight="font-bold text-indigo-500"
          className="text-center text-xs italic text-slate-500"
        />
      </div>
    </div>
  );
}

/**
 * Trace pannel.
 */
function TracePannel({ character, typeUID }: { character: Character; typeUID: Trace }) {
  // Get data
  const data = character.static.traces.filter((_) => _.typeUID === typeUID)[0];

  // Render
  return (
    <div className="flex items-center rounded-md bg-indigo-900 shadow">
      <div className="flex h-24 w-16 flex-col items-center justify-center space-y-1 self-stretch rounded-md bg-gray-700 px-2 shadow">
        <img src={`/characters/${character.nameUID}/${typeUID}.webp`} alt={data.name} className="h-10 w-10" />
        <p className="text-center text-xs font-semibold">{typeUID}</p>
      </div>
      <p className="w-28 px-2 text-center text-xs font-semibold">{data.name}</p>
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
              return [<SkillPannel character={character} typeUID={skill} key={skill} />];
            else return [<SkillPannel character={character} typeUID={skill} key={skill} />, <Separator key={idx} />];
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
              return [<TracePannel character={character} typeUID={trace} key={trace} />];
            else return [<TracePannel character={character} typeUID={trace} key={trace} />, <Separator key={idx} />];
          })}
        </div>
      </div>
    </div>
  );
}
