import React from "react";

const SaveButton = ({
  clickSaveButton,
}: {
  clickSaveButton: CallableFunction;
}) => {
  return (
    <button
      className="flex items-center justify-center w-[83px] text-[20px] leading-6 font-light h-12 text-center font-Roboto bg-[#D9D9D9] rounded-[15px]"
      onClick={() => {
        clickSaveButton();
      }}
    >
      Save
    </button>
  );
};

export default SaveButton;
