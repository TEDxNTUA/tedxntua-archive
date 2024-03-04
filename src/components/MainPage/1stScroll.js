// import Image from "next/image";

function FirstScroll() {
  return (
    <section>
      {/* justify-around */}
      <div className="mobile-tablet 1st-scroll h-[calc(100vh-65px)] flex flex-col justify-around lg:hidden">
        <div className="flex flex-col px-8 lg:bg-none my-16 mx-auto justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight text-center w-[80%] md:w-[70%] mx-auto">
            <span className="text-our-red">WELCOME</span> TO THE TED
            <span className="text-our-red">x</span>NTUA
          </h1>
          {/* <Image */}
          <img
            className="pt-4 w-[50%] mx-auto md:mx-0 md:w-[40%] lg:w-[80%]"
            src="./homepage/archive.png"
            width={300}
            height={300}
            alt="archive"
            priority="true"
          />
        </div>
        {/* <Image */}
        <img
          className="w-[100%] h-auto mx-auto"
          src="./homepage/starting-page1.png"
          width={800}
          height={800}
          alt="archive"
          // priority={true}
          priority="true"
        />
      </div>

      <div
        className="destkop 1st-scroll h-[calc(100vh-65px)] hidden lg:grid grid-cols-2 justify-center items-center max-w-[100rem] mx-auto"
        style={{
          // backgroundImage: `url('/about/about4a.jpeg')`,
          backgroundImage: `url('./homepage/starting-page.png')`,
          // backgroundImage: `url('BG.png.jpeg')`,
          backgroundSize: "cover", // Optional: adjust as needed
        }}
      >
        <div className="flex flex-col gap-4 px-16 lg:bg-none my-16 mx-auto justify-center items-center max-w-[50rem]">
          <h1 className="lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight text-center mx-auto">
            <span className="text-our-red">WELCOME</span> TO THE TED
            <span className="text-our-red">x</span>NTUA
          </h1>
          {/* <Image */}
          <img
            className="w-[70%] mx-auto"
            src="./homepage/archive.png"
            width={300}
            height={300}
            alt="archive"
            priority="true"
          />
        </div>
        {/* <Image */}
        <div></div>
        {/* <img
          className="w-auto max-h-[calc(100vh-65px)] mx-auto"
          src="./homepage/starting-page.png"
          width={800}
          height={800}
          alt="archive"
          // priority={true}
          priority="true"
        /> */}
      </div>
    </section>
  );
}

export default FirstScroll;
