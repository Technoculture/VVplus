import React from "react";
import { motion } from "framer-motion";
const Welcome = ({
  isActive,
  welcomeClick,
  toggleButton,
  myToggleButton,
}: {
  isActive: boolean;
  toggleButton: boolean;
  welcomeClick: CallableFunction;
  myToggleButton: CallableFunction;
}) => {
  const variants = {
    animate: {
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  };
  return window.innerWidth < 768 && isActive === true ? (
    <div className="z-30 flex gap-2 font-sans px-6 mt-[44vh] overflow-x-scroll overflow-y-hidden scroller md:hidden whitespace-nowrap">
      <div className="z-20 inline-block h-[30vh]  bg-white rounded-lg md:hidden sm:min-w-[350px] min-w-[270px]"></div>
      <div className="z-20 inline-block h-[30vh]  bg-white rounded-lg md-hidden sm:min-w-[350px] min-w-[270px]"></div>
      <div className="z-20 inline-block h-[30vh]  bg-white rounded-lg md-hidden sm:min-w-[350px] min-w-[270px]"></div>
      <div className="z-20 inline-block h-[30vh]  bg-white rounded-lg md-hidden sm:min-w-[350px] min-w-[270px]"></div>
    </div>
  ) : (
    <div
      onClick={() => {
        isActive === true ? myToggleButton(toggleButton) : "";
      }}
      className={`
          z-[100] relative font-sans flex items-center justify-center  w-64  pb-5 mx-auto  sm:w-[280px] duration-500 ease-in-out  lg:w-96 h-[70vh]   rounded-xl  
        
        ${toggleButton === true ? " mr-[32vw] " : ""}
        ${
          toggleButton === true && isActive
            ? "bg-[#A6A6A6] mt-[20%] max-h-[113px] md:w-[10px]  sm:w-[0] lg:w-[10px] "
            : "bg-[#DADADA] mt-2  "
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
