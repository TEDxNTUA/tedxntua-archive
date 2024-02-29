import React from "react";
import Image from "next/image";

import InputForm2 from "./InputForm/InputForm2";

import classes from "./NewsLetterTitle.module.css";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 w-[90%] mx-auto">
      <div className="text-center mx-auto font-serif font-extrabold text-3xl md:text-5xl mt-6">
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
      <h1 className="hidden md:block leading-7 text-2xl font-bold text-[rgb(51 65 85)]">
        BE THE FIRST TO KNOW
      </h1>
      <div className="md:my-0 flex flex-col items-center gap-4 md:gap-8 w-[80%]">
        <p className="text-gray-400 text-sm md:text-xl text-justify font-extralight px-3">
          Sign up for TED<span className="text-our-red">x</span>NTUA Newsletter
          to be the first to see our fresh news about our team & events!
        </p>
        <InputForm2 />
      </div>
      <Image
        src="/tedxntua-black-logo.png"
        alt="tedx ntua logo"
        width={300}
        height={300}
        // fill={true}
        className="mx-auto w-[40%] h-auto object-contai "
      />
    </div>
  );
};

export default NewsLetter;
