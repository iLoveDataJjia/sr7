import TierListTab from "./TierListTab";
import { metadata } from "./layout";

/**
 * Route entrypoint.
 */
export default function Page() {
  return (
    <div className="m-4">
      <div
        className="rounded-xl bg-[length:100%] bg-right-top bg-no-repeat"
        style={{ backgroundImage: `url(/sr7/assets/general/wp.webp)` }}
      >
        {/* Title */}
        <div className="flex space-x-4 py-12 pl-8">
          <span className="w-[2px] bg-blue-500" />
          <div className="w-5/12 space-y-2 p-2">
            <h1 className="text-2xl font-bold">Honkai: Star Rail Tier List</h1>
            <p className="text-sm italic">{metadata.description}</p>
          </div>
        </div>

        {/* Tier list table */}
        <TierListTab />
      </div>
    </div>
  );
}
