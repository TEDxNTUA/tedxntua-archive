"use client";

import Image from "next/image";

function SecondScroll() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 justify-items-center bg-black">
      <div className="flex flex-col items-center md:items-left justify-center w-8/12 lg:w-5/12 my-4 md:my-8">
        <h1 className="text-2xl hover:text-our-red text-left font-extrabold text-white leading-tight">
          About the
        </h1>

        {/* <Image */}
        <img
          className="pt-4 object-left"
          src="./homepage/archive.png"
          width={300}
          height={300}
          alt="archive"
        />
        <p className="text-white text-justify font-light text-sm mt-4">
          The TEDxNTUA Archive is a collection of all material produced by
          TEDxNTUA since its 2015 inception. Scroll down to see...
        </p>
      </div>

      {/* <Image */}
      <img
        className="w-[70%] md:w-[100%] -pb-10"
        src="./homepage/video-recap.png"
        width={800}
        height={800}
        alt="archive"
        // priority={true}
        priority="true"
      />
    </div>
  );
}

export default SecondScroll;
