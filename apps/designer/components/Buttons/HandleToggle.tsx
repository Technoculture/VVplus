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
      className={`justify-center items-center hidden h-12  text-xl text-center duration-300    bg-gray-400 w-12 md:flex rounded-[15px]
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
