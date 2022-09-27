import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
//Todo : Animation on savepop component left
const SavePopup = ({
  closeSaveButton,
}: {
  closeSaveButton: CallableFunction;
}) => {
  useEffect(() => {
    document.addEventListener("mousedown", () => {
      closeSaveButton();
    });
  });
  return (
    <div
      className={` font-Roboto fixed top-0 left-0 duration-500   flex items-center justify-center w-full ease-linear h-screen backdrop-blur-[8px] backdrop-brightness-[0.5] z-[100] bg-gray
    `}
    >
      <div className="flex duration-700 bg-[#DADADA] rounded-[20px] w-72 md:w-96 h-96">
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
