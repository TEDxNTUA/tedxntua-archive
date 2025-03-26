import NewsletterSubtitle from "../NewsletterSubtitle";
import Anastasia from "./TeamMembers/Anastasia";
import Kostas from "./TeamMembers/Kostas";
import Aliki from "./TeamMembers/Aliki";
import Tolis from "./TeamMembers/Tolis";

function MediaSuggestions() {
  return (
    <div className="text-white text-justify">
      <NewsletterSubtitle text="SUGGESTIONS" />
      <Anastasia />
      <Kostas />
      <Aliki />
      <NewsletterSubtitle text="FUN FACT" />
      <Tolis />
    </div>
  );
}

export default MediaSuggestions;
