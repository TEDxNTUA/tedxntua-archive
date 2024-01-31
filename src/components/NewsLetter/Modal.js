import React from "react";
import NewsLetter from "./NewsLetter";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-black p-5 md:p-5 rounded-lg border border-gray-700 max-w-sm md:max-w-md mx-4">
        <button onClick={onClose} className="float-right font-bold text-white">
          X
        </button>
        <NewsLetter />
      </div>
    </div>
  );
};

export default Modal;
