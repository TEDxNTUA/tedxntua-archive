import ColumnScroll from "@/components/About/ColumnScroll";
import AboutTEDxNTUA from "@/components/About/AboutTedxNtua";
import AboutTednTedx from "@/components/About/AboutTednTedx";
import NewFooter from "@/components/Footer/NewFooter";

function AboutPage() {
  return (
    <section>
      <AboutTEDxNTUA />

      <ColumnScroll />

      <div className="h-[15vh]"></div>
      <AboutTednTedx />
      <NewFooter />
    </section>
  );
}

export default AboutPage;
