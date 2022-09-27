import React from "react";
import Card from "./Cards/Card";
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
  return window.innerWidth < 768 && isActive === true ? (
    <div className="z-30 flex gap-2 px-6 mt-[45vh] box-border overflow-x-scroll overflow-y-hidden font-sans snap-mandatory scroll-smooth snap-x md:hidden whitespace-nowrap">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  ) : (
    <div
      onClick={() => {
        isActive === true ? myToggleButton(toggleButton) : "";
      }}
      className={`
          z-[100] relative font-Roboto flex items-center justify-center w-[80vw]  mx-auto  sm:w-[250px] duration-500 ease-in-out  lg:w-[27vw] h-[74%] rounded-[20px]  
        ${
          toggleButton === true && isActive
            ? //todo: add border radius on minimise pannel
              "bg-[#A6A6A6] translate-x-[47vw] scale-x-[0.025] scale-y-[0.2] "
            : "bg-[#DADADA]  "
        }
        ${
          isActive && window.innerWidth > 766 && toggleButton === false
            ? "translate-x-[32vw] h-[75%]   "
            : ""
        }
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
