import React from "react";
const SavedHouseForm = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10">
      <h1 className="text-2xl font-normal font-Roboto">Saved</h1>

      <p className="text-lg w-[300px] font-normal text-center font-Bodoni">
        Your house is now saved.
      </p>
      <p className="text-lg font-normal text-center font-Bodoni">
        Share this house on social media to avail 5% flat discount on the
        booking fees. Tag #vvclub to avail benefits.
      </p>
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
    </div>
  );
};

export default SavedHouseForm;
