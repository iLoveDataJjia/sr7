"use client";

import ActiveCodes from "@/assets/codes/activeCodes.svg";
import { Popover } from "@headlessui/react";

/**
 * Active code(s) popover.
 */
export default function CodesPopover() {
  // Active codes

  // Render
  return (
    <Popover>
      <Popover.Button className="group relative flex items-center rounded-3xl p-1.5 transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow focus:outline-none">
        <ActiveCodes className="h-7 w-7 fill-indigo-300 transition-all duration-300 ease-in-out focus:outline-none group-hover:fill-slate-950" />
      </Popover.Button>
      <Popover.Panel></Popover.Panel>
    </Popover>
  );
}
