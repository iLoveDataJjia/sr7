import Comp from "@/components/characters/[nameUID]/Comp";
import Equipement from "@/components/characters/[nameUID]/Equipement";
import General from "@/components/characters/[nameUID]/General";
import SkillTracePriority from "@/components/characters/[nameUID]/SkillTracePriority";
import { getCharacters } from "@/data/Characters";
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
