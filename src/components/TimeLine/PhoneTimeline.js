"use client";
// import "./styles.css";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { PREVIOUSEVENTS } from "../data/previousEvents";

export default function PhoneTimeline() {
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
      <motion.div
        className="fixed left-0 right-0 h-[5px] bottom-[25px] sm:bottom-[75px] bg-white"
        style={{ scaleX }}
      />
    </>
  );
}

function Photo({ TedEvent }) {
  const Imageref = useRef(null);
  const { scrollYProgress } = useScroll({ target: Imageref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="flex flex-row">
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
        className="text-white text-center font-bold text-[8xl] tracking-tighter leading-5 absolute mx-auto"
        style={{ y, top: "13vh", left: "33vw", zIndex: 1 }}
      >
        {TedEvent.year}
      </motion.h2>
      <motion.img
        // className="text-white font-bold text-[8xl] tracking-tighter leading-5 absolute"
        src={`/eventLogos/${TedEvent.logo}`}
        className="absolute w-[10rem] h-[50px] mx-auto"
        style={{ y, top: "83vh", zIndex: 1 }}
      />
    </section>
  );
}
