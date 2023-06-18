import { getLightCones } from "@/data/LightCones";
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
  const cssGradColor = (() => {
    switch (star) {
      case 5:
        return "bg-gradient-to-b from-amber-700 via-amber-500 via-60% to-amber-200";
      case 4:
        return "bg-gradient-to-b from-purple-950 via-purple-700 via-60% to-purple-400";
      case 3:
        return "bg-gradient-to-b from-blue-950 via-blue-800 via-60% to-blue-500";
      default:
        return undefined;
    }
  })();

  // Render
  if (cssGradColor)
    return (
      <div className={`rounded-md ${cssGradColor} p-1 shadow` + (className ? ` ${className}` : "")}>
        <Image src={`/assets/lightcones/${nameUID}.webp`} alt={nameUID} width={64} height={64} />
        {children && children}
      </div>
    );
  return className ? <span className={className} /> : <span />;
}
