import React from "react";

const SaveNameForm = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10 m">
      <h1 className="text-2xl font-normal font-Roboto">Hello</h1>
      <p className="text-base font-normal text-center md:text-lg w-80 font-Bodoni">
        You appear to be new to our platform. <br /> Welcome aboard!
      </p>
      <div className="flex flex-col justify-start w-[300px] gap-1">
        <p className="text-base font-light md:text-lg font-Roboto">Name</p>
        <input
          type="text"
          className="w-full text-base md:text-lg outline-0 p-[9px_14px] rounded-[10px] border-[1px] border-zinc-300 bg-gray-100 h-9"
          placeholder="Mr. Samartha Sinha"
        />
      </div>
    </div>
  );
};

export default SaveNameForm;
