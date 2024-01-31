"use client";
import WatchCard from "./WatchCard";

export default function WatchGrid({
  watchtalks,
  gridSizeXl,
  category,
  event_year,
}) {
  const gridsizeVariants = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
  };

  // Filter the watchtalks array only if the category is not an empty string
  const filteredWatchTalks = watchtalks.filter(
    (watchtalk) =>
      (category.length === 0 || category.includes(watchtalk.category)) &&
      (event_year === "" || watchtalk.year === parseInt(event_year))
  );
  return (
    <>
      {filteredWatchTalks.length === 0 && (
        <p className="text-[#eb0028] text-3xl items-center">OUPS... NO TALKS</p>
      )}
      {filteredWatchTalks.length > 0 && (
        <ul
          className={`grid grid-cols-1 list-none gap-[6vh] lg:gap-10 ${gridsizeVariants[gridSizeXl]} w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950`}
        >
          {filteredWatchTalks
            .sort((a, b) => b.year - a.year)
            .map((watchtalk, index) => {
              return (
                <li key={index}>
                  <WatchCard
                    title={watchtalk.title}
                    thumbnail={watchtalk.thumbnail}
                    yt_link={watchtalk.yt_link}
                    bio={watchtalk.bio}
                    speaker_name={watchtalk.speaker_name}
                    speaker_info={watchtalk.speaker_info}
                  />
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
}
