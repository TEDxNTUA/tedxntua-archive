import ColumnScroll from "@/components/ColumnScroll/ColumnScroll";
import AboutTEDxNTUA from "@/components/About/AboutTedxNtua";
// import MovingTed from "@/components/About/MovingTed";
import WhatIsTed from "@/components/About/WhatIsTed";
import AboutTednTedx from "@/components/About/AboutTednTedx";
import NewFooter from "@/components/Footer/NewFooter";

function AboutPage() {
  return (
    <section>
      <WhatIsTed />
      <AboutTEDxNTUA />

      <div className="h-[15vh]"></div>
      <ColumnScroll />
      {/* <div className="h-[15vh]"></div> */}
      {/* <MovingTed /> */}
      <div className="h-[15vh]"></div>
      <AboutTednTedx />
      <NewFooter />
    </section>
  );
}

export default AboutPage;
