"use client";

import TextHighlighter from "@/components/TextHighlighter";
import { Skill } from "@/data/characters";
import { SkillSource } from "@/data/characters";
import { useMouseCSSPos } from "@/hooks/Mouse";

/**
 * Skill pannel hover core elements.
 */
function SkillPannelHoverCore({
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
 * Skill pannel hover.
 */
export default function SkillPannelHover({
  typeUID,
  name,
  source,
  cost,
  desc,
  enhanced,
}: {
  typeUID: Skill;
  name: string;
  source: SkillSource;
  cost: string | null;
  desc: string;
  enhanced: {
    nameUID: string;
    source: SkillSource;
    cost: string | null;
    desc: string;
  }[];
}) {
  // CSS & Remark JSX
  const cssPos = useMouseCSSPos();
  const remark =
    typeUID === Skill["Normal ATK"] ? "(Values shown for levels 1/6/7)" : "(Values shown for levels 1/10/12)";

  // Render
  return (
    <div
      className={
        "absolute z-50 hidden w-96 space-y-4 rounded-md border-2 border-indigo-300 bg-slate-950 p-4 shadow group-hover:block" +
        ` ${cssPos}`
      }
    >
      <SkillPannelHoverCore name={name} type={typeUID} cost={cost} source={source} desc={desc} />
      {enhanced.map((skillEnhanced) => (
        <SkillPannelHoverCore
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
  );
}
