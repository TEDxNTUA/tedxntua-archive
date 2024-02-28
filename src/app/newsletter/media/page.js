import NewsletterTitle from "@/components/NewsletterPages/NewsletterTitle";
import IntroductionMedia from "@/components/NewsletterPages/Media/IntroductionMedia";
import MediaSuggestions from "@/components/NewsletterPages/Media/MediaSuggestions";

export default function MediaNewsletter() {
  return (
    <div
      className="bg-our-black" // bg-contain"
      style={
        {
          // backgroundImage: `url('/newsletters/media/background.png')`,
          // backgroundSize: `cover`,
        }
      }
    >
      <div className="h-8 md:h-12 lg:h-20 2xl:h-28 4xl:h-32"></div>
      <NewsletterTitle />

      <div className="h-8 md:h-12 lg:h-16 2xl:h-24"></div>
      <div id="body" className="w-[80%] md:w-[70%] 3xl:w-[60%] mx-auto">
        <IntroductionMedia />

        <MediaSuggestions />
        <div className="flex flex-col gap-6">
          <span className="text-white text-lg mx-auto text-center flex self-center">
            Keep in touch!
          </span>
          <p className="text-white text-xxs self-end">
            xoxo...Media & Marketing Team
            <span className="text-our-red">&lt;3</span>
          </p>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}
