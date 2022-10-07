import React from "react";
interface HandleToggleProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  isToggled: boolean;
  onClick: () => void;
}
const ToggleableMenuButton = ({ isToggled, onClick }: HandleToggleProps) => {
  return (
    <button
      className={` hidden md:flex justify-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px]  
              ${
                isToggled === true
                  ? "bg-[#D9D9D9]  ease-in"
                  : "bg-[#A6A6A6]  ease-in"
              }`}
      onClick={onClick}
    >
      {isToggled === false ? "-" : "+"}
    </button>
  );
};

export default ToggleableMenuButton;
