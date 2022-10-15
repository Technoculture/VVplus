import React from "react";
const SaveNumberForm = () => {
  return (
    <div className="flex flex-col justify-start w-full gap-1">
      <p className="text-lg font-light font-Roboto">Number</p>
      <input
        type="text"
        className="w-full outline-0 p-[9px_14px] rounded-[10px] border-[1px] border-[#DADADA] bg-gray-100 h-9"
        placeholder="09894323233"
      />
    </div>
  );
};

export default SaveNumberForm;
