import Webp from "../../assets";
import { Character } from "../../data/Characters";
import { getLightCones } from "../../data/LightCones";

/**
 * Equipement tab.
 */
export default function Equipement(props: { character: Character }) {
  // Lightcones JSX
  const LightCone = (props: { nameUID: string; className?: string; children?: JSX.Element }) => {
    const star = getLightCones([props.nameUID])[0].star;
    switch (star) {
      case 5:
        return (
          <div
            className={
              "bg-gradient-to-b from-amber-700 via-amber-500 via-60% to-amber-200" +
              (props.className ? ` ${props.className}` : "")
            }
          >
            <Webp src={`./lightcones/${props.nameUID}.webp`} />
            {props.children && props.children}
          </div>
        );
      case 4:
        return (
          <div
            className={
              "bg-gradient-to-b from-purple-950 via-purple-800 via-60% to-purple-500" +
              (props.className ? ` ${props.className}` : "")
            }
          >
            <Webp src={`./lightcones/${props.nameUID}.webp`} />
            {props.children && props.children}
          </div>
        );
      case 3:
        return (
          <div
            className={
              "bg-gradient-to-b from-blue-950 via-blue-800 via-60% to-blue-500" +
              (props.className ? ` ${props.className}` : "")
            }
          >
            <Webp src={`./lightcones/${props.nameUID}.webp`} />
            {props.children && props.children}
          </div>
        );
      default:
        return props.className ? <span className={props.className} /> : <span />;
    }
  };

  // Render
  return (
    <div className="flex justify-between divide-x-2 divide-slate-950 rounded bg-indigo-950">
      {/* E1 */}
      <div className="grow p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <p className="text-lg font-bold">Light Cones</p>
        </div>
        <div className="mx-auto max-w-min space-y-8 py-4">
          {props.character.dynamic.lightcones.map((_, idx) => (
            <div key={idx} className="flex items-center rounded-md bg-indigo-900 shadow">
              <LightCone nameUID={_} className="relative h-16 w-16 rounded-md p-1 shadow">
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-90 items-center justify-center rounded-full bg-gray-700 px-3 py-1.5 text-sm font-bold shadow">
                  {idx + 1}
                </div>
              </LightCone>
              <p className="w-56 px-4 text-center font-semibold">{_}</p>
            </div>
          ))}
        </div>
      </div>

      {/* E2 & E3 */}
      <div className="divide-y-2 divide-slate-950">
        {/* E2 */}
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <span className="h-5 w-0.5 bg-blue-500" />
            <p className="text-lg font-bold">Relics & Ornaments</p>
          </div>
          <div className="flex space-x-10 p-4">
            {/* Relics */}
            <div className="space-y-8">
              {props.character.dynamic.relics.map((_, idx) => (
                <div key={idx} className="flex items-center rounded-md bg-indigo-900 shadow">
                  <div className="relative h-14 w-14 rounded bg-indigo-700 p-1">
                    <Webp src={`./relics/${_}.webp`} />
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-75 items-center justify-center rounded-full bg-gray-700 px-3 py-1.5 text-sm font-bold shadow">
                      {idx + 1}
                    </div>
                  </div>
                  <p className="w-48 px-4 text-center text-sm font-semibold">{_}</p>
                </div>
              ))}
            </div>

            {/* Ornaments */}
            <div className="space-y-8">
              {props.character.dynamic.ornaments.map((_, idx) => (
                <div key={idx} className="flex items-center rounded-md bg-indigo-900 shadow">
                  <div className="relative h-14 w-14 rounded bg-indigo-700 p-1">
                    <Webp src={`./ornaments/${_}.webp`} />
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-75 items-center justify-center rounded-full bg-gray-700 px-3 py-1.5 text-sm font-bold shadow">
                      {idx + 1}
                    </div>
                  </div>
                  <p className="w-48 px-4 text-center text-sm font-semibold">{_}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* E3 */}
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <span className="h-5 w-0.5 bg-blue-500" />
            <p className="text-lg font-bold">Stat priority</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
