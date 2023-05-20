import { useState, useEffect } from "react";

/**
 * Webp.
 */
export default function Webp(props: { src: string; className?: string }) {
  // States
  const [webpPath, setWepbPath] = useState<string | undefined>(undefined);
  useEffect(() => {
    const fGetPhoto = async () => {
      const imagePath = await import(/* @vite-ignore */ props.src);
      setWepbPath(imagePath.default);
    };
    fGetPhoto();
  }, [webpPath]);

  // Render
  if (!webpPath) return <span className={props.className ? ` ${props.className}` : ""} />; // Placeholder
  return <img src={webpPath} alt={props.src} className={props.className} />;
}
