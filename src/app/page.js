"use client";
import FirstScroll from "@/components/MainPage/1stScroll";
import SecondScroll from "@/components/MainPage/2ndScroll";

// import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";
import Timeline from "@/components/TimelineComponent/Timeline";
import NewTimeline from "@/components/NewTimeline/NewTimeline";
import NewFooter from "@/components/Footer/NewFooter";
import ScrollTopButton from "@/components/ScrollTopButton";
import {PREVIOUS_EVENTS} from "../../data/previousEvents";
import YearLine from "@/components/NewTimeline/YearLine";
import TimelineEvent from "@/components/NewTimeline/TimelineEvent";

function HomePage() {
  return (
    <main>
      <FirstScroll />
      <SecondScroll />

      {/* <div className="2024 relative mt-12">
        <div className="2024 NEW YEAR hidden lg:block w-[80%] mx-auto max-w-[100rem] border-l-8 lg:border-our-red py-16">
          <div className="flex flex-row gap-8 w-[80%] h-8 mx-auto left-0 top-0 right-[23px] 2xl:right-[22px] max-w-[100rem] absolute">
            <div className="h-8 w-8 rounded-full border-[3.5px] bg-our-red border-our-red" />
            <div className="absolute top-[-15px] left-[100px] flex flex-col">
              <h2
                className="text-white font-bold text-5xl xl:text-6xl italic tracking-tighter leading-4 lg:leading-none"
              >
                2025
              </h2>
              <p className="text-xl text-white bg-black mx-auto">
                Stay upda<span className="text-our-red">TED</span>. More coming
                soon!
              </p>
            </div>
          </div>
        </div>x
        <Timeline />
      </div> */}

      {/* <Timeline /> */}
      <div className="max-w-7xl mx-auto">
        {/* <div className="relative flex flex-col w-full mx-auto lg:bg-yellow-500 xl:bg-lime-600 2xl:bg-blue-200 bg-[rgba(200,200,200,0.2)]"> */}
        <div className="relative flex flex-col w-full mx-auto ">
          {/* Timeline appears in screens of size XL */}
          <div id="line-div" className="hidden xl:block">
            <YearLine numberOfYears={9} />
          </div>

          <div className="hidden xl:block">
            <div className="ml-[100px] w-[90%] top-[-20px] absolute flex items-center">
              <div className="text-center text-white  w-1/6">
                <div className="text-4xl font-bold">2025</div>
                <p className=" text-white bg-black mx-auto">
                  Stay upda<span className="text-our-red">TED</span>. More coming soon!
                </p>
              </div>
            </div>
          </div>

          <div className="xl:hidden mb-[200px]">
            <div className="flex flex-col text-center text-white">
              <div className="text-4xl font-bold">2025</div>
              <p className=" text-white bg-black mx-auto">
                Stay upda<span className="text-our-red">TED</span>. More coming soon!
              </p>
            </div>
          </div>

          {/* When timeline appears */}
          <div className="xl:ml-[100px] xl:w-[90%]">
            {/* Render Timeline Events */}
            {PREVIOUS_EVENTS.map((TedEvent, index) => (
              <TimelineEvent key={TedEvent.id} TedEvent={TedEvent} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto">
        <NewTimeline events={PREVIOUSEVENTS} />
      </div> */}
      <div>
        <NewFooter />
      </div>
    </main>
  );
}
{
}

export default HomePage;
