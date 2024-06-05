import AscensionMaterials from "./AscensionMaterials";
import Comp from "./Comp";
import Equipement from "./Equipement";
import General from "./General";
import NormalAtkMaterials from "./NormalAtkMaterials";
import SkillTalentUltMaterials from "./SkillTalentUltMaterials";
import SkillTraceEidolonPriority from "./SkillTraceEidolonPriority";
import { getCharacters } from "@/data/characters";
import { decodeStaticParams, encodeAsStaticParams } from "@/utils/string";

/**
 * Make routes static. (Enable SSG too)
 */
export async function generateStaticParams() {
  const characterNameUIDs = getCharacters().map((_) => encodeAsStaticParams(_.nameUID));
  const staticParams = characterNameUIDs.map((_) => ({ nameUID: _ }));
  return staticParams;
}

/**
 * Generate metadata.
 */
export async function generateMetadata({ params: { nameUID } }: { params: { nameUID: string } }) {
  // Get character
  const nameUIDDecoded = decodeStaticParams(nameUID);
  const character = getCharacters([nameUIDDecoded])[0];

  // Render
  return {
    title: `Honkai: Star Rail ${character.nameUID} Build`,
    description: character.dynamic.playstyle,
    openGraph: {
      images: `/sr7/assets/characters/${character.nameUID}/photo.webp`,
    },
  };
}

/**
 * Route entrypoint.
 */
export default function Page({ params: { nameUID } }: { params: { nameUID: string } }) {
  // Get character
  const nameUIDDecoded = decodeStaticParams(nameUID);
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
