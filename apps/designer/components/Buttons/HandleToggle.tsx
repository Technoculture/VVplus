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
      className={`justify-center items-center hidden h-12  text-xl text-center bg-white w-14 md:flex rounded-[15px]
              ${toggleButton === true ? "bg-gray-400" : "bg-white"}`}
      onClick={() => {
        myToggleButton(toggleButton);
      }}
    >
      {toggleButton === false ? "-" : "+"}
    </button>
  );
};

export default HandleToggle;
