import classes from "./NewsletterSubtitle.module.css";

function NewsletterSubtitle({ text }) {
  const letters = text.split("");

  return (
    <div className="text-left font-extrabold text-3xl 2xl:text-5xl leading-10 my-8 lg:my-12">
      {/* {letters.map((letter, index) => (
        <span key={index} className={classes.letter}>
          {letter}
        </span>
      ))} */}
      {text}
    </div>
  );
}

export default NewsletterSubtitle;
