import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  onClick?: () => void;
  text?: React.ReactNode;
  remove?: boolean;
}

const MenuButton = ({ text, onClick, remove }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center p-[10px_20px] h-12 font-light font-Roboto bg-zinc-300 text-[20px] leading-6 text-center  rounded-[15px]
      ${remove === true ? "hidden" : "flex"}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MenuButton;
