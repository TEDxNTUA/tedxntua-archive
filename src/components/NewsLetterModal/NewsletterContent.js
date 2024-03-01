import React from "react";
import Image from "next/image";

import InputForm2 from "./InputForm/InputForm2";

import classes from "./NewsletterTitle.module.css";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 4xl:gap-12 w-[90%] mx-auto">
      <div className="text-center mx-auto font-serif font-extrabold text-3xl md:text-5xl 4xl:text-7xl mt-6">
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
      <div className="md:my-0 flex flex-col items-center gap-4 4xl:gap-12 w-[80%] 4xl:w-[70%]">
        <h1 className="hidden md:block leading-7 text-lg 2xl:text-2xl 4xl:text-4xl font-bold text-[rgb(51 65 85)]">
          BE THE FIRST TO KNOW
        </h1>
        <p className="text-gray-400 text-sm 2xl:text-base 4xl:text-2xl text-justify font-extralight px-3">
          Sign up for TED<span className="text-our-red">x</span>NTUA Newsletter
          to be the first to see our fresh news about our team & events!
        </p>
        <InputForm2 />
      </div>
      {/* <Image */}
      <Image
        src="./tedxntua-black-logo.png"
        alt="tedx ntua logo"
        width={300}
        height={300}
        priority="true"
        // fill={true}
        className="mx-auto w-[40%] h-auto object-contai "
      />
    </div>
  );
};

export default Newsletter;
