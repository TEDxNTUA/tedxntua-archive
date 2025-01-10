import React from "react";
import TimelineEvent from "./TimelineEvent";
import YearLine from "./YearLine";

const Timeline = ({ events }) => {
  return (
    <div className="relative flex flex-col w-full mx-auto">
      <YearLine numberOfYears={9} />

      <div
        //   className="relative flex items-center place-content-center w-full h-[600px]  border-[rgba(255,255,255,0.2)] border-8"
        className="ml-[10%] w-[90%] top-[-20px] absolute flex items-center mb-12"
      >
        <div className="w-1/6 text-center text-white">
          <div className="text-4xl font-bold">2025</div>
          <p className=" text-white bg-black mx-auto">
            Stay upda<span className="text-our-red">TED</span>. More coming
            soon!
          </p>
        </div>
      </div>

      <div className="ml-[10%] w-[90%] ">
        {/* Render Timeline Events */}
        {events.map((TedEvent, index) => (
          <TimelineEvent key={TedEvent.id} TedEvent={TedEvent} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
