function AboutGeneral({ backgroundSource, aboutWhat, paragraph }) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundSource})`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
      className="h-[calc(100vh-3rem)] w-full relative flex flex-col justify-center"
    >
      <div className="w-[45vw] ml-[15vw]">
        <h2 className="text-6xl text-white font-black  text-center">
          {" "}
          ABOUT {aboutWhat}
        </h2>
        <div className="h-[3vh]"></div>
        <p className="text-xl text-white font-light tracking-widest text-justify">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default AboutGeneral;
