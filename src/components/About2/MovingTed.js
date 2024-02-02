"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MovingTed() {
  const firstTed = useRef(null);
  const secondTed = useRef(null);

  const sliderTed = useRef(null);

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

    gsap.set(firstTed.current, { xPercent: -100 - xPercent });
    gsap.set(secondTed.current, { xPercent: -100 - xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.02 * direction;
  };

  return (
    <main
      className="py-[5vh] overflow-hidden relative align-middle opacity-90"
      style={{
        backgroundImage: `url('BG.png.jpeg')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
    >
      <div ref={sliderTed} className="absolute whitespace-nowrap h-fit">
        <p
          ref={firstTed}
          className="text-white my-auto relative text-7xl leading-[1.5rem] font-bold "
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
          className="left-[100%] absolute m-0 text-white text-7xl leading-[1.5rem] font-bold top-0"
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
    </main>
  );
}
