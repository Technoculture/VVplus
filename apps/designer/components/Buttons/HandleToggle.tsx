import React from "react";

const HandleToggle = ({
  toggleButton,
  myToggleButton,
}: {
  toggleButton: boolean;
  myToggleButton: CallableFunction;
}) => {
  return (
    <button
      className={` hidden md:flex justify-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px]   bg-gray-400 
              ${
                toggleButton === true
                  ? "bg-[#D9D9D9]  ease-in"
                  : "bg-[#A6A6A6]    ease-out"
              }`}
      onClick={() => {
        myToggleButton(toggleButton);
      }}
    >
      {toggleButton === false ? "-" : "+"}
    </button>
  );
};

export default HandleToggle;
