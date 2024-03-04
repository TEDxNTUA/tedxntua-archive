function AboutTEDx() {
  return (
    <div
      style={{
        // backgroundImage: `url('/about/about4b.jpeg')`,
        backgroundImage: `url('/about/BG.png')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
      className="h-[calc(100vh-65px)]  w-full relative flex flex-col justify-center"
    >
      <div className="w-[55vw] md:w-[45vw] lg:w-[35vw] mx-auto lg:mx-0 lg:ml-[57vw]">
        <h2 className="text-3xl md:text-5xl text-white font-black text-center">
          About <span className="text-[#eb0028]">TEDx</span>
        </h2>
        <div className="h-[5vh]"></div>
        <p className="text-md md:text-lg text-white font-light tracking-tighter lg:tracking-tight xl:tracking-widest leading-8 text-justify">
          In the spirit of ideas worth spreading, TEDx is a program of local,
          self-organized events that bring people together to share a TED-like
          experience. At a TEDx event, TED Talks video and live speakers combine
          to spark deep discussion and connection. These local, self-organized
          events are branded TED
          <span className="text-[#eb0028] font-semibold">x</span>, where{" "}
          <span className="text-[#eb0028] font-semibold">x</span> =
          independently organized TED event. The TED Conference provides general
          guidance for the TEDx program, but individual TEDx events are
          self-organized. (Subject to certain rules and regulations.)
        </p>
        <div className="h-[3vh]"></div>
        <a
          target="_blank"
          href="https://www.ted.com/about/programs-initiatives/tedx-program"
          className="text-[#eb0028] font-extrabold flex flex-row w-fit text-xl hover:cursor-pointer"
        >
          <p className="pr-3 hover:pr-6">TEDx PROGRAM </p>
          <img
            className="my-auto hover:pl-3"
            src="https://uploads-ssl.webflow.com/63e118320fe0876684cc169c/63e57c17119d6d2dca8a9624_red-arrow.svg"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            alt="Arrow"
          />
        </a>
        {/* </div> */}
      </div>
    </div>
  );
}

export default AboutTEDx;
