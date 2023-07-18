"use client";

import PannelHover from "./PannelHover";
import { getCharacters, displayable } from "@/data/characters";
import { Role } from "@/data/characters";
import Image from "next/image";
import Link from "next/link";

/**
 * Pannel.
 */
export default function Pannel({ nameUID, role }: { nameUID: string; role: Role }) {
  // Get data
  const charData = getCharacters([nameUID])[0];

  // Render
  return (
    <Link
      className="group relative w-44 rounded-md bg-indigo-900 hover:bg-indigo-800"
      href={`/characters/${nameUID.toLowerCase()}`}
      onClick={() => window.scroll({ top: 0, left: 0 })}
    >
      {/* Displayed */}
      <div className="flex flex-col items-center space-y-3 px-6 py-3 shadow">
        <Image
          src={`/assets/characters/${nameUID}/photo.webp`}
          alt={nameUID}
          width={96}
          height={96}
          className="rounded-full shadow"
        />
        <p className="text-2xl font-semibold">{displayable(nameUID)}</p>
        <span className="h-[0.1px] w-full bg-white opacity-50" />
        <Image
          src={`/assets/elements/${charData.static.element}.webp`}
          alt={charData.static.element}
          width={56}
          height={56}
          className="drop-shadow"
        />
      </div>
      <div className="rounded-md bg-gray-700 p-1.5 text-center font-semibold shadow group-hover:bg-gray-600">
        {role}
      </div>

      {/* Hovered */}
      <PannelHover charData={charData} role={role} className="absolute z-50 hidden group-hover:block" />
    </Link>
  );
}
