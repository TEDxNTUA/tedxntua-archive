"use client";
import styles from "./ColumnScroll.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
  "/columnPhotos/column1.jpeg",
  "/columnPhotos/column2.jpeg",
  "/columnPhotos/column3.jpeg",
  "/columnPhotos/column4.jpeg",
  "/columnPhotos/column5.jpeg",
  "/columnPhotos/column6.jpeg",
  "/columnPhotos/column7.jpeg",
  "/columnPhotos/column8.jpeg",
  "/columnPhotos/column9.jpeg",
  "/columnPhotos/column10.jpeg",
  "/columnPhotos/column11.jpeg",
  "/columnPhotos/column12.jpeg",
];

export default function ColumnScroll() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2.6]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.6]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.1]);

  useEffect(() => {
    // const lenis = new Lenis({
    //   easing: (t) => 1 - Math.pow(1 - t, 5),
    // });
    // const raf = (time) => {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // };
    // requestAnimationFrame(raf);
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main>
      {/* <div className={styles.spacer}></div> */}
      <div
        id="gallery"
        ref={gallery}
        className="h-[125vh] w-[80vw] md:w-[90vw] lg:w-[80vw] mx-auto overflow-hidden rounded relative"
      >
        {/* Background image */}

        <img className="w-[100%] h-[100%] absolute" src="/about/BG.png"></img>

        {/* Conditionally render the first two columns for small screens */}
        <div className="md:hidden flex flex-row gap-[3vw] px-[3vw] h-[130vh] box-border mx-auto relative">
          <Column
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[5],
            ]}
            y={y1}
          />
          <Column
            images={[
              images[6],
              images[7],
              images[8],
              images[9],
              images[10],
              images[11],
            ]}
            y={y2}
          />
        </div>

        {/* Show all columns after the md breakpoint */}
        <div className="hidden md:flex flex-row gap-[2vw] px-0 md:px-[2vw] h-[130vh] box-border mx-auto relative">
          <Column images={[images[0], images[1], images[2]]} y={y1} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>
      {/* <div className={styles.spacer}></div> */}
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div id="column" className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div
            key={i}
            id="imageContainer"
            className="w-[100%] h-[100%] relative rounded-md overflow-hidden"
          >
            <Image src={src} alt="image" fill={true} className="object-cover" />
          </div>
        );
      })}
    </motion.div>
  );
};
