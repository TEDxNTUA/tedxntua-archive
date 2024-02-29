import React from "react";
import Image from "next/image";

import InputForm2 from "./InputForm/InputForm2";

import classes from "./NewsLetterTitle.module.css";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center p-3 text-center bg-white">
      {/* <h2 className="text-6xl font-semibold mb-4 text-white">NEWSELETTER</h2> */}
      <div className="text-center mx-auto font-serif font-extrabold text-3xl md:text-6xl my-2">
        <span className={classes.letter} data-title="N">
          N
        </span>
        <span className={classes.letter} data-title="E">
          E
        </span>
        <span className={classes.letter} data-title="W">
          W
        </span>
        <span className={classes.letter} data-title="S">
          S
        </span>
        <span className={classes.letter} data-title="L">
          L
        </span>
        <span className={classes.letter} data-title="E">
          E
        </span>
        <span className={classes.letter} data-title="T">
          T
        </span>
        <span className={classes.letter} data-title="T">
          T
        </span>
        <span className={classes.letter} data-title="E">
          E
        </span>
        <span className={classes.letter} data-title="R">
          R
        </span>
      </div>
      <h1 className="my-8 leading-7 text-md lg:text-2xl font-bold text-[rgb(51 65 85)]">
        BE THE FIRST TO KNOW
      </h1>
      <div className="flex flex-col items-center gap-5 w-[80%]">
        <p className="text-gray-400 text-sm lg:text-lg text-justify font-extralight px-3">
          Sign up for TED<span className="text-our-red">x</span>NTUA Newsletter
          to be the first to see our fresh news about our team & events!
        </p>
        <div className="spacer h-2"></div>
        <InputForm2 />
      </div>
      <div className="spacer h-1 lg:h-6"></div>
      <Image
        src="/tedxntua-black-logo.png"
        alt="tedx ntua logo"
        width={300}
        height={300}
        // fill={true}
        className="mx-auto w-[40%] h-auto object-contain mt-6 lg:my-6"
      />
    </div>
  );
};

export default NewsLetter;
