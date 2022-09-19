import React from "react";

const Welcome = ({ isActive, welcomeClick, toggleButton }: any) => {
  return window.innerWidth < 768 && isActive === true ? (
    <div className="z-30 flex gap-2 px-6 mt-[50vh] overflow-x-scroll overflow-y-hidden scroller md:hidden whitespace-nowrap">
      <div className="z-20 inline-block h-44  bg-white rounded-lg md:hidden sm:min-w-[350px] min-w-[270px]"></div>
      <div className="z-20 inline-block h-44  bg-white rounded-lg md-hidden sm:min-w-[350px] min-w-[270px]"></div>
      <div className="z-20 inline-block h-44  bg-white rounded-lg md-hidden sm:min-w-[350px] min-w-[270px]"></div>
      <div className="z-20 inline-block h-44  bg-white rounded-lg md-hidden sm:min-w-[350px] min-w-[270px]"></div>
    </div>
  ) : (
    <div
      className={`
          z-[100] relative flex items-center justify-center  w-64  h-[390px] pb-5 mx-auto  sm:w-[280px] duration-500 ease-in-out  lg:w-96 md:h-[70vh]   rounded-xl  
        
        ${toggleButton === true ? " mr-[32vw] " : ""}
        ${
          toggleButton === true && isActive
            ? "bg-gray-400 mt-[20%] max-h-[113px] md:w-[10px]  sm:w-[0] lg:w-[10px] "
            : "bg-white mt-2  "
        }
        ${isActive && window.innerWidth > 766 ? "translate-x-[31vw]  " : ""}
        `}
    >
      <h2
        className="cursor-pointer"
        onClick={() => {
          welcomeClick();
        }}
      >
        {isActive === false ? "Welcome " : ""}
      </h2>
    </div>
  );
};

export default Welcome;
