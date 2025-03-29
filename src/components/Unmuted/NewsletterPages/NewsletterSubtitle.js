import classes from "./NewsletterSubtitle.module.css";

function NewsletterSubtitle({text}) {
  return (
    <div className="text-left font-extrabold text-3xl 2xl:text-5xl leading-10 my-8 lg:my-12">
      {text}
    </div>
  );
}

export default NewsletterSubtitle;
