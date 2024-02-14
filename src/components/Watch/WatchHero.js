import React from "react";
import DropdownEvent from "./DropdownEvent";
import SelectCategory from "./SelectCategory";
const WatchHero = ({
  category,
  setCategory,
  event_year,
  setEvent_year,
  watchtalks,
}) => {
  // Get unique values from watchtalks
  const getUniqueValues = (array, key) => [
    ...new Set(array.flatMap((item) => item && item[key])),
  ];
  // Get unique categories and years from watchtalks
  const uniqueCategories = getUniqueValues(watchtalks, "category").filter(
    Boolean
  );
  const uniqueYears = getUniqueValues(watchtalks, "year").filter(Boolean);
  return (
    <div className="flex flex-col items-center lg:relative justify-center lg:mt-[100px] lg:mb-[7%] lg:z-[2] lg:bg-black w-full">
      <h1 className="text-white m-3 w-[75%] lg:pl-[4vw] text-3xl lg:text-7xl p-2 text-center font-bold italic">
        Here you can find all our
        <span className="text-[#eb0028]"> TEDx</span>NTUA talks since 2015!
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-2 justify-end items-start gap-[2vw] w-10/12 lg:w-auto lg:ml-[60%] lg:mt-[2%]">
        <SelectCategory
          category={category}
          setCategory={setCategory}
          uniqueCategories={uniqueCategories}
        />

        <DropdownEvent
          event_year={event_year}
          setEvent_year={setEvent_year}
          uniqueYears={uniqueYears}
        />
      </div>
    </div>
  );
};

export default WatchHero;
