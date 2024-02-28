"use client";
import { useState } from "react";
import Image from "next/image";

function SocialMediaItem({ iconName, link, color, hoverColor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      className="max-w-[60%] sm:max-w-[40%] md:max-w-[80%] inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Image
          className={`${isHovered ? "hidden" : "block"}`}
          src={`/socialMediaIcons/${color}/${iconName}-${color}.png`}
          alt={`${iconName}-icon`}
          width={30}
          height={30}
        />
        <Image
          className={`${isHovered ? "block" : "hidden"}`}
          src={`/socialMediaIcons/${hoverColor}/${iconName}-${hoverColor}.png`}
          alt={`${iconName}-icon`}
          width={30}
          height={30}
        />
      </div>
    </a>
  );
}

export default SocialMediaItem;
