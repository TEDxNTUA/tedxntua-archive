import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import IncrementalNumber from "@/components/TEDInNumbers/IncrementalNumber";
import ColumnScroll from "@/components/ColumnScroll/ColumnScroll";
import AboutTed from "@/components/About/AboutTed";
import AboutTedxNtua from "@/components/About/AboutTedxNtua";
import Footer from "@/components/Footer/Footer";

function AboutPage() {
  return (
    <div>
      <AboutTedxNtua />
      <AboutTed />
      <div className="h-[20vh]"></div>
      <ColumnScroll />
      <div className="h-[10vh]"></div>
      <Footer />
    </div>
  );
}

export default AboutPage;
