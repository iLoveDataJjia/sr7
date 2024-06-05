import CodesPopover from "./CodesPopover";
import SearchBar from "./SearchBar";
import { metadata } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

/**
 * Navigation bar.
 */
export default function NavBar({ className }: { className?: string }) {
  return (
    <nav
      className={"flex items-center justify-between space-x-8 bg-slate-950 p-4" + (className ? ` ${className}` : "")}
    >
      <Link href="/" className="flex items-center space-x-2.5">
        <Image src="/sr7/assets/general/logo.webp" alt="Logo" width={30} height={30} className="rounded-full" />
        <div className="text-sm font-bold">SR7</div>
      </Link>
      <SearchBar />
      <CodesPopover />
      <p className="w-4/12 text-justify text-xs font-thin italic text-indigo-300">
        SR7 - Honkai Impact Star Rail. For your beloved waifus & husbandos!
      </p>
    </nav>
  );
}
