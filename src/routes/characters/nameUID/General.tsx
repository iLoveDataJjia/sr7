import Webp from "../../../assets";
import { ReactComponent as Star } from "../../../assets/general/star.svg";
import { Character, Tier } from "../../../data/Characters";

/**
 * General tab.
 */
export default function General(props: { character: Character }) {
  // Tier color
  let color: string;
  switch (props.character.dynamic.tier) {
    case Tier["S+"]:
      color = "amber";
      break;
    case Tier["S"]:
      color = "blue";
      break;
    case Tier["A"]:
      color = "sky";
      break;
    case Tier["B"]:
      color = "white";
      break;
    case Tier["C"]:
      color = "rose";
      break;
    case Tier["D"]:
      color = "red";
      break;
  }

  // Render
  return (
    <div className="justify-between space-y-8">
      {/* E1 */}
      <div className="flex items-center space-x-4 py-4">
        {/* Photo */}
        <div className={`relative flex h-24 w-24 flex-col items-center rounded border-2 border-${color}-500`}>
          <div className="absolute -top-4 flex">
            {Array.from({ length: props.character.static.star }, (_, idx) => (
              <Star key={idx} className="h-5 w-5 fill-yellow-500" />
            ))}
          </div>
          <Webp src={`./characters/${props.character.nameUID}/photo.webp`} className="p-1" />
          <div
            className={`absolute -bottom-4 rounded border-2 border-${color}-500 bg-slate-950 px-2 text-sm font-bold text-${color}-500 ring-2 ring-slate-950`}
          >
            {props.character.dynamic.tier}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-4xl font-bold">{props.character.nameUID}</p>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Webp src={`./elements/${props.character.static.element}.webp`} className="h-10 w-10" />
              <p className="text-xl font-bold">{props.character.static.element}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Webp src={`./paths/${props.character.static.path}.webp`} className="h-8 w-8" />
              <p className="text-xl font-bold">{props.character.static.path}</p>
            </div>
          </div>
        </div>
      </div>

      {/* E2 */}
      <div></div>

      {/* E3 */}
      <div className="rounded bg-indigo-950">
        <div className="p-4"></div>
      </div>

      {/* E4 */}
      <div></div>
    </div>
  );
}
