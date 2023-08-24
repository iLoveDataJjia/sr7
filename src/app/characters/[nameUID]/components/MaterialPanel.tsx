import TextHighlighter from "@/components/TextHighlighter";
import { getItem } from "@/data/items";
import { starCSS } from "@/data/utils";
import Image from "next/image";

/**
 * Material panel.
 */
export default function MaterialPanel({ name, quantity }: { name: string; quantity: number }) {
  // Gradient color
  const star = getItem(name).star;

  // Render
  return (
    <div className="flex w-max items-center rounded-md bg-indigo-900 hover:bg-indigo-800">
      {/* Image */}
      <div className={`rounded-md ${starCSS(star).gradient} h-10 w-10 bg-gradient-to-b p-1 shadow`}>
        {name === "Credit" ? (
          <Image src={`/assets/items/generals/${name}.webp`} alt={name} width={40} height={40} />
        ) : (
          <Image src={`/assets/items/materials/${name}.webp`} alt={name} width={40} height={40} />
        )}
      </div>

      {/* Name & quantity */}
      <TextHighlighter
        text={`${name} x${quantity}`}
        regexGroup={/(x\d+)/}
        cssHighlight="text-indigo-500 font-bold"
        className="w-36 px-2 text-center text-xs font-semibold"
      />
    </div>
  );
}
