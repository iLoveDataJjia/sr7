import { getLightCones } from "@/data/lightcones";
import { starCSS } from "@/data/utils";
import Image from "next/image";

/**
 * Lightcone photo.
 */
export default function LightconePhoto({
  nameUID,
  className,
  children,
}: {
  nameUID: string;
  className?: string;
  children?: JSX.Element;
}) {
  // Gradient color
  const star = getLightCones([nameUID])[0].star;

  // Render
  return (
    <div
      className={
        `rounded-md bg-gradient-to-b ${starCSS(star).gradient} p-1 shadow` + (className ? ` ${className}` : "")
      }
    >
      <Image src={`/sr7/assets/lightcones/${nameUID}.webp`} alt={nameUID} width={64} height={64} />
      {children && children}
    </div>
  );
}
