import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  onClick: () => void;
  text: React.ReactNode;
  disable?: boolean;
}

const MenuButton = ({ text, onClick, disable }: ButtonProps) => {
  return (
    <button
      className="flex justify-center items-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px] bg-gray-400"
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default MenuButton;
