"use client";
import "./styles.css";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Photo({ TedEvent }) {
  const Imageref = useRef(null);
  const { scrollYProgress } = useScroll({ target: Imageref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

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
    //       src={`/eventLogos/${TedEvent.logo}`}
    //       className="absolute w-[10rem] h-[50px]"
    //       style={{ y, zIndex: 1 }}
    //     />
    //   </div>
    //   {/* <div ref={Imageref} className=""> */}
    //   <img
    //     ref={Imageref}
    //     className="border-[2px] border-[#eb002733] hover:border-[#eb0028] rounded-md w-[100%] h-[100%] object-cover"
    //     src={`/previousEvents/${TedEvent.source}`}
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
    <div className="snap-start">
      <div className="grid grid-cols-1 xl:grid-cols-3  colstext-center justify-center items-center h-[calc(100vh-5rem)] w-[90%] md:w-[80%] mx-auto ">
        <div className="flex flex-col justify-center text-white gap-20 lg:bg-transparent">
          <h2
            className="text-white font-bold text-6xl italic tracking-tighter leading-4 lg:leading-none mx-auto"
            // style={{ y, zIndex: 1 }}
          >
            {TedEvent.year}
          </h2>
          <img
            src={`/eventLogos/${TedEvent.logo}`}
            className="mx-auto w-[10rem] h-[10vh] hidden"
            // style={{ y, zIndex: 1 }}
          />
        </div>
        <div className="xl:mr-[5vw]">
          <img
            ref={Imageref}
            className="border-[2px] border-[#eb002733] hover:border-[#eb0028] rounded-md mx-auto w-[60%] xl:w-full object-fill"
            src={`/previousEvents/${TedEvent.source}`}
            alt="Previous ted event"
          />
        </div>

        <img
          src={`/eventLogos/${TedEvent.logo}`}
          className="mx-auto w-[15vw] h-[5vh] xl:hidden"
          // style={{ y, zIndex: 1 }}
        />
        <div>
          <p
            className="hidden xl:block text-white font-semibold text-md 4xl:text-md 2xl:text-xl leading-6 text-justify tracking-wide w-[95%] mx-auto"
            // style={{ y, right: "7vw", zIndex: 1 }}
          >
            {TedEvent.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}
