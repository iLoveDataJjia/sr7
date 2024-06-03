import AscensionMaterials from "./AscensionMaterials";
import Comp from "./Comp";
import Equipement from "./Equipement";
import General from "./General";
import NormalAtkMaterials from "./NormalAtkMaterials";
import SkillTalentUltMaterials from "./SkillTalentUltMaterials";
import SkillTraceEidolonPriority from "./SkillTraceEidolonPriority";
import { getCharacters } from "@/data/characters";
import { srCapitalize, srDecodeURL, srEncodeURL } from "@/utils/String";

/**
 * Make routes static. (Enable SSG too)
 */
export async function generateStaticParams() {
  return getCharacters().map((_) => ({
    nameUID: srEncodeURL(_.nameUID.toLowerCase()),
  }));
}

/**
 * Generate metadata.
 */
export async function generateMetadata({ params: { nameUID } }: { params: { nameUID: string } }) {
  // Get character
  const nameUIDDecoded = srCapitalize(srDecodeURL(nameUID));
  const character = getCharacters([nameUIDDecoded]).at(0);

  // Render
  return (
    character && {
      title: `Honkai: Star Rail ${character.nameUID} Build`,
      description: character.dynamic.playstyle,
      openGraph: {
        images: `assets/characters/${character.nameUID}/photo.webp`,
      },
    }
  );
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
      <SkillTraceEidolonPriority character={character} />
      <Comp character={character} />
      <AscensionMaterials character={character} />
      <NormalAtkMaterials character={character} />
      <SkillTalentUltMaterials character={character} />
    </div>
  );
}
