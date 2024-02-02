function AboutTEDxNTUA() {
  return (
    <div
      style={{
        backgroundImage: `url('/about/about4a.jpeg')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
      className="h-[calc(100vh-4.1rem)] md:h-[calc(100vh-5rem)] w-full relative flex flex-col justify-center"
    >
      <div className="w-[55vw] md:w-[45vw] lg:w-[35vw] mx-auto lg:mx-0  lg:ml-[12vw]">
        <h2 className="text-3xl md:text-5xl text-white font-black  text-center">
          About <span className="text-[#eb0028]">TEDx</span>NTUA
        </h2>
        <div className="h-[5vh]"></div>
        <p className="text-md md:text-lg text-white font-light tracking-tighter lg:tracking-tight xl:tracking-widest leading-8 text-justify">
          TEDxNTUA is a conference that features talks on the topics of popular
          science, art, and social issues, stories that can inspire, as well as
          intriguing workshops and performances. It runs under the auspices of
          the National Technical University of Athens, Greece (NTUA) and is
          primarily aimed at the university community, but also at the wider
          student and local communities of Athens.
        </p>
      </div>
    </div>
  );
}

export default AboutTEDxNTUA;
