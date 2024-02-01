import FirstScroll from "@/components/MainPage/1stScroll";
import SecondScroll from "@/components/MainPage/2ndScroll";

import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import Timeline from "@/components/TimeLine/Timeline";
// import PhoneTimeline from "@/components/TimeLine/PhoneTimeline";
import MovingText from "@/components/MovingText";

function HomePage() {
  return (
    <main>
      <FirstScroll />
      <SecondScroll />
      <div className="bg-black pt-6">
        <TEDxInNumbers />
      </div>
      <Timeline />
      <MovingText />
      <div id="spacer-1" className="h-[100vh] bg-emerald-500"></div>
    </main>
  );
}

export default HomePage;
