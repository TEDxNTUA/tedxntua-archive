import WatchCard from "./WatchCard";

/**
 * WatchGrid
 * Renders a responsive grid of `WatchCard` components.
 * - `talks` should be an array of talk objects (id, title, thumbnail, etc.)
 * - Layout adjusts via Tailwind grid classes for small → large screens
 */
export default function WatchGrid({talks}) {
  return (
    <div className="max-w-[1600px] w-10/12 mx-auto z-1 rounded-md xl:bg-zinc-950 xl:p-10">
      {/* Responsive grid: 2 cols mobile, 3 cols lg, 4 cols 2xl */}
      <ul className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 list-none gap-[6vh] xl:gap-10">
        {talks.map(talk => (
          <li key={talk.id}>
            {/* Each item renders the WatchCard which handles its own layout */}
            <WatchCard talk={talk} />
          </li>
        ))}
      </ul>
    </div>
  );
}
