import React from "react";
import MenuButton from "../Buttons/MenuButton";

const SavedHouseForm = ({ formData, setFormData, closeSavePopup }: any) => {
  return (
    <div className="flex justify-center w-full gap-2.5">
      <input
        type="text"
        className="w-10 outline-0 p-[9px_14px] rounded-[10px] border-[1px] border-[#DADADA] bg-gray-100 h-9"
      />
      <input
        type="text"
        className="w-10 outline-0 p-[9px_14px] rounded-[10px] border-[1px] border-[#DADADA] bg-gray-100 h-9"
      />
      <input
        type="text"
        className="w-10 outline-0 p-[9px_14px] rounded-[10px] border-[1px] border-[#DADADA] bg-gray-100 h-9"
      />
    </div>
  );
};

export default SavedHouseForm;
