"use client";
import { useState } from "react";
import Image from "next/image";

function SocialMediaItem({ iconName, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      className="inline-flex items-center rounded-lg p-2 font-semibold text-white duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          className={`w-4 h-4 xl:w-5 xl:h-5 ${isHovered ? "hidden" : "block"}`}
          src={`/socialMediaIcons/white/${iconName}-white.png`}
          alt={`${iconName}-icon`}
          width={30}
          height={30}
        />
        <Image
          className={`w-4 h-4 xl:w-5 xl:h-5  ${isHovered ? "block" : "hidden"}`}
          src={`/socialMediaIcons/red/${iconName}-red.png`}
          alt={`${iconName}-icon`}
          width={30}
          height={30}
        />
      </div>
    </a>
  );
}

export default SocialMediaItem;
