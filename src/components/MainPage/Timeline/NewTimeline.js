"use client";
import React, {useEffect, useState, useRef} from "react";
import TimelineEvent from "./TimelineEvent";
import YearLine from "./YearLine";
import styles from "./Timeline.module.css";

const Timeline = ({events}) => {
  const [yearBadgeVisible, setYearBadgeVisible] = useState(false);
  const badgeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setYearBadgeVisible(true);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => {
      if (badgeRef.current) {
        observer.unobserve(badgeRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col w-full mx-auto">
      <YearLine numberOfYears={9} />

      <div 
        ref={badgeRef}
        className={`ml-[10%] w-[90%] top-[-20px] absolute flex items-center mb-12 ${styles.yearBadge} ${
          yearBadgeVisible ? styles.visible : ""
        }`}
      >
        <div className="w-1/6 text-center text-white">
          <div className="text-4xl font-bold">2025</div>
          <p className=" text-white bg-black mx-auto">
            Stay upda<span className="text-our-red">TED</span>. More coming soon!
          </p>
        </div>
      </div>

      <div className="ml-[10%] w-[90%] ">
        {events.map((TedEvent, index) => (
          <TimelineEvent key={TedEvent.id} TedEvent={TedEvent} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
