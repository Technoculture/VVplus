import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

interface HandleCameraToggle
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  onClick: () => void;
}

const FreeCamera = ({
  onClick,
}: HandleCameraToggle) => {
  return (
    <button
      className={` hidden md:flex justify-center items-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px] bg-gray-400`}
      onClick={onClick}
    >
      <AiOutlineCamera />
    </button>
  );
};

export default FreeCamera;
