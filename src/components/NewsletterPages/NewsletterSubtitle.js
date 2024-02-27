import classes from "./NewsLetterSubtitle.module.css";

function NewsletterSubtitle({ text }) {
  const letters = text.split("");

  return (
    <div className="text-left font-mono font-extrabold text-2xl leading-10">
      {letters.map((letter, index) => (
        <span key={index} className={classes.letter}>
          {letter}
        </span>
      ))}
    </div>
  );
}

export default NewsletterSubtitle;
