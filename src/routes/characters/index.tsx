import { Character } from "../../data/Characters";
import Comp from "./Comp";
import Equipement from "./Equipement";
import General from "./General";
import Trace from "./Trace";

/**
 * Route entrypoint.
 */
export default function Index(props: { character: Character }) {
  return (
    <div className="m-4 space-y-8">
      <General character={props.character} />
      <Equipement character={props.character} />
      <Trace character={props.character} />
      <Comp character={props.character} />
    </div>
  );
}
