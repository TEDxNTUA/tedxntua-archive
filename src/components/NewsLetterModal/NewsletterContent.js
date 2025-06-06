import React from "react";
import SignupButton from "./SignupButton";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 4xl:gap-12 w-[90%] mx-auto">
      {/* <div className="text-center mx-auto font-serif font-extrabold text-3xl md:text-5xl 4xl:text-7xl mt-6">
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
      </div> */}
      <div className="text-center">
        <img
          src="./newsletters/unmuTED-red.png"
          alt="tedx ntua logo"
          width={300}
          height={300}
          priority="true"
          // fill="true"
          className="mx-auto w-[70%] h-auto object-contain mt-8 md:mt-2"
        />
      </div>
      <div className="md:my-0 flex flex-col items-center gap-4 4xl:gap-12 w-[80%] 4xl:w-[70%]">
        <h1 className=" leading-7 text-base md:text-lg 2xl:text-2xl 4xl:text-4xl font-bold text-[rgb(51 65 85)]">
          GET OUR NEWS FIRST-HAND
        </h1>
        <p className="text-gray-400 text-sm 2xl:text-base 4xl:text-2xl text-justify font-extralight px-3">
          Sign up for our new project{" "}
          <strong className="font-bold italic text-black">
            TED<span className="text-our-red">x</span>NTUA unmuTED
          </strong>{" "}
          to be the first to know the latest news about us & our upcoming events!
        </p>
        <SignupButton />
      </div>
      <img
        src="./tedxntua-black-logo.png"
        alt="tedx ntua logo"
        width={300}
        height={300}
        priority="true"
        // fill="true"
        className="mx-auto w-[40%] h-auto object-contain"
      />
    </div>
  );
};

export default Newsletter;
