import Star from "@/assets/general/star.svg";
import { Character } from "@/data/Characters";
import { tierCSS, starCSS } from "@/data/Characters";
import { Stat } from "@/data/Utils";
import Image from "next/image";
import Link from "next/link";

/**
 * Characters table.
 */
export default function Table({ characters }: { characters: Character[] }) {
  return (
    <div className="w-full space-y-6 rounded-md bg-indigo-950 p-6">
      {/* Header */}
      <div className="flex items-center justify-around">
        <div className="flex w-5 justify-center text-sm font-semibold">Rank</div>
        <div className="flex w-5 justify-center text-sm font-semibold">Element</div>
        <div className="flex w-5 justify-center text-sm font-semibold">Path</div>
        <div className="flex w-44 justify-center text-sm font-semibold">Character</div>
        <div className="flex w-5 justify-center text-sm font-semibold">Star</div>
        <div className="flex w-5 justify-center text-sm font-semibold">Tier</div>
        <div className="flex w-5 justify-center text-sm font-semibold">HP</div>
        <div className="flex w-5 justify-center text-sm font-semibold">DEF</div>
        <div className="flex w-5 justify-center text-sm font-semibold">ATK</div>
        <div className="flex w-5 justify-center text-sm font-semibold">SPD</div>
        <div className="flex w-5 justify-center text-sm font-semibold">TAUNT</div>
        <div className="flex w-32 justify-center text-sm font-semibold">Best team</div>
      </div>

      {/* Body */}
      <div className="overflow-clip rounded-md">
        {characters.map((char, idx) => (
          <div
            key={char.nameUID}
            className={
              "flex items-center justify-around py-3 transition-all duration-100 ease-in-out" +
              (idx % 2 === 0 ? " bg-indigo-900 hover:bg-indigo-700" : " bg-indigo-800 hover:bg-indigo-600")
            }
          >
            {/* Rank, Element & Path */}
            <div className="flex w-5 justify-center">
              <p className="font-bold">{idx + 1}</p>
            </div>
            <div className="flex w-5 justify-center">
              <Image
                src={`/assets/elements/${char.static.element}.webp`}
                alt={char.static.element}
                height={30}
                width={30}
                className="max-w-max"
              />
            </div>
            <div className="flex w-5 justify-center">
              <Image
                src={`/assets/paths/${char.static.path}.webp`}
                alt={char.static.path}
                height={25}
                width={25}
                className="max-w-max"
              />
            </div>

            {/* Character */}
            <div className="flex w-44">
              <Link
                href={`/characters/${char.nameUID.toLowerCase()}`}
                className="group flex max-w-full items-center space-x-3"
              >
                <Image
                  src={`/assets/characters/${char.nameUID}/photo.webp`}
                  alt={char.static.path}
                  height={30}
                  width={30}
                  className="max-w-max rounded-md"
                />
                <p className="truncate text-lg font-bold group-hover:underline">{char.nameUID}</p>
              </Link>
            </div>

            {/* Star & Tier */}
            <div className="flex w-5 justify-center">
              <div className="flex items-center space-x-0.5">
                <p className={"font-bold" + ` ${starCSS(char.static.star).text}`}>{char.static.star}</p>
                <Star className={"h-4 w-4" + ` ${starCSS(char.static.star).fill}`} />
              </div>
            </div>
            <div className={"flex w-5 justify-center font-bold" + ` ${tierCSS(char.dynamic.tier).text}`}>
              <p className={"font-bold" + ` ${tierCSS(char.dynamic.tier).text}`}>{char.dynamic.tier}</p>
            </div>

            {/* Attributes */}
            <div className="flex w-5 justify-center">
              <p className="font-bold">{char.static.attributes.filter((_) => _.typeUID === Stat["HP"])[0].value}</p>
            </div>
            <div className="flex w-5 justify-center">
              <p className="font-bold">{char.static.attributes.filter((_) => _.typeUID === Stat["DEF"])[0].value}</p>
            </div>
            <div className="flex w-5 justify-center">
              <p className="font-bold">{char.static.attributes.filter((_) => _.typeUID === Stat["ATK"])[0].value}</p>
            </div>
            <div className="flex w-5 justify-center">
              <p className="font-bold">{char.static.attributes.filter((_) => _.typeUID === Stat["SPD"])[0].value}</p>
            </div>
            <div className="flex w-5 justify-center">
              <p className="font-bold">{char.static.attributes.filter((_) => _.typeUID === Stat["TAUNT"])[0].value}</p>
            </div>

            {/* Best team */}
            <div className="flex w-32 justify-center">
              <div className="flex space-x-1">
                {char.dynamic.comp.best.map(({ char }) => (
                  <Link key={char} href={`/characters/${char.toLowerCase()}`}>
                    <Image
                      src={`/assets/characters/${char}/photo.webp`}
                      alt={char}
                      height={25}
                      width={25}
                      className="max-w-max rounded-md"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
