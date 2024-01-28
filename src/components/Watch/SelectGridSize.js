import React from "react";
// const SelectGridSize = ({ gridSizeXl, setGridSizeXl }) => {
//   return (
//     <div className="hidden lg:flex lg:flex-row items-center justify-center border gap-2 border-white rounded-md">
//       <p className="text-white text-base font-bold italic underline decoration-[#eb0028] underline-offset-4">
//         <span className="text-white">Grid size:</span>
//       </p>

//       <div>
//         <button
//           className={`text-white text-base font-bold cursor-pointer border-black border rounded-md px-3 mx-1 ${
//             gridSizeXl === 3 ? "bg-[#eb0028] text-white" : ""
//           }`}
//           onClick={() => setGridSizeXl(3)}
//         >
//           3
//         </button>
//         <button
//           className={`text-white text-base font-bold cursor-pointer border-black border rounded-md px-3 mx-1 ${
//             gridSizeXl === 4 ? "bg-[#eb0028] text-white" : ""
//           }`}
//           onClick={() => setGridSizeXl(4)}
//         >
//           4
//         </button>
//       </div>
//     </div>
//   );
// };

const SelectGridSize = ({ gridSizeXl, setGridSizeXl }) => {
  return (
    <div className="hidden lg:flex lg:flex-col items-center justify-center border gap-2 w-fit border-white rounded-md fixed bottom-[50%] p-1">
      <p className="text-white text-base font-bold italic underline decoration-[#eb0028] underline-offset-4">
        {/* <span className="text-white">Grid size:</span> */}
      </p>

      <div className="grid grid-cols-1">
        <button
          className={`text-white text-base font-bold cursor-pointer border-black border rounded-md px-3 mx-1 ${
            gridSizeXl === 3 ? "bg-[#eb0028] text-white" : ""
          }`}
          onClick={() => setGridSizeXl(3)}
        >
          3
        </button>
        <button
          className={`text-white text-base font-bold cursor-pointer border-black border rounded-md px-3 mx-1 ${
            gridSizeXl === 4 ? "bg-[#eb0028] text-white" : ""
          }`}
          onClick={() => setGridSizeXl(4)}
        >
          4
        </button>
      </div>
    </div>
  );
};
export default SelectGridSize;