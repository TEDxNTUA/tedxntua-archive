"use client";
import FirstScroll from "@/components/MainPage/1stScroll";
import SecondScroll from "@/components/MainPage/2ndScroll";

// import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import Timeline from "@/components/TimelineComponent/Timeline";
import NewFooter from "@/components/Footer/NewFooter";
import ScrollTopButton from "@/components/ScrollTopButton";

function HomePage() {
  return (
    <main>
      {/* <div
        id="main-scroll-container"
        // className="overflow overflow-y-scroll snap-y snap-mandatory h-[calc(100vh-65px)] "
        
      > */}
      {/* <div className="snap-start"> */}
      {/* <div className="h-[calc(100vh-65px)] ">
        <FirstScroll />
      </div>
      {/* <div className="snap-start h-[calc(100vh-65px)] "> *
      <div className="h-[calc(100vh-65px)] ">
        <SecondScroll />
        <div className="bg-black pt-6">
          <TEDxInNumbers />
        </div>
      </div> */}
      <FirstScroll />
      <SecondScroll />

      <div className="2024 relative mt-12">
        {/* <div className="2024 NEW YEAR hidden lg:block w-[80%] mx-auto max-w-[100rem] border-l-8 lg:border-our-red py-16">
          <div className="flex flex-row gap-8 w-[80%] h-8 mx-auto left-0 top-0 right-[23px] 2xl:right-[22px] max-w-[100rem] absolute">
            <div className="h-8 w-8 rounded-full border-[3.5px] bg-our-red border-our-red" />
            <div className="absolute top-[-15px] left-[100px] flex flex-col">
              <h2
                className="text-white font-bold text-5xl xl:text-6xl italic tracking-tighter leading-4 lg:leading-none"
                // style={{ y, zIndex: 1 }}
              >
                2024
              </h2>
              <p className="text-xl text-white bg-black mx-auto">
                Stay pos<span className="text-our-red">TED</span>. More coming
                soon!
              </p>
            </div>
          </div>
        </div> */}
        <Timeline />
      </div>
      {/* <div className="snap-start"> */}
      <div>
        <NewFooter />
      </div>
      {/* </div> */}
    </main>
  );
}

export default HomePage;
