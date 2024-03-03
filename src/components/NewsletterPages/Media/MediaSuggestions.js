import NewsletterSubtitle from "../NewsletterSubtitle";
import Anastasia2 from "./TeamMembers/Anastasia2";
import Kostas from "./TeamMembers/Kostas";
import Aliki from "./TeamMembers/Aliki";
import Tolis from "./TeamMembers/Tolis";

function MediaSuggestions() {
  return (
    <div className="text-white text-justify">
      {/* text-xs md:text-sm lg:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl */}
      <NewsletterSubtitle text="SUGGESTIONS" />
      <Anastasia2 />
      {/* <div className="h-16"></div> */}
      {/* <NewsletterSubtitle text="NEWSLETTER ΣΤΟ NEWSLETTER ;" /> */}
      <Kostas />
      {/* <div className="h-16"></div> */}
      {/* <NewsletterSubtitle text="ΠΟΣΟ ΣΚΡΟΛ ΝΑ ΚΑΝΕΙΣ ΑΚΟΜΑ ;" /> */}
      <Aliki />
      {/* <div className="h-16"></div> */}
      <NewsletterSubtitle text="FUN FACT" />
      <Tolis />
    </div>
  );
}

export default MediaSuggestions;
