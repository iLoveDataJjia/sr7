"use client";

import FilterPopover from "./FilterPopover";
import Table from "./Table";
import Filter from "@/assets/general/filter.svg";
import Star from "@/assets/general/star.svg";
import { getCharacters, tierOrder } from "@/data/characters";
import { Element, Path, starCSS } from "@/data/utils";
import Image from "next/image";
import { useState } from "react";

/**
 * Tier list table.
 */
export default function TierListTab() {
  // All values
  const allElems = Object.values(Element);
  const allPaths = Object.values(Path);

  // Elem filtering
  const [selectedElem, setSelectedElem] = useState(
    allElems.reduce((acc, elem) => {
      acc[elem] = false;
      return acc;
    }, {} as { [k in Element]: boolean })
  );
  const imgsElem = allElems.reduce((acc, elem) => {
    acc[elem] = <Image src={`/assets/elements/${elem}.webp`} alt={elem} width={20} height={20} />;
    return acc;
  }, {} as { [k in Element]: JSX.Element });

  // Path filtering
  const [selectedPath, setSelectedPath] = useState(
    allPaths.reduce((acc, path) => {
      acc[path] = false;
      return acc;
    }, {} as { [k in Path]: boolean })
  );
  const imgsPath = allPaths.reduce((acc, path) => {
    acc[path] = <Image src={`/assets/paths/${path}.webp`} alt={path} width={20} height={20} />;
    return acc;
  }, {} as { [k in Path]: JSX.Element });

  // Star filtering
  const [selectedStar, setSelectedStar] = useState({
    5: false,
    4: false,
  });
  const imgsStar = {
    5: (
      <div className="flex items-center space-x-0.5">
        <p className={`font-bold ${starCSS(5).text}`}>5</p>
        <Star className={`h-5 w-5 ${starCSS(5).fill}`} />
      </div>
    ),
    4: (
      <div className="flex items-center space-x-0.5">
        <p className={`font-bold ${starCSS(4).text}`}>4</p>
        <Star className={`h-5 w-5 ${starCSS(4).fill}`} />
      </div>
    ),
  };

  // Characters
  const noSelectedElem = Object.values(selectedElem).filter((_) => _ === true).length === 0;
  const noSelectedPath = Object.values(selectedPath).filter((_) => _ === true).length === 0;
  const noSelectedStar = Object.values(selectedStar).filter((_) => _ === true).length === 0;
  const characters = getCharacters()
    .filter(
      (char) =>
        (noSelectedElem || selectedElem[char.static.element]) &&
        (noSelectedPath || selectedPath[char.static.path]) &&
        (noSelectedStar || selectedStar[char.static.star])
    )
    .sort((a, b) => tierOrder(b.dynamic.tier) - tierOrder(a.dynamic.tier));

  // Render
  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 fill-white" />
          <h2 className="font-bold">Filters</h2>
        </div>
        <FilterPopover
          baseTitle="Select element"
          selected={selectedElem}
          setSelected={setSelectedElem}
          imgs={imgsElem}
          withSelectText={true}
        />
        <FilterPopover
          baseTitle="Select path"
          selected={selectedPath}
          setSelected={setSelectedPath}
          imgs={imgsPath}
          withSelectText={true}
        />
        <FilterPopover
          baseTitle="Select star"
          selected={selectedStar}
          setSelected={setSelectedStar}
          imgs={imgsStar}
          withSelectText={false}
        />
      </div>

      {/* Table */}
      <Table characters={characters} />
    </div>
  );
}
