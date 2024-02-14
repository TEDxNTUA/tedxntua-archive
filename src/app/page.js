"use client";
import FirstScroll from "@/components/MainPage/1stScroll";
import SecondScroll from "@/components/MainPage/2ndScroll";

import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import Timeline from "@/components/TimeLine/TimeLine";
import Footer from "@/components/Footer/Footer";

function HomePage() {
  return (
    <main>
      <div
        id="main-scroll-container"
        className="overflow overflow-y-scroll snap-y snap-mandatory h-[calc(100vh-4.1rem)] md:h-[calc(100vh-5rem)]"
      >
        <div className="snap-start">
          <FirstScroll />
        </div>
        <div className="snap-start h-[calc(100vh-4.1rem)] md:h-[calc(100vh-5rem)]">
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
