"use client";

import Image from "next/image";

function SecondScroll() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 justify-items-center bg-red-500">
      <div className="flex flex-col items-center md:items-left justify-center w-6/12 lg:w-5/12 my-8">
        <h1 className="text-2xl hover:text-blue  text-left font-extrabold text-white leading-tight">
          About the
        </h1>

        <Image
          className="pt-4 object-left"
          src="/homepage/archive.png"
          width={300}
          height={300}
          alt="archive"
        />
        <p className="text-white text-justify font-light text-sm mt-4 ">
          The TEDxNTUA Archive is a collection of all material produced by
          TEDxNTUA since its 2015 inception. Scroll down to see...
        </p>
      </div>

      <Image
        className="w-[100%] -pb-10"
        src="/homepage/video-recap.png"
        width={800}
        height={800}
        alt="archive"
        priority={true}
      />
    </div>
  );
}

export default SecondScroll;
