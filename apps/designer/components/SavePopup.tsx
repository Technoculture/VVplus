import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
//Todo : Animation on savepop component left
const SavePopup = ({
  closeSaveButton,
  openPopup,
}: {
  closeSaveButton: CallableFunction;
  openPopup: boolean;
}) => {
  useEffect(() => {
    document.addEventListener("mousedown", () => {
      closeSaveButton();
    });
  });
  return (
    <div
      className={` font-Roboto fixed top-0 left-0 flex items-center justify-center w-full  h-screen backdrop-blur-[10px] backdrop-brightness-[0.5] z-[100] bg-gray
    
    ${
      openPopup === true
        ? "animate-fade-in "
        : "animate-fade-out duration-500  "
    }  `}
    >
      <div
        className={`flex duration-700 bg-[#DADADA] rounded-[20px] w-72 md:w-96 h-96
        ${openPopup === true ? "animate-fade-in " : "animate-fade-out"}
        `}
      >
        <ImCross
          className="static pt-px cursor-pointer md:ml-[360px] mt-2 ml-[260px]"
          onClick={() => {
            closeSaveButton();
          }}
        />
      </div>
    </div>
  );
};

export default SavePopup;
