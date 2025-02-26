import classes from "./AboutTedx.module.css";

function AboutTEDxNTUA() {
  return (
    <div
      className="h-[calc(100vh-65px)] flex flex-col justify-center"
      style={{
        // backgroundImage: `url('/about/about4b.jpeg')`,
        backgroundImage: `url('/api/proxy-image?id=1rDJthaM6MetEgdVgasrl9ui4Ptjwrskn')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
    >
      <div className={classes.box}>
        <div className="mx-auto bg-our-red py-10 flex items-center justify-center">
          <div className="w-[80vw] md:w-[65vw] lg:w-[55vw] xl:w-[45vw] py-10 flex flex-col gap-12">
            <h2 className="text-3xl md:text-5xl text-white font-black mx-auto text-center">
              About <span className="text-our-black">TEDx</span>NTUA
            </h2>
            {/* <p className="text-md md:text-lg 4xl:text-[1.3rem] 4xl:leading-[2rem] text-white font-light tracking-tighter lg:tracking-tight xl:tracking-widest leading-8 text-justify"> */}
            <p className="text-[1rem] leading-[1.875rem] 4xl:text-[1.3rem] 4xl:leading-[2rem] text-white 3xl:w-[80%] mx-auto text-justify">
              TEDxNTUA is a conference that features talks on the topics of
              popular science, art, and social issues, stories that can inspire,
              as well as intriguing workshops and performances. It runs under
              the auspices of the National Technical University of Athens,
              Greece (NTUA) and is primarily aimed at the university community,
              but also at the wider student and local communities of Athens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTEDxNTUA;
