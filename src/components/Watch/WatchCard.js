export default function WatchCard({
  title,
  thumbnail_yt,
  yt_link,
  speaker_name,
  speaker_info,
}) {

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 w-full max-w-md mx-auto">
      <a href={yt_link} target="_blank" rel="noopener noreferrer" className="relative group">
        <img
          className="w-full h-60 object-cover group-hover:opacity-75 transition"
          src={thumbnail_yt}
          alt={title}
        />
      </a>
      
      <div className="flex flex-col gap-3">
        <a href={yt_link} target="_blank" rel="noopener noreferrer">
          <h2 className="text-lg font-semibold text-gray-900 hover:text-red-600">
            Event Name & Date
          </h2>
          <h2 className="text-lg font-semibold text-gray-900 hover:text-red-600">
            {title}
          </h2>
        </a>
          <a href={speaker_info} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gray-900 hover:text-red-600">
          {speaker_name}
        </a>
      </div>
    </div>
  );
}
