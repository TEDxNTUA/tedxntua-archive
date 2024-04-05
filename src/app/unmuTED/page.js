"use client";

import NewFooter from "@/components/Footer/NewFooter";
import UnmutedGrid from "@/components/Unuted/UnmutedGrid";

function UnmuTED() {
  return (
    <div className="bg-black">
      <div className="text-white w-[75%] text-4xl lg:text-7xl font-bold  py-16 md:w-[80%] mx-auto text-center">
        <p>
          Unmu<span className="text-our-red italic">TED </span>{" "}
        </p>
        <p className="text-white italic text-center text-base pt-2">
          It’s time to get unfiltered, uncensored, unmuTED!
        </p>
      </div>

      <UnmutedGrid />
      <NewFooter />
    </div>
  );
}

export default UnmuTED;
