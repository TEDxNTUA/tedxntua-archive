import React from "react";

const TimelineEvent = ({ TedEvent }) => {
  const { link, logo, source, year, paragraph, index } = TedEvent; // Index added for bullet alignment
  const isHoverable = Boolean(link); // Check if the link exists

  return (
    <div
      //   className="relative flex items-center place-content-center w-full h-[600px]  border-[rgba(255,255,255,0.2)] border-8"
      className="relative flex flex-col xl:flex-row gap-8 xl:gap-0 items-center h-[600px] "
      style={{
        top: `${index * 600}px`, // Align with the bullet position
      }}
    >
      {/* Year Column */}

      {/* <div className="text-4xl font-bold">2025</div> */}

      {/* <div className="w-2/6">  */}
      <div className="xl:w-1/6">
        {/* <div className="w-1/6 text-center text-4xl font-bold text-white mb-4 bg-[rgba(255,255,255,0.2)]"> */}
        <div className="text-center text-white text-4xl font-bold ">{year}</div>
      </div>

      {/* Image Column */}
      <div className="xl:w-3/6 flex justify-center">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
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

      {/* Description Column */}
      <div className="hidden xl:block w-2/6">
        <div className="text-gray-300 text-md leading-relaxed pl-6">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
