import { ReactComponent as Search } from "../assets/general/search.svg";
import { ReactComponent as Star } from "../assets/general/star.svg";
import { getCharacters, displayable, tierCSS, Character } from "../data/Characters";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      to={`/characters/${char.nameUID.toLowerCase()}`}
      key={char.nameUID}
      className={`flex items-center px-4 py-2 ${bgCss}` + (className ? ` ${className}` : "")}
      onClick={() => onClick?.()}
    >
      <img src={`/characters/${char.nameUID}/photo.webp`} alt={char.nameUID} className="h-10 w-10 rounded-md" />
      <p className="px-8 text-2xl font-bold">{displayable(char.nameUID)}</p>
      <div className="ml-auto flex items-center space-x-3">
        <div className="flex flex-col items-center space-y-1">
          <div className="flex items-center space-x-0.5">
            <p className="font-bold">{char.static.star}</p>
            <Star className="h-4 w-4 fill-amber-500" />
          </div>
          <div
            className={`rounded-md border-[1px] ${tierColorCSS.border} w-7 text-center text-xs font-bold ${tierColorCSS.text}`}
          >
            {char.dynamic.tier}
          </div>
        </div>
        <img src={`/elements/${char.static.element}.webp`} alt={char.static.element} className="h-7 w-7" />
        <img src={`/paths/${char.static.path}.webp`} alt={char.static.path} className="h-7 w-7" />
      </div>
    </Link>
  );
}

/**
 * Search bar.
 */
function SearchBar() {
  // States & Get characters
  const [input, setInput] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const chars = getCharacters().filter((_) => _.nameUID.toLowerCase().startsWith(input.toLowerCase()));

  // Render
  return (
    <div className="relative flex grow items-center space-x-4 rounded-full bg-indigo-950 px-4 py-2.5 shadow">
      {/* Displayed */}
      <Search className="h-4 w-4 fill-white" />
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
      {input !== "" && isFocus && (
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
      )}
    </div>
  );
}

/**
 * Navigation bar.
 */
export default function NavBar({ className }: { className?: string }) {
  return (
    <div
      className={"flex items-center justify-between space-x-8 bg-slate-950 p-4" + (className ? ` ${className}` : "")}
    >
      <a className="flex items-center space-x-2" href="/">
        <img src="/general/logo.webp" alt="Logo" className="h-10 w-10" />
        <div className="text-sm font-bold">{window.location.host.toUpperCase()}</div>
      </a>
      <SearchBar />
      <p className="w-4/12 break-all text-justify text-xs font-thin italic text-indigo-300">
        {window.location.host.toUpperCase()} - Honkai Impact Star Rail build hub. Unleash the power of your beloved
        waifus and husbandos!
      </p>
    </div>
  );
}
