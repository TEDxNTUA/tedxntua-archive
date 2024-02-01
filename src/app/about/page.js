import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import IncrementalNumber from "@/components/TEDInNumbers/IncrementalNumber";
import ColumnScroll from "@/components/ColumnScroll/ColumnScroll";
import AboutTed from "@/components/About/AboutTed";
import AboutTedxNtua from "@/components/About/AboutTedxNtua";

function AboutPage() {
  return (
    <div>
      <AboutTedxNtua />
      <AboutTed />
      <div className="h-[20vh]"></div>
      <ColumnScroll />
      <div className="h-[30vh]"></div>
    </div>
  );
}

export default AboutPage;
