import NewsletterSubtitle from "../NewsletterSubtitle";
import Anastasia from "./TeamMembers/Anastasia";
import Kostas from "./TeamMembers/Kostas";
import Aliki from "./TeamMembers/Aliki";
import Tolis from "./TeamMembers/Tolis";

function MediaSuggestions() {
  return (
    <div>
      <NewsletterSubtitle text="SUGGESTIONS" />

      <Anastasia />
      {/* <div className="h-16"></div> */}
      <Kostas />
      {/* <div className="h-16"></div> */}
      <Aliki />
      {/* <div className="h-16"></div> */}
      <NewsletterSubtitle text="FUN FACT" />
      <Tolis />
    </div>
  );
}

export default MediaSuggestions;
