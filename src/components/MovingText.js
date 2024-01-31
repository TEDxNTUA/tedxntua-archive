"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MovingText() {
  const firstTed = useRef(null);
  const secondTed = useRef(null);

  const firstIdeas = useRef(null);
  const secondIdeas = useRef(null);

  const sliderTed = useRef(null);
  const sliderIdeas = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderTed.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "=100px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstTed.current, { xPercent: -100 - xPercent });
    gsap.set(secondTed.current, { xPercent: -100 - xPercent });

    gsap.set(firstIdeas.current, { xPercent: xPercent });
    gsap.set(secondIdeas.current, { xPercent: xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };

  return (
    <main className="py-56 overflow-hidden relative h-[100vh] w-[100vw]">
      <Image
        src="/previousEvents/play.jpeg"
        fill={true}
        alt="background"
        className="object-cover overflow-hidden"
      />

      <div className="absolute top-[58%] md:top-[50%] bg-blue-500">
        <div ref={sliderTed} className="absolute whitespace-nowrap">
          <p
            ref={firstTed}
            className="relative m-0 text-[5rem] md:text-[8rem] 2xl:text-[12rem] leading-[1.5rem] font-bold pr-12 top-0"
          >
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
          </p>
          <p
            ref={secondTed}
            className="left-[100%] absolute m-0 text-white text-[5rem] md:text-[8rem] 2xl:text-[12rem] leading-[1.5rem] font-bold pr-12 top-0"
          >
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
          </p>
        </div>
      </div>
      <div className="absolute top-[70%] bg-blue-500">
        <div ref={sliderIdeas} className="absolute whitespace-nowrap">
          <p
            ref={firstIdeas}
            className="relative m-0 text-white text-[5rem] md:text-[8rem] 2xl:text-[12rem] leading-[1.5rem] font-bold pr-12 top-0"
          >
            Ideas Worth Spreading - Ideas Worth Spreading -
          </p>
          <p
            ref={secondIdeas}
            className="left-[100%] absolute m-0 text-white text-[5rem] md:text-[8rem] 2xl:text-[12rem] leading-[1.5rem] font-bold pr-12 top-0"
          >
            Ideas Worth Spreading - Ideas Worth Spreading -
          </p>
        </div>
      </div>
    </main>
  );
}
