"use client";
import "./styles.css";
import { motion, useScroll, useSpring } from "framer-motion";
import Photo from "./Photo";

import { PREVIOUSEVENTS } from "../../../data/previousEvents";

export default function Timeline() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section>
      {PREVIOUSEVENTS.map((TedEvent) => (
        <Photo key={TedEvent.id} TedEvent={TedEvent} />
      ))}
    </section>
  );
}

/* <Photo
        key={"mneme"}
        TedEvent={{
          id: "mneme",
          year: "2023",
          link: "https://www.linkedin.com",
          source: "mneme.jpeg",
          logo: "Mneme-logo.png",
          paragraph:
            "Memory is what allows us to discuss, compare, decide, justify, foresee, anticipate, and most importantly: it is the very baseline of our evolution and the fundamental pillar of our culture. As we see it, remembrance and recollection are inextricably connected with our identity. They define the past’s relevance in time and our existence’s significance in the world's timeline. Therefore, Mneme becomes our temporal and existential consciousness. In Greek mythology, Mnemosyne was the Goddess of Memory and mother of the nine Muses who were originally patron goddesses of poets of the oral tradition. Therefore, we aspire to enhance the concept of “Ideas Worth Spreading” by bringing the importance of passing down knowledge, into the spotlight.",
        }}
      /> */
// <motion.div className="progress" style={{ scaleX }} />
// </section>
