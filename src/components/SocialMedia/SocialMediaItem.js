import Image from "next/image";

function SocialMediaItem({ iconName, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-lg bg-bgDark-400 p-2 font-semibold text-white duration-300 ease-in-out hover:scale-105"
    >
      <Image
        className="w-6 h-6"
        src={`/socialMediaIcons/white/${iconName}.png`}
        alt={`${iconName}-icon`}
        width={300}
        height={300}
      />
    </a>
  );
}

export default SocialMediaItem;
