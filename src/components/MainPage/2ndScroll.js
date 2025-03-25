import TEDxInNumbers from "./TEDInNumbers/TEDxInNumbers";

import Image from "next/image";

function SecondScroll() {
  return (
    <section className="mb-[100px]">
      <div className="mobile-tablet 2nd-scroll h-[calc(100vh-65px)] lg:hidden flex flex-col justify-end">
        <div className="flex flex-col justify-between gap-8 md:gap-16 items-center w-[85%] mx-auto my-auto">
          <div className="title col-span-1 flex flex-col gap-4">
            {/* <h1 className="text-2xl text-center font-extrabold text-white tracking-wider">
            About the
          </h1> */}
            {/* <Image */}
            <img
              className="mx-auto w-[80%] md:w-[60%]"
              src="./homepage/archive.png"
              width={300}
              height={300}
              alt="archive"
            />
            <p className="text-white text-justify font-light text-base md:w-[80%] md:text-xl mx-auto">
              The TEDxNTUA Archive is a collection of all material produced by TEDxNTUA since its
              inception in 2015. Scroll down to see...
            </p>
          </div>

          {/* <Image */}
          <img
            className="w-[100%] rounded-md"
            src="./homepage/video-recap.png"
            width={800}
            height={800}
            alt="archive"
            // priority={true}
            priority="true"
          />

          <TEDxInNumbers />
        </div>
      </div>

      <div className="desktop 2nd-scroll h-[calc(100vh-65px)] hidden lg:flex flex-col gap-16 justify-center w-[80%] max-w-[100rem] mx-auto relative">
        <div className="grid grid-cols-2 justify-center items-center mx-auto">
          <div className="title col-span-1 flex flex-col gap-4">
            {/* <h1 className="text-2xl text-center font-extrabold text-white tracking-wider">
            About the
          </h1> */}
            {/* <Image */}
            <img
              className="mx-auto w-[80%] md:w-[60%]"
              src="./homepage/archive.png"
              width={300}
              height={300}
              alt="archive"
            />
            <p className="text-white text-justify font-light w-[70%] text-lg mx-auto">
              The TEDxNTUA Archive is a collection of all material produced by TEDxNTUA since its
              inception in 2015. Scroll down to see...
            </p>
          </div>

          {/* <Image */}
          <img
            className="col-span-1 w-[100%] rounded-md"
            src="./homepage/video-recap.png"
            width={800}
            height={800}
            alt="archive"
            // priority={true}
            priority="true"
          />
        </div>
        <TEDxInNumbers />
      </div>
    </section>
  );
}

export default SecondScroll;
