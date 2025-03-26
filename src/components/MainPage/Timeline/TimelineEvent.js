import React from "react";

const TimelineEvent = ({TedEvent}) => {
  const {link, logo, source, year, paragraph, index} = TedEvent;

  return (
    <div
      className="relative flex flex-col xl:flex-row gap-8 xl:gap-0 items-center h-[600px] "
      style={{
        top: `${index * 600}px` // Align with the bullet position
      }}
    >
      <div className="xl:w-1/6">
        <div className="text-center text-white text-4xl font-bold ">{year}</div>
      </div>

      <div id="image-column" className="xl:w-3/6 flex justify-center">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
            <img
              src={`./previousEvents/${source}`}
              alt={`${year} event`}
              className="w-full max-w-xs rounded-lg border border-[#eb002733] hover:border-[#eb0027] transition duration-200 object-fill"
            />
          </a>
        ) : (
          <img
            src={`./previousEvents/${source}`}
            alt={`${year} event`}
            className="w-full max-w-xs rounded-lg border border-[#eb002733] object-fill"
          />
        )}
      </div>

      <div id="description-column" className="hidden xl:block w-2/6">
        <div className="text-gray-300 text-md leading-relaxed pl-6">{paragraph}</div>
      </div>
    </div>
  );
};

export default TimelineEvent;
