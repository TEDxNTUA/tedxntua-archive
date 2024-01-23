import SocialMediaItem from "./SocialMediaItem";
import Link from "next/link";

const socialMediaLinks = {
  x: "twitter.com/tedxntua?lang=en",
  facebook: "facebook.com/tedxntua",
  instagram: "instagram.com/tedxntua/?hl=en",
  linkedin: "linkedin.com/company/tedxntua",
  spotify:
    "https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay?si=Qt_NzTPGRFyETbZ4XgKoxw&utm_source=copy-link&nd=1&dlsi=ca94005974b04c42",
  tiktok: "https://www.tiktok.com/@tedxntua",
};

function SocialMediaList() {
  return (
    <section className="flex-none text-center py-1 bg-julia-blue-dark  w-full bottom-0">
      <div className="flex flex-wrap justify-center gap-3 mb-2">
        <SocialMediaItem
          link={socialMediaLinks.instagram}
          iconName={"instagram-white"}
        />
        <SocialMediaItem
          link={socialMediaLinks.facebook}
          iconName={"facebook-f-white"}
        />
        <SocialMediaItem
          link={socialMediaLinks.tiktok}
          iconName={"tiktok-white"}
        />
        <SocialMediaItem
          link={socialMediaLinks.linkedin}
          iconName={"linkedin-white"}
        />
        <SocialMediaItem
          link={socialMediaLinks.spotify}
          iconName={"spotify-white"}
        />
        <SocialMediaItem link={socialMediaLinks.x} iconName={"x-white"} />
      </div>
      {/* <Link href="/" className="text-5xl text-white font-semibold">
        TED<span className="text-[#eb0028]">x</span>NTUA
      </Link> */}
    </section>
  );
}

export default SocialMediaList;
