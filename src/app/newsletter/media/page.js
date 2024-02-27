import NewsletterTitle from "@/components/NewsletterPages/NewsletterTitle";
import IntroductionMedia from "@/components/NewsletterPages/Media/IntroductionMedia";
import NewsletterSubtitle from "@/components/NewsletterPages/NewsletterSubtitle";
import MediaSuggestions from "@/components/NewsletterPages/Media/MediaSuggestions";

export default function MediaNewsletter() {
  return (
    <div
      className="bg-neutral-800"
      style={{
        backgroundImage: `url('/newsletters/media/background.png')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
    >
      <div className="h-8 md:h-12 lg:h-20 2xl:h-28 4xl:h-32"></div>
      {/* <h1 className="text-white w-[75%] text-7xl text-center font-bold py-16 md:w-[80%] mx-auto">
        <span className="text-[#eb0028]">TEDx</span>Media NEwsletter
      </h1> */}
      {/* //grid grid-cols-1 lg:grid-cols-2">  */}
      <NewsletterTitle />
      <div className="h-8 md:h-12 lg:h-20 2xl:h-28"></div>
      <div id="body" className="w-[80%] md:w-[70%] 3xl:w-[60%] mx-auto">
        <IntroductionMedia />
        <div className="my-6">
          <NewsletterSubtitle text="SUGGESTIONS" />
        </div>
        <MediaSuggestions />
      </div>
    </div>
  );
}
