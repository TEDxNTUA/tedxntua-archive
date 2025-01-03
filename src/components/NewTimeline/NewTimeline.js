import React from "react";
import TimelineEvent from "./TimelineEvent";
import YearLine from "./YearLine";

const Timeline = ({ events }) => {
  return (
    <div className="relative flex flex-col w-full mx-auto bg-[rgba(200,200,200,0.2)]">
      <YearLine numberOfYears={9} />
      <div className="ml-[10%] w-[90%]">
        {/* Render Timeline Events */}
        {events.map((TedEvent, index) => (
          <TimelineEvent key={TedEvent.id} TedEvent={TedEvent} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
