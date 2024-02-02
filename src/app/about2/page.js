import MovingText from "@/components/MovingText";
import AboutTED from "@/components/About2/AboutTED";
import AboutTEDx from "@/components/About2/AboutTEDx";
import ColumnScroll from "@/components/ColumnScroll/ColumnScroll";
import AboutTEDxNTUA from "@/components/About2/AboutTEDxNTUA";
import MovingTed from "@/components/About2/MovingTed";

function AboutPage() {
  return (
    <section>
      <div className="overflow overflow-y-scroll snap-y snap-mandatory">
        <div className="snap-start">
          <MovingText />
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
