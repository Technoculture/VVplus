import React from "react";
interface HandleToggleProps {
  isToggled: boolean;
  handleClickForToggle: CallableFunction;
}
const ToggableMenuButton = ({
  isToggled,
  handleClickForToggle,
}: HandleToggleProps) => {
  return (
    <button
      className={` hidden md:flex justify-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px]  
              ${
                isToggled === true
                  ? "bg-[#D9D9D9]  ease-in"
                  : "bg-[#A6A6A6]  ease-in"
              }`}
      onClick={() => {
        handleClickForToggle(isToggled);
      }}
    >
      {isToggled === false ? "-" : "+"}
    </button>
  );
};

export default ToggableMenuButton;
