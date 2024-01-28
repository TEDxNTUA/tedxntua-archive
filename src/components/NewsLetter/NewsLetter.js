import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-sm sm:text-lg font-semibold mb-4 text-white">
        Subscribe to our newsletter & stay updated!
      </h2>
      <input
        type="email"
        placeholder="Your email address"
        className="p-2 border border-gray-300 rounded-md mb-4"
      />
      <button className="bg-[#eb0028] text-white font-bold py-2 px-4 rounded hover:bg-red-600">
        Subscribe
      </button>
    </div>
  );
};

export default NewsLetter;
