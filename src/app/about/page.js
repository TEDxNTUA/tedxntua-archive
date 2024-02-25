import AboutTED from "@/components/About/AboutTed";
import AboutTEDx from "@/components/About/AboutTEDx";
import ColumnScroll from "@/components/ColumnScroll/ColumnScroll";
import AboutTEDxNTUA from "@/components/About/AboutTedxNtua";
import MovingTed from "@/components/About/MovingTed";
// import MovingIdeas from "@/components/About2/MovingIdeas";
import Image from "next/image";
// import BlobTest from "@/components/Blob/blobTest";
import Footer from "@/components/Footer/Footer";
function AboutPage() {
  return (
    <section>
      {/* <div className="overflow overflow-y-scroll snap-y snap-mandatory"> */}
      {/* <div className="snap-start">
          <MovingIdeas />
        </div> */}
      {/* <BlobTest /> */}
      {/* <div className="overflow overflow-y-scroll snap-y snap-mandatory"> */}
      <div>
        <div
          className="h-auto md:h-[calc(100vh-5rem)] relative "
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
        <div>
          <AboutTED />
        </div>
        <div>
          <AboutTEDx />
        </div>
      </div>
      {/* </div> */}
      <div className="h-[15vh]"></div>
      <ColumnScroll />
      {/* <div className="h-[15vh]"></div> */}
      {/* <MovingTed /> */}
      <div className="h-[15vh]"></div>
      <AboutTEDxNTUA />
      <Footer />
    </section>
  );
}

export default AboutPage;
