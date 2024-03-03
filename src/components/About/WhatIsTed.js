function WhatIsTed() {
  return (
    <div>
      {/* <div
        className="desktop-title lg:table hidden w-[100%] h-[calc(100vh-4.1rem)] md:h-[calc(100vh-5rem) text-center"
        style={{
          backgroundImage: `url('/about/BG.png')`,

          backgroundSize: "cover", // Optional: adjust as needed
        }}
      >
        <h1 className="lg:table-cell leading-[7rem] text-[5rem] 2xl:text-[6rem] text-white font-bold my-auto align-middle">
          <span className="text-our-red">TED is a</span> &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <br />
          nonprofit organization
          <br /> &nbsp; &nbsp; &nbsp; devoted to ideas
          <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; worth spreading
        </h1>
      </div> */}

      <div
        // className="w-[100%] lg:h-[calc(100vh-5rem) text-center table lg:hidden"
        className="phone-title text-center py-16"
        style={{
          backgroundImage: `url('/about/BG.png')`,

          backgroundSize: "cover", // Optional: adjust as needed
        }}
      >
        <h1 className="text-[2.5rem] leading-[2.5rem] lg:hidden text-white font-bold w-[90%] text-left mx-auto">
          <span className="text-our-red">TED is a</span> <br />
          nonprofit organization devoted to ideas worth spreading
        </h1>
      </div>
    </div>
  );
}

export default WhatIsTed;

// function WhatIsTed() {
//     return (
//       <div
//         className="w-[100%] lg:h-[calc(100vh-5rem) text-center table"
//         style={{
//           backgroundImage: `url('/about/BG.png')`,
//           backgroundSize: "cover", // Optional: adjust as needed
//         }}
//       >
//         <h1 className="hidden lg:table-cell leading-[7rem] text-[5rem] 2xl:text-[6rem] text-white font-bold my-auto align-middle">
//           <span className="text-our-red">TED is a</span> &nbsp; &nbsp; &nbsp;
//           &nbsp; &nbsp; &nbsp;
//           <br />
//           nonprofit organization
//           <br /> &nbsp; &nbsp; &nbsp; devoted to ideas
//           <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; worth spreading
//         </h1>

//         {/* </div> */}
//         {/* </div> */}
//       </div>
//     );
//   }

//   export default WhatIsTed;
