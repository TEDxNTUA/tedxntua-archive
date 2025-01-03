import React from "react";

const TimelineEvent = ({ TedEvent }) => {
  const { logo, year, paragraph, index } = TedEvent; // Index added for bullet alignment
  return (
    <div
      //   className="relative flex items-center place-content-center w-full h-[600px]  border-[rgba(255,255,255,0.2)] border-8"
      className="relative flex items-center h-[600px] bg-[rgba(255,255,255,0.2)]"
      style={{
        top: `${index * 600}px`, // Align with the bullet position
      }}
    >
      {/* Year Column */}
      {/* <div className="w-1/6 text-center text-2xl font-bold text-white mb-4 bg-[rgba(255,255,255,0.2)]"> */}
      <div className="w-1/6 text-center text-2xl font-bold text-white mb-4 bg-[rgba(255,255,255,0.2)]">
        {year}
      </div>

      {/* Image Column */}
      <div className="w-2/6 flex justify-center">
        <img
          src={`./eventLogos/${TedEvent.logo}`}
          alt={`${year} event`}
          className="w-full max-w-xs rounded-lg"
        />
      </div>

      {/* Description Column */}
      <div className="w-3/6 text-gray-300 text-md leading-relaxed pl-6">
        {paragraph}
      </div>
    </div>
  );
};

export default TimelineEvent;
