"use client";
import { useState } from "react";
import React from "react";

const DropdownEvent = ({ event_year, setEvent_year, uniqueYears }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    event_year !== ""
      ? setEvent_year("")
      : setDropdownVisible(!isDropdownVisible);
  };

  const handleChangeEvent = (newYear) => {
    // If the clicked category is already selected, unselect it (set to empty string)
    setEvent_year(newYear === parseInt(event_year) ? "" : parseInt(newYear));
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className="text-white hidden lg:grid lg:grid-cols-1 items-start justify-start gap-1 h-fit left-[80%] absolute ">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-[#eb0028]  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={toggleDropdown}
      >
        <p>{event_year === "" ? "Event" : event_year}</p>
        <img
          src={event_year === "" ? "/arrow_down.png" : "/cancel.png"}
          className="w-4 h-4 ml-2"
        />
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          isDropdownVisible ? "" : "hidden"
        }  bg-white divide-y rounded-lg shadow w-full`}
      >
        <ul className="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
          {uniqueYears.map((yearEvent, index) => (
            <li key={index}>
              <p
                className="block px-4 py-2 hover:bg-[#eb0028] hover:text-white text-black"
                onClick={() => handleChangeEvent(yearEvent)}
              >
                {yearEvent}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownEvent;