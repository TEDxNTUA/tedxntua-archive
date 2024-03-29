"use client";
import WatchGrid from "@/components/Watch/WatchGrid";
import { WATCHTALKS } from "../../../data/watchtalks";
import WatchHero from "@/components/Watch/WatchHero";
import React, { useState } from "react";
import SelectGridSize from "@/components/Watch/SelectGridSize";
import NewFooter from "@/components/Footer/NewFooter";
// import Footer from "@/components/Footer/Footer";

function BlogPage() {
  const [gridSizeXl, setGridSizeXl] = useState(3);
  const [category, setCategory] = useState([]);
  const [event_year, setEvent_year] = useState("");
  return (
    <div className="bg-black">
      <SelectGridSize gridSizeXl={gridSizeXl} setGridSizeXl={setGridSizeXl} />
      <div className="grid grid-cols-1 justify-items-center">
        <WatchHero
          watchtalks={WATCHTALKS}
          category={category}
          setCategory={setCategory}
          event_year={event_year}
          setEvent_year={setEvent_year}
        />
        <WatchGrid
          watchtalks={WATCHTALKS}
          gridSizeXl={gridSizeXl}
          category={category}
          event_year={event_year}
        />
      </div>
      <NewFooter />
      {/* <Footer /> */}
    </div>
  );
}

export default BlogPage;
