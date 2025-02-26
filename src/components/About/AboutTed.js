function AboutTED() {
  return (
    <div
      style={{
        // backgroundImage: `url('/about/about4a.jpeg')`,
        backgroundImage: `url('/api/proxy-image?id=1rDJthaM6MetEgdVgasrl9ui4Ptjwrskn')`,
        // backgroundImage: `url('BG.png.jpeg')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
      className="h-[calc(100vh-65px)]  w-full relative flex flex-col justify-center"
    >
      <div className="w-[55vw] md:w-[45vw] lg:w-[35vw] mx-auto lg:mx-0 lg:ml-[12vw]">
        <h2 className="text-3xl md:text-5xl text-white font-black text-center">
          <span className="text-[#eb0028]">TED</span>'s mission
        </h2>
        <div className="h-[5vh]"></div>
        <p className="text-md md:text-lg text-white font-light tracking-tighter lg:tracking-tight xl:tracking-widest leading-8 text-justify">
          TED began in 1984 as a conference where Technology, Entertainment and
          Design converged, but today it spans a multitude of worldwide
          communities and initiatives exploring everything from science and
          business to education, arts and global issues. In addition to the
          hundreds of TED Talks curated from our annual conferences and
          published on TED.com.
        </p>
      </div>
    </div>
  );
}

export default AboutTED;
