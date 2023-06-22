"use client";

import Dropdown from "@/assets/general/dropdown.svg";
import Filter from "@/assets/general/filter.svg";
import { getCharacters } from "@/data/Characters";
import { useState } from "react";

/**
 * Tier list table.
 */
export default function TierListTab() {
  // Characters
  const characters = getCharacters();
  const [element, setElement] = useState(undefined);
  const [path, setPath] = useState(undefined);
  const [star, setStar] = useState(undefined);

  // Render
  return (
    <div>
      {/* Filters */}
      <div className="flex space-x-8">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 fill-white" />
          <h1 className="font-bold">Filters</h1>
        </div>
        {/* TODO James - Continue this dropdown */}
        <button className="flex items-center space-x-4 rounded-md bg-indigo-950 px-3 py-1.5">
          <p className="text-sm text-indigo-300 opacity-50">{!element && "Select element"}</p>
          <Dropdown className="w-4 fill-white" />
        </button>
      </div>

      {/* Table */}
    </div>
  );
}
