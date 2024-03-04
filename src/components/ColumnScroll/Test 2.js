"use client";
import React, { useEffect, useRef } from "react";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function AlternateColumnScroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
    >
      <main
        className="px-12 bg-blue-500 flex h-[125vh] w-[80vw] md:w-[90vw] lg:w-[80vw] mx-auto overflow-hidden rounded relative"
        data-scroll-container
        ref={containerRef}
      >
        <div className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6 h-screen flex-col-reverse">
          <Column num={1} />
        </div>
        <div
          className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6 "
          data-scroll-section
        >
          <Column isCenter={true} num={2} />
        </div>
        <div className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6  h-screen flex-col-reverse ">
          <Column num={3} />
        </div>
        <div
          className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6 "
          data-scroll-section
        >
          <Column isCenter={true} num={5} />
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default AlternateColumnScroll;

function Column({ isCenter, num }) {
  const { scroll } = useLocomotiveScroll();
  const columnRef = useRef(null);

  useEffect(() => {
    if (scroll && !isCenter) {
      scroll.on("scroll", (obj) => {
        columnRef.current.style.transform = `translateY(${obj.scroll.y}px)`;
      });
    }

    return () => {};
  }, [scroll]);

  return (
    <div ref={columnRef}>
      <div className="relative block will-change-transform">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i, idx) => (
          <div className="m-0 relative z-10" key={idx}>
            <div className="relative overflow-hidden rounded-xl cursor-pointer mt-[8vh] mx-[1vw] ">
              <img
                className="w-full h-full"
                src={`./columnPhotos/column${i}.jpeg`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
