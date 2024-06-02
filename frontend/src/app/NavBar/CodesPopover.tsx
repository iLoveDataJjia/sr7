"use client";

import ActiveCodes from "@/assets/codes/activeCodes.svg";
import CopyToCliboard from "@/assets/codes/copyToClipboard.svg";
import GoToLink from "@/assets/codes/goToLink.svg";
import Checked from "@/assets/general/checked.svg";
import TextHighlighter from "@/components/TextHighlighter";
import { getCodes } from "@/data/codes";
import { getItem } from "@/data/items";
import { starCSS } from "@/data/utils";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * Active code(s) popover.
 */
export default function CodesPopover() {
  // Active codes
  const codes = getCodes();
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  // Interactions
  const [wasOpened, setWasOpened] = useState(false);
  const [hasJustCopied, setHasJustCopied] = useState<string | undefined>(undefined);
  useEffect(() => {
    hasJustCopied && navigator.clipboard.writeText(hasJustCopied);
  }, [hasJustCopied]);

  // Render
  return (
    <Popover className="relative">
      {/* Button */}
      <Popover.Button
        className="group relative flex items-center rounded-3xl p-1.5 outline-none transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow"
        onClick={() => setWasOpened(true)}
      >
        <ActiveCodes className="h-7 w-7 fill-indigo-300 transition-all duration-300 ease-in-out focus:outline-none group-hover:fill-slate-950" />
        <div
          className={
            "absolute -right-4 -top-4 scale-[0.60] rounded-full border-4 border-slate-950 bg-rose-500 px-2.5 text-center text-lg font-bold" +
            (wasOpened || codes.length === 0 ? " hidden" : "")
          }
        >
          {codes.length}
        </div>
      </Popover.Button>

      {/* Pannel */}
      <Transition
        unmount={false}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel
          unmount={false}
          className="absolute left-1/2 w-max -translate-x-1/2 translate-y-2.5 -space-y-[1px] shadow"
        >
          {/* Header */}
          <h2
            className={
              "bg-indigo-900 px-4 py-1.5 text-center text-sm font-bold transition-all duration-100 ease-in-out hover:bg-indigo-800" +
              (codes.length === 0 ? " rounded-md" : " rounded-t-md")
            }
          >
            {`${month} ${year}`} - {codes.length} active code(s)
          </h2>

          {/* Codes */}
          {codes.map((code, idx) => (
            <div
              key={code.codeUID}
              className={
                "flex items-center justify-between space-x-4 px-4 py-2.5 transition-all duration-100 ease-in-out" +
                (idx % 2 ? " bg-indigo-900 hover:bg-indigo-700" : " bg-indigo-950 hover:bg-indigo-800") +
                (idx === codes.length - 1 ? " rounded-b-md" : "")
              }
            >
              {/* Code */}
              <p className="w-40 text-sm font-semibold">{code.codeUID}</p>

              {/* Items */}
              <div className="flex space-x-1.5">
                {code.items.map((item) => (
                  <div key={item.nameUID} className="group relative">
                    <Image
                      src={`/assets/items/${getItem(item.nameUID).type}/${item.nameUID}.webp`}
                      alt={item.nameUID}
                      height={25}
                      width={25}
                      className={`relative rounded-md bg-gradient-to-b p-0.5 ${
                        starCSS(getItem(item.nameUID).star).gradient
                      }`}
                    />
                    <TextHighlighter
                      text={`${item.nameUID} x${item.quantity}`}
                      regexGroup={/( x\d+)$/g}
                      cssHighlight="font-bold text-indigo-500"
                      className="absolute left-1/2 z-50 hidden w-max -translate-x-1/2 translate-y-2 rounded-md border-[1px] border-indigo-300 bg-slate-950 px-2 py-1 text-xs group-hover:block"
                    />
                  </div>
                ))}
              </div>

              {/* Interacts */}
              <div className="flex items-center space-x-1.5">
                {/* Copy to clipboard */}
                <div
                  className="group relative"
                  onClick={() => setHasJustCopied(code.codeUID)}
                  onMouseLeave={() => setHasJustCopied(undefined)}
                >
                  <CopyToCliboard
                    className={
                      "h-6 w-6 cursor-pointer rounded-md fill-white p-1 transition-all duration-300 ease-in-out hover:bg-white" +
                      (idx % 2 ? " hover:fill-indigo-900" : " hover:fill-indigo-950")
                    }
                  />
                  <p
                    className={
                      "absolute left-1/2 z-50 hidden w-max -translate-x-1/2 translate-y-2 rounded-md border-[1px] border-indigo-300 bg-slate-950 px-2 py-1 text-xs" +
                      (hasJustCopied === code.codeUID ? "" : " group-hover:block")
                    }
                  >
                    Copy
                  </p>
                  <div
                    className={
                      "absolute left-1/2 z-50 hidden w-max -translate-x-1/2 translate-y-2 items-center space-x-1.5 rounded-md border-[1px] border-indigo-300 bg-slate-950 px-2 py-1" +
                      (hasJustCopied === code.codeUID ? " group-hover:flex" : "")
                    }
                  >
                    <Checked className="h-3 w-3 fill-indigo-300" />
                    <p className="text-xs">Copied</p>
                  </div>
                </div>

                {/* Go to link */}
                <Link
                  href="https://hsr.hoyoverse.com/gift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <GoToLink
                    className={
                      "h-6 w-6 cursor-pointer rounded-md fill-white p-1 transition-all duration-300 ease-in-out hover:bg-white" +
                      (idx % 2 ? " hover:fill-indigo-900" : " hover:fill-indigo-950")
                    }
                  />
                  <p
                    className={
                      "absolute left-1/2 z-50 hidden w-max -translate-x-1/2 translate-y-2 rounded-md border-[1px] border-indigo-300 bg-slate-950 px-2 py-1 text-xs group-hover:block"
                    }
                  >
                    Redeem code
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
