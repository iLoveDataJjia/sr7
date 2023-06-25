"use client";

import Checked from "@/assets/general/checked.svg";
import Dropdown from "@/assets/general/dropdown.svg";
import { Element, Path } from "@/data/Utils";
import { Popover, Transition, Switch } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

/**
 * Popover.
 */
export default function FilterPopover<A extends Element | Path | number>({
  baseTitle,
  selected,
  setSelected,
  imgs,
  withSelectText,
}: {
  baseTitle: string;
  selected: { [k in A]: boolean };
  setSelected: Dispatch<SetStateAction<{ [k in A]: boolean }>>;
  imgs: { [k in A]: JSX.Element };
  withSelectText: boolean;
}) {
  // Possible selection & Current selected
  const possibleSelect = Object.keys(selected) as A[];
  const nbSelected = Object.values(selected).filter((_) => _ === true).length;

  // Render
  return (
    <Popover className="relative">
      {/* Button */}
      <Popover.Button className="group flex w-52 items-center justify-between rounded-md bg-indigo-950 px-3 py-1.5 shadow focus:outline-none">
        <p className="hover:text text-sm text-indigo-300 text-opacity-50">
          {nbSelected === 0 ? baseTitle : `${nbSelected} selected`}
        </p>
        <Dropdown className="w-3 fill-indigo-300 transition-all duration-100 ease-in-out ui-open:-rotate-180" />
      </Popover.Button>

      {/* Pannel */}
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute top-full w-full translate-y-3 space-y-1.5 rounded-md bg-indigo-950 px-4 py-2 shadow transition-all duration-100 ease-in-out">
          {possibleSelect.map((select) => (
            <Switch
              key={select}
              checked={selected[select]}
              onChange={() => setSelected({ ...selected, [select]: !selected[select] })}
              className="group flex w-full items-center space-x-2.5"
            >
              {({ checked }) => (
                <>
                  {checked ? (
                    <Checked className="h-2.5 w-2.5 fill-indigo-300" />
                  ) : (
                    <span className="h-2.5 w-2.5 rounded-sm bg-indigo-300 opacity-50 transition-all duration-100 ease-in-out group-hover:opacity-100" />
                  )}
                  {imgs[select]}
                  {withSelectText && (
                    <p className="text-sm text-indigo-300 opacity-50 transition-all duration-100 ease-in-out group-hover:font-bold group-hover:opacity-100 ui-checked:font-bold ui-checked:opacity-100">
                      {select}
                    </p>
                  )}
                </>
              )}
            </Switch>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
