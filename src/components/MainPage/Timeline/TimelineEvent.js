"use client";
import React, {useEffect, useRef, useState} from "react";
import styles from "./Timeline.module.css";

const TimelineEvent = ({TedEvent}) => {
  const {link, source, date, paragraph, index, isVideo, mobileSource, iosSource} = TedEvent;
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const eventRef = useRef(null);

  const assetSrc = source.startsWith("/") ? source : `./previousEvents/${source}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasBeenVisible(true);
          } else if (hasBeenVisible) {
            // Only fade out if it was previously visible
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "-50px 0px -50px 0px" // Adjust trigger point
      }
    );

    if (eventRef.current) {
      observer.observe(eventRef.current);
    }

    return () => {
      if (eventRef.current) {
        observer.unobserve(eventRef.current);
      }
    };
  }, [hasBeenVisible]);

  return (
    <div
      ref={eventRef}
      key={TedEvent.source}
      className={`relative flex flex-col xl:flex-row gap-8 xl:gap-0 items-center h-[600px] ${styles.timelineEvent} ${
        isVisible ? styles.visible : hasBeenVisible ? styles.fadeOut : ""
      }`}
      style={{
        top: `${index * 600}px` // Align with the bullet position
      }}
    >
      <div className={`xl:w-1/6 ${styles.eventYear}`}>
        <div className="text-center text-white text-4xl font-bold">{date}</div>
      </div>

      <div id="image-column" className={`xl:w-3/6 flex justify-center ${styles.eventImage}`}>
        {isVideo ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer w-full max-w-xs">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg border border-[#eb002733] hover:border-[#eb0027] transition duration-200 object-cover aspect-square"
            >
              {iosSource && <source src={iosSource} type="video/mp4" />}
              {mobileSource && <source src={mobileSource} type="video/mp4" />}
              <source src={assetSrc} type="video/mp4" />
            </video>
          </a>
        ) : link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
            <img
              src={assetSrc}
              alt={`${date} event`}
              className="w-full max-w-xs rounded-lg border border-[#eb002733] hover:border-[#eb0027] transition duration-200 object-fill"
            />
          </a>
        ) : (
          <img
            src={assetSrc}
            alt={`${date} event`}
            className="w-full max-w-xs rounded-lg border border-[#eb002733] object-fill"
          />
        )}
      </div>

      <div id="description-column" className={`hidden xl:block w-2/6 ${styles.eventDescription}`}>
        <div className="text-gray-300 text-md leading-relaxed pl-6">{paragraph}</div>
      </div>
    </div>
  );
};

export default TimelineEvent;
