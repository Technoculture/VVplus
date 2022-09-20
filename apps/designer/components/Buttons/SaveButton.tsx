import React from "react";

const SaveButton = ({
  clickSaveButton,
}: {
  clickSaveButton: CallableFunction;
}) => {
  return (
    <button
      className="flex items-center justify-center w-20 h-12 ptext-center bg-white rounded-[15px]"
      onClick={() => {
        clickSaveButton();
      }}
    >
      Save
    </button>
  );
};

export default SaveButton;
