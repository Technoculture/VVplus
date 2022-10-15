import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  onClick?: () => void;
  text?: React.ReactNode;
  buttonColor: React.ReactNode;
}

const MenuButton = ({ text, onClick, buttonColor }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center p-[10px_20px] h-12 font-light font-Roboto  text-[20px] leading-6 text-center bg-${buttonColor} rounded-[15px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MenuButton;
