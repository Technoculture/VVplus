import React from "react";
import { ImCross } from "react-icons/im";
const SavePopup = ({
  closeSaveButton,
}: {
  closeSaveButton: CallableFunction;
}) => {
  return (
    <div className=" font-sans fixed top-0 left-0  flex items-center justify-center w-full h-screen backdrop-blur-3xl z-[100] bg-gray">
      <div className="flex duration-700 bg-white rounded-lg w-72 md:w-96 h-96">
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
