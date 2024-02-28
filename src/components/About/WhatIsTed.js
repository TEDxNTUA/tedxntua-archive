function WhatIsTed() {
  return (
    <div
      className="w-[100%] h-[calc(100vh-4.1rem)] md:h-[calc(100vh-5rem) text-center table"
      style={{
        backgroundImage: `url('/about/BG.png')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
    >
      <h1 className="leading-[7rem] text-[5rem] 2xl:text-[6rem] text-white font-bold my-auto table-cell align-middle">
        <span className="text-our-red">TED is a</span> &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;
        <br />
        nonprofit organization
        <br /> &nbsp; &nbsp; &nbsp; devoted to ideas
        <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; worth spreading
      </h1>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default WhatIsTed;
