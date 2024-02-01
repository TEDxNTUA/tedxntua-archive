import FirstScroll from "@/components/MainPage/1stScroll";
import SecondScroll from "@/components/MainPage/2ndScroll";

import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import Timeline from "@/components/TimeLine/Timeline";
// import PhoneTimeline from "@/components/TimeLine/PhoneTimeline";
import MovingText from "@/components/MovingText";
import Footer from "@/components/Footer/Footer";

function HomePage() {
  return (
    <main>
      <div className="overflow overflow-y-scroll h-[calc(100vh-5rem)] snap-y snap-mandatory">
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
