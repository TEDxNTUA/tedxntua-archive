"use client";
import "./styles.css";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Photo({ TedEvent }) {
  const Imageref = useRef(null);
  const { scrollYProgress } = useScroll({ target: Imageref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  console.log(TedEvent.link);
  return (
    <div>
      <div className="timeline-grid grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 text-center justify-between lg:justify-center lg:items-center h-[70vh] lg:h-[calc(100vh-65px)] w-[100%] md:w-[80%] mx-auto lg:border-l-8 lg:border-our-red max-w-[100rem]">
        <div className="flex flex-row justify-center content-center place-items-center text-white lg:bg-transparent self-center">
          <div className="hidden lg:flex w-[80%] h-8 mx-auto left-0 right-[23px] 2xl:right-[22px] max-w-[100rem] absolute">
            <div className="h-8 w-8 rounded-full border-[3.5px] bg-our-red border-our-red" />
          </div>

          <h2 className="text-white font-bold text-5xl xl:text-6xl italic tracking-tighter leading-4 lg:leading-none mx-auto">
            {TedEvent.year}
          </h2>
          {/* <Image */}
          <img
            width={300}
            height={300}
            src={`./eventLogos/${TedEvent.logo}`}
            className="mx-auto w-[10rem] h-[10vh] hidden"
          />
        </div>
        <div className="xl:mr-[5vw] self-start lg:self-center lg:col-span-2 xl:col-span-1">
          {TedEvent.link !== "" ? (
            <a
              href={TedEvent.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer bg-blue-500"
            >
              <img
                width={300}
                height={300}
                ref={Imageref}
                className="border-[2px] border-[#eb002733] hover:border-[#eb0027] rounded-md mx-auto w-[60%] xl:w-full object-fill"
                src={`./previousEvents/${TedEvent.source}`}
                alt="Previous ted event"
              />
            </a>
          ) : (
            <img
              width={300}
              height={300}
              ref={Imageref}
              className="border-[2px] border-[#eb002733] rounded-md mx-auto w-[60%] xl:w-full object-fill"
              src={`./previousEvents/${TedEvent.source}`}
              alt="Previous ted event"
            />
          )}
        </div>

        <p className="hidden lg:block text-white text-base 2xl:text-lg leading-6 text-justify col-span-2 xl:col-span-1 tracking-wide w-[95%] mx-auto">
          {TedEvent.paragraph}
        </p>
      </div>
    </div>
  );
}
