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
    <div className="flex flex-col gap-8 items-center lg:relative justify-center lg:my-16 lg:z-[2] lg:bg-black">
      <h1 className="text-white m-3 w-[75%] lg:pl-[4vw] text-3xl lg:text-7xl p-2 text-center font-bold">
        Here you can find all
        <span className="text-our-red"> TEDx</span>NTUA talks since 2015!
      </h1>
      {/* <div className="grid grid-cols-2 lg:grid-cols-2 justify-end items-start gap-[2vw] w-10/12 lg:w-auto lg:ml-[60%] lg:mt-[2%]"> */}
      <div className="flex flex-row justify-between items-start w-10/12 mx-auto lg:lg:px-10 mb-8">
        {/* <div className="col-span-1 mb-32 md:mb-40"> IT doesn't make watch grid move */}
        <div className="col-span-1">
          <SelectCategory
            category={category}
            setCategory={setCategory}
            uniqueCategories={uniqueCategories}
          />
        </div>
        <div className="col-span-1 z-[2]">
          <DropdownEvent
            event_year={event_year}
            setEvent_year={setEvent_year}
            uniqueYears={uniqueYears}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchHero;
