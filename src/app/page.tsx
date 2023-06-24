import TierListTab from "./TierListTab";

/**
 * Route entrypoint.
 */
export default function Page() {
  return (
    <div className="m-4">
      <div className="rounded-xl bg-cover bg-right-top" style={{ backgroundImage: `url(/assets/general/wp.webp)` }}>
        {/* Title */}
        <div className="flex space-x-4 py-12 pl-8">
          <span className="w-[2px] bg-blue-500" />
          <div className="w-5/12 space-y-2 p-2">
            <h1 className="text-2xl font-bold">Honkai StarRail Tier List</h1>
            <p className="text-sm italic">
              SR7.NL provides the essential, constantly updated Honkai StarRail Tier list for the latest patch,
              utilizing data science to determine the optimal characters for any team.
            </p>
          </div>
        </div>

        {/* Tier list table */}
        <TierListTab />
      </div>
    </div>
  );
}
