import SocialMediaItem from "../SocialMedia/SocialMediaItem";

const socialMediaLinks = {
  x: "https://twitter.com/tedxntua",
  facebook: "https://facebook.com/tedxntua",
  instagram: "https://instagram.com/tedxntua",
  linkedin: "https://linkedin.com/company/tedxntua",
  spotify:
    "https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay?si=Qt_NzTPGRFyETbZ4XgKoxw&utm_source=copy-link&nd=1&dlsi=ca94005974b04c42",
  tiktok: "https://www.tiktok.com/@tedxntua",
  youtube: "https://www.youtube.com/@TEDxNTUA"
};

function SocialMediaNav() {
  const socialMediaItems = Object.keys(socialMediaLinks).map(key => {
    const link = socialMediaLinks[key];
    let iconName = key;
    if (key === "x") iconName = "twitter";
    return (
      <SocialMediaItem
        key={key}
        link={link}
        iconName={iconName}
        color={"white"}
        hoverColor={"red"}
      />
    );
  });

  return (
    <div className="grid grid-cols-3 gap-3 justify-items-center w-[80%]">{socialMediaItems}</div>
  );
}

export default SocialMediaNav;
