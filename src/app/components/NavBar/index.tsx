import { metadata } from "../../layout";
import SearchBar from "./SearchBar";

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
        <div className="text-sm font-bold">SR7.NL</div>
      </a>
      <SearchBar />
      <p className="w-4/12 break-all text-justify text-xs font-thin italic text-indigo-300">{metadata.title}</p>
    </div>
  );
}
