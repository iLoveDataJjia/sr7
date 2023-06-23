"use client";

import Dropdown from "@/assets/general/dropdown.svg";
import Filter from "@/assets/general/filter.svg";
import { getCharacters } from "@/data/Characters";
import { Element } from "@/data/Utils";
import Image from "next/image";
import { useState } from "react";

/**
 * Tier list table.
 */
export default function TierListTab() {
  // Characters
  const [elem, setElem] = useState<string | undefined>(undefined);
  const [path, setPath] = useState<string | undefined>(undefined);
  const [star, setStar] = useState<string | undefined>(undefined);
  const characters = getCharacters();

  // Buttons
  const [isElemOpen, setIsElemOpen] = useState(false);
  const elems = Object.values(Element);

  // Render
  return (
    <div>
      {/* Filters */}
      <div className="flex items-center space-x-8">
        {/* Title */}
        <div className="flex items-center space-x-2">
          <Filter className="h-4 fill-white" />
          <h1 className="font-bold">Filters</h1>
        </div>

        {/* Buttons - TODO James rework this as the UI / UX*/}
        <button
          className="relative flex h-10 items-center space-x-12 rounded-md bg-indigo-950 px-3 py-1.5 shadow"
          onClick={() => setIsElemOpen((_) => !_)}
        >
          {!elem ? (
            <p className="text-sm text-indigo-300 opacity-50">Select element</p>
          ) : (
            <p className="text-sm">{elem}</p>
          )}

          <div className={"absolute -left-12 top-full min-w-full translate-y-4 shadow" + (isElemOpen ? "" : " hidden")}>
            {elems.map((elem, idx) => (
              <button
                key={elem}
                className={
                  "flex min-w-full items-center space-x-4 px-3 py-1.5" +
                  (idx % 2 ? " bg-indigo-950 hover:bg-indigo-800" : " bg-indigo-900 hover:bg-indigo-700") +
                  (idx === 0 ? " rounded-t-md" : idx === elems.length - 1 ? " rounded-b-md" : "")
                }
                onClick={(e) => setElem(e.currentTarget.value)}
              >
                <Image src={`/assets/elements/${elem}.webp`} alt={elem} width={30} height={30} />
                <p className="text-sm font-bold">{elem}</p>
              </button>
            ))}
          </div>
        </button>
      </div>

      {/* Table */}
    </div>
  );
}
