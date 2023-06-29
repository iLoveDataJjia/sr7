import CodesPopover from "./CodesPopover";
import SearchBar from "./SearchBar";
import { metadata } from "@/app/layout";
import Image from "next/image";

/**
 * Navigation bar.
 */
export default function NavBar({ className }: { className?: string }) {
  return (
    <nav
      className={"flex items-center justify-between space-x-8 bg-slate-950 p-4" + (className ? ` ${className}` : "")}
    >
      <a className="flex items-center space-x-2" href="/">
        <Image src="/assets/general/logo.webp" alt="Logo" width={40} height={40} />
        <div className="text-sm font-bold">SR7.NL</div>
      </a>
      <SearchBar />
      <CodesPopover />
      <p className="w-4/12 text-justify text-xs font-thin italic text-indigo-300">{metadata.title}</p>
    </nav>
  );
}
