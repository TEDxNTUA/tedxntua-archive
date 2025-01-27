"use client";
import NewsletterTitle from "@/components/NewsletterPages/NewsletterTitle";
import IntroductionVenue from "@/components/NewsletterPages/Venue/IntroductionVenue";
import VenueMainContent from "@/components/NewsletterPages/Venue/VenueMainContent";
import NewFooter from "@/components/Footer/NewFooter";
import Link from "next/link";

export default function VenueNewsletter() {
  return (
    <div
      className="bg-ephemeral-purple" // bg-contain"
      style={
        {
          // backgroundImage: `url('/newsletters/media/background.png')`,
          // backgroundSize: `cover`,
        }
      }
    >
      <div className="absolute p-1 lg:p-10">
        <Link
          href="/unmuTED"
          className="w-full flex items-center justify-center lg:px-5 px-2 py-2 text-sm text-white transition-colors duration-200 bg-transparent hover:bg-black border border-our-red rounded-lg gap-x-2 sm:w-auto"
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
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span className="italic text-xs">Go back</span>
        </Link>
      </div>
      <div className="h-8 md:h-12 lg:h-20 2xl:h-28 4xl:h-32"></div>
      <NewsletterTitle
        date_image={"./newsletters/fr/fr-date_31.03.24.png"}
      />
      <div className="h-8 md:h-12 lg:h-16 2xl:h-24"></div>
      <div
        id="body"
        className="w-[80%] md:w-[60%] 3xl:w-[50%] 3xl:text-xl mx-auto"
      >
        <IntroductionVenue />
        <VenueMainContent /> 
        
        <div className="flex flex-col gap-6">
          <p className="text-white text-xxs self-end">
              xoxo… Venue & Production Team
            <span className="text-ephemeral-neon">&lt;3</span>
          </p>
        </div>
      </div>
      <div className="h-20"></div>
      <NewFooter />
    </div>
  );
}
