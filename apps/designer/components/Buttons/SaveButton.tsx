import React from "react";
interface SaveButtonProps {
  handleClickOnSaveButton: CallableFunction;
}
const SaveButton = ({ handleClickOnSaveButton }: SaveButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center w-[83px] mr-[10px] md:mr-[0] text-[20px] leading-6 font-light h-12 text-center font-Roboto bg-[#D9D9D9] rounded-[15px]
      `}
      onClick={() => {
        handleClickOnSaveButton();
      }}
    >
      Save
    </button>
  );
};

export default SaveButton;
