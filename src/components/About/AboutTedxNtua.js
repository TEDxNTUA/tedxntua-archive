import classes from "./AboutTedx.module.css";

function AboutTEDxNTUA() {
  return (
    <div className={classes.box}>
      <div className="mx-auto bg-our-red mt-10 mb-40 py-10 flex items-center justify-center">
        <div className="w-[55vw] md:w-[45vw] lg:w-[35vw] py-10">
          <h2 className="text-3xl md:text-5xl text-white font-black mx-auto text-center">
            About <span className="text-our-black">TEDx</span>NTUA
          </h2>
          <div className="h-[5vh]"></div>
          <p className="text-md md:text-lg text-white font-light tracking-tighter lg:tracking-tight xl:tracking-widest leading-8 text-justify">
            TEDxNTUA is a conference that features talks on the topics of
            popular science, art, and social issues, stories that can inspire,
            as well as intriguing workshops and performances. It runs under the
            auspices of the National Technical University of Athens, Greece
            (NTUA) and is primarily aimed at the university community, but also
            at the wider student and local communities of Athens.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutTEDxNTUA;
