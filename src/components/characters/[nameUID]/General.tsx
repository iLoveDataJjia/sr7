import Star from "@/assets/general/star.svg";
import StatIcon from "@/components/StatIcon";
import { Character, tierCSS } from "@/data/Characters";
import { srEncodeURL } from "@/utils/String";
import Image from "next/image";

/**
 * General tab.
 */
export default function General({ character }: { character: Character }) {
  // Tier color
  const tierColor = tierCSS(character.dynamic.tier);

  // Render
  return (
    <div
      className={`relative justify-between space-y-8 rounded-xl bg-slate-950 bg-cover bg-right`}
      style={{
        backgroundImage: `url(/assets/characters/${srEncodeURL(character.nameUID, true)}/wp.webp)`,
      }}
    >
      {/* Character */}
      <div className="flex items-center space-x-4 py-4">
        {/* Photo */}
        <div className={`relative flex h-24 w-24 flex-col items-center rounded-md border-2 ${tierColor.border} shadow`}>
          <div className="absolute -top-4 flex">
            {Array.from({ length: character.static.star }, (_, idx) => (
              <Star key={idx} className="h-5 w-5 fill-yellow-500" />
            ))}
          </div>
          <Image
            src={`/assets/characters/${character.nameUID}/photo.webp`}
            alt={character.nameUID}
            width={96}
            height={96}
            className="rounded-md p-1"
          />
          <div
            className={`absolute -bottom-4 rounded-md border-2 ${tierColor.border} w-8 bg-slate-950 text-center text-sm font-bold ${tierColor.text} ring-4 ring-slate-950`}
          >
            {character.dynamic.tier}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-4xl font-bold">{character.nameUID}</p>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Image
                src={`/assets/elements/${character.static.element}.webp`}
                alt={character.static.element}
                width={40}
                height={40}
              />
              <p className="text-xl font-bold">{character.static.element}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src={`/assets/paths/${character.static.path}.webp`}
                alt={character.static.path}
                width={32}
                height={32}
              />
              <p className="text-xl font-bold">{character.static.path}</p>
            </div>
          </div>
        </div>
      </div>

      {/* E2 */}
      {/* TODO after */}

      {/* Playstyle */}
      <div className="w-2/3 rounded-md bg-indigo-950 shadow">
        <div className="space-y-2 p-4">
          <div className="flex items-center space-x-4">
            <span className="h-5 w-0.5 bg-blue-500" />
            <h1 className="text-lg font-bold">Playstyle</h1>
          </div>
          <p className="break-all text-justify text-sm italic">{character.dynamic.playstyle}</p>
        </div>
      </div>

      {/* Attributes */}
      <div className="grid grid-flow-col justify-stretch divide-x-2 divide-slate-950 rounded-md bg-indigo-950 shadow">
        {character.static.attributes.map((attribute) => (
          <div key={attribute.typeUID} className="flex flex-col items-center py-6">
            <p className="text-3xl font-bold">{attribute.value}</p>
            <div className="flex items-center space-x-1">
              <StatIcon stat={attribute.typeUID} className="h-6 w-6" />
              <p className="text-xs uppercase">{attribute.typeUID}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
