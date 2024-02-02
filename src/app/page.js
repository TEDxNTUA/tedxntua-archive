import FirstScroll from "@/components/MainPage/1stScroll";
import SecondScroll from "@/components/MainPage/2ndScroll";

import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import Timeline from "@/components/TimeLine/Timeline";
import Footer from "@/components/Footer/Footer";

function HomePage() {
  return (
    <main>
      <div className="overflow overflow-y-scroll snap-y snap-mandatory">
        <div className="snap-start">
          <FirstScroll />
        </div>
        <div className="snap-start">
          <SecondScroll />
          <div className="bg-black pt-6">
            <TEDxInNumbers />
          </div>
        </div>
        <Timeline />
        <div className="snap-start">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
