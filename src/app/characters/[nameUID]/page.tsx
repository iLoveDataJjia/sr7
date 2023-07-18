import Comp from "./Comp";
import Equipement from "./Equipement";
import General from "./General";
import SkillTracePriority from "./SkillTracePriority";
import { getCharacters } from "@/data/characters";
import { srCapitalize, srDecodeURL } from "@/utils/String";

/**
 * Make routes static. (Enable SSG too)
 */
export async function generateStaticParams() {
  return getCharacters().map((_) => ({
    nameUID: _.nameUID.toLowerCase(),
  }));
}

/**
 * Generate metadata.
 */
export async function generateMetadata({ params: { nameUID } }: { params: { nameUID: string } }) {
  // Get character
  const nameUIDDecoded = srCapitalize(srDecodeURL(nameUID));
  const character = getCharacters([nameUIDDecoded])[0];

  // Render
  return {
    title: `Honkai: Star Rail ${character.nameUID} Build`,
    description: character.dynamic.playstyle,
    openGraph: {
      images: `/assets/characters/${character.nameUID}/photo.webp`,
    },
  };
}

/**
 * Route entrypoint.
 */
export default function Page({ params: { nameUID } }: { params: { nameUID: string } }) {
  // Get character
  const nameUIDDecoded = srCapitalize(srDecodeURL(nameUID));
  const character = getCharacters([nameUIDDecoded])[0];

  // Render
  return (
    <div className="m-4 space-y-8">
      <General character={character} />
      <Equipement character={character} />
      <SkillTracePriority character={character} />
      <Comp character={character} />
    </div>
  );
}
