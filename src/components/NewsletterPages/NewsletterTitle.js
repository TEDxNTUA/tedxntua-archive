import Image from "next/image";
import classes from "./NewsLetterTitle.module.css";

export default function NewsletterTitle() {
  return (
    <div className="w-[80%] md:w-[70%] 3xl:w-[60%] flex flex-col mx-auto gap-8 md:gap-12 xl:gap-16 2xl:gap-24 3xl:gap-28 4xl:gap-36 5xl:gap-40">
      <div className="text-center font-serif font-extrabold text-[10cqw] md:text-[9cqw] 3xl:text-[6cqw] 5xl:text-[5cqw] pt-30 leading-10">
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
      <div></div>
      <div className="flex flex-row justify-between items-center 3xl:w-[80%] 5xl:w-[65%] 3xl:mx-auto">
        <Image
          src="/tedxntua_logo.png"
          alt="image"
          // fill={true}
          width={300}
          height={300}
          className="w-[30%]"
        />

        <h1 className="text-white text-[3cqw] font-serif">2.03.2024</h1>
      </div>
    </div>
  );
}
