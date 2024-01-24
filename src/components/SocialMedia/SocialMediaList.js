import SocialMediaItem from "./SocialMediaItem";

const socialMediaLinks = {
  x: "https://twitter.com/tedxntua?lang=en",
  facebook: "https://facebook.com/tedxntua",
  instagram: "https://instagram.com/tedxntua/?hl=en",
  linkedin: "https://linkedin.com/company/tedxntua",
  spotify:
    "https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay?si=Qt_NzTPGRFyETbZ4XgKoxw&utm_source=copy-link&nd=1&dlsi=ca94005974b04c42",
  tiktok: "https://www.tiktok.com/@tedxntua",
};

function SocialMediaList() {
  return (
    <section className="text-center bottom-0">
      <div className="grid grid-cols-6 justify-center gap-2">
        <SocialMediaItem
          link={socialMediaLinks.instagram}
          iconName={"instagram"}
        />
        <SocialMediaItem
          link={socialMediaLinks.facebook}
          iconName={"facebook-f"}
        />
        <SocialMediaItem link={socialMediaLinks.tiktok} iconName={"tiktok"} />
        <SocialMediaItem
          link={socialMediaLinks.linkedin}
          iconName={"linkedin"}
        />
        <SocialMediaItem link={socialMediaLinks.spotify} iconName={"spotify"} />
        <SocialMediaItem link={socialMediaLinks.x} iconName={"x"} />
      </div>
    </section>
  );
}

export default SocialMediaList;
