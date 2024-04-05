"use client";
import NewsletterTitle from "@/components/NewsletterPages/NewsletterTitle";
import IntroductionExperience from "@/components/NewsletterPages/Experience/IntroductionExperience";
import ExperienceMainContent from "@/components/NewsletterPages/Experience/ExperienceMainContent";
import NewFooter from "@/components/Footer/NewFooter";

export default function ExperienceNewsletter() {
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
      <div className="absolute p-1 lg:p-10">
        <button
          type="button"
          class="w-full flex items-center justify-center lg:px-5 px-2 py-2 text-sm text-white transition-colors duration-200 bg-transparent hover:bg-black border border-our-red rounded-lg gap-x-2 sm:w-auto"
          onClick={() => window.open("/unmuTED", "_self")}
        >
          <svg
            className="text-our-red w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span className="italic text-xs">Go back</span>
        </button>
      </div>
      <div className="h-8 md:h-12 lg:h-20 2xl:h-28 4xl:h-32"></div>
      <NewsletterTitle
        date_image={"./newsletters/experience/experience-date_17_03_2024.png"}
      />
      <div className="h-8 md:h-12 lg:h-16 2xl:h-24"></div>
      <div
        id="body"
        className="w-[80%] md:w-[60%] 3xl:w-[50%] 3xl:text-xl mx-auto"
      >
        <IntroductionExperience />

        <ExperienceMainContent />
        <div className="flex flex-col gap-6">
          {/* <span className="text-white text-lg mx-auto text-center flex self-center">
            Keep in touch!
          </span> */}
          <p className="text-white text-xxs self-end">
            xoxo...Experience & Workshops Team
            <span className="text-our-red">&lt;3</span>
          </p>
        </div>
      </div>
      <div className="h-20"></div>
      <NewFooter />
    </div>
  );
}
