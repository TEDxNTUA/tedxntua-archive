"use client";
import { useState } from "react";
import React from "react";

const DropdownCategory = ({ category, setCategory, uniqueCategories }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    category !== "" ? setCategory("") : setDropdownVisible(!isDropdownVisible);
  };
  const handleChangeCategory = (newCategory) => {
    // If the clicked category is already selected, unselect it (set to empty string)
    setCategory(newCategory === category ? "" : newCategory);
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className="text-white hidden lg:grid lg:grid-cols-1 items-start justify-center gap-1 left-[70%] h-full content-start absolute">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-[#eb0028]  font-medium rounded-lg text-sm px-5 py-2.5 text-start  justify-center inline-flex items-center "
        type="button"
        onClick={toggleDropdown}
      >
        <p>{category === "" ? "Category" : category}</p>
        <img
          src={category === "" ? "/arrow_down.png" : "/cancel.png"}
          className="w-4 h-4 ml-2"
        />
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          isDropdownVisible ? "" : "hidden"
        }  bg-white divide-y rounded-lg shadow w-full`}
      >
        <ul class="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
          {uniqueCategories.map((watchtalk_category, index) => (
            <li key={index}>
              <p
                className="block px-4 py-2 hover:bg-[#eb0028] hover:text-white text-black"
                onClick={() => handleChangeCategory(watchtalk_category)}
                value={watchtalk_category}
              >
                {watchtalk_category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownCategory;