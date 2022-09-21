import React from "react";

const SaveButton = ({
  clickSaveButton,
}: {
  clickSaveButton: CallableFunction;
}) => {
  return (
    <button
      className="flex items-center justify-center w-[83px] h-12 ptext-center bg-[#D9D9D9] rounded-[15px]"
      onClick={() => {
        clickSaveButton();
      }}
    >
      Save
    </button>
  );
};

export default SaveButton;
