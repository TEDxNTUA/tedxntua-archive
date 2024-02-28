"use client";
import React from "react";

const SelectCategory = ({ category, setCategory, uniqueCategories }) => {
  const handleSelectCategoryChange = (event) => {
    const newCategory = event.target.value;
    // Check if the new category is already in the array
    const isCategorySelected = category.includes(newCategory);

    // Update the state based on whether the category is selected or not
    // IF the category is already selected, remove it - ELSE add it
    setCategory((prevCategory) =>
      isCategorySelected
        ? prevCategory.filter((cat) => cat !== newCategory)
        : [...prevCategory, newCategory]
    );
  };

  // Function to handle touch end event for mobile devices
  const handleTouchEnd = (event) => {
    event.preventDefault(); // Prevent the click event after touch
    handleSelectCategoryChange(event);
  };
  return (
    <div className="flex flex-col justify-end gap-2 pb-5">
      <div className="flex lg:flex flex-col items-center border border-white rounded-md h-full">
        <p className="pb-1 font-bold italic underline decoration-our-red underline-offset-4">
          <span className="text-white text-xl">Category</span>
        </p>
        <div className="text-white flex flex-wrap lg:grid lg:grid-cols-2 items-center justify-center gap-1 w-full h-full">
          {uniqueCategories.map((watchtalk_category, index) => (
            <button
              key={index}
              className={`text-white text-xs font-bold cursor-pointer border-black border rounded-md px-2 py-1 ${
                category.includes(watchtalk_category) ? "bg-our-red" : ""
              } hover:bg-our-red hover:text-white`}
              value={watchtalk_category}
              onClick={handleSelectCategoryChange}
              // aria-pressed={category.includes(watchtalk_category)}
              onTouchEnd={handleTouchEnd}
            >
              {
                // Capitalize the first letter of the category
                watchtalk_category.charAt(0).toUpperCase() +
                  watchtalk_category.slice(1)
              }
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
