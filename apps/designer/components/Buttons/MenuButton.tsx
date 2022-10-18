// import { HexColor } from "@babylonjs/gui-editor/colorPicker/hexColor";
import { colorCorrectionPixelShader } from "babylonjs/Shaders/colorCorrection.fragment";
import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  onClick?: () => void;
  text?: React.ReactNode;
  bgColor: string;
  remove?: boolean;
}

const MenuButton = ({ text, onClick, bgColor, remove }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center p-[10px_20px] h-12 font-light font-Roboto bg-${bgColor} text-[20px] leading-6 text-center  rounded-[15px]
      ${remove === true ? "hidden" : "flex"}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MenuButton;
