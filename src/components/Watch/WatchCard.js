/**
 * WatchCard
 * Displays a single talk card used inside `WatchGrid`.
 * Responsibilities:
 * - show thumbnail that links to the YouTube talk
 * - display event name/date and talk title
 * - link to speaker info below the card
 */
export default function WatchCard({talk}) {
  return (
    <div className="text-white">
      <section className="youtube-link-wrapper mb-2">
        <div className="group">
          {/* Clickable area linking to the YouTube video */}
          <a
            className="image-wrapper bg-white"
            href={talk.yt_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-full h-60 object-cover grayscale-0 hover:grayscale transition"
              src={talk.thumbnail_yt}
              alt={talk.title}
            />

            {/* Title block: event name/date and talk title */}
            <div className="flex flex-col gap-1 mt-2 xl:mt-6">
              <h2 className="font-extralight capitalize no-underline flex flex-row gap-2">
                <span>{talk.eventName.toUpperCase()}</span>
                <span className="hidden md:block">| {talk.eventDate}</span>
              </h2>
              <h2 className="text-xl font-semibold group-hover:underline">{talk.title}</h2>
            </div>
          </a>
        </div>
      </section>

      {/* Speaker name with link to external speaker page/info */}
      <span className="text-md hover:text-[#eb0028] capitalize hover:undeline">
        <a href={talk.speaker_info} target="_blank" rel="noopener noreferrer">
          {talk.speaker_name.toUpperCase()}
        </a>
      </span>
    </div>
  );
}
