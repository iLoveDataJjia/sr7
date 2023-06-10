import { ReactComponent as Search } from "../assets/general/search.svg";
import { getCharacters } from "../data/Characters";
import { useState } from "react";

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
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />

      {/* On change & focus */}
      {input !== "" && (
        <div className="absolute -left-4 top-full flex min-w-full translate-y-4 flex-col justify-center shadow">
          {chars.map((char, idx) => {
            const roundedCss = (() => {
              switch (idx) {
                case 0:
                  return chars.length === 1 ? "rounded-md" : "rounded-t-md";
                case chars.length - 1:
                  return "rounded-b-md";
                default:
                  return "";
              }
            })();
            const bgCss = idx % 2 === 0 ? "bg-indigo-900" : "bg-indigo-950";
            return (
              <div key={char.nameUID} className={`p-4 ${bgCss} ${roundedCss}`}>
                {char.nameUID}
              </div>
            );
          })}
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
        {window.location.host.toUpperCase()} - Build hub for Honkai Impact Star Rail. Unleash the power of your beloved
        waifus and husbandos!
      </p>
    </div>
  );
}
