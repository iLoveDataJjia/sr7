import { getCharacters } from "../../../data/Characters";
import Comp from "./Comp";
import Equipement from "./Equipement";
import General from "./General";
import Trace from "./Trace";

/**
 * Route entrypoint.
 */
export default function Index(props: { nameUID: string }) {
  const character = getCharacters([props.nameUID])[0];
  return (
    <div className="space-y-8 px-4 py-2">
      <General character={character} />
      <Equipement character={character} />
      <Trace character={character} />
      <Comp character={character} />
    </div>
  );
}
