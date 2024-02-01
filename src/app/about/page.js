import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import IncrementalNumber from "@/components/TEDInNumbers/IncrementalNumber";
import ColumnScroll from "@/components/ColumnScroll/ColumnScroll";

function AboutPage() {
  return (
    <div>
      About
      <TEDxInNumbers />
      <div className="h-[20vh]"></div>
      <ColumnScroll />
      <div className="h-[30vh]"></div>
    </div>
  );
}

export default AboutPage;
