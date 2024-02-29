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
    <div className="text-white grid grid-cols-1 items-start justify-start gap-1 h-fit lg:left-[80%] left-[60%] absolute ">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-our-red  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={toggleDropdown}
      >
        <p>{event_year === "" ? "Event" : event_year}</p>
        <img
          src={event_year === "" ? "/arrow_up.png" : "/watchpage/cancel.png"}
          className="w-4 h-4 ml-2 rotate-180"
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
                className="block px-4 py-2 text-center hover:bg-our-red hover:text-white text-black hover:cursor-pointer"
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
