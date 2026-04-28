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
              <a
                href="https://2026.tedxntua.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white w-1/6 group"
              >
                <div className="text-4xl font-bold group-hover:text-our-red transition-colors duration-300">
                  2026
                </div>
                <p className="text-white bg-black mx-auto group-hover:text-our-red transition-colors duration-300">
                  Stay upda<span className="text-our-red">TED</span>. The TEDxNTUA 2026 site is up. <br />Click 2026 above!!! 
                </p>
              </a>
            </div>
          </div>

          <div className="xl:hidden mb-[200px]">
            <a
              href="https://2026.tedxntua.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col text-center text-white group"
            >
              <div className="text-4xl font-bold group-hover:text-our-red transition-colors duration-300">
                2026
              </div>
              <p className="text-white bg-black mx-auto group-hover:text-our-red transition-colors duration-300">
                Stay upda<span className="text-our-red">TED</span>. More coming soon!
              </p>
            </a>
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
