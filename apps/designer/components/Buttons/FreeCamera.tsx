import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

const FreeCamera = ({
  toggleFreeCamera,
  toggleCameraButton,
}: {
  toggleFreeCamera: boolean;
  toggleCameraButton: CallableFunction;
}) => {
  return (
    <button
      className={` hidden md:flex justify-center items-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px] bg-gray-400`}
      onClick={() => {
        toggleCameraButton(toggleFreeCamera);
      }}
    >
      <AiOutlineCamera />
    </button>
  );
};

export default FreeCamera;
