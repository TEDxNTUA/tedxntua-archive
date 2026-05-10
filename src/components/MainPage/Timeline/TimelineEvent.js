"use client";
import React, {useEffect, useRef, useState} from "react";
import styles from "./Timeline.module.css";

const TimelineEvent = ({TedEvent, index}) => {
  const {link, source, date, paragraph, isVideo, mobileSource, iosSource, logo} = TedEvent;
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const eventRef = useRef(null);
  const videoRef = useRef(null);
  const [direction, setDirection] = useState(1);

  const assetSrc = source.startsWith("/") ? source : `./previousEvents/${source}`;

  useEffect(() => {
    if (!isVideo) return;
    
    const handlePlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (direction === 1) {
        if (video.currentTime >= video.duration - 0.1) {
          setDirection(-1);
          video.pause();
        }
      } else {
        if (video.currentTime <= 0.1) {
          setDirection(1);
          video.play();
        } else {
          video.currentTime -= 0.05;
        }
      }
    };

    const interval = setInterval(handlePlayback, 30);
    return () => clearInterval(interval);
  }, [isVideo, direction]);

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
      className={`relative flex flex-col xl:flex-row gap-8 xl:gap-0 items-center xl:h-[400px] h-auto py-10 xl:py-0 ${styles.timelineEvent} ${
        isVisible ? styles.visible : hasBeenVisible ? styles.fadeOut : ""
      }`}
    >
      <div className={`xl:w-1/6 ${styles.eventYear}`}>
        <div className="text-center text-white text-4xl font-bold">{date}</div>
      </div>

      <div id="image-column" className={`xl:w-3/6 flex justify-center ${styles.eventImage}`}>
        {isVideo ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="relative hover:cursor-pointer w-full max-w-xs group">
            <video
              ref={videoRef}
              autoPlay
              loop={false}
              muted
              playsInline
              className="w-full rounded-lg border border-[#eb002733] hover:border-[#eb0027] transition duration-200 object-cover aspect-square"
            >
              {iosSource && <source src={iosSource} type="video/mp4" />}
              {mobileSource && <source src={mobileSource} type="video/mp4" />}
              <source src={assetSrc} type="video/mp4" />
            </video>
            {logo && (
              <img 
                src={`./eventLogos/${logo}`} 
                alt="Event Logo" 
                className="absolute top-2 right-2 w-16 md:w-24 h-auto object-contain pointer-events-none transition-transform duration-300 group-hover:scale-110"
              />
            )}
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
