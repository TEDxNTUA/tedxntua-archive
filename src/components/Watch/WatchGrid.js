import WatchCard from "./WatchCard";

export default function WatchGrid({talks}) {
  return (
    <ul
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 list-none gap-[6vh] lg:gap-10 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950`}
    >
      {talks.map(talk => (
        <li key={talk.id}>
          <WatchCard talk={talk} />
        </li>
      ))}
    </ul>
  );
}
