"use client";
import {PREVIOUS_EVENTS} from "../../data/previousEvents";
import {useEffect, useState, useRef} from "react";

import FirstScroll from "@/components/MainPage/1stScroll";
import SecondScroll from "@/components/MainPage/2ndScroll";
import YearLine from "@/components/MainPage/Timeline/YearLine";
import TimelineEvent from "@/components/MainPage/Timeline/TimelineEvent";
import styles from "@/components/MainPage/Timeline/Timeline.module.css";

import NewFooter from "@/components/Footer/NewFooter";

function HomePage() {
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
    <main>
      <FirstScroll />
      <SecondScroll />

      {/* <Timeline /> */}
      <div className="max-w-7xl mx-auto">
        {/* <div className="relative flex flex-col w-full mx-auto lg:bg-yellow-500 xl:bg-lime-600 2xl:bg-blue-200 bg-[rgba(200,200,200,0.2)]"> */}
        <div className="relative flex flex-col w-full mx-auto ">
          {/* Timeline appears in screens of size XL */}
          <div id="line-div" className="hidden xl:block">
            <YearLine events={PREVIOUS_EVENTS} />
          </div>

          <div className="hidden xl:block">
            <div 
              ref={badgeRef}
              className={`ml-[100px] w-[90%] top-[-20px] absolute flex items-center ${styles.yearBadge} ${
                yearBadgeVisible ? styles.visible : ""
              }`}
            >
              <div className="text-center text-white  w-1/6">
                <div className="text-4xl font-bold">2026</div>
                <p className=" text-white bg-black mx-auto">
                  Stay upda<span className="text-our-red">TED</span>. More coming soon!
                </p>
              </div>
            </div>
          </div>

          <div className="xl:hidden mb-[200px]">
            <div className="flex flex-col text-center text-white">
              <div className="text-4xl font-bold">2026</div>
              <p className=" text-white bg-black mx-auto">
                Stay upda<span className="text-our-red">TED</span>. More coming soon!
              </p>
            </div>
          </div>

          {/* When timeline appears */}
          <div className="xl:ml-[100px] xl:w-[90%]">
            {/* Render Timeline Events */}
            {PREVIOUS_EVENTS.map((TedEvent, index) => (
              <TimelineEvent key={TedEvent.id} TedEvent={TedEvent} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <NewFooter />
      </div>
    </main>
  );
}
{
}

export default HomePage;
