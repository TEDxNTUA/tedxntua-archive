import AboutTED from "@/components/About2/AboutTED";
import AboutTEDx from "@/components/About2/AboutTEDx";
import ColumnScroll from "@/components/ColumnScroll/ColumnScroll";
import AboutTEDxNTUA from "@/components/About2/AboutTEDxNTUA";
import MovingTed from "@/components/About2/MovingTed";
// import MovingIdeas from "@/components/About2/MovingIdeas";
import Image from "next/image";
// import BlobTest from "@/components/Blob/blobTest";

function AboutPage() {
  return (
    <section>
      <div className="overflow overflow-y-scroll snap-y snap-mandatory">
        {/* <div className="snap-start">
          <MovingIdeas />
        </div> */}
        {/* <BlobTest /> */}
        <div
          className="h-[calc(40vh)] md:h-[calc(100vh-5rem)] relative"
          // style={{
          //   backgroundImage: `url('/about/about0.png')`,
          // }}
        >
          <Image
            className="w-full object-cover my-auto relative"
            src="/about/about0.png"
            width={1500}
            height={1500}
          ></Image>
        </div>
        <div className="snap-start">
          <AboutTED />
        </div>
        <div className="snap-start">
          <AboutTEDx />
        </div>
      </div>
      <div className="h-[15vh]"></div>
      <ColumnScroll />
      <div className="h-[15vh]"></div>
      <MovingTed />
      <div className="h-[15vh]"></div>
      <AboutTEDxNTUA />
    </section>
  );
}

export default AboutPage;
