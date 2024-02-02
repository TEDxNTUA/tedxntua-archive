"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MovingText() {
  const firstTed = useRef(null);
  const secondTed = useRef(null);

  const movingTedRef = useRef(null);
  const sliderTed = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(movingTedRef.current, {
      scrollTrigger: {
        trigger: movingTedRef.current,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "=-500px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstTed.current, { xPercent: xPercent });
    gsap.set(secondTed.current, { xPercent: xPercent });

    // gsap.set(firstIdeas.current, { xPercent: xPercent });
    // gsap.set(secondIdeas.current, { xPercent: xPercent });
    // gsap.set(firstIdeas.current, { xPercent: -100 - xPercent });
    // gsap.set(secondIdeas.current, { xPercent: -100 - xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.02 * direction;
  };

  return (
    <main
      ref={movingTedRef}
      className="pt-20 pb-[5.5rem] overflow-hidden relative w-[100vw] border-y-[0.05px] border-white"
      style={{
        backgroundImage: `url('/BG.png')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
    >
      {/* <Image
        src="/BG.png"
        fill={true}
        alt="background"
        className="overflow-hidden opacity-70"
      /> */}

      <div className="absolute bg-red-500">
        <div ref={sliderTed} className="absolute whitespace-nowrap">
          <p
            ref={firstTed}
            className="text-white relative m-0 text-[6rem] leading-[1.5rem] font-bold top-0"
          >
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
          </p>
          <p
            ref={secondTed}
            className="left-[100%] absolute m-0 text-white text-[6rem] leading-[1.5rem] font-bold top-0"
          >
            {" "}
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
            <span className="text-[#eb0028]">TEDx</span>NTUA -
          </p>
        </div>
      </div>
      {/* <div className="absolute top-[80vh]">
        <div ref={sliderIdeas} className="absolute whitespace-nowrap">
          <p
            ref={firstIdeas}
            className="text-white relative m-0 text-[3rem] 3xl:text-[5rem] leading-[1.5rem] font-bold top-0"
          >
            Ideas Worth Spreading - Ideas Worth Spreading - Ideas Worth
            Spreading - Ideas Worth Spreading -
          </p>
          <p
            ref={secondIdeas}
            className="left-[100%] absolute m-0 text-white text-[3rem] 3xl:text-[5rem] leading-[1.5rem] font-bold top-0"
          >
            {" "}
            Ideas Worth Spreading - Ideas Worth Spreading - Ideas Worth
            Spreading - Ideas Worth Spreading -
          </p>
        </div>
      </div> */}
    </main>
  );
}
