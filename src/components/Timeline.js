"use client";
import "./styles.css";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useVelocity,
} from "framer-motion";

import { PREVIOUSEVENTS } from "../data/previousEvents";

export default function Timeline() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {PREVIOUSEVENTS.map((TedEvent) => (
        <Photo key={TedEvent.id} TedEvent={TedEvent} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

function Photo({ TedEvent }) {
  const Imageref = useRef(null);
  const { scrollYProgress } = useScroll({ target: Imageref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="">
      <div
        ref={Imageref}
        className="border-[2px] border-[#eb002733] hover:border-[#eb0028] rounded-md"
      >
        <a href="google.com" target="_blank" alt="Ted event page">
          <img
            className="object=cover"
            src={`/previousEvents/${TedEvent.source}`}
            alt="Previous ted event"
          />
        </a>
      </div>

      <motion.h2
        className="text-white font-bold text-[8xl] tracking-tighter leading-5 absolute"
        style={{ y, top: "30%", left: "20vw", zIndex: 1 }}
      >
        {TedEvent.year}
      </motion.h2>
      <motion.img
        // className="text-white font-bold text-[8xl] tracking-tighter leading-5 absolute"
        src={`/eventLogos/${TedEvent.logo}`}
        className="absolute w-[10rem] h-[50px]"
        style={{ y, top: "50%", left: "20vw", zIndex: 1 }}
      />
      {/* {TedEvent.id.toUpperCase()} */}
      {/* {TedEvent.logo}
      </motion.h2> */}
      <motion.p
        className=" text-white font-bold text-[5xl] tracking-tighter leading-5 text-justify w-[28vw]  md:absolute"
        style={{ y, right: "7vw", zIndex: 1 }}
      >
        {TedEvent.paragraph}
      </motion.p>
    </section>
  );
}
