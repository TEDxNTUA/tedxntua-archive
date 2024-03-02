"use client";
import Link from "next/link";
import SocialMediaFooter from "../NavBar/SocialMediaFooter";
import ModalWrapper from "../NewsLetterModal/ModalWrapper";

import { useState } from "react";
function NewFooter() {
  const [isModalOpenFlag, setIsModalOpenFlag] = useState(false);
  return (
    <footer className="c-footer relative overflow-hidden pt-[2rem] sm:pt-[1rem] md:pt-[10rem] z-0">
      <div className="c-footer-animation w-embed h-[100vh] object-cover md:object-none md:height-[50rem] absolute top-0 right-0 left-0 bottom-0">
        <svg
          className="overflow-hidden z-0"
          width="100%"
          viewBox="0 0 1577 4307"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#E24943">
            <animate
              attributeName="d"
              dur="30s"
              repeatCount="indefinite"
              values="M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z"
            ></animate>
          </path>
        </svg>
      </div>

      <div className="c-container px-[1.25rem] md:w-[100%] md:max-w-[79rem] md:mx-auto md:px-[2rem] pt-[1rem]">
        <div className="grid grid-col-1 md:grid-row-2 gap-4 py-4">
          {/* Newsletter submission */}
          <div className="grid justify-items-center md:row-span-1 md:grid-cols-4 pb-4 md:pb-12 justify-center items-center gap-4 md:gap-8">
            <div className="col-span-3 z-10">
              <p className="text-white text-[1.5rem] leading-9 md:text-[2rem] lg:text-[2.5rem] md:leading-10 lg:leading-[3rem] font-bold text-justify z-10">
                Sign up to unmuTED and we'll keep you posted on all things
                TEDxNTUA
              </p>
            </div>
            <div className="col-span-3 md:col-span-1 z-10">
              <a
                className="hover:cursor-pointer flex justify-center text-our-red"
                href="https://2023tedxntua.us21.list-manage.com/subscribe?u=8fb93651f7aa4956e92c4f188&id=1473802836"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-our-black hover:bg-our-black/90 px-5 py-3 rounded-sm mx-auto text-white font-semibold z-10"
                  // onClick={() => setIsModalOpenFlag(true)}
                >
                  Sign up
                </button>
              </a>
            </div>
          </div>
          {/* Second row FOR BIG SCREENS */}
          <div className="md:row-span-1 md:grid-cols-2 border-our-black border-t-[0.5px] z-10 pt-2 md:pt-4 hidden md:grid">
            {/* First column*/}

            <div className="col-span-1 grid md:grid-rows-3 gap-4">
              <p className="row-span-1 text-white text-[1.5rem] leading-9 md:text-[2rem] lg:text-[2.5rem] md:leading-10 lg:leading-[3rem] font-bold text-justify z-10">
                <span className="text-our-black">TEDx</span>NTUA
              </p>
              <p className="row-span-1 text-our-black text-sm lg:text-base font-thin z-10 w-[60%] text-justify">
                This independent TEDx event is operated under license from TED
              </p>
              <div className="row-span-1 w-[60%]">
                <SocialMediaFooter />
              </div>
            </div>

            {/* Nav links*/}
            <ul className="col-span-1 grid grid-cols-2 grid-rows-2 z-10 mt-4 lg:text-2xl justify-center justify-items-center">
              <li>
                <Link
                  href="/about"
                  className="text-our-black text-md font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-our-black text-md font-bold">
                  Archive
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-our-black text-md font-bold"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/watch"
                  className="text-our-black text-md font-bold"
                >
                  Watch
                </Link>
              </li>
            </ul>
          </div>

          {/* Second row FOR SMALL SCREENS */}
          <div className="row-span-1 grid grid-cols-2 gap-8 border-our-black border-t-[0.5px] z-10 pt-2 md:pt-4 md:hidden">
            <div className="col-span-1 grid grid-rows-2">
              <p className="row-span-1 text-white text-[1.5rem] leading-9 md:text-[2rem] lg:text-[2.5rem] md:leading-10 lg:leading-[3rem] font-bold text-justify z-10">
                <span className="text-our-black">TEDx</span>NTUA
              </p>
              <p className="row-span-1 :text-our-black text-sm font-thin z-10 text-justify">
                This independent TEDx event is operated under license from TED
              </p>
            </div>

            {/* Nav links*/}
            <ul className="col-span-1 grid grid-cols-2 grid-rows-2 z-10 mt-4 justify-center justify-items-center">
              <li>
                <Link
                  href="/about"
                  className="text-our-black text-md font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-our-black text-md font-bold">
                  Archive
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-our-black text-md font-bold"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/watch"
                  className="text-our-black text-md font-bold"
                >
                  Watch
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-1 w-[80%] mx-auto z-10 md:hidden">
            <SocialMediaFooter />
          </div>
        </div>
        {isModalOpenFlag && console.log(typeof setIsModalOpenFlag)}
        {isModalOpenFlag && (
          <ModalWrapper
            isModalOpenFlag={isModalOpenFlag}
            setIsModalOpenFlag={setIsModalOpenFlag}
          />
        )}
      </div>
    </footer>
  );
}

export default NewFooter;
