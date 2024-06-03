"use client";

import Search from "@/assets/general/search.svg";
import Star from "@/assets/general/star.svg";
import { getCharacters, displayable, tierCSS, Character } from "@/data/characters";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Search bar result.
 */
function SearchBarResult({
  char,
  idx,
  className,
  onClick,
}: {
  char: Character;
  idx: number;
  className?: string;
  onClick?: () => void;
}) {
  // CSS
  const bgCss = idx % 2 === 0 ? "bg-indigo-900 hover:bg-indigo-700" : "bg-indigo-950 hover:bg-indigo-800";
  const tierColorCSS = tierCSS(char.dynamic.tier);

  // Render
  return (
    <Link
      href={`/characters/${char.nameUID.toLowerCase()}`}
      key={char.nameUID}
      className={`flex items-center px-4 py-2 ${bgCss}` + (className ? ` ${className}` : "")}
      onClick={() => onClick?.()}
    >
      <Image
        src={`/sr7/assets/characters/${char.nameUID}/photo.webp`}
        alt={char.nameUID}
        className="rounded-md"
        width={40}
        height={40}
      />
      <p className="px-8 text-2xl font-bold">{displayable(char.nameUID)}</p>
      <div className="ml-auto flex items-center space-x-3">
        <div className="flex flex-col items-center space-y-1">
          <div className="flex items-center space-x-0.5">
            <p className="font-bold">{char.static.star}</p>
            <Star className="h-5 w-5 fill-amber-500" />
          </div>
          <div
            className={`rounded-md border-[1px] ${tierColorCSS.border} w-7 text-center text-xs font-bold ${tierColorCSS.text}`}
          >
            {char.dynamic.tier}
          </div>
        </div>
        <Image
          src={`/sr7/assets/elements/${char.static.element}.webp`}
          alt={char.static.element}
          width={28}
          height={28}
        />
        <Image src={`/sr7/assets/paths/${char.static.path}.webp`} alt={char.static.path} width={28} height={28} />
      </div>
    </Link>
  );
}

/**
 * Search bar.
 */
export default function SearchBar() {
  // States & Get characters
  const [input, setInput] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const chars =
    input !== "" && isFocus
      ? getCharacters().filter((_) => _.nameUID.toLowerCase().startsWith(input.toLowerCase()))
      : [];

  // Render
  return (
    <div className="relative flex grow items-center space-x-4 rounded-full bg-indigo-950 px-4 py-2.5 shadow">
      {/* Displayed */}
      <Search className="h-4 w-4 fill-indigo-300" />
      <input
        type="text"
        placeholder="Search Character"
        className="grow bg-transparent text-sm focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setTimeout(() => setIsFocus(false), 100)}
      />

      {/* On change & focus */}
      <div className="absolute -left-4 top-full flex w-max min-w-full translate-y-4 flex-col justify-center shadow">
        {chars.map((char, idx) => (
          <SearchBarResult
            key={idx}
            char={char}
            idx={idx}
            className={
              chars.length === 1
                ? "rounded-md"
                : idx === 0
                ? "rounded-t-md"
                : idx === chars.length - 1
                ? "rounded-b-md"
                : ""
            }
            onClick={() => {
              setInput(char.nameUID);
              window.scroll({ top: 0, left: 0 });
            }}
          />
        ))}
      </div>
    </div>
  );
}
