import React from "react";
const SavedHouseForm = () => {
  const Value = ["F", "I", "Y"];

  return (
    <div className="flex flex-col items-center justify-between gap-10">
      <h1 className="text-2xl font-normal font-Roboto">Saved</h1>

      <p className="text-lg w-[300px] font-normal text-center font-Bodoni">
        Your house is now saved.
      </p>
      <p className="text-lg font-normal text-center font-Bodoni">
        Share this house on social media to avail 5% flat discount on the
        booking fees. Tag <span className="text-sky-500"> #vvclub</span> to
        avail benefits.
      </p>
      <div className="flex justify-center w-full gap-2.5">
        <input
          type="text"
          className="w-10 outline-0 p-[9px_14px] flex justify-center items-center rounded-[10px] border-[1px] border-[#DADADA] bg-gray-100 h-9"
          value={Value[0]}
        />
        <input
          type="text"
          className="w-10 outline-0 p-[9px_14px] flex justify-center text-center items-center rounded-[10px] border-[1px] border-[#DADADA] bg-gray-100 h-9"
          value={Value[1]}
        />
        <input
          type="text"
          className="w-10 outline-0 p-[9px_14px] flex justify-center items-center rounded-[10px] border-[1px] border-[#DADADA] bg-gray-100 h-9"
          value={[Value[2]]}
        />
      </div>
    </div>
  );
};

export default SavedHouseForm;
