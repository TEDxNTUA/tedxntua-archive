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
    // <main className="h-[50vh] grid grid-cols-3 justify-center items-center snap-center bg-emerald-500">
    //   <div className="grid grid-cols-1 justify-center items-center">
    //     <h2
    //       className="mx-auto text-white font-bold text-[8xl] tracking-tighter leading-5 absolute bg-blue-500"
    //       style={{ y, zIndex: 1 }}
    //     >
    //       {TedEvent.year}
    //     </h2>
    //     <img
    //       src={`./eventLogos/${TedEvent.logo}`}
    //       className="absolute w-[10rem] h-[50px]"
    //       style={{ y, zIndex: 1 }}
    //     />
    //   </div>
    //   {/* <div ref={Imageref} className=""> */}
    //   <img
    //     ref={Imageref}
    //     className="border-[2px] border-[#eb002733] hover:border-our-red rounded-md w-[100%] h-[100%] object-cover"
    //     src={`./previousEvents/${TedEvent.source}`}
    //     alt="Previous ted event"
    //   />
    //   {/* </div> */}
    //   <p
    //     className=" text-white font-bold text-[5xl] tracking-tighter leading-5 text-justify w-[28vw] bg-blue-500"
    //     style={{ y, right: "7vw", zIndex: 1 }}
    //   >
    //     {TedEvent.paragraph}
    //   </p>
    // </main>
    // <div className="snap-start">
    <div>
      <div className="timeline-grid grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 text-center justify-between lg:justify-center lg:items-center h-[70vh] lg:h-[calc(100vh-65px)] w-[100%] md:w-[80%] mx-auto lg:border-l-8 lg:border-our-red max-w-[100rem]">
        {/* <div className="hidden lg:fixed lg:flex h-[100vh] w-2 self-stretch bg-our-red opacity-100 left-[9.3%]"></div> */}
        <div className="flex flex-row justify-center content-center place-items-center text-white lg:bg-transparent self-center">
          <div className="hidden lg:flex w-[80%] h-8 mx-auto left-0 right-[23px] 2xl:right-[22px] max-w-[100rem] absolute">
            <div className="h-8 w-8 rounded-full border-[3.5px] bg-our-red border-our-red" />
          </div>

          <h2
            className="text-white font-bold text-5xl xl:text-6xl italic tracking-tighter leading-4 lg:leading-none mx-auto"
            // style={{ y, zIndex: 1 }}
          >
            {TedEvent.year}
          </h2>
          {/* <Image */}
          <img
            width={300}
            height={300}
            src={`./eventLogos/${TedEvent.logo}`}
            className="mx-auto w-[10rem] h-[10vh] hidden"
            // style={{ y, zIndex: 1 }}
          />
        </div>
        {/* <div className="xl:mr-[5vw] self-start lg:self-center lg:col-span-2 xl:col-span-1">
          <img
            width={300}
            height={300}
            ref={Imageref}
            className="border-[2px] border-[#eb002733] rounded-md mx-auto w-[60%] xl:w-full object-fill" //hover:border-our-red
            src={`./previousEvents/${TedEvent.source}`}
            alt="Previous ted event"
          />
        </div> */}
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

        {/* <img
          src={`./eventLogos/${TedEvent.logo}`}
          className="mx-auto w-[15vw] h-[5vh] xl:hidden"
          // style={{ y, zIndex: 1 }}
        /> */}

        <p
          className="hidden lg:block text-white text-base 2xl:text-lg leading-6 text-justify col-span-2 xl:col-span-1 tracking-wide w-[95%] mx-auto"
          // style={{ y, right: "7vw", zIndex: 1 }}
        >
          {TedEvent.paragraph}
        </p>
      </div>
    </div>
  );
}
