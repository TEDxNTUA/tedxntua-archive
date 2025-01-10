import TEDxInNumbers from "../TEDInNumbers/TEDxInNumbers";
// import Image from "next/image";

function SecondScroll() {
  return (
    <section>
      <div className="mobile-tablet 2nd-scroll h-[calc(100vh-65px)] lg:hidden flex flex-col justify-end">
        <div className="flex flex-col justify-between gap-8 md:gap-16 items-center w-[85%] mx-auto my-auto">
          <div className="title col-span-1 flex flex-col gap-4">
            <img
              className="mx-auto w-[80%] md:w-[60%]"
              src="/api/proxy-image?id=13wKapN78o5nEZJgTqp8IbOFaOJM2nruz" 
              width={300}
              height={300}
              alt="archive"
            />
            <p className="text-white text-justify font-light text-base md:w-[80%] md:text-xl mx-auto">
              The TEDxNTUA Archive is a collection of all material produced by
              TEDxNTUA since its inception in 2015. Scroll down to see...
            </p>
          </div>

          <img
            className="w-[100%] rounded-md"
            src="/api/proxy-image?id=17nYIHF2AgV_YsRHY8lX2MeOunxUOrlhU"
            width={800}
            height={800}
            alt="video recap"
            priority="true"
          />

          <TEDxInNumbers />
        </div>
      </div>

      <div className="desktop 2nd-scroll h-[calc(100vh-65px)] hidden lg:flex flex-col gap-16 justify-center w-[80%] max-w-[100rem] mx-auto relative">
        <div className="grid grid-cols-2 justify-center items-center mx-auto">
          <div className="title col-span-1 flex flex-col gap-4">
            <img
              className="mx-auto w-[80%] md:w-[60%]"
              src="/api/proxy-image?id=13wKapN78o5nEZJgTqp8IbOFaOJM2nruz"
              width={300}
              height={300}
              alt="archive"
            />
            <p className="text-white text-justify font-light w-[70%] text-lg mx-auto">
              The TEDxNTUA Archive is a collection of all material produced by
              TEDxNTUA since its inception in 2015. Scroll down to see...
            </p>
          </div>

          <img
            className="col-span-1 w-[100%] rounded-md"
            src="/api/proxy-image?id=17nYIHF2AgV_YsRHY8lX2MeOunxUOrlhU"
            width={800}
            height={800}
            alt="video recap"
            priority="true"
          />
        </div>
        <TEDxInNumbers />
      </div>
    </section>
  );
}

export default SecondScroll;
