function NewFooter() {
  return (
    <footer className="c-footer relative overflow-hidden pt-[7rem]">
      <div className="c-footer-animation w-embed height-[100%] object-cover md:object-none md:height-[50rem] absolute top-0 right-0 left-0 bottom-0 z-0">
        <svg
          className="overflow-hidden"
          width="100%"
          viewBox="0 0 1577 4307"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#E24943">
            <animate
              attributeName="d"
              dur="30s"
              repeatCount="indefinite"
              values="M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z"
            ></animate>
          </path>
        </svg>
      </div>

      <div className="c-container px-[1.25rem] overflow-hidden md:overlow-none md:w-[100%] md:max-w-[79rem] md:mx-auto md:px-[2rem] pt-[1rem] bg-slate-500 z-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="z-30">
            <div className="c-title-3 text-our-black text-3xl text-[1.75rem] leading-9 md:text-[2.5rem] md:leading-10 font-bold">
              Sign up to our Newsletter to and we'll keep you posted on all
              things TEDxNTUA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NewFooter;
