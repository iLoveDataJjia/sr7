import { ReactComponent as Star } from "../../assets/general/star.svg";

/**
 * Character build.
 */
export function BuildPg() {
  return (
    <div className="relative">
      <div className="sticky min-h-screen bg-[url(./assets/characters/clara/wp.jpg)] bg-cover bg-center brightness-[0.20]" />
      <div className="absolute inset-0 max-h-min">
        <div className="mx-auto max-w-[958px]">
          {/* Header */}
          <div className="flex items-center space-x-6 p-6">
            <ImgCpt />
            <DescCpt />
          </div>

          {/* Content */}
          <div className="m-6">
            <div className="rounded-md bg-slate-950 p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <span className="w-0.5 bg-blue-500" />
                  <div className="font-bold">Clara Build</div>
                </div>
                <div className="flex">
                  <LightConeCpt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Profil image.
 */
export function ImgCpt() {
  return (
    <div className="relative h-24 w-24 rounded-md border-2 border-amber-500 p-0.5">
      <div className="h-full w-full overflow-hidden rounded bg-gradient-to-b from-amber-700 to-amber-300 ring-amber-500">
        <div className="mt-20 h-full w-full scale-[3] bg-[url(./assets/characters/clara/profil.png)] bg-cover bg-center" />
      </div>
      <div
        className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 transform
        rounded-md border-2 border-amber-500 bg-slate-950 px-3 text-sm font-bold text-amber-500 ring-2 ring-slate-950"
      >
        S+
      </div>
    </div>
  );
}

/**
 * Profil description.
 */
export function DescCpt() {
  return (
    <div className="flex flex-col space-y-4 font-medium">
      <div className="flex items-center space-x-2">
        <div className="text-4xl">Clara</div>
        <div className="flex">
          {Array.from({ length: 5 }, (_, idx) => (
            <Star key={idx} className="h-5 w-5 fill-yellow-500" />
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex space-x-2">
          <div className="h-6 w-6 bg-[url(./assets/path/physical.png)] bg-cover" />
          <div>Physical</div>
        </div>
        <div className="flex space-x-2">
          <div className="h-6 w-6 bg-[url(./assets/element/the_destruction.png)] bg-cover" />
          <div>The Destruction</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Light cone.
 */
function LightConeCpt() {
  return (
    <div className="flex items-center space-x-4">
      <div className="h-20 w-20 rounded-full bg-[url(./assets/lightcones/something_irreplaceable.png)] bg-cover bg-center" />
      <div className="font-medium">Something Irreplaceable</div>
    </div>
  );
}
