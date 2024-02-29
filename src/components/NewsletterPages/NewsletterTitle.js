import Image from "next/image";
import classes from "./NewsLetterTitle.module.css";

export default function NewsletterTitle() {
  return (
    <div className="w-[80%] md:w-[70%] 3xl:w-[60%] flex flex-col mx-auto gap-8 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32 2xl:gap-36 3xl:gap-40 4xl:gap-36 5xl:gap-40">
      <div className="text-center font-serif font-extrabold text-[10cqw] md:text-[9cqw] xl:text-[7cqw] 3xl:text-[6cqw] 5xl:text-[5cqw] pt-30 leading-10">
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
      <div className="flex flex-row justify-between items-center w-[100%] md:w-[95%] xl:w-[80%] 3xl:w-[75%] 5xl:w-[65%] mx-auto">
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
