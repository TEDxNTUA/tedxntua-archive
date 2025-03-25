import WatchCard from "./WatchCard";

export default function WatchGrid({talks}) {
  return (
    <div className="max-w-[1600px] w-10/12 mx-auto z-1 rounded-md xl:bg-zinc-950 xl:p-10">
      <ul className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 list-none gap-[6vh] xl:gap-10">
        {talks.map(talk => (
          <li key={talk.id}>
            <WatchCard talk={talk} />
          </li>
        ))}
      </ul>
    </div>
  );
}
