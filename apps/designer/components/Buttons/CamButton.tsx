import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  text: React.ReactNode;
  r: number;
  a: number;
  b: number;
  t: {
    x: number;
    y: number;
    z: number;
  };
  onClick: () => void;
}

const CamButton = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="flex justify-center items-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px] bg-gray-400"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CamButton;
