import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import IncrementalNumber from "@/components/TEDInNumbers/IncrementalNumber";
import Image from "next/image";
import TEDxStat from "@/components/TEDInNumbers/TEDxStat";
import AboutTed from "@/components/About/AboutTed";
function AboutPage() {
  const tedxtua_about_team =
    "TEDxNTUA is a conference that features talks on the topics of popular science, art, and social issues, stories that can inspire, as well as intriguing workshops and performances. It runs under the auspices of the National Technical University of Athens, Greece (NTUA) and is primarily aimed at the university community, but also at the wider student and local communities of Athens.\n";
  return (
    <div>
      <div className="relative flex flex-col md:flex-row">
        <div
          id="about_textntua_text"
          className="flex flex-col md:absolute md:top-[28%] md:right-[6%]  w-[80%] m-auto left-0 right-0 absolute bottom-[55%] md:w-[35%] text-white  text-center md:text-start"
        >
          <div className="text-3xl md:text-5xl font-extrabold ">
            <span>ABOUT</span>
            <br />
            <span className="text-[#eb0028] ">TEDx</span>NTUA
          </div>
          <div className="text-justify text-sm">{tedxtua_about_team}</div>
        </div>
        <Image
          className="w-full sm:w-70 h-[95vh] sm:h-auto"
          src="/about.png"
          width={500}
          height={500}
        />
        {/* <div className="bg-black w-full h-[95vh] "></div> */}
        <div className="absolute w-[100%]  md:w-[20%] md:bottom-[35%] bottom-[20%] md:left-[6%]">
          <TEDxInNumbers color="white" md_size_cols={1} />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
